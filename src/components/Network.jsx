import React from 'react';
import { segmentsArr, idSByidP } from '../assets/data';
import { permitPush } from '../assets/functions';

import './network.scss';

/**
 * segmentsArr = [
 *    {
 *      uno: { x: '637', y: '320', id: "ac1" },
 *      dos: { x: '731', y: '255', id: "ac2" },
 *      idS: "ac",
 *      isMoving: false,
 *      hasMoved: false
 *    },
 *  ]
 *
 * idSByidP = {
 *    a1: { idS: "a", n: "uno" },
 *    a2: { idS: "a", n: "dos" },
 *  }
 */

let listCenters = [
  /**
   * {
   *    idCenter: 'c1',
   *    listPts: [ "a2", "b1" ],
   *    coord: { x, y },
   *    isMoving: false,
   *    hasMoved: false,
   * }
   */
];

const pushNewCenter = (pto, i) => {
  let aux = {
    idCenter: 'c' + i,
    listPts: [pto.id],
    coord: {
      x: pto.x,
      y: pto.y,
    },
    isMoving: false,
  };
  listCenters.push(aux);
};

function getListCenters() {
  segmentsArr.forEach((s, i) => {
    if (i === 0) {
      pushNewCenter(s.uno, i);
      pushNewCenter(s.dos, i + 1);
    } else {
      // s.uno
      let { id } = s.uno;
      let { iCC, idCC, res } = permitPush(listCenters, s.uno);
      // s.uno ¿es un nuevo centro o esta repetido en la lista?
      if (res) {
        // yes, its a new center
        pushNewCenter(s.uno, listCenters.length);
      } else {
        // no, it is repeated
        if (iCC === 0 || (iCC && idCC)) listCenters[iCC].listPts.push(id);
      }

      // s.dos
      id = s.dos.id;
      let sdos = permitPush(listCenters, s.dos);
      iCC = sdos.iCC;
      idCC = sdos.idCC;
      res = sdos.res;
      // s.dos ¿es un nuevo centro o esta repetido en la lista?
      if (res) {
        // yes, its a new center
        pushNewCenter(s.dos, listCenters.length);
      } else {
        // no, it is repeated
        if (iCC === 0 || (iCC && idCC)) listCenters[iCC].listPts.push(id);
      }
    }
  });
}

getListCenters();

function Network({ synergy }) {
  const [centerSelected, setCenterSelected] = React.useState();
  const [linesSelected, setLinesSelected] = React.useState();
  // FIXME: This is not properly done, there should be a better way to avoid the warning
  // eslint-disable-next-line
  const [lines, setLines] = React.useState(segmentsArr);
  const [circles, setCircles] = React.useState(listCenters);

  const getCursorPos = (e) => {
    return { x: e.clientX, y: e.clientY };
  };

  const getLinesIdSList = (id) => {
    let i = circles.findIndex((c) => c.idCenter === id);
    let ptosList = circles[i].listPts;
    return ptosList.map((p) => idSByidP[p]);
  };

  const getSelectedLinesList = (id) => {
    let linesIdSList = getLinesIdSList(id);
    let linesList = lines.filter((l) => {
      let i = linesIdSList.findIndex((ls) => ls.idS === l.idS);
      if (i === -1) return false;
      return true;
    });
    return linesList;
  };

  const handleOnCLickCircle = (e, id) => {
    if (!synergy) {
      let selectedCircle = circles.find((c) => c.idCenter === id);
      selectedCircle.isMoving = !selectedCircle.isMoving;
      setCenterSelected(selectedCircle);
      //
      let selectedLines = getSelectedLinesList(id);
      selectedLines.forEach((l) => (l.isMoving = !l.isMoving));
      setLinesSelected(selectedLines);
    }
  };

  const handleOnMouseMove = (e) => {
    let mousePos = getCursorPos(e);
    if (centerSelected && centerSelected.isMoving) {
      let newCircles = circles.map((c) => {
        if (c.idCenter === centerSelected.idCenter) {
          c.coord.x = mousePos.x;
          c.coord.y = mousePos.y;
        }
        return c;
      });
      setCircles(newCircles);
    }

    if (linesSelected && linesSelected[0].isMoving) {
      let linesIdSList = getLinesIdSList(centerSelected.idCenter);
      linesSelected.forEach((l, i) => {
        if (linesIdSList[i].n === 'uno') {
          l.uno.x = mousePos.x;
          l.uno.y = mousePos.y;
        } else if (linesIdSList[i].n === 'dos') {
          l.dos.x = mousePos.x;
          l.dos.y = mousePos.y;
        }
      });
    }
  };

  React.useMemo(() => {
    if (centerSelected) {
      let randomColor = '#' + (((1 << 24) * Math.random()) | 0).toString(16);
      centerSelected.color = randomColor;
    }
  }, [centerSelected]);

  return (
    <section className='App' onMouseMove={(e) => handleOnMouseMove(e)}>
      <svg
        className='sky'
        width='100%'
        height='100%'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g>
          <circle className='star' cx='100' cy='100' r='3' />
          <circle className='star' cx='500' cy='100' r='3' />
          <circle className='star' cx='700' cy='200' r='2' />
          <circle className='star' cx='100' cy='330' r='3' />
          <circle className='star' cx='1000' cy='100' r='3' />
          <circle className='star' cx='230' cy='200' r='2' />
          <circle className='star' cx='900' cy='200' r='1' />
          <circle className='star' cx='450' cy='330' r='3' />
          <circle className='star' cx='1150' cy='100' r='5' />
          <circle className='star' cx='1030' cy='230' r='1' />
          <circle className='star' cx='1250' cy='270' r='4' />
          <circle className='star' cx='250' cy='570' r='1' />
          <circle className='star' cx='1200' cy='600' r='1' />
          <circle className='star' cx='500' cy='900' r='3' />
        </g>
      </svg>
      <svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'>
        <g>
          {lines &&
            lines.map((s, i) => {
              return (
                <line
                  style={{
                    stroke: `${
                      synergy
                        ? '#' + (((1 << 24) * Math.random()) | 0).toString(16)
                        : ''
                    } ${s.isMoving ? centerSelected.color : ''}`,
                  }}
                  className={`${s.isMoving ? 'isMoving' : ''} ${
                    synergy ? ' isSynergy' : ''
                  }`}
                  id={s.idS}
                  key={s.idS}
                  x1={s.uno.x}
                  y1={s.uno.y}
                  x2={s.dos.x}
                  y2={s.dos.y}
                />
              );
            })}
          {circles.map((c, i) => {
            return (
              <circle
                key={c.idCenter}
                id={c.idCenter}
                cx={c.coord.x}
                cy={c.coord.y}
                r='8'
                onClick={(e) => handleOnCLickCircle(e, c.idCenter)}
              />
            );
          })}
        </g>
      </svg>
    </section>
  );
}

export default Network;

/**
 *
 */

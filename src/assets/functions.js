export const dist = (a, b) => {
    let delta = {
        dx: (b.x - a.x),
        dy: (b.y - a.y)
    }
    return Math.round((delta.dx ** 2 + delta.dy ** 2) ** 0.5);
}


export const permitPush = (arr, pto) => {
    let isClose = false;
    let iCC;
    let idCC;
    // Recorro listCenters para ver que no sea cercano a ningun elem de la lista
    arr.forEach((a, i) => {
        // Evaluo la dist entre el pto nuevo y las coord de los centros
        if (dist(a.coord, pto) < 10) {
            isClose = true;
            iCC = i;
            idCC = a.idCenter;
        }
    })
    return { iCC: iCC, idCC: idCC, res: !isClose };

}

import React from 'react';
import './card.scss';
function Card({ isNotDisplayed, onClickClose }) {
  const handleOnCloseCard = () => {
    onClickClose();
  };

  return (
    !isNotDisplayed && (
      <section className='overlay'>
        <div className='card-container  swing-top-fwd '>
          <header className='header'>
            <button onClick={() => handleOnCloseCard()}>
              <img
                className='icon'
                alt='close'
                src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTQxNiA1MTJoLTMyMGMtNTMuMDIzNDM4IDAtOTYtNDIuOTc2NTYyLTk2LTk2di0zMjBjMC01My4wMjM0MzggNDIuOTc2NTYyLTk2IDk2LTk2aDMyMGM1My4wMjM0MzggMCA5NiA0Mi45NzY1NjIgOTYgOTZ2MzIwYzAgNTMuMDIzNDM4LTQyLjk3NjU2MiA5Ni05NiA5NnptMCAwIiBmaWxsPSIjZjdmN2Y3IiBkYXRhLW9yaWdpbmFsPSIjZmZlNmUyIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMjcxLjA4OTg0NCAyNTYgNjQuMTA5Mzc1LTY0LjExMzI4MWM0LjE2MDE1Ni00LjE2MDE1NyA0LjE2MDE1Ni0xMC45MTAxNTcgMC0xNS4wODU5MzgtNC4xNjAxNTctNC4xNzU3ODEtMTAuOTEwMTU3LTQuMTYwMTU2LTE1LjA4NTkzOCAwbC02NC4xMTMyODEgNjQuMTA5Mzc1LTY0LjExMzI4MS02NC4xMDkzNzVjLTQuMTYwMTU3LTQuMTYwMTU2LTEwLjkxMDE1Ny00LjE2MDE1Ni0xNS4wODU5MzggMC00LjE3NTc4MSA0LjE2MDE1Ny00LjE2MDE1NiAxMC45MTAxNTcgMCAxNS4wODU5MzhsNjQuMTA5Mzc1IDY0LjExMzI4MS02NC4xMDkzNzUgNjQuMTEzMjgxYy00LjE2MDE1NiA0LjE2MDE1Ny00LjE2MDE1NiAxMC45MTAxNTcgMCAxNS4wODU5MzggMi4wNzgxMjUgMi4wODIwMzEgNC44MTY0MDcgMy4xMjEwOTMgNy41MzUxNTcgMy4xMjEwOTMgMi43MzQzNzQgMCA1LjQ1NzAzMS0xLjAzOTA2MiA3LjUzNTE1Ni0zLjEyMTA5M2w2NC4xMjg5MDYtNjQuMTA5Mzc1IDY0LjExMzI4MSA2NC4xMDkzNzVjMi4wNzgxMjUgMi4wODIwMzEgNC44MTY0MDcgMy4xMjEwOTMgNy41MzUxNTcgMy4xMjEwOTNzNS40NTcwMzEtMS4wMzkwNjIgNy41MzUxNTYtMy4xMjEwOTNjNC4xNjAxNTYtNC4xNjAxNTcgNC4xNjAxNTYtMTAuOTEwMTU3IDAtMTUuMDg1OTM4em0wIDAiIGZpbGw9IiNjN2M3YzciIGRhdGEtb3JpZ2luYWw9IiNmYzU3M2IiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+'
              />
            </button>
          </header>
          <article className='article'>
            <h3 className='focus-in-expand'>Success ...</h3>
            <p>is wake up every morning exited to live a new day</p>
          </article>
        </div>
      </section>
    )
  );
}

export default Card;

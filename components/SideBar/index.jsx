import React from "react";

import {
  SidebarWrapper,
  ContentSideBar,
  CanaisRecomendados,
  CanaisAoVivo,
  Canal,
  NomeDoCanalEJogoAtual,
  PublicoAoVivo,
  ParticipeDaTwitch,
} from "./SidebarStyles";
import { matchMedia } from "../../utils/matchMedia";
import { GlobalContext } from "../../context/context";

const SidebarContent = () => {
  const { isReachedIn1200px, setIsReachedIn1200px } = React.useContext(
    GlobalContext
  );
  const [closeSidebarLarge, setCloseSidebarLarge] = React.useState(false);
  const canaisRecomendados = [
    {
      id: 1,
      nomeCanal: "Nome do Canal",
      nomeDoJogo: "Nome do Jogo",
      espectadores: "350",
    },
    {
      id: 2,
      nomeCanal: "Nome do Canal",
      nomeDoJogo: "Nome do Jogo",
      espectadores: "15.3 mil",
    },
    {
      id: 3,
      nomeCanal: "Nome do Canal",
      nomeDoJogo: "Nome do Jogo",
      espectadores: "279",
    },
    {
      id: 4,
      nomeCanal: "Nome do Canal",
      nomeDoJogo: "Nome do Jogo",
      espectadores: "119",
    },
    {
      id: 5,
      nomeCanal: "Nome do Canal",
      nomeDoJogo: "Nome do Jogo",
      espectadores: "309",
    },
    {
      id: 6,
      nomeCanal: "Nome do Canal",
      nomeDoJogo: "Nome do Jogo",
      espectadores: "920",
    },
    {
      id: 7,
      nomeCanal: "Nome do Canal",
      nomeDoJogo: "Nome do Jogo",
      espectadores: "244",
    },
    {
      id: 8,
      nomeCanal: "Nome do Canal",
      nomeDoJogo: "Nome do Jogo",
      espectadores: "630",
    },
    {
      id: 9,
      nomeCanal: "Nome do Canal",
      nomeDoJogo: "Nome do Jogo",
      espectadores: "130",
    },
    {
      id: 10,
      nomeCanal: "Nome do Canal",
      nomeDoJogo: "Nome do Jogo",
      espectadores: "1.2 mil",
    },
  ];

  React.useEffect(() => {
    matchMedia(setIsReachedIn1200px);
  }, []);

  const handleCloseSidebar = () => {
    setIsReachedIn1200px(true);
    setCloseSidebarLarge(true);
  };

  const handleShowSidebar = () => {
    setIsReachedIn1200px(false);
    setCloseSidebarLarge(false);
  };

  let backOrFilmCamera;

  if (isReachedIn1200px && closeSidebarLarge) {
    backOrFilmCamera = (
      <span onClick={handleShowSidebar}>
        <img src="/back-2.svg" alt="" />
      </span>
    );
  } else {
    backOrFilmCamera = (
      <span>
        <img src="/film-camera.svg" alt="" />
      </span>
    );
  }

  return (
    <SidebarWrapper isReachedIn1200px={isReachedIn1200px}>
      <ContentSideBar>
        <CanaisRecomendados isReachedIn1200px={isReachedIn1200px}>
          {!isReachedIn1200px && <p>Canais Recomendados</p>}

          {isReachedIn1200px ? (
            backOrFilmCamera
          ) : (
            <span onClick={handleCloseSidebar}>
              <img src="/back.svg" alt="" />
            </span>
          )}
        </CanaisRecomendados>
        <CanaisAoVivo>
          {canaisRecomendados &&
            canaisRecomendados.map((canal) => (
              <Canal key={canal.id}>
                <NomeDoCanalEJogoAtual>
                  <img src="/logo-sidebar.svg" alt="" />
                  {!isReachedIn1200px && <p>{canal.nomeCanal}</p>}
                  {!isReachedIn1200px && <span>{canal.nomeDoJogo}</span>}
                </NomeDoCanalEJogoAtual>
                <PublicoAoVivo>
                  {!isReachedIn1200px && <p>{canal.espectadores}</p>}
                </PublicoAoVivo>
              </Canal>
            ))}
        </CanaisAoVivo>

        {!isReachedIn1200px && (
          <ParticipeDaTwitch>
            <h2>
              Participe da comunidade <span>Twitch </span> !
            </h2>
            <p>Descubra as melhores transmissões ao vivo em qualquer lugar</p>
            <button>Cadastrar-se</button>
          </ParticipeDaTwitch>
        )}
      </ContentSideBar>
    </SidebarWrapper>
  );
};

export default SidebarContent;

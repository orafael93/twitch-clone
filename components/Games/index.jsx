import React from "react";
import {
  WrapperGameComponent,
  WrapperGameImageCover,
  WrapperGameAndSpectators,
  WrapperTags,
} from "./GamesStyles.js";
import { cutWord } from "../../utils/cutWords";
import { matchMedia750px } from "../../utils/matchMedia";
import { GlobalContext } from "../../context/context";

const GamesComponent = ({ game }) => {
  const { isReachedIn750px, setIsReachedIn750px } = React.useContext(
    GlobalContext
  );

  React.useEffect(() => matchMedia750px(setIsReachedIn750px), []);

  return (
    <>
      <WrapperGameComponent>
        <WrapperGameImageCover>
          <img src={game.imagem} alt="" />
        </WrapperGameImageCover>
        <WrapperGameAndSpectators>
          <h2>{cutWord(game?.nome, isReachedIn750px)}</h2>
          <p>324,5 mil espectadores</p>
        </WrapperGameAndSpectators>
        <WrapperTags>
          <span>Jogo de corrida/direção</span>
        </WrapperTags>
      </WrapperGameComponent>
    </>
  );
};

export default GamesComponent;

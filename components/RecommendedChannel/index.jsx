import React from "react";
import {
  WrapperGameComponent,
  WrapperGameImageCover,
  WrapperGameAndSpectators,
  WrapperTags,
} from "./RecommendedChannel.js";
import { cutWord } from "../../utils/cutWords";

const RecommendedChannel = ({ game }) => {
  return (
    <>
      <WrapperGameComponent>
        <WrapperGameImageCover>
          <img src={game.imagem} alt="" />
          <p>324,5 mil espectadores</p>
        </WrapperGameImageCover>
        <WrapperGameAndSpectators>
          <div>
            <img src="/channel.svg" alt="" />
          </div>
          <div>
            <p>Título da live</p>
            <h2>{cutWord(game?.nomeCanal)}</h2>
          </div>
        </WrapperGameAndSpectators>
        <WrapperTags>
          <span>Português</span>
        </WrapperTags>
      </WrapperGameComponent>
    </>
  );
};

export default RecommendedChannel;

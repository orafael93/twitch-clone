import React from "react";
import {
  WrapperVideo,
  WrapperImageCover,
  WrapperCanal,
  WrapperThumbProfile,
  WrapperDadosLiveECanal,
  WrapperTags,
} from "./VideoLargeStyles";

const VideoComponent = ({ game }) => {
  return (
    <>
      <WrapperVideo>
        <WrapperImageCover>
          <img src={game?.imagem} alt="" />
          <span>Ao vivo</span>
        </WrapperImageCover>
        <WrapperCanal>
          <WrapperThumbProfile>
            <img src="/profile-image.png" alt="" />
          </WrapperThumbProfile>
          <WrapperDadosLiveECanal>
            <h2>{game?.nomeLive}</h2>
            <p>{game?.nomeCanal}</p>
            <p>{game?.nomeDoJogo}</p>
            <WrapperTags>
              <span>Português</span>
              <span>Hype Train</span>
            </WrapperTags>
          </WrapperDadosLiveECanal>
        </WrapperCanal>
      </WrapperVideo>
    </>
  );
};

export default VideoComponent;

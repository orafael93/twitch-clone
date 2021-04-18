import React from "react";
import Head from "next/head";
import {
  WrapperMainContentHome,
  WrapperSectionLives,
  WrapperVideos,
  WrapperSectionCategories,
  WrapperVideosGames,
  WrapperSectionSingleGame,
} from "./MainContentHomeStyles";
import Slider from "../SliderHome";
import VideoComponent from "../VideoLarge";
import GamesComponent from "../Games";
import RecommendedChannel from "../RecommendedChannel";
import { GlobalContext } from "../../context/context";

const MainContentHomeComponent = () => {
  const { isReachedIn1200px } = React.useContext(GlobalContext);

  const live = [
    {
      id: 1,
      imagem:
        "https://res.cloudinary.com/rafael1993x/image/upload/v1618766485/twitch-clone-images/aovivo/ao-vivo1_uuqupm.jpg",
      nomeLive: "Nome da live",
      nomeCanal: "Nome do canal",
      nomeDoJogo: "Nome do jogo",
    },
    {
      id: 2,
      imagem:
        "https://res.cloudinary.com/rafael1993x/image/upload/v1618766484/twitch-clone-images/aovivo/ao-vivo2_uzeu63.jpg",
      nomeLive: "Nome da live",
      nomeCanal: "Nome do canal",
      nomeDoJogo: "Nome do jogo",
    },
    {
      id: 3,
      imagem:
        "https://res.cloudinary.com/rafael1993x/image/upload/v1618766486/twitch-clone-images/aovivo/ao-vivo3_yxand6.jpg",
      nomeLive: "Nome da live",
      nomeCanal: "Nome do canal",
      nomeDoJogo: "Nome do jogo",
    },
    {
      id: 4,
      imagem:
        "https://res.cloudinary.com/rafael1993x/image/upload/v1618766485/twitch-clone-images/aovivo/ao-vivo4_bi9ypd.jpg",
      nomeLive: "Nome da live",
      nomeCanal: "Nome do canal",
      nomeDoJogo: "Nome do jogo",
    },
    {
      id: 5,
      imagem:
        "https://res.cloudinary.com/rafael1993x/image/upload/v1618766486/twitch-clone-images/aovivo/ao-vivo5_zydnsz.jpg",
      nomeLive: "Nome da live",
      nomeCanal: "Nome do canal",
      nomeDoJogo: "Nome do jogo",
    },
  ];
  const categories = [
    {
      id: 1,
      nome: "Call of Duty Modern Warfare",
      imagem:
        "https://res.cloudinary.com/rafael1993x/image/upload/v1618767256/twitch-clone-images/categorias/call-of-duty-mw_jtitxu.jpg",
    },
    {
      id: 2,
      nome: "Call of Duty Modern Warzone",
      imagem:
        "https://res.cloudinary.com/rafael1993x/image/upload/v1618767257/twitch-clone-images/categorias/call-of-duty-warzone_ejrhcz.jpg",
    },
    {
      id: 3,
      nome: "Counter Strike -  CSGO",
      imagem:
        "https://res.cloudinary.com/rafael1993x/image/upload/v1618767258/twitch-clone-images/categorias/csgo_v4nvnw.jpg",
    },
    {
      id: 4,
      nome: "Fortnite",
      imagem:
        "https://res.cloudinary.com/rafael1993x/image/upload/v1618767260/twitch-clone-images/categorias/fortnite_okhwok.jpg",
    },
    {
      id: 5,
      nome: "Garena Free Fire",
      imagem:
        "https://res.cloudinary.com/rafael1993x/image/upload/v1618767261/twitch-clone-images/categorias/garena_i1bovn.jpg",
    },
    {
      id: 6,
      nome: "Just Chatting",
      imagem:
        "https://res.cloudinary.com/rafael1993x/image/upload/v1618767263/twitch-clone-images/categorias/just-chatting_ry0atg.jpg",
    },
    {
      id: 7,
      nome: "Minecraft",
      imagem:
        "https://res.cloudinary.com/rafael1993x/image/upload/v1618767264/twitch-clone-images/categorias/minecraft_lesous.jpg",
    },
    {
      id: 8,
      nome: "NBA",
      imagem:
        "https://res.cloudinary.com/rafael1993x/image/upload/v1618767265/twitch-clone-images/categorias/nba_bedgqv.jpg",
    },
    {
      id: 9,
      nome: "Grand Theft Auto V",
      imagem:
        "https://res.cloudinary.com/rafael1993x/image/upload/v1618767262/twitch-clone-images/categorias/gta_zx6l9v.jpg",
    },
    {
      id: 10,
      nome: "Valorant",
      imagem:
        "https://res.cloudinary.com/rafael1993x/image/upload/v1618767266/twitch-clone-images/categorias/valorant_veixrf.jpg",
    },
  ];
  const gtav = [
    {
      id: 1,
      imagem:
        "https://res.cloudinary.com/rafael1993x/image/upload/v1618766489/twitch-clone-images/gta/gta-1_oftkbe.jpg",
      nomeLive: "Nome da live",
      nomeCanal: "Nome do canal",
      nomeDoJogo: "Nome do jogo",
    },
    {
      id: 2,
      imagem:
        "https://res.cloudinary.com/rafael1993x/image/upload/v1618766489/twitch-clone-images/gta/gta-2_lexcfe.jpg",
      nomeLive: "Nome da live",
      nomeCanal: "Nome do canal",
      nomeDoJogo: "Nome do jogo",
    },
    {
      id: 3,
      imagem:
        "https://res.cloudinary.com/rafael1993x/image/upload/v1618766489/twitch-clone-images/gta/gta-3_sbncgt.jpg",
      nomeLive: "Nome da live",
      nomeCanal: "Nome do canal",
      nomeDoJogo: "Nome do jogo",
    },
    {
      id: 4,
      imagem:
        "https://res.cloudinary.com/rafael1993x/image/upload/v1618766490/twitch-clone-images/gta/gta-4_tvckvr.jpg",
      nomeLive: "Nome da live",
      nomeCanal: "Nome do canal",
      nomeDoJogo: "Nome do jogo",
    },
    {
      id: 5,
      imagem:
        "https://res.cloudinary.com/rafael1993x/image/upload/v1618766490/twitch-clone-images/gta/gta-5_jair0y.jpg",
      nomeLive: "Nome da live",
      nomeCanal: "Nome do canal",
      nomeDoJogo: "Nome do jogo",
    },
  ];
  const conversa = [
    {
      id: 1,
      imagem:
        "https://res.cloudinary.com/rafael1993x/image/upload/v1618766485/twitch-clone-images/conversa/conversa-1_c5aufk.jpg",
      nomeLive: "Nome da live",
      nomeCanal: "Nome do canal",
      nomeDoJogo: "Nome do jogo",
    },
    {
      id: 2,
      imagem:
        "https://res.cloudinary.com/rafael1993x/image/upload/v1618766485/twitch-clone-images/conversa/conversa-2_befor5.jpg",
      nomeLive: "Nome da live",
      nomeCanal: "Nome do canal",
      nomeDoJogo: "Nome do jogo",
    },
    {
      id: 3,
      imagem:
        "https://res.cloudinary.com/rafael1993x/image/upload/v1618766486/twitch-clone-images/conversa/conversa-3_iuuieb.jpg",
      nomeLive: "Nome da live",
      nomeCanal: "Nome do canal",
      nomeDoJogo: "Nome do jogo",
    },
    {
      id: 4,
      imagem:
        "https://res.cloudinary.com/rafael1993x/image/upload/v1618766486/twitch-clone-images/conversa/conversa-4_hbrro6.jpg",
      nomeLive: "Nome da live",
      nomeCanal: "Nome do canal",
      nomeDoJogo: "Nome do jogo",
    },
    {
      id: 5,
      imagem:
        "https://res.cloudinary.com/rafael1993x/image/upload/v1618766486/twitch-clone-images/conversa/conversa-5_oqz69t.jpg",
      nomeLive: "Nome da live",
      nomeCanal: "Nome do canal",
      nomeDoJogo: "Nome do jogo",
    },
  ];
  const fortnite = [
    {
      id: 1,
      imagem:
        "https://res.cloudinary.com/rafael1993x/image/upload/v1618766489/twitch-clone-images/fortnite/fortnite-1_urpddg.jpg",
      nomeLive: "Nome da live",
      nomeCanal: "Nome do canal",
      nomeDoJogo: "Nome do jogo",
    },
    {
      id: 2,
      imagem:
        "https://res.cloudinary.com/rafael1993x/image/upload/v1618766487/twitch-clone-images/fortnite/fortnite-2_mzt4ng.jpg",
      nomeLive: "Nome da live",
      nomeCanal: "Nome do canal",
      nomeDoJogo: "Nome do jogo",
    },
    {
      id: 3,
      imagem:
        "https://res.cloudinary.com/rafael1993x/image/upload/v1618766489/twitch-clone-images/fortnite/fortnite-3_uj7wjm.jpg",
      nomeLive: "Nome da live",
      nomeCanal: "Nome do canal",
      nomeDoJogo: "Nome do jogo",
    },
    {
      id: 4,
      imagem:
        "https://res.cloudinary.com/rafael1993x/image/upload/v1618766488/twitch-clone-images/fortnite/fortnite-4_y75axb.jpg",
      nomeLive: "Nome da live",
      nomeCanal: "Nome do canal",
      nomeDoJogo: "Nome do jogo",
    },
    {
      id: 5,
      imagem:
        "https://res.cloudinary.com/rafael1993x/image/upload/v1618766488/twitch-clone-images/fortnite/fortnite-5_fyo0ii.jpg",
      nomeLive: "Nome da live",
      nomeCanal: "Nome do canal",
      nomeDoJogo: "Nome do jogo",
    },
  ];

  return (
    <>
      <Head>
        <title>Twitch</title>
      </Head>
      <WrapperMainContentHome isReachedIn1200px={isReachedIn1200px}>
        <Slider />
        <WrapperSectionLives>
          <h2>Canais ao vivo que achamos que você vai gostar</h2>
          <WrapperVideos>
            {live &&
              live.map((live) => <VideoComponent key={live.id} game={live} />)}
          </WrapperVideos>
        </WrapperSectionLives>
        <WrapperSectionCategories>
          <h2>
            <a href="#">Categorias</a> que achamos que vai gostar
          </h2>
          <WrapperVideosGames>
            {categories &&
              categories.map((game) => (
                <GamesComponent key={game.id} game={game} />
              ))}
          </WrapperVideosGames>
        </WrapperSectionCategories>
        <WrapperSectionSingleGame>
          <h2>
            Canais de <a href="#">Grand Theft Auto V</a> recomendados
          </h2>
          <WrapperVideos>
            {gtav &&
              gtav.map((game) => (
                <RecommendedChannel key={game.id} game={game} />
              ))}
          </WrapperVideos>
        </WrapperSectionSingleGame>
        <WrapperSectionSingleGame>
          <h2>
            Canais de <a href="#">Só na conversa</a> recomendados
          </h2>
          <WrapperVideos>
            {conversa &&
              conversa.map((game) => (
                <RecommendedChannel key={game.id} game={game} />
              ))}
          </WrapperVideos>
        </WrapperSectionSingleGame>
        <WrapperSectionSingleGame>
          <h2>
            Canais de <a href="#">Fortnite</a> recomendados
          </h2>
          <WrapperVideos>
            {fortnite &&
              fortnite.map((game) => (
                <RecommendedChannel key={game.id} game={game} />
              ))}
          </WrapperVideos>
        </WrapperSectionSingleGame>
      </WrapperMainContentHome>
    </>
  );
};

export default MainContentHomeComponent;

import styled, { keyframes } from "styled-components";

const showContentSlider = keyframes`
  to{
    opacity: 1;
    visibility: visible;
  }
`;

export const WrapperContentSlider = styled.div`
  position: relative;

  & .imagem-canal-e-informacoes {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    max-width: 220px;
    max-height: 100%;
    background: #18181b;
    display: flex;
    flex-direction: column;
    opacity: 0;
    visibility: hidden;
  }

  & .canal {
    display: flex;
    padding: 8px;
    gap: 8px;

    & img {
      width: 50px;
      border-radius: 50%;
    }

    & h2 {
      font-size: 0.8em;
      color: #a970ff;
    }

    & p {
      font-size: 0.85em;
      color: #a970ff;
      margin-top: 3px;
    }

    & span {
      display: block;
      color: #eee;
      font-size: 0.8em;
      margin-top: 5px;
    }
  }

  & .tags-e-apresentacao {
    display: flex;
    flex-direction: column;

    & .tags {
      display: flex;
      flex-wrap: wrap;
      margin: 0 10px 10px;
      gap: 3px;

      & span {
        display: inline-block;
        padding: 3px 8px;
        background: #464649;
        color: #ccc;
        border-radius: 10px;
        font-size: 0.75em;
        font-weight: 600;
        cursor: pointer;
        transition: 0.1s;

        &:hover {
          background: #646464;
        }
      }
    }

    & .apresentacao {
      max-height: 175px;
      overflow: hidden;

      & p {
        color: #e9e9e9;
        font-size: 0.88em;
        line-height: 1.35;
        word-break: break-word;
        padding: 0 10px;
        &:after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          display: block;
          width: 100%;
          height: 40px;
          background-image: linear-gradient(to bottom, transparent, #18181b);
          z-index: 999;
        }
      }
    }
  }

  @media (max-width: 850px) {
    & > img {
      width: 100%;
      max-width: 600px;
    }

    & .imagem-canal-e-informacoes {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      background: rgba(0, 0, 0, 0.3);
      display: flex;
      flex-direction: column;
      opacity: 0;
      visibility: hidden;
    }

    & .tags-e-apresentacao {
      & .tags {
        & span {
        }
      }
      & .apresentacao {
        display: none;
        & p {
          &:after {
            content: "";
            display: none;
          }
        }
      }
    }
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

export const WrapperSlider = styled.div`
  min-width: 750px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0 0;
  transition: 0.4s ease-in;
  width: 50%;
  margin: 0 auto 0;
  position: relative;

  .slides {
    position: relative;
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
    margin-top: 18%;
    display: flex;
    justify-content: center;
    align-items: center;

    & label {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .slide {
    position: absolute;
    height: 100%;
    margin: 0 auto;
    transition: transform 0.4s ease;
    user-select: none;
    transition: 0.5s;
  }

  #item-1:checked ~ .slides #slide-3,
  #item-2:checked ~ .slides #slide-1,
  #item-3:checked ~ .slides #slide-2 {
    transform: translatex(-30%) scale(0.9);
    opacity: 0.4;
    z-index: 0;
  }

  #item-1:checked ~ .slides #slide-2,
  #item-2:checked ~ .slides #slide-3,
  #item-3:checked ~ .slides #slide-1 {
    transform: translatex(30%) scale(0.9);
    opacity: 0.4;
    z-index: 0;
  }

  #item-1:checked ~ .slides #slide-1,
  #item-2:checked ~ .slides #slide-2,
  #item-3:checked ~ .slides #slide-3 {
    transform: translatex(0) scale(1);
    opacity: 1;
    z-index: 1;
  }

  #item-1:checked ~ .slides #slide-3:hover,
  #item-2:checked ~ .slides #slide-1:hover,
  #item-3:checked ~ .slides #slide-2:hover {
    opacity: 0.8;
    transform: translatex(-30%) scale(0.92);
  }

  #item-1:checked ~ .slides #slide-2:hover,
  #item-2:checked ~ .slides #slide-3:hover,
  #item-3:checked ~ .slides #slide-1:hover {
    opacity: 0.8;
    transform: translatex(30%) scale(0.92);
  }

  #item-1:checked ~ .slides #slide-1 .imagem-canal-e-informacoes,
  #item-2:checked ~ .slides #slide-2 .imagem-canal-e-informacoes,
  #item-3:checked ~ .slides #slide-3 .imagem-canal-e-informacoes {
    animation: ${showContentSlider} 0.3s ease-in-out forwards;
    animation-delay: 0.3s;
  }

  @media (max-width: 1400px) {
    #item-1:checked ~ .slides #slide-3,
    #item-2:checked ~ .slides #slide-1,
    #item-3:checked ~ .slides #slide-2 {
      transform: translatex(-20%) scale(0.9);
      opacity: 0.4;
      z-index: 0;
    }

    #item-1:checked ~ .slides #slide-2,
    #item-2:checked ~ .slides #slide-3,
    #item-3:checked ~ .slides #slide-1 {
      transform: translatex(20%) scale(0.9);
      opacity: 0.4;
      z-index: 0;
    }

    #item-1:checked ~ .slides #slide-3:hover,
    #item-2:checked ~ .slides #slide-1:hover,
    #item-3:checked ~ .slides #slide-2:hover {
      opacity: 0.8;
      transform: translatex(-20%) scale(0.92);
    }

    #item-1:checked ~ .slides #slide-2:hover,
    #item-2:checked ~ .slides #slide-3:hover,
    #item-3:checked ~ .slides #slide-1:hover {
      opacity: 0.8;
      transform: translatex(20%) scale(0.92);
    }
  }

  @media (max-width: 1250px) {
    #item-1:checked ~ .slides #slide-3,
    #item-2:checked ~ .slides #slide-1,
    #item-3:checked ~ .slides #slide-2 {
      transform: translatex(0) scale(0.9);
      opacity: 0.4;
      z-index: 0;
    }

    #item-1:checked ~ .slides #slide-2,
    #item-2:checked ~ .slides #slide-3,
    #item-3:checked ~ .slides #slide-1 {
      transform: translatex(0) scale(0.9);
      opacity: 0.4;
      z-index: 0;
    }

    #item-1:checked ~ .slides #slide-3:hover,
    #item-2:checked ~ .slides #slide-1:hover,
    #item-3:checked ~ .slides #slide-2:hover {
      opacity: 0.8;
      transform: translatex(-0) scale(0.92);
    }

    #item-1:checked ~ .slides #slide-2:hover,
    #item-2:checked ~ .slides #slide-3:hover,
    #item-3:checked ~ .slides #slide-1:hover {
      opacity: 0.8;
      transform: translatex(0) scale(0.92);
    }
  }

  @media (max-width: 850px) {
    min-width: calc(100% - 20px);
    margin: 0 auto;
    padding-top: 5%;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

export const WrapperNavSlider = styled.div`
  position: absolute;
  top: calc(50% - 15px);

  width: calc(100% + 30px);

  display: flex;
  justify-content: space-between;

  margin: 0 auto;
  z-index: 999;

  & button {
    display: inline-block;
    padding: 8px 10px;
    background: #121212;
    border: none;
    outline: none;
    color: #eee;
    cursor: pointer;
    border-radius: 3px;

    & img {
      width: 16px;
    }
  }

  & button:hover {
    background: #555;
  }

  @media (max-width: 850px) {
    width: calc(100% - 20px);
  }
`;

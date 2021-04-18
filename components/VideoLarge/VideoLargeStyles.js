import styled from "styled-components";

export const WrapperVideo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const WrapperImageCover = styled.div`
  background: #9147ff;
  transition: 0.3s;
  position: relative;

  & img {
    display: block;
    margin: 0;
    width: 100%;
    transition: 0.15s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:hover img {
    transform: translate3d(5px, -5px, 0);
  }

  & span {
    display: inline-block;
    padding: 2px 6px;
    border-radius: 3px;
    background: #e91916;
    color: #fff;
    text-transform: uppercase;
    font-size: 0.8em;
    position: absolute;
    top: 8px;
    left: 8px;
    font-weight: bold;
    transition: 0.15s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:hover span {
    transform: translate3d(5px, -5px, 0);
  }
`;

export const WrapperCanal = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  margin-top: 5px;
`;

export const WrapperThumbProfile = styled.div`
  & img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-top: 3px;
  }
`;

export const WrapperDadosLiveECanal = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  margin-top: 3px;

  & h2 {
    font-size: 0.95em;
    font-weight: 300;
    margin-bottom: 2px;
    user-select: none;
    cursor: pointer;

    &:hover {
      color: #9147ff;
    }
  }

  & p {
    color: #adadb8;
    font-size: 0.85em;
    margin: 1px 0;
    user-select: none;
    cursor: pointer;

    &:hover {
      color: #9147ff;
    }
  }
`;

export const WrapperTags = styled.div`
  display: flex;
  gap: 6px;

  & span {
    display: inline-block;
    font-size: 0.9em;
    padding: 3px 8px;
    background: #363636;
    border-radius: 10px;
    margin-top: 4px;
    color: #ddd;
    user-select: none;
  }

  @media (max-width: 750px) {
    & span {
      font-size: 0.65em;
    }
  }
`;

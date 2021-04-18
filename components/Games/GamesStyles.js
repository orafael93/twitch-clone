import styled from "styled-components";

export const WrapperGameComponent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const WrapperGameImageCover = styled.div`
  background: #9147ff;
  transition: 0.3s;

  & img {
    display: block;
    width: 100%;
    margin: 0;
    transition: 0.1s;
  }

  &:hover img {
    transform: translate3d(6px, -6px, 0);
  }
`;

export const WrapperGameAndSpectators = styled.div`
  margin-top: 6px;

  & h2 {
    font-size: 0.9em;
    margin: 3px 0;
    color: #e6e6e6;
    cursor: pointer;
  }

  & h2:hover {
    color: #9147ff;
  }

  & p {
    color: #b6b6b6;
    font-size: 0.85em;
    margin-top: 5px;
  }
`;

export const WrapperTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  & span {
    display: inline-block;
    color: #b6b6b6;
    font-size: 0.8em;
    margin-top: 8px;
    background: #363636;
    color: #ddd;
    padding: 3px 8px;
    border-radius: 10px;
  }
`;

import styled from "styled-components";

export const SidebarWrapper = styled.div`
  position: fixed;
  background: #1f1f23;
  top: 50px;
  width: 100%;
  height: 100vh;
  max-width: ${({ isReachedIn1200px }) =>
    isReachedIn1200px ? `${50}px` : `${240}px`};
`;

export const ContentSideBar = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
`;

export const CanaisRecomendados = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px;
  margin-top: 3px;

  & p {
    text-transform: uppercase;
    font-size: 0.8em;
    font-weight: 600;
  }

  & span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px;
    cursor: ${({ isReachedIn1200px }) =>
      isReachedIn1200px ? "normal" : "pointer"};
    border-radius: 3px;
    user-select: none;

    & img {
      width: 15px;
    }

    &:hover {
      background: ${({ isReachedIn1200px }) =>
        isReachedIn1200px ? "initial" : "#545454"};
    }
  }
`;

export const CanaisAoVivo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Canal = styled.div`
  display: grid;
  grid-template-columns: 1fr 60px;
  gap: 3px;
  padding: 6px 10px;
  user-select: none;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`;

export const NomeDoCanalEJogoAtual = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr;

  & img {
    display: inline-block;
    grid-row: 1 / 3;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  & p,
  & span {
    font-size: 0.9em;
    margin-left: 8px;
  }

  & span {
    text-transform: uppercase;
    font-size: 0.7em;
    color: #adadb8;
  }
`;

export const PublicoAoVivo = styled.div`
  display: flex;
  justify-content: flex-end;

  & p {
    font-size: 0.9em;
    font-weight: 100;
    position: relative;
  }

  & p:before {
    content: "";
    display: inline-block;
    border-radius: 50px;
    position: absolute;
    top: 5px;
    left: -12px;
    width: 7px;
    height: 7px;
    background: red;
  }
`;

export const ParticipeDaTwitch = styled.div`
  display: flex;
  flex-direction: column;
  background: #18181b;
  padding: 30px 20px 20px;
  border-radius: 10px;
  margin-top: 10px;
  box-shadow: 0 0 1px 2px rgba(0, 0, 0, 0.3);
  margin: 10px;

  & h2,
  & p {
    margin-bottom: 6px;
    word-break: break-word;
  }

  & span {
    color: #a970ff;
    font-size: 1.05em;
  }

  & p {
    font-size: 0.9em;
    line-height: 1.6;
  }

  & button {
    display: block;
    width: 100%;
    max-width: 105px;
    padding: 6px;
    background: #9147ff;
    color: #fff;
    border: none;
    border-radius: 3px;
    font-size: 0.9em;
    outline: none;
    cursor: pointer;
  }

  & button:hover {
    background: #772ce8;
  }
`;

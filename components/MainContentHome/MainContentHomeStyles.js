import styled from "styled-components";

export const WrapperMainContentHome = styled.section`
  ${({ isReachedIn1200px }) =>
    isReachedIn1200px
      ? "width: calc(100% - 50px)"
      : "width: calc(100% - 240px)"};
  background: blue;
  position: relative;
  left: ${({ isReachedIn1200px }) =>
    isReachedIn1200px ? `${50}px` : `${240}px`};
  background: #0e0e10;
`;

export const WrapperSectionLives = styled.section`
  padding: 0 30px;
  margin-top: 190px;

  & h2 {
    color: #fff;
    font-size: 1.15em;
    letter-spacing: -0.5px;
  }

  @media (max-width: 850px) {
    margin-top: 150px;
  }

  @media (max-width: 500px) {
    margin-top: 50px;
  }
`;

export const WrapperVideos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  gap: 8px;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 750px) {
    grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  }

  @media (max-width: 750px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }
`;

export const WrapperSectionCategories = styled.section`
  padding: 0 30px;
  margin-top: 60px;

  & a {
    color: #9147ff;
  }

  & a:hover {
    text-decoration: underline;
  }

  & h2 {
    color: #fff;
    font-size: 1.15em;
    letter-spacing: -0.5px;
    margin-bottom: 10px;
  }
`;

export const WrapperVideosGames = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;
  padding-bottom: 5px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 40px;

  @media (max-width: 750px) {
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
    padding-bottom: 30px;
  }
`;

export const WrapperSectionSingleGame = styled.section`
  padding: 0 30px;
  padding-bottom: 20px;

  & h2 {
    color: #fff;
    font-size: 1.15em;
    letter-spacing: -0.5px;
  }

  & a {
    color: #9147ff;
    font-size: 1.1em;
  }

  & a:hover {
    text-decoration: underline;
  }
`;

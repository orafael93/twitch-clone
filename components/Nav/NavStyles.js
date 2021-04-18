import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  margin: 0 auto;
  background: #18181b;
  max-height: 50px;
  z-index: 999;

  @media (max-width: 1440px) {
    grid-template-columns: 280px 1fr 270px;
  }

  @media (max-width: 590px) {
    &:hover {
      overflow-y: hidden;
      overflow-x: scroll;
      padding-bottom: 15px;
    }
  }
`;

export const TwitchLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin-right: 28px;
  margin-left: 5px;

  & img {
    width: 24px;
    height: 24px;
    margin-bottom: 3px;
  }
`;

export const WrapperPrimeiraSecao = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
`;

export const DropDownWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin-left: 30px;
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 3px;

  & ul {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px;
    border-radius: 2px;
    cursor: pointer;

    & img {
      width: 18px;
    }

    &:hover {
      background: #464648;
    }
  }

  @media (max-width: 1440px) {
    margin-left: 20px;
  }
`;

export const PrimeiraSecao = styled.div`
  display: flex;
  gap: 38px;
  margin-bottom: 3px;

  & a {
    color: #fff;
    font-weight: 600;
    font-size: 1.08em;
  }

  & a:hover {
    color: #a970ff;
  }

  @media (max-width: 1440px) {
    gap: 18px;

    & a {
      color: #fff;
      font-weight: 600;
      font-size: 0.85em;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    gap: 20px;

    & a {
      display: inline-block;
      padding: 5px 8px;
      border-radius: 2px;
    }

    & a img {
      width: 16px;
    }

    & a:hover {
      background: #464648;
    }
  }
`;

export const WrapperPesquisa = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  & button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: none;
    outline: none;
    background: #29292b;
    height: 100%;
    padding: 8px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;
    margin-bottom: 4px;

    & img {
      width: 18px;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: flex-end;

    & span {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 6px;
      cursor: pointer;
      border-radius: 3px;
      user-select: none;
    }

    & span:hover {
      background: #464646;
    }

    & img {
      width: 16px;
    }
  }
`;

export const WrapperContentPesquisa = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1px;
  width: 61%;
  max-width: 390px;

  & input {
    width: 100%;
    display: inline-block;
    padding: 7px 10px;
    background: #464648;
    outline: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    height: 26%;
    margin-bottom: 4px;
    transition: 0.3s;
    border: 2px solid transparent;

    &::placeholder {
      color: #bbb;
      font-weight: 600;
    }

    &:focus {
      border: 2px solid #a970ff;
      box-shadow: 0 0 1px 0 #a970ff;
      background: #000;
      color: #fff;
    }
  }

  @media (max-width: 1440px) {
    & input {
      min-width: 100px;
      margin-left: 20px;
    }
  }
`;

export const TerceiraSecao = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const WrapperCadastros = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 11px;
  padding: 5px 0;
  align-items: center;
  margin-right: 12px;

  & a {
    color: #fff;
    font-size: 0.85em;
    font-weight: 500;
  }

  @media (max-width: 1440px) {
    margin-right: 6px;
  }
`;

export const WrapperPrime = styled.div`
  width: 18px;
  margin-bottom: 3px;
  margin-right: 3px;
  padding: 6px;
  cursor: pointer;
  border-radius: 3px;

  &:hover {
    background: #464648;
  }

  @media (max-width: 1440px) {
    width: 18px;
    margin-right: 0;
    & img {
      width: 18px;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px;
    margin-bottom: 0;
  }
`;

export const ButtonEntrar = styled.a`
  display: flex;
  background: #464649;
  padding: 6px 10px;
  border-radius: 3px;
`;

export const ButtonCadastro = styled.a`
  display: flex;
  background: #9147ff;
  padding: 6px 10px;
  border-radius: 3px;

  &:hover {
    background: #772ce8;
  }
`;

export const ButtonUser = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 7px;
  border-radius: 3px;
  cursor: pointer;

  & img {
    width: 18px;
  }

  &:hover {
    background: #464648;
  }
`;

export const WrapperSearchMobile = styled.div`
  width: 100%;
  max-width: 400px;
  position: absolute;
  top: 65px;
  left: 20%;
  display: flex;
  justify-content: center;

  & input {
    width: 100%;
    display: block;
    background: #181818;
    border: none;
    padding: 2px 8px;
    color: #eee;
    font-size: 0.9em;
    border-radius: 5px;
    border: 2px solid #5c16c5;
    outline: none;

    &::placeholder {
      color: #c7c7c7;
    }
  }

  & button {
    margin-bottom: 0;
  }
`;

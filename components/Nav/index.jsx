import React from "react";
import {
  Nav,
  TwitchLogo,
  PrimeiraSecao,
  WrapperPrimeiraSecao,
  DropDownWrapper,
  WrapperPesquisa,
  WrapperContentPesquisa,
  TerceiraSecao,
  WrapperCadastros,
  WrapperPrime,
  ButtonEntrar,
  ButtonCadastro,
  ButtonUser,
  WrapperSearchMobile,
} from "./NavStyles";
import Link from "next/link";
import { GlobalContext } from "../../context/context";
import { matchMedia768px } from "../../utils/matchMedia";

const NavComponent = () => {
  const [toggleSearchActive, setToggleSearchActive] = React.useState(false);
  const { isReachedIn768px, setIsReachedIn768px } = React.useContext(
    GlobalContext
  );

  React.useEffect(() => matchMedia768px(setIsReachedIn768px), []);

  return (
    <>
      <Nav>
        <WrapperPrimeiraSecao>
          <TwitchLogo>
            <Link href="/">
              <a>
                <img src="/twitch.png" alt="" />
              </a>
            </Link>
          </TwitchLogo>
          <PrimeiraSecao>
            {isReachedIn768px ? (
              <>
                <a href="#">
                  <img src="/tabs.svg" alt="" />
                </a>
                <a href="#">
                  <img src="/trophy.svg" alt="" />
                </a>
                <a href="#">
                  <img src="/music.svg" alt="" />
                </a>
              </>
            ) : (
              <>
                <a href="#">Procurar</a>
                <a href="#">Esports</a>
                <a href="#">Música</a>
              </>
            )}
          </PrimeiraSecao>
          <DropDownWrapper>
            <ul>
              <img src="/dots.svg" alt="" />
            </ul>
          </DropDownWrapper>
        </WrapperPrimeiraSecao>
        <WrapperPesquisa>
          {!isReachedIn768px ? (
            <WrapperContentPesquisa>
              <input type="text" placeholder="Buscar" />
              <button>
                <img src="/loupe.png" alt="" />
              </button>
            </WrapperContentPesquisa>
          ) : (
            <>
              <span onClick={() => setToggleSearchActive((e) => !e)}>
                <img src="/search-768px.svg" alt="" />
              </span>
              {toggleSearchActive && (
                <WrapperSearchMobile>
                  <input type="text" placeholder="Buscar" />
                  <button>
                    <img src="/loupe.png" alt="" />
                  </button>
                </WrapperSearchMobile>
              )}
            </>
          )}
        </WrapperPesquisa>
        <TerceiraSecao>
          <WrapperCadastros>
            <WrapperPrime>
              <img src="/prime.png" alt="" />
            </WrapperPrime>
            <ButtonEntrar href="#">Entrar</ButtonEntrar>

            <ButtonCadastro href="#">Cadastrar-se</ButtonCadastro>
            <ButtonUser>
              <img src="/user.png" alt="" />
            </ButtonUser>
          </WrapperCadastros>
        </TerceiraSecao>
      </Nav>
    </>
  );
};

export default NavComponent;

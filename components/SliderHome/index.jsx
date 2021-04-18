import React from "react";
import {
  WrapperSlider,
  WrapperContentSlider,
  WrapperNavSlider,
} from "./SliderComponentStyles";
import { GlobalContext } from "../../context/context";
import { goTo } from "../../utils/slider";

const SliderComponent = () => {
  const { isReachedIn1200px } = React.useContext(GlobalContext);
  const slideItems = [
    {
      id: 1,
      img:
        "https://res.cloudinary.com/rafael1993x/image/upload/v1618766990/twitch-clone-images/slider/cod-warzone_jxmfu6.webp",
    },
    {
      id: 2,
      img:
        "https://res.cloudinary.com/rafael1993x/image/upload/v1618766997/twitch-clone-images/slider/gta-roleplay_rd5cdq.webp",
    },
    {
      id: 3,
      img:
        "https://res.cloudinary.com/rafael1993x/image/upload/v1618767001/twitch-clone-images/slider/r6_wiii0s.webp",
    },
  ];
  const refElementsSlider = React.useRef();
  const [inputValue, setInputvalue] = React.useState("item-1");
  const [current, setCurrent] = React.useState(1);

  React.useEffect(() => {
    const slides = [...refElementsSlider.current?.querySelectorAll(".slide")];

    if (current > slides.length) setCurrent(1);

    if (current < 1) setCurrent(slides.length);

    goTo(current, setInputvalue);
  }, [current]);

  const prevSlide = () => {
    setCurrent(current - 1);
  };

  const nextSlide = () => {
    setCurrent(current + 1);
  };

  return (
    <>
      <WrapperSlider isReachedIn1200px={isReachedIn1200px}>
        <input
          type="radio"
          name="slider"
          id="item-1"
          value="item-1"
          onChange={(e) => setInputvalue(e.target.value)}
          checked={inputValue === "item-1"}
        />
        <input
          type="radio"
          name="slider"
          id="item-2"
          value="item-2"
          onChange={(e) => setInputvalue(e.target.value)}
          checked={inputValue === "item-2"}
        />
        <input
          type="radio"
          name="slider"
          id="item-3"
          value="item-3"
          onChange={(e) => setInputvalue(e.target.value)}
          checked={inputValue === "item-3"}
        />

        <div className="slides" ref={refElementsSlider}>
          {slideItems &&
            slideItems.map((slide) => (
              <label
                className="slide"
                htmlFor={`item-${slide.id}`}
                id={`slide-${slide.id}`}
                key={slide.id}
              >
                <WrapperContentSlider isReachedIn1200px={isReachedIn1200px}>
                  <img src={slide.img} />
                  <div className="imagem-canal-e-informacoes">
                    <div className="canal">
                      <div className="img-canal">
                        <img src="/img-slide.png" alt="" />
                      </div>
                      <div className="nome-e-informacoes">
                        <h2>Nome canal</h2>
                        <p>Jogo</p>
                        <span>7,8 mil espectadores</span>
                      </div>
                    </div>
                    <div className="tags-e-apresentacao">
                      <div className="tags">
                        <span>Portugues</span>
                        <span>Extensão aprimorada</span>
                      </div>
                      <div className="apresentacao">
                        <p>
                          Uma stream focada em muita conversa e diversão, para
                          isso contamos com jogos variados e estamos aqui com o
                          objetivo de cada vez mais ter uma comunidade maior e
                          unida, vem pro chat conversar e ser parte dela!
                        </p>
                      </div>
                    </div>
                  </div>
                </WrapperContentSlider>
              </label>
            ))}
          {isReachedIn1200px && (
            <WrapperNavSlider>
              <button onClick={prevSlide}>
                <img src="/prev.svg" alt="" />
              </button>
              <button onClick={nextSlide}>
                <img src="/next.svg" alt="" />
              </button>
            </WrapperNavSlider>
          )}
        </div>
      </WrapperSlider>
    </>
  );
};

export default SliderComponent;

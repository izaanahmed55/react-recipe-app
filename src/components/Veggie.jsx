import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

export const Veggie = () => {
  const [veggie, setVeggie] = useState([]);

    const getVeggie = async () => {

        const check = localStorage.getItem('veggie');

        if(check){
            setVeggie(JSON.parse(check));
        }else{
            const api = await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=${
                    import.meta.env.VITE_API_KEY
                }&number=9&tags=vegetarian`
            );
            const data = await api.json();

            localStorage.setItem("veggie", JSON.stringify(data.recipes));

            setVeggie(data.recipes);
            console.log(data.recipes);
        }
    };

    useEffect(() => {
        getVeggie();
    }, []);


  return (
    <>
      <Wrapper>
          <h3>VEGETARIAN PICKS</h3>
          <Splide options={{
              perPage: 3,
              arrows: false,
              pagination: false,
              drag: 'free',
              gap: "5rem",
          }}
          >
              {veggie.map((recipes) => {
                  return (
                      <SplideSlide key={recipes.id}>
                          <Card>
                              <p>{recipes.title}</p>
                              <img
                                  src={recipes.image}
                                  alt={recipes.title}
                              />
                          </Card>
                      </SplideSlide>
                  );
              })}
          </Splide>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
    margin: 4rem 0rem;
`;

const Card = styled.div`
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    img {
        border-radius: 2rem;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    p{
        position: absolute;
        z-inex: 10;
        bottom: 0%;
        transform: translate(-50%, 0%)
        color: white;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;
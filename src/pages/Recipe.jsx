import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import React from 'react'

export const Recipe = () => {

  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('instructions');

  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${import.meta.env.VITE_API_KEY}`);
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData)
  }

  useEffect(() => {
    fetchDetails();
  }, [params.name]);
  useEffect(() => {console.log(details.instructions)
  }, [details]);

  return (
    <DetailWrapper>
      <div>
        <h2> {details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}> Instructions </Button>
        <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}> Ingredients </Button>
        {activeTab === 'instructions' && (
          <div>
            {/* <span dangerouslySetInnerHTML={{__html: details.summary}}>
              {details.summary}
            </span>
            <h3 dangerouslySetInnerHTML={{__html: details.instructions}}>
              {details.instructions}
            </h3> */}
            <h3 >
              {details.summary}
            </h3>
            <h3 >
              {details.instructions}
            </h3>
          </div>
        )}
        {activeTab === 'ingredients' && (
          <ul>
            {
            details?.extendedIngredients?.map((ingredients) => {
              console.log(ingredients);
              <li key={ingredients.id}>{ingredients.original}</li>
            })}
          </ul>
        )};
        
      </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active{
    background: gray;
    color: white;
  }
  h2{
    margin-bottom: 2rem;
  }
  li{
    font-size: 1.2rem;
    line-height: 2.5rem
  }
  ul{
    margin-top: 2rem;
  }
  `;

  const Button = styled.div`
    padding: 1rem 2rem;
    color: gray;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
  `;

  const Info = styled.div`
    margin-left: 10rem;
  `;
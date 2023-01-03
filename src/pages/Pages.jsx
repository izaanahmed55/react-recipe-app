import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { Cuisine } from "./Cuisine"
import { Recipe } from './Recipe'
import { Searched } from './Searched'

export const Pages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cuisine/:type" element={<Cuisine />}/>
        <Route path='/searched/:search' element={<Searched />}/>
        <Route path='/recipe/:name' element={<Recipe />}/>
      </Routes>
    </>
  );
}

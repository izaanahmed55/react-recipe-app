import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Home } from './Home'
import { Cuisine } from "./Cuisine"
import { Recipe } from './Recipe'
import { Searched } from './Searched'
import { AnimatePresence } from 'framer-motion'

export const Pages = () => {

  const location = useLocation();

  return (
    <>
    <AnimatePresence location={location} key={location.pathname}>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cuisine/:type" element={<Cuisine />}/>
        <Route path='/searched/:search' element={<Searched />}/>
        <Route path='/recipe/:name' element={<Recipe />}/>
      </Routes>
    </AnimatePresence>
    </>
  );
}

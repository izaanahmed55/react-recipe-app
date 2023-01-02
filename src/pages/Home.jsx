import React from "react"
import { Veggie } from "../components/Veggie"
import { Popular } from "../components/Popular"
import { Category } from "../components/Category"
 
export const Home = () => {
  return (
    <>
        <Category/>
        <Veggie/>
        <Popular/>
    </>
  )
}
 
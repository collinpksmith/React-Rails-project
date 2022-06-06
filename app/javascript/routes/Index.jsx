import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "../components/Home"
import Recipes from "../components/Recipes"
import Recipe from "../components/Recipe"
import NewRecipe from "../components/NewRecipe"

const routes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/recipes" exact element={<Recipes />} />
        <Route path="/recipe/:id" exact element={<Recipe />} />
        <Route path="/recipe" exact element={<NewRecipe />} />
      </Routes>
    </Router>
  )
}

export default (routes)

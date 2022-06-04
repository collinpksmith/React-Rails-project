import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "../components/Home"
import Recipes from "../components/Recipes"
import Recipe from "../components/Recipe"

const routes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/recipes" exact element={<Recipes />} />
        <Route path="/recipe/:id" exact element={<Recipe />} />
      </Routes>
    </Router>
  )
}

export default (routes)

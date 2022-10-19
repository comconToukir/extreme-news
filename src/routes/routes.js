import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../Pages/Category/Category";
import Home from "../Pages/Home/Home";
import News from './../Pages/News/News';

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<Main />}
    >
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/category/:id"
        element={<Category />}
      />
      <Route
        path="/news/:id"
        element={<News />}
      />
    </Route>
  )
)
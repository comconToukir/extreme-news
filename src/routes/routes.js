import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../Pages/Category/Category";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import EmailNotVerified from "../Pages/Others/EmailNotVerified/EmailNotVerified";
import Profile from "../Pages/Others/Profile/Profile";
import TermsAndConds from "../Pages/Others/TermsAndConds/TermsAndConds";
import News from './../Pages/News/News';
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<Main />}
    >
      <Route
        path="/"
        element={<Home />}
        loader={() => fetch(`http://localhost:5000/news`)}
      />
      <Route
        path="/category/:id"
        element={<Category />}
        loader={({ params }) => fetch(`http://localhost:5000/category/${params.id}`)}
      />
      <Route
        path="/news/:id"
        element={<PrivateRoute><News /></PrivateRoute>}
        loader={({ params }) => fetch(`http://localhost:5000/news/${params.id}`)}
      />
      <Route
        path='/login'
        element={<Login />}
      />
      <Route
        path='/register'
        element={<Register />}
      />
      <Route
        path='/terms'
        element={<TermsAndConds />}
      />
      <Route
        path='/verify-email'
        element={<EmailNotVerified />}
      />
      <Route
        path='/profile'
        element={<PrivateRoute><Profile /></PrivateRoute>}
      />
    </Route>
  )
)
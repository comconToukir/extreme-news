import React, { useContext, useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { CategoriesContext } from "../../Contexts/CategoriesContext";

const LeftSideNav = () => {
  const { categories } = useContext(CategoriesContext);
  return (
    <Navbar sticky="top" style={{ flexDirection: "column", top: "80px" }}>
      <h6>All Categories</h6>
      <div>
        {categories.map((category) => (
          <p key={category.id}>
            <NavLink to={`/category/${category.id}`}>{category.name}</NavLink>
          </p>
        ))}
      </div>
    </Navbar>
  );
};

export default LeftSideNav;

import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CategoriesContext } from '../../Contexts/CategoriesContext';

const LeftSideNav = () => {
  const { categories } = useContext(CategoriesContext);
  return (
    <div>
      <h4>All Categories {categories.length}</h4>
      <div>
        {
          categories.map(category => <p key={category.id}>
            <NavLink to={`/category/${category.id}`}>{category.name}</NavLink>
          </p>)
        }
      </div>
    </div>
  );
};

export default LeftSideNav;
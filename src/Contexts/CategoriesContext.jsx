import { createContext, useEffect, useState } from "react";

export const CategoriesContext = createContext([])

const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/news-categories')
    .then(res => res.json())
    .then(data => setCategories(data))
    .catch(error => console.error(error));
  }, [])

  const value = {
    categories
  }
  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}

export default CategoriesProvider;
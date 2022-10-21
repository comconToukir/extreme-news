import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {
  const newsList = useLoaderData();
  return (
    <div>
      {/* Category page {newsList.length} */}
      {
        newsList.map(news => <NewsSummaryCard key={news._id} news={news} />)
      }
    </div>
  );
};

export default Category;
import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummaryCard from "../../Shared/NewsSummaryCard/NewsSummaryCard";

const Home = () => {
  const newsList = useLoaderData();
  return (
    <div>
      {/* Home page news {newsList.length} */}
      {newsList.map((news) => (
        <NewsSummaryCard key={news._id} news={news} />
      ))}
    </div>
  );
};

export default Home;

import React from "react";
import BlockContent from "./BlockContent/BlockContent";
import Card from "./CardContent/Card";
import Content from "./Content/Content";
import StatisticsContent from "./StatisticsContent/StatisticsContent";

const HomePage = () => {
  return (
    <div>
      <BlockContent />
      <Content />
      <Card />
      <StatisticsContent />
    </div>
  );
};

export default HomePage;

import React from "react";
import BlockContent from "./BlockContent/BlockContent";
import Card from "./CardContent/Card";
import StatisticsContent from "./StatisticsContent/StatisticsContent";

const HomePage = () => {
  return (
    <div>
      <BlockContent />
      <Card />
      <StatisticsContent />
    </div>
  );
};

export default HomePage;

import React from "react";
import Stock from "./Stock";

function PortfolioContainer({myStocks, handleRemoveStock}) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        myStocks.map(stock => 
        <Stock 
        {...stock} 
        key={stock.id}
        handleStock={handleRemoveStock} 
        />)
      }
    </div>
  );
}

export default PortfolioContainer;

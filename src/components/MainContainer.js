import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

const [stocks, setStocks] = useState([])
const [myStocks, setMyStocks] = useState([])
const [sortBy, setSortBy] = useState("")
const [filterBy, setFilterBy] = useState("")

useEffect(() => {
  fetch('http://localhost:3001/stocks')
  .then(resp => resp.json())
  .then(setStocks)
}, [])

function handleAddStock(stockToAdd) {
  setMyStocks(currentMyStocks => [...currentMyStocks, stockToAdd])
}

function handleRemoveStock(stockToRemove) {
 setMyStocks(currentMyStocks => currentMyStocks.filter(stock => stock.id !== stockToRemove.id) )
}

function handleToggleSort(e) {
  setSortBy(e.target.value)
}

function handleFilter(e) {
  setFilterBy(e.target.value)
}

  return (
    <div>
      <SearchBar 
      sortBy={sortBy}
      handleToggleSort={handleToggleSort}
      handleFilter={handleFilter}
      filterBy={filterBy} />
      <div className="row">
        <div className="col-8">
          <StockContainer 
          stocks={stocks}
          handleAddStock={handleAddStock}
          sortBy={sortBy}
          filterBy={filterBy}
           />
        </div>
        <div className="col-4">
          <PortfolioContainer 
          myStocks={myStocks}
          handleRemoveStock={handleRemoveStock} 
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;

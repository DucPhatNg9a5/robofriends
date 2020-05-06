import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

const App = () => {
  const [search, updateSearch] = useState("");
  const [robots, setRobot] = useState([]);

  function onSearchChange(event) {
    const newSearch = event.target.value;
    updateSearch(newSearch);
  }

  async function fetchData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    res
      .json()
      .then(res => {setRobot(res)})
      .catch(err => {console.log(err)})
  }

  useEffect(() => {
    fetchData();
  });

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(search.toLowerCase());
  });


    return !robots.length ? <h1> LOADING </h1> :
      <div className="tc">
        <h1 className="f1"> ROBOFRIENDS </h1> <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
          <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>

};

export default App;

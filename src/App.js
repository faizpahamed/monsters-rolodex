import React, { Component } from "react";
import { users } from "./users.js";
import "./App.css";
import { CardList } from "./component/card-list/card-list";
import { SearchBox } from "./component/searchbox/searchbox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: users,
      searchField: "",
    };
  }

  /*  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  } */
  handleInput = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          handleInput={this.handleInput}
          placeholder="Search for Monsters"
        ></SearchBox>
        <CardList info={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;

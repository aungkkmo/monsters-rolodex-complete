import React, { Component } from 'react'
import CardList from './components/card-list/CardList'
import Searchbox from './components/search-box/Searchbox'
import './App.css'

export class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters : [],
      searchField : ''
    }
  }

  onSearchChange = (e) => {
    return this.setState({searchField : e.target.value })
  }


  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(users => this.setState({monsters : users}));
  }
   

  render() {
    const {monsters,searchField} = this.state
    const filterMonsters = monsters.filter(monster =>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
      <div className='App'>    
       <h1>Monster Rolodex</h1>
        <Searchbox
          placeholder='Search Monsters'
          onSearchChange={this.onSearchChange}
        />
        <CardList monsters={filterMonsters} />
      </div>
    )
  }
}

export default App

import React, { Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import {weeks} from '../weeks';
import './App.css';

//because this is an object, we are using this.
class App extends Component {
  
    constructor(){
        super();
        this.state ={
            weeks: weeks,
            searchfield: ''
        }
        console.log('constructor');
    }


    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response=>response.json())
    //         .then(users=>this.setState({robots:users}));   
    // }

    onSearchChange = (event)=>{
        this.setState({searchfield: event.target.value})

    }

    render(){
        const {weeks,searchfield} = this.state;
        console.log('render');
        const filteredWeeks = weeks.filter(week=>{
            return week.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if(weeks.length===0){
            return <h1>Loading</h1>
        }else{

            return(
                <div className="tc">
                    <h1 className='f1'>FORTNITE SEASON 4 Challenges</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                         <CardList weeks={filteredWeeks}/>
                    </Scroll>
                </div>
            );
        }
    }
}


export default App;
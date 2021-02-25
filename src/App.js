import React, { Component } from 'react';
import Counters from './component/counters';
import NavBar from './component/navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        tags:[{
            id: 0,value:4
        },
        {
            id: 1,value:0
        },{
            id: 2,value:0
        },{
            id: 3,value:0
        },
    ]
     }
}

HandleDelete = (counterid)=>{
    const counters= this.state.tags.filter(c => c.id !== counterid);
    this.setState({tags: counters})
} ;
HandleReset=()=>{
  let   count = this.state.tags.map( tag => {tag.value= 0 ; return tag });
    this.setState({tags : count});
}
HandleIncrement=(counter)=> {
    const  counters= this.state.tags ;
    const index = counters.indexOf(counter);
    counters[index].value ++;
    this.setState({tags:counters});
};

  render() { 
    return ( <React.Fragment>
      <NavBar tags={this.state.tags.length} />
      <main className="container">
      <Counters  tags={this.state.tags}  onReset={this.HandleReset} onIncrement={this.HandleIncrement} onDelete={this.HandleDelete} />
      </main>
    </React.Fragment> );
  }
}
 
export default App;
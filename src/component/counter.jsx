import React, { Component } from 'react';


class Counter extends Component {
    
   /**
    *  constructor(props) {
        super(props);
        this.state = {   count :this.props.counter.value,}
    }
               we delete constructor because state doesnt controled change of props  
    */
        
    formatCount=() => this.props.counter.value === 0 ? 'Zero' :this.props.counter.value;
    
    getBadgeClasses=()=>{
        let classes = "badge  m-2 badge-";
        classes+=this.props.counter.value === 0 ? 'warning' : "primary" ; 
        return classes ;
    }
    
   // handleincrement=()=>this.setState({ count:this.state.count+1});

    render() { 
        
        return (

        <div>    
            <span style={{fontSize:'20px'}}  className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={()=>this.props.onIncrement(this.props.counter)}   className="btn btn-secondary btn-lg"  >Increment</button>
            <button type="button" className="btn btn-danger m-2"  onClick={()=>this.props.onDelete(this.props.counter.id)} >Delete</button>
        </div>

          );
    }
}
 
export default Counter;
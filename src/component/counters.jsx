import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    

    render() { 
        const { onIncrement,onDelete,onReset,tags}=this.props;
        return ( <React.Fragment>
               <button onClick={()=>onReset()} className="btn btn-info m-2">Reset</button>
               {tags.map(tag =>(
               <Counter key={tag.id} onIncrement={onIncrement} onDelete={onDelete} counter={tag} />
               ))}
        </React.Fragment> );
    }
}
 
export default Counters;
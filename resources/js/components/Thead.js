import React, {Component} from 'react';

class Thead extends Component {
    constructor(props){
        super(props);
        this.state = {
            cols : props.cols
        }
    }
    render(){
        var cols = this.state.cols;
        const listItems = cols.map((col, index) =>
            <th key={col.toString()}>{col}</th>
        );
        return (
            <thead><tr>{listItems}</tr></thead>
        );
    }
}

export default Thead;
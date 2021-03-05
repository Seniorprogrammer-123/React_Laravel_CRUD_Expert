import React, {Component} from 'react';

class Tbody extends Component {
    constructor(props){
        super(props);
        this.state = {
            result : props.result
        }
    }
    render(){
        var result = this.state.result;
        return (
            <tbody>
                {result.map((items, index) => {
                return (
                    <tr key={index}>
                        {items.map((subItems, sIndex) => {
                            return <td key={sIndex}> {subItems} </td>;
                        })}
                        <td>
                            <a href={'edit/'+items[0]} className="btn">Edit</a>
                            &nbsp;
                            <a href={'delete/'+items[0]} className="btn">Delete</a>
                        </td>
                    </tr>
                );
                })}
            </tbody>
        );
    }
}

export default Tbody;
import React, {Component} from 'react';
import Thead from './Thead';
import Tbody from './Tbody';
import "../../css/app.css";

class Table extends Component {
    constructor(props){
        super(props);
        this.state = {
            columns : props.columns,
            datas   : props.datas
        }
    }
    render(){
        return (
            <div className="container-fluid">
                <table>
                    <Thead cols={this.state.columns} />
                    <Tbody result={this.state.datas} />
                </table>
            </div>
        );
    }
}

export default Table;

import React from 'react';
import ReactDOM from 'react-dom';
import Table from "./Table";

const columns = [
    'ID', 'First Name', 'Last Name', 'Sex', 'Age', 'Birthday', 'Phone Number', 'Email Address', 'Work Job', 'Action'
];
const datas = [
    ['1', 'First Name', 'Last Name', 'Male', '32', 'Birthday', 'Phone Number', 'Email Address', 'Work Job'],
    ['2', 'First Name', 'Last Name', 'Male', '43', 'Birthday', 'Phone Number', 'Email Address', 'Work Job'],
    ['3', 'First Name', 'Last Name', 'Female', '25', 'Birthday', 'Phone Number', 'Email Address', 'Work Job']
];
function User() {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="card text-center">
                        <div className="card-header"><h2>Student Table</h2></div>
                        <div className="card-body"><p>I'm very tiny React Component in Laravel app!</p>
                            <Table columns={columns} datas={datas} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;

// DOM element
if (document.getElementById('user')) {
    ReactDOM.render(<User />, document.getElementById('user'));
}
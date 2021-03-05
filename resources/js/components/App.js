import React, {Component} from 'react';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            tasks: [],
            btnstate: 'up'
        };
        // bind
        this.handleChange = this.handleChange.bind(this);
        // bind handleSubmit method
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderTasks = this.renderTasks.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }
    // handle change
    handleChange(e) {
        this.setState({
            name: e.target.value
        });
        // console.log('onChange', this.state.name);
    }
    

    // create handleSubmit method right after handleChange method
    handleSubmit(e) {
        // stop browser's default behaviour of reloading on form submit
        e.preventDefault();
        axios
            .post('/tasks', {
                name: this.state.name
            })
            .then(response => {
                console.log('from handle submit', response);
                // set state
                this.setState({
                    tasks: [response.data, ...this.state.tasks]
                });
                // then clear the value of textarea
                this.setState({
                    name: ''
                });
            });
    }

    // render tasks
    renderTasks() {
        return this.state.tasks.map(task => (
            <div key={task.id} className="media">
                <div className="media-body">
                    <p>
                        {task.name}{' '}
                        <button
                            onClick={() => this.handleDelete(task.id)}
                            className="btn btn-sm btn-success float-right"
                        >Delete</button>
                        {(this.state.btnstate === 'up')?
                            <button
                                onClick={() => this.handleUpdate(task.id)}
                                className="btn btn-sm btn-primary float-right"
                            >Update</button>
                            :(this.state.btnstate === 'ed')?
                            <button
                                onClick={() => this.handleEdit(task.id)}
                                className="btn btn-sm btn-warning float-right"
                            >Edit</button>
                            :
                            <button>Awful</button>
                        }
                    </p>
                </div>
            </div>
        ));
    }

    // get all tasks from backend
    getTasks() {
        axios.get('/tasks').then((
            response // console.log(response.data.tasks)
        ) =>
            this.setState({
                tasks: [...response.data.tasks]
            })
        );
    }

    // lifecycle method
    componentWillMount() {
        this.getTasks();
    }

    // handle delete
    handleDelete(id) {
        // remove from local state
        const isNotId = task => task.id !== id;
        const updatedTasks = this.state.tasks.filter(isNotId);
        this.setState({ tasks: updatedTasks });
        // make delete request to the backend
        axios.delete(`/tasks/${id}`);
    }

    // handle udpate
    handleEdit(id) {
        var tasks = this.state.tasks;
        // make update request to the backend
        
        // var data = [{ id: 1, name: 'Mike', city: 'philps', state: 'New York' }, { id: 2, name: 'Steve', city: 'Square', state: 'Chicago' }, { id: 3, name: 'Jhon', city: 'market', state: 'New York' }, { id: 4, name: 'philps', city: 'booket', state: 'Texas' }, { id: 5, name: 'smith', city: 'brookfield', state: 'Florida' }, { id: 6, name: 'Broom', city: 'old street', state: 'Florida' }];
        // console.log(_.filter(data, { state: 'New York' }));
        // console.log(_
        //     .chain(data)
        //     .countBy('state')
        //     .map((count, state) => ({ state, count }))
        //     .value()
        // );
        // set state
        this.setState({
            btnstate: 'up'
        });
        this.setState({
            name: tasks.filter(task => task.id === id)[0]['name']
        });
        
    }

    // handle udpate
    handleUpdate(id) {
        // set state
        this.setState({
            btnstate: 'ed'
        });
        axios.put(`/tasks/${id}`);    
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Create Task</div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <textarea
                                            className="form-control"
                                            rows="5"
                                            placeholder="Create a new task"
                                            required
                                            onChange={this.handleChange}
                                            value={this.state.name}
                                            maxLength="255"
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        Create Task
                                    </button>
                                </form>
                                <hr /> 
                                {this.renderTasks()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
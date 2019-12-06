import React from 'react';
import './addproject.css';


class AddProject extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render() {
    return (
      <div className="addproject">
        <span>+</span>
        <button onClick={this.togglePopup.bind(this)}>Add Project</button>
        {this.state.showPopup ?
         <Popup text='Enter new Project' closePopup={this.togglePopup.bind(this)} />
         : null
       }
      </div>
    );
  }
}

class Popup extends React.Component {
    documentData;
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          tasks: [],
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }


// on form submit...
handleFormSubmit(e) {
    e.preventDefault();
    let tasks = this.state.tasks;
    let addtask = this.state.title;
    let previousItem = localStorage.getItem('Projects');
    previousItem = JSON.parse(previousItem);
    if ((addtask !== null) && (addtask !== '')) {
      tasks.push(addtask);
    }
    localStorage.setItem('Projects', JSON.stringify(tasks.concat(previousItem)));
    this.setState({
      title: '',
    });
}

handleChange(e) {
    this.setState({title :e.target.value});
}

// React Life Cycle
componentDidMount() {
    this.documentData = JSON.parse(localStorage.getItem('Projects'));

    if (localStorage.getItem('Projects')) {
        this.setState({
            title: this.documentData.title
    })
    } else {
        this.setState({
            title: ''
        })
    }
}

render() {
    return (
        <div className="container popup">
            <form onSubmit={this.handleFormSubmit} className='popup_inner'>
                <h1>{this.props.text}</h1>
                <div className="form-group">
                    <label>Enter the Project</label>
                    <input type="text" name="title" className="form-control" value={this.state.title} onChange={this.handleChange} />
                </div>
                <button type="submit">Submit  </button>
                <button onClick={this.props.closePopup}>Close</button>
            </form>
        </div>
    )
  }
}

export default AddProject;

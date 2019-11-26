import React from 'react';
import Input from './../input/input.jsx';
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
    itemsArray = [];
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
          title: ''
        }
    }

handleChange= (e)=> {
    this.setState({[e.target.name]:e.target.value});
}
// on form submit...
handleFormSubmit(e) {
    e.preventDefault();
    let notes = [...this.state.title];
    notes.push(this.state);
    localStorage.setItem('Project',JSON.stringify(notes));
    this.setState({
      notes: '',
      title: ''
    });
}

// React Life Cycle
componentDidMount() {
    this.documentData = JSON.parse(localStorage.getItem('Project'));

    if (localStorage.getItem('Project')) {
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

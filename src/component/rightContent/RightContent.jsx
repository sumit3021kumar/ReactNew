import React from 'react';
import './rightcontent.css';


class RightContent extends React.Component {
  constructor(props) {
    super(props);
    let title = [];
    if (localStorage.getItem('Projects')) {
       title = JSON.parse(localStorage.getItem('Projects'));
    }

    this.state = {
      title: title,
      name: 'edit',
      visible: 'hidden',
      active: ''
    }
  }
  handleChange(item , e) {
    let projectArrary = JSON.parse(localStorage.getItem('Projects'));
    for (let i = 0; i < projectArrary.length ; i++) {
      if(item === i ) {
        this.setState({
          input: e.target.value,
          active: 'active'
        });
      }
    }

  }
  handleClick(item, e) {
     e.stopPropagation();
    //e.preventDefault();
    let projectArrary = JSON.parse(localStorage.getItem('Projects'));
    for (let i = 0; i < projectArrary.length ; i++) {
      if(item === i ) {
        if(this.state.input != null) {
          projectArrary[i] = this.state.input ;
        }
      }
    }

    localStorage.setItem("Projects", JSON.stringify(projectArrary));
    this.setState({ name : 'save'});
  }
  componentDidMount() {
    this.timerID = setInterval(
       () => this.tick(),
       1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    let updatedtitle = [];
    if (localStorage.getItem('Projects')) {
       updatedtitle = JSON.parse(localStorage.getItem('Projects'));
    }
    this.setState({
      title : updatedtitle
    });
  }

  render() {
    return (
      <div className="rightContent">
       <div className="innerrightcontent">
          <div className="projectlevel">
             Search Projects
          </div>
          { this.state.title.map(
            (id , item) =>
              <form className="project-list">
                <span>{id}</span>
                <input placeholder="Edit Project Name" type="text" className={this.state.active} value={this.state.input} onChange={this.handleChange.bind(this,item)} />
                <button className="hidden" onClick={this.handleClick.bind(this,item)}>{this.state.name}</button>
              </form>
            )
          }
       </div>
      </div>
    );
  }
}

export default RightContent;

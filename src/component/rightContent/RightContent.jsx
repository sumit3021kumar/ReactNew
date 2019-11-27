import React from 'react';
import './rightcontent.css';


class RightContent extends React.Component {
  constructor(props) {
    super(props);
    let title = JSON.parse(localStorage.getItem('Projects'));
    this.state = {
      title: title
    };
    this.getUpdatedData = this.getUpdatedData.bind(this);
  }
  getUpdatedData() {
    const interval = setInterval(() => {
        let title = JSON.parse(localStorage.getItem('Projects'));
        this.setState({title: this.state.title})
    }, 500);
    return () => clearInterval(interval);
  }
  render() {
    return (
      <div className="rightContent">
       <div className="innerrightcontent">
          <div className="projectlevel">
             Search Projects
          </div>
          { this.state.title.map((item, key) =>
           <div className="project-list"><span>{item}</span> <a href='#'>edit</a></div>) }

       </div>
      </div>
    );
  }
}

export default RightContent;

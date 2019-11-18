import React from 'react';
import LoginPopUP from './../loginpopup/loginpopup.jsx';
import Logo from './../logo/logo.jsx';
import Paragraph from './../paragraph/paragraph.jsx';
import './content.css';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       paragraph: 'Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada.'
    }

  }
  render() {
    return (
       <div className="content-area">
         <div className="left-content">
           <Logo/>
           <Paragraph paragraph={this.state.paragraph} />

         </div>
         <div className="right-content">
           <LoginPopUP/>
         </div>
      </div>
    );
  }
}

export default Content;

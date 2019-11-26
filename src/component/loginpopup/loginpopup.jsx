import React from 'react';
import Input from './../input/input.jsx';
import Button from './../button/button.jsx';
import './loginpopup.css';

class LoginPopUP extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
         inputType: "text",
         inputName: "Email",
         inputPlaceholder: "Enter Email",
         passwordinputType: "password",
         passwordinputName: "Password",
         passwordinputPlaceholder: "Enter password",
         buttonHref: '/logout',
         buttonText: 'Submit',
         logoutRoute: '/logout'
      }
   }
  render() {
    return (
      <div className="LoginPopUP">
           <h1> Sign in</h1>
           <Input inputLabel= {this.state.inputName} inputType = { this.state.inputType } inputName = {this.state.inputName} inputPlaceholder ={this.state.inputPlaceholder}/>
           <Input inputLabel= {this.state.passwordinputName} inputType = { this.state.passwordinputType } inputName = {this.state.passwordinputName} inputPlaceholder ={this.state.passwordinputPlaceholder}/>
           <Button  buttonHref={this.state.buttonHref} buttonText={this.state.buttonText} />
      </div>
    );
  }
}

export default LoginPopUP;

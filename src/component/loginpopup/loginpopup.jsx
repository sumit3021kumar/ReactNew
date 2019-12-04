import React from 'react';
import {
	withRouter
} from 'react-router-dom';
import Input from './../input/input.jsx';
import './loginpopup.css';

class LoginPopUP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
         inputType: "text",
         inputName: "Email",
         passwordinputType: "password",
         passwordinputName: "Password",
         valueEmail: '',
         valuePass: ''
      };
    this.handleChangeLogin = this.handleChangeLogin.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleClickLogin =  this.handleClickLogin.bind(this);
   }
   handleChangeEmail(e) {
     this.setState({
       valueEmail: e.target.value
     });
   }
   handleChangeLogin(e) {
     this.setState({
       valuePass: e.target.value
     });
   }
   handleClickLogin(e) {
     e.preventDefault();
     let email = this.state.valueEmail;
     let pass = this.state.valuePass;
		 if ( (email === 's') && (pass === '1')) {
			 var arr = {'token': true};
       localStorage.setItem('LoginDetail', JSON.stringify(arr));
       this.props.history.push('/logout');
     }
   }
  render() {
    return (
      <form className="LoginPopUP" onSubmit={this.handleClickLogin} >
         <h1> Sign in</h1>
         <Input value={this.state.valueEmail} handleChange={this.handleChangeEmail} inputLabel= {this.state.inputName} inputType = {this.state.inputType} inputPlaceholder={'Enter Mail id'} />
         <Input value={this.state.valuePass} handleChange={this.handleChangeLogin} inputLabel= {this.state.passwordinputName} inputType = {this.state.passwordinputType} inputPlaceholder={'Enter Password'} />
         <input className="button button-blue" type="submit" value="submit"></input>
      </form>
    );
  }
}

export default withRouter(LoginPopUP);

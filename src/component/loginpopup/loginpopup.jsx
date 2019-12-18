import React ,{ Suspense } from 'react';
import {
	withRouter
} from 'react-router-dom';
import Input from './../input/input.jsx';
import SignUp from './../signup/signup.jsx';
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
         valuePass: '',
				 error: '',
				 errorClass: 'error',
				 signup : false,
				 signuptext: "Sign Up"
      };
    this.handleChangeLogin = this.handleChangeLogin.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleClickLogin =  this.handleClickLogin.bind(this);
   }
   handleChangeEmail(e) {
     this.setState({
       valueEmail: e.target.value,
			 errorClass: 'error errorDisabled'
     });
   }
   handleChangeLogin(e) {
     this.setState({
       valuePass: e.target.value,
			 errorClass: 'error errorDisabled'
     });
   }
   handleClickLogin(e) {
     e.preventDefault();
     let email = this.state.valueEmail;
     let pass = this.state.valuePass;

		 let previousItem = localStorage.getItem('Users');
		 previousItem = JSON.parse(previousItem);
		 previousItem = previousItem.filter(function(el) {
			 return el != null;
		 });

		 for (var i in previousItem) {
			 if ( (email === previousItem[i]['username']) && (pass === previousItem[i]['password'])) {
				 var arr = {'token': true, 'useremail' : previousItem[i]['username'] , 'password' : previousItem[i]['password']};
	       localStorage.setItem('LoginDetail', JSON.stringify(arr));
				 email = email.substring(0, 4);
	       this.props.history.push(email);
	     } else {
				 this.setState({error: "Something wrong with your Email and Password",
				 errorClass: 'error errorEnabled'});
			 }
		 }
   }

	 handleSignup() {
		 if(this.state.signup == false) {
	     this.setState({
				 signup: true,
				 signuptext: "Sign In"
			 });
		 } else {
			 this.setState({
				 signup: false,
				 signuptext: "Sing Up"
			 });
		 }
	 }

	 componentDidMount() {
		 this.setS = setInterval(
        () => this.setState({error: '',
				      errorClass: 'error errorDisabled'}),
        10000
     );
	 }
	 componentWillUnmount() {
		 clearInterval(this.setS);
   }
  render() {
    return (
			<Suspense fallback={<div>Loading...</div>}>
				{this.state.signup ? <SignUp></SignUp> :
	      <form className="LoginPopUP" onSubmit={this.handleClickLogin} >
	         <h1> Sign in</h1>
	         <Input value={this.state.valueEmail} handleChange={this.handleChangeEmail} inputLabel= {this.state.inputName} inputType = {this.state.inputType} inputPlaceholder={'Enter Mail id'} />
	         <Input value={this.state.valuePass} handleChange={this.handleChangeLogin} inputLabel= {this.state.passwordinputName} inputType = {this.state.passwordinputType} inputPlaceholder={'Enter Password'} />
	         <input className="button button-blue" type="submit" value="submit"></input>
					 { this.state.errorClass ? <span className={this.state.errorClass}>{ this.state.error} </span> : ''}
	       </form>
		  	}
				 <button className="button button-blue bottomSpace"  onClick={this.handleSignup.bind(this)}>{this.state.signuptext}</button>
			</Suspense>
    );
  }
}

export default withRouter(LoginPopUP);

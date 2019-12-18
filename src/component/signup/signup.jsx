import React from 'react';
import './signup.css';

class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      pass: '',
      repeatpass: ''
    }
  }
  handleEmailChange(e) {
    this.setState({
      email: e.target.value,
      userexist: ''
    });
  }
  handlePassChange(e) {
    this.setState({
      pass: e.target.value
    });
  }
  handleRepeatPassChange(e) {
    this.setState({
      repeatpass: e.target.value
    });
  }
  handleOnSubmit(e) {
    e.preventDefault();
    const { email , pass, repeatpass } = this.state;
    if (pass == repeatpass && pass != '' && repeatpass != ''  && email != '') {
      this.setState({ passmatch: ""});
      if( (email != null) && (pass != null) ) {
        let previousItem = localStorage.getItem('Users');
        previousItem = JSON.parse(previousItem);

        if(previousItem) {
          previousItem = previousItem.filter(function(el) {
            return el != null;
          });
          for (var i in previousItem) {
            if(email != previousItem[i]['username']) {
              let newarray = [];
              newarray = [{'username': email, 'password' : pass}];
              localStorage.setItem('Users', JSON.stringify(newarray.concat(previousItem)));
              this.setState({ userCreated: 'User created.'})
            }
            else {
              this.setState({userexist: 'User already exists', passmatch: '', userCreated: ''});

            }
          }
        } else {
          let newarray = [];
          newarray = [{'username': email, 'password' : pass}];
          localStorage.setItem('Users', JSON.stringify(newarray.concat(previousItem)));
        }

      }
    } else {
      this.setState({ passmatch: "Pass dont match",
      userCreated: ''});

      return false;
    }
    this.setState({
      pass: '',
      email: '',
      repeatpass: ''
    })

  }
  render() {
    return (

      <form className="sing-up-form LoginPopUP" onSubmit={this.handleOnSubmit.bind(this)}>
        <h1>Sign Up</h1>
        <span className="success">{this.state.userCreated}</span>
        <p>Please fill in this form to create an account.</p>
        <div className="inputField">
          <label for="email"><b>Email Or Username</b></label>
          <input onChange={this.handleEmailChange.bind(this)} type="text" placeholder="Enter Email" name="email" />
          {this.state.userexist}
        </div>
        <div className="inputField">
          <label for="psw"><b>Password</b></label>
          <input  onChange={this.handlePassChange.bind(this)} type="password" placeholder="Enter Password" name="psw" />
        </div>
        <div className="inputField">
          <label for="psw-repeat"><b>Repeat Password</b></label>
          <input  onChange={this.handleRepeatPassChange.bind(this)} type="password" placeholder="Repeat Password" name="psw-repeat"  />
          { this.state.passmatch }
        </div>
        <input className="button button-blue" type="submit" />
      </form>
    );
  }
}

export default SignUp;

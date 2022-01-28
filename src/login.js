import {React , Component} from 'react';
// import { useFormik } from 'formik';
// import { useDropzone } from "react-dropzone"


class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    // get form data out of state
    const { email, password} = this.state;
    console.log( email, password )

    fetch('http://localhost:8080/users/login' , {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(this.state)
      }).then((result) => result.json())
        .then((info) => { console.log("Data's : ",info); })
}
      render() {
        const { classes } = this.props;
        const { email, password } = this.state;
        console.log(classes)
        console.log( email, password )
        return (
          <div className="container">
          <h1>Access your Account</h1>
            <div className="register-form">
              <form method='POST' action='http://localhost:8080/user/login'>

                <label htmlFor="Email">Email</label>
                <input id="Email" name="email" type={'email'} />

                <label htmlFor="Password">Password</label>
                <input id="Password" name="password" type={'password'} required />

                <button type='Submit' variant="contained" color="primary">
                  Login
                </button>
              </form>
            </div>
          </div>
        );
      }
    }

export default Login;

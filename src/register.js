import {React , Component} from 'react';


class Register extends Component {
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

    fetch('http://localhost:8080/users/register' , {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(this.state.email, this.state.password)
      }).then((result) => result.json())
        .then((info) => { console.log(info); })
}
      render() {

        const { classes } = this.props;
        const { email, password } = this.state;
        console.log(classes)
        console.log( email, password )
        return (
          <body>
          <div className="container" style={{alignitems:'center'}}>
          <h1>Create your Account</h1>
            <div className="register-form">
              <form method='POST' action='http://localhost:8080/user/register'>

                <label htmlFor="Email">Email</label>
                <input id="Email" name="email" />

                <label htmlFor="Password">Password</label>
                <input id="Password" name="password" type={'password'} required />

                {/* <label htmlFor="Upload photo">Upload file</label>
                <input id="file" name="file" type={'file'}  /> */}

                <button type='Submit' variant="contained" color="primary">
                  Register
                </button>
              </form>
            </div>
          </div>
          </body>
        );
      }
    }

export default Register;


// const [files, setFiles] = useState([])

//   const { getRootProps, getInputProps } = useDropzone({
//     accept: "image/*",
//     onDrop: (acceptedFiles) => {
//       setFiles(
//         acceptedFiles.map((file) =>
//           Object.assign(file, {
//             preview: URL.createObjectURL(file),
//           })
//         )
//       )
//     },
//   })

//   const images = files.map((file) => (
//     <div key={file.name}>
//       <div>
//         <img src={file.preview} style={{ width: "200px" }} alt="preview" />
//       </div>
//     </div>
//   ))

// <div {...getRootProps()}>
//         <input {...getInputProps()} 
//           id="File" 
//           name="Dragfile" 
//           onChange={formik.handleChange}
//           value={formik.values.Dragfile}
//         />
//         <p>Drop files here</p>
//       </div>

// {/* <div>{images}</div> */}

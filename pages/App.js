// import Layout from '../components/MyLayout.js'
import Header from '../components/Header.js'
import Link from 'next/link'
import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      response: undefined,
      showProgress: false
    };
    this.incrementCounter = this.incrementCounter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      count: parseInt(localStorage.getItem("count")) || 0
    });
  }

  incrementCounter() {
    const count = this.state.count + 1;
    localStorage.setItem("count", count);
    this.setState({
      count: count
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const x = inputquestion.value;
    if (x == "") {
      alert("Enter a question first!");
    }
    else {
      fetch('/', { method: 'POST' })
      .then(response => response.text())
      .then(textValue => this.setState({ response: textValue }))
      .then(this.setState({showProgress : false }))
      .then(this.setState({showAnswer : true}));
    }
  }

  render() {
    return (
          <body style={{backgroundColor:'#191b1e'}}>
            <Header />
              <div style={{marginTop:"100px", display:'flex', marginLeft:"500px", justifyContent:'center', alignItems:'center'}} id="circle">
                <Typography variant="title" color="inherit">
                  <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <h1 style={{ fontFamily:"Arial", fontSize:"50px", color:"#685fa8"}}>Magic 8 Ball</h1>
                  </div>
                  <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <form className="question-input" onSubmit={this.handleSubmit}>
                      <TextField
                        id="inputquestion"
                        autoComplete="off"
                        placeholder="Ask your question..."
                        InputProps={{
                          style: {
                            color:'white'
                          }
                        }}
                        InputLabelProps={{
                          style: {
                            color:'white'
                          }
                        }}
                        margin="normal"
                        style={{ width:"200px", paddingRight:"10px", color:'white'}}
                      />
                      <Button
                        variant="contained"
                        type="submit"
                        color="primary"
                        onClick={ this.incrementCounter.bind(this) }
                        id="submitquestion"
                        style={{ width: "100px", fontSize:17, background:"#4d1393" }}
                        id="input">
                        Shake Me!
                      </Button>
                    </form>
                  </div>
                  <div>
                    { this.state.showProgress ? <CircularProgress color="primary" /> : null }
                  </div>
                  <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', color:"white", fontWeight:'bold'}}>
                    {this.state.showAnswer ? <p>{this.state.response}</p> : null }
                  </div>
                </Typography>
              </div>
            <style jsx>{`
              #circle {
              	width: 500px;
              	height: 500px;
              	background: #191b1e;
              	border-radius: 1000px;
                -webkit-box-shadow:0 0 90px grey;
                -moz-box-shadow: 0 0 90px grey;
                box-shadow:0 0 90px grey;
              }`}
            </style>
          </body>
    )
  }
}

export default App;

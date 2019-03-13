// import Layout from '../components/MyLayout.js'
import Header from '../components/Header.js'
import Link from 'next/link'
import { Component } from "react";
import { spring } from 'popmotion';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
        count: 0,
        value: ''
      }
      this.answer = 'Testing';
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  increaseCounter(type){
    this.setState(prevState => {
       return {count: type == 'increase' ? prevState.count + 1: prevState.count - 1}
    });
  }

  handleSubmit(event) {
    console.log('RECEIVED.');
    event.preventDefault();
    fetch('/', {
      method: 'POST'
      }
    )
  }

  render() {
    return (
      <main>
        <Header />
        <h1 style={{ fontFamily:"Arial", fontSize:"50px" }}>Magic 8 Ball</h1>
        <form className="question-input" onSubmit={this.handleSubmit}>
          <TextField
            id="inputquestion"
            placeholder="Ask your question..."
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={this.increaseCounter.bind(this, 'increase')}
            id="submitquestion"
            style={{ width: "100px", fontSize:17 }}>Shake Me!
          </Button>
        </form>

        <p>Answer: {this.answer}</p>

        <p>Count: {this.state.count}</p>

      </main>
    )
  }
}

export default App;

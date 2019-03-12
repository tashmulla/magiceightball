// import Layout from '../components/MyLayout.js'
import Header from '../components/Header.js'
import Link from 'next/link'
import { Component } from "react";

class HomePage extends Component {
  render() {
    return (
      <main>
        <Header />
        <h1 style={{ fontFamily:"Arial", fontSize:"50px" }}>Magic 8 Ball</h1>

        <form className="question-input" method="POST" action="/">
          <input type="text" ref="inputquestion" placeholder="Ask your question..."style={{ width: "300px", fontSize:18 }}/>
          <button id="submitquestion" style={{ width: "100px", fontSize:17 }}>Shake Me!</button>
        </form>

        <p style={{ fontFamily:'Arial' }} id="questionresponse">Your answer...</p>
      </main>
    )
  }
}

export default HomePage;

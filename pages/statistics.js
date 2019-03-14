// import Layout from '../components/MyLayout.js'
import Header from '../components/Header.js'
import Link from 'next/link'
import { Component } from "react";

class StatsPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.incrementCounter = this.incrementCounter.bind(this);
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

  render() {
    return (
      <main>
        <Header />
          <h1>Game Statistics</h1>
          <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <p>Question count: {this.state.count}</p>
          </div>
          <style jsx>{`
            h1 {
              font-family:"Arial";
              font-size:50px;
            }`}
          </style>
      </main>
    )
  }

  /*const Stats = props => {
  return (
    <div>
      <p>Count: {props.count}</p>
    </div>
    );
  };*/

}

export default StatsPage;

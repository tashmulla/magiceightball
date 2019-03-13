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
  }

  render() {
    return (
      <main>
        <Header />
          <h1>Game Statistics</h1>
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

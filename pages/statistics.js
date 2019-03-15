// import Layout from '../components/MyLayout.js'
import Header from '../components/Header.js'
import Link from 'next/link'
import { Component } from "react";
const moment = require('moment');
import { Chart } from "react-charts";
import Typography from '@material-ui/core/Typography';

class StatsPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      moment: undefined
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
        <Typography variant="title" color="inherit">
            <h1>Game Statistics</h1>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              <p>Total questions: {this.state.count}</p>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              <p>Last question timestamp: {moment(this.date).format()}</p>
            </div>
          </Typography>
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

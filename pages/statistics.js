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
      time: undefined
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
      <body>
        <Header />
          <h1 style={{color:'#dbdbdb'}}>Game Statistics</h1>
            <Typography variant="title" color="inherit">
                <div style={{display: 'flex',  justifyContent:'left', alignItems:'center', color:'#dbdbdb'}}>
                  <p style={{fontWeight:'bold', marginRight:'0.2em'}}>Total questions:</p>
                  <p> { this.state.count }</p>
                </div>
              </Typography>
        <style jsx>{`
          h1 {
            font-family:"Arial";
            font-size:50px;
          }`}
        </style>
      </body>
    )
  }
}

export default StatsPage;

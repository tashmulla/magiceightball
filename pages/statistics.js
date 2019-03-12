// import Layout from '../components/MyLayout.js'
import Header from '../components/Header.js'
import Link from 'next/link'
import { Component } from "react";

class StatsPage extends Component {
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
}

export default StatsPage;

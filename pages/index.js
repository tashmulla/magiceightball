// import Layout from '../components/MyLayout.js'
import Header from '../components/Header.js'
import Link from 'next/link'

export default () => (
    <div>
    <Header />
      <h1>Magic 8 Ball</h1>
      <style jsx>{`
        h1 {
          font-family:"Arial";
          font-size:50px;
        }`}
      </style>
    </div>
)

export const userInput = (
  <div>
    <form className="question-input">
      <input type="text" ref="question" placeholder="Ask your question..."/>
      <input type="submit" value="Shake!"/>
    </form>
  </div>
)

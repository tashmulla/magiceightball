const express = require("express")
const next = require("next")
const dev = process.env.NODE_ENV !== "production"
const app = next({dev})
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get("/p/:id", (req, res) => {
    const actualPage = "/post"
    const queryParams = { title: req.params.id }
    app.render(req, res, actualPage, queryParams)
  })

  server.get("*", (req,res) => {
    return handle(req,res)
  })

  server.listen(process.env.PORT || 3000, (err) => {
    if (err) throw err
    console.log("> Ready on http://localhost:3000")
  })

  /* Return random answer after question is submitted.*/
  server.post("/", (req,res) => {
    const answers = [
      "It is certain.",
      "It is decidedly so.",
      "Without a doubt.",
      "Yes - definitely.",
      "You may rely on it.",
      "As I see it, yes.",
      "Most likely.",
      "Outlook good.",
      "Yes.",
      "Signs point to yes.",
      "Reply hazy, try again.",
      "Ask again later.",
      "Better not tell you now.",
      "Cannot predict now.",
      "Concentrate and ask again.",
      "Don't count on it.",
      "My reply is no.",
      "My sources say no.",
      "Outlook not so good.",
      "Very doubtful.",
      "Computer says no."
    ]
    const number = Math.floor(Math.random()*21);
    console.log("Raw answer: ");
    console.log(answers[number]);
    res.status(200).send(answers[number]);
  })

})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})

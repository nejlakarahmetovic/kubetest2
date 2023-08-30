const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let userGoal = 'Welcome!';

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        <section>
          <h2>Post-It</h2>
          <h3 id= "userInput">${userGoal}</h3>
        </section>
        <form action="/store-goal" method="POST">
          <div class="form-control">
            <label>Send a Message</label>
            <input type="text" name="goal">
          </div>
          <button>Send</button>
        </form>
      </body>
    </html>
  `);
});

app.post('/store-goal', (req, res) => {
  const enteredGoal = req.body.goal;
  console.log(enteredGoal);
  userGoal = enteredGoal;
  res.redirect('/');
});

app.listen(80);

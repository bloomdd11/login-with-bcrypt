const express = require('express')
const app = express()
const bcrypt = require('bcrypt')

const users = [{
  "name": "bloomdd",
  "password": "password"
}]

// middleware
app.use(express.json())

// route
app.get('/users', (req, res) => {
  res.json(users)
})

app.post('/users', async (req, res) => {
  try {
    const { username, password } = req.body

    const salt = await bcrypt.genSalt()
    const hashPassword = await bcrypt.hash(password, salt)

    const user = { name: username, password: hashPassword }
    users.push(user)
    res.send('created success')
  } catch (error) {
    res.status(500).json({ msg: error })
  }
})

app.post('/users/login', async (req, res) => {
  const { username, password } = req.body
  const user = users.find(user => user.name == username)

  if (user === null) {
    return res.status(400).send('cannot find user')
  }
  try {
    if (await bcrypt.compare(password, user.password)) {
      res.send('login success')
    } else {
      res.send('not allowed')
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error })
  }
})

app.listen(3000, () => console.log('server is listening at port 3000'))
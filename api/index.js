import express from 'express'

// Create express router
const router = express.Router()

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
const app = express()

let questions = new Array

router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

// Add POST - /api/login
router.post('/login', (req, res) => {
  if (req.body.username === 'demo' && req.body.password === 'demo') {
    req.session.user = { username: 'demo' }
    return res.json({ username: 'demo' })
  }
  res.status(401).json({ message: 'Falscher Benutzername oder Passwort!' })
})

router.get('/questions', (req, res) => {
  res.status(200).json({ questions: questions.filter(question => question.visible) })
})

router.post('/question', (req, res) => {
  if (req.body.question.length <= 400) {
    questions.push({ text: req.body.question, answer: '', visible: false})

    res.status(200).json({ message: 'Vielen Dank! Ihre Frage wurde angenommen und wird verarbeitet.' })
  } else res.status(401).json({ message: 'Ihre Frage darf maximal 400 Zeichen enthalten!' })
})

router.get('/admin/questions', (req, res) => {
  if (req.session && req.session.user) {
    res.status(200).json({ questions })
  } else res.status(401).json({ message: 'Nicht berechtigt!' })
})

router.post('/admin/questions', (req, res) => {
  if (req.session && req.session.user) {
    req.body.question.forEach(question => {
      if (question.text.length > 400) {
        res.status(401).json({ message: 'Ihre Frage darf maximal 400 Zeichen enthalten!' })
      }
    });
    questions = req.body.question
    res.status(200).json({ message: 'Gespeichert!' })
  } else res.status(401).json({ message: 'Nicht berechtigt!' })
})

// Add POST - /api/logout
router.post('/logout', (req, res) => {
  delete req.session.user
  res.json({ ok: true })
})

// Export the server middleware
export default {
  path: '/api',
  handler: router
}

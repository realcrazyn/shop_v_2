const { Router } = require('express')
const Card = require('../models/Card')
const auth = require('../middleware/auth.middleware')
const { db } = require('../models/Card')
const router = Router()

router.post('/createcard', async (req, res) => {
  try {
    const { code, title, price, quantity, description, img, color } = req.body
    const existing = await Card.findOne({ code })

    if (existing) {
      return res.status(201).json({ message: 'Card already exists' })
    }

    const card = new Card({
      code,
      title,
      price,
      quantity,
      description,
      img,
      color,
    })

    await card.save()

    res.status(201).json({ card })
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/cardslist', async (req, res) => {
  try {
    const cards = await Card.find()
    res.json(cards)
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

module.exports = router

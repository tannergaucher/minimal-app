const { hash } = require('bcrypt')
const { sign } = require('jsonwebtoken')

const db = require('../server')
const { User } = require('../../models')

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false // why this?

  try {
    const req = JSON.parse(event.body)
    const hashedPassword = await hash(req.password, 10)
    const user = await User.create({
      email: req.email,
      password: hashedPassword,
    })
    const token = sign({ userId: user.id }, process.env.REACT_APP_APP_SECRET)
    return {
      statusCode: 200,
      body: JSON.stringify({
        data: {
          user,
          token,
        },
      }),
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: err.toString(),
    }
  }
}

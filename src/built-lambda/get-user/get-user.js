const mongoose = require('mongoose')
const { verify } = require('jsonwebtoken')

const { User } = require('../../models')

const dbOptions = {
  useNewUrlParser: true,
  useFindAndModify: false,
}

mongoose.connect(process.env.REACT_APP_DB_URL, dbOptions)

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false

  try {
    const req = JSON.parse(event.body)
    const verifiedToken = verify(req.token, process.env.REACT_APP_APP_SECRET)
    const { userId } = verifiedToken
    const user = await User.findById(userId)

    return {
      statusCode: 200,
      body: JSON.stringify({ data: user }),
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: err.toString(),
    }
  }
}

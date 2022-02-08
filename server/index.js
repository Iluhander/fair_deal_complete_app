console.log('XYEK')

require('dotenv').config()
const express = require('express')

const PORT = process.env.PORT || 2228

const app = express()

app.listen(PORT, () => console.log('OK!'))
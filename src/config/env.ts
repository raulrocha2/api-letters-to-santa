export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/db-letter-to-santa',
  port: process.env.PORT || 3000
}
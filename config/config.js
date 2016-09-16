module.exports = {
  port:   process.env.PORT || 3000,
  db:     process.env.MONGODB_URI || "mongodb://localhost/encrypting-authentication",
  secret: process.env.SECRET || "secret"
};

module.exports = {
  port:   process.env.PORT || 3000,
  db:     process.env.MONGOLAB_URL || "mongodb://localhost/encrypting-authentication",
  secret: process.env.SECRET || "secret"
};

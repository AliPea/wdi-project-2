module.exports = {
  port:   process.env.PORT || 3000,
  db:     "mongodb://localhost/encrypting-authentication",
  secret: process.env.SECRET || "secret"
};

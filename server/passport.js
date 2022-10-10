const GithubStrategy = require("passport-github2").Strategy;
const passport = require("passport");

passport.use(
  new GithubStrategy(
    {
      clientID: "13524c98b3435e64078d",
      clientSecret: "dda6e42895e000c5cc1fb146bd324cc28d2f31ad",
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

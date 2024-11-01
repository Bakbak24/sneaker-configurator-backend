const passport = require("passport");
const User = require("../models/User");
const config = require("config");

// LOCAL STRATEGY
passport.use(User.createStrategy());

// for sessions
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// WEBTOKEN STRATEGY (JWT)
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.secretsauce || config.get("jwt.secret");

passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const user = await User.findOne({ _id: jwt_payload.uid });
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (err) {
      return done(err, false);
    }
  })
);

module.exports = passport;

// server.js
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const app = express();

// Use sessions for tracking login status
app.use(
  session({
    secret: 'your-secret-key',
    resave: true,
    saveUninitialized: true,
  })
);

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Passport local strategy for username/password login
passport.use(
  new LocalStrategy((username, password, done) => {
    // Your authentication logic here
    // Check username and password against your database
    if (username === 'user' && password === 'password') {
      return done(null, { id: 1, username: 'user' });
    } else {
      return done(null, false, { message: 'Invalid credentials' });
    }
  })
);

// Serialize user object to store in the session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user object from the session
passport.deserializeUser((id, done) => {
  // Retrieve user object from your database
  const user = { id: 1, username: 'user' };
  done(null, user);
});

// Route for login
app.post('/login', passport.authenticate('local'), (req, res) => {
  // Successful login
  res.json({ message: 'Login successful', user: req.user });
});

// Route to check authentication status
app.get('/check-auth', (req, res) => {
  res.json({ isAuthenticated: req.isAuthenticated(), user: req.user });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

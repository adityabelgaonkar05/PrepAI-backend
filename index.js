const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const SignInRoute = require('./routes/SignIn');
const SignUpRoute = require('./routes/SignUp');
const AuthCheckRoute = require('./controllers/AuthCheck');

const app = express();

mongoose.connect(process.env.MONGODB_URI, {
    }).then(() => {
    console.log('MongoDB connected');
    }).catch(err => {
    console.log('MongoDB connection error:', err);
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

app.use(
    cors({
    origin: ["http://localhost:8081", `${process.env.REACT_APP_BASE_URL}`],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/", SignInRoute);
app.use("/", SignUpRoute);
app.use("/", AuthCheckRoute);
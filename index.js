const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const SignInRoute = require('./routes/SignIn');
const SignUpRoute = require('./routes/SignUp');
const AuthCheckRoute = require('./routes/AuthCheck');

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
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());

app.use("/", SignInRoute);
app.use("/", SignUpRoute);
app.use("/", AuthCheckRoute);
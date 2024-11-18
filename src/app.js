const express = require ('express');
const app = express ();
const cors= require ('cors')
const morgan = require('morgan')
const port = 8081

app.use(cors());
app.use(express.json());
app.use(morgan());




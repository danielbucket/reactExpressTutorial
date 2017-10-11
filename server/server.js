const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const db = require('knex')(config);

const PORT = process.env.PORT || 8000;

app.set('port', PORT);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

app.get('/api/v1/users', (req,res) => {
	console.log('hit')
	
	db('users')
	.select('*')
	.then(data => res.status(200).json({ data }))
	.catch(error => res.status(500).json({ error }))
})

app.listen(app.get('port'), () => {
	console.log(`app is listening on port ${app.get('port')}`)
})

module.exports = app;
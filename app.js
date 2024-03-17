const express = require('express');
const bodyParser = require('body-parser');
const { data } = require('./Models/model'); // Adjust the path accordingly
const sequelize = require('./Models/sequelize'); // Adjust the path accordingly
const cors = require('cors');
const { user } = require('./Models/Usermodel');
const app = express();
const port = process.env.PORT || 3001;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// Your API endpoint for handling form submissions
app.post('/submit', async (req, res) => {
  const formData = req.body;

  try {
    // Create a record in the database using Sequelize model
    const createdRecord = await data.create(formData);
    res.status(201).json(createdRecord);
  } catch (error) {
    console.error('Error saving to database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/login', async (req, res) => {
  try {
  const { id, password } = req.body;
  const User = await user.findOne({ where: { userid:id} });
  
  if(User==null){
    res.status(401).send({ message: 'Invalid credentials' });
  }
  else{
  if (id === User.userid && password === User.password) {
    res.json({ role: 'admin', message: 'Admin login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }}
}
  catch (error) {
    console.error('Error login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API endpoint to get all data
app.get('/getAllData', async (req, res) => {
  try {
    // Fetch all records from the database using Sequelize model
    const allData = await data.findAll();
    res.status(200).json(allData);
  } catch (error) {
    console.error('Error fetching data from database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

sequelize
  .sync({alter:true}) // This will sync the Sequelize models with the database
  .then(() => {
    console.log('Database and tables synced.');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });

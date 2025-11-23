const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDb = require('./connectDb');
const clothRoutes = require('./routes/clothRoutes');


dotenv.config();
connectDb();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use('/api', clothRoutes);
app.use(cors({
    origin: "http://localhost:5173"
}));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

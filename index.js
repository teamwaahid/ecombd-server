const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');


dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(()=>console.log('DB connected')).catch((err)=>{ console.log(err) });

app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
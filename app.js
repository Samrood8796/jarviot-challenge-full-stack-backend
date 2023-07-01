import express, { json } from 'express'
import { connect } from 'mongoose'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import morgan from 'morgan'
import cors from 'cors'
import userRoutes from './routes/userRoutes.js'
dotenv.config() 
const app = express()
app.use(helmet())
app.use(cors())  
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" })); 
app.use(morgan('tiny')); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json({ extended: true }));
app.use(json())

app.use('/', userRoutes)
connect(process.env.MONGO_URL).then(() => {
  console.log("mongoose connected",);
}).catch((err) => {
  console.log("mongoose url error", err);
})


const port = 3001
app.listen(process.env.PORT || port, () => {
  console.log("server connected");
}) 

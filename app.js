import userRoutes from './routes/userRoutes.js'
import express, { json } from 'express'
import bodyParser from 'body-parser'
import { connect } from 'mongoose'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import cors from 'cors'

const app = express()
dotenv.config() 
app.use(cors())  
app.use(json())
app.use(helmet())
app.use(morgan('tiny')); 
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" })); 

connect(process.env.MONGO_URL).then(() => {
  console.log("mongoose connected",);
}).catch((err) => {
  console.log("mongoose url error", err);
})

app.use('/', userRoutes)

const port = 3001
app.listen(process.env.PORT || port, () => {
  console.log("server connected");
}) 

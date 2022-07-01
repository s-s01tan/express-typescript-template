import express, { Express, Request, Response } from 'express'

// Dotenv
import { config } from 'dotenv'
config()

// Configuration
import getConfigValue from './config'
const configData = getConfigValue(process.env.NODE_ENV || 'development')

// App
const app: Express = express()
const port: number = configData.port

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server')
})

// Listening Event
app.listen(port, () => {
    console.log(`⚡️: Server is running at ${port} port;`)
})

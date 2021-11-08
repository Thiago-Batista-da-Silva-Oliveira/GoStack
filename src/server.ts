/*import 'reflect-metadata'
import express from 'express'
import routes from './routes'
import './database'


const app = express()
app.use(express.json)
// yarn dev:server
//--transpileOnly

app.use(routes)

app.get('/', (req, res) => {
   return  res.json({message: 'Hello world!'});
  });


app.get('/', (req, res) => {
    res.send('Server is ready');
  });


app.listen(3333, () => {
  console.log('Server Started On Port 3333')
})
*/
import 'reflect-metadata'
import express, {Request, Response, NextFunction} from 'express'
import 'express-async-errors'
import routes from './shared/infra/htpp/routes'
//import '../typeorm'
import "@shared/infra/typeorm"
//import uploadConfig from '../../../config/upload'
import uploadConfig from '@config/upload'
//import AppError from '../../erros/AppError'
import AppError from '@shared/erros/AppError'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/files', express.static(uploadConfig.directory))
app.use(routes)

app.use((err: Error, request: Request,response: Response, next: NextFunction) =>{
if(err instanceof AppError) { //happened inside my app
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    })
}
   console.log(err)
   return response.status(500).json({
       status: 'error',
       message: 'Internal server error',
   })
})


app.get('/', (req, res) => {
    return res.json({message: "Hello"})
})


app.listen(3333, () =>{
    console.log('Server running')
})

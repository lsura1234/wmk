import bodyParser from 'koa-bodyparser'
import path from 'path'
import { load } from '@spksoft/koa-decorator'
import Koa from 'koa'
import cors from '@koa/cors'
import appConfig from './configs/app'
import indexRoute from './src/route/routes'

const app = new Koa();

load(path.resolve(__dirname, './src/cores/resources'), 'model')
load(path.resolve(__dirname, './src/cores/resources'), '.associate.js')
load(path.resolve(__dirname, './src/cores/resources'), '.scope.js')
app.use(bodyParser());
app.use(
    cors({
      origin: '*',
      allowMethods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH'],
      exposeHeaders: ['X-Request-Id'],
    }),
  )
app.use(indexRoute.routes());
const server = app.listen(appConfig.NODE_PORT)

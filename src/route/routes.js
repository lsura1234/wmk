import Router from 'koa-router'
import predictData from '../domain/weka/predic'
import { get } from 'lodash'
import jwt from 'jwt-simple'


const router = new Router();
 router.post('/predict', async(ctx) => {
     const body = get(ctx,'request.body',{})
     const resp = await predictData(body);
    ctx.status = 200;
    ctx.body = resp
 });
 export default router;


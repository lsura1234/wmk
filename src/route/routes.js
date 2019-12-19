import Router from "koa-router";
import { get } from "lodash";
import predictData from "../domain/weka/predic";
import getDataGraph from "../domain/viewHistory/getDataGraph";
import getCheckList from "../domain/viewHistory/getcheckList";
import addAdmin from '../domain/admin/add'
import loginAdmin from '../domain/admin/login'
import studentList from '../domain/viewHistory/sutudentList'

const router = new Router();
router.post("/predict", async ctx => {
  const body = get(ctx, "request.body", {});
  const resp = await predictData(body, ctx);
  ctx.status = 200;
  ctx.body = resp;
});
router.post("/getDataGraph", async ctx => {
  const body = get(ctx, "request.body", {});
  const resp = await getDataGraph(body, ctx);
  ctx.status = 200;
  ctx.body = resp;
});
router.get("/getCheckList", async ctx => {
  const resp = await getCheckList(ctx);
  ctx.status = 200;
  ctx.body = resp;
});
router.post("/admin/add", async ctx => {
  const body = get(ctx, "request.body", {});
  const resp = await addAdmin(ctx, body);
  ctx.status = 200;
  ctx.body = resp;
});
router.post("/admin/login", async ctx => {
   const body = get(ctx, "request.body", {});
   const resp = await loginAdmin(ctx, body);
   ctx.status = 200;
   ctx.body = resp;
 });
router.post("/studentList",async ctx => {
  const body = get(ctx, "request.body", {});
  const resp = await studentList(ctx, body);
  ctx.status = 200;
  ctx.body = resp;
});

export default router;

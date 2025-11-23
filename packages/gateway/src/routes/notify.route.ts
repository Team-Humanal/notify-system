// src/routes/notify.route.ts
import { Request, Response, Router } from "express";
import { notifySchema } from "../validators/notify.schema";
import { validate } from "../middleware/validate";

const router = Router();

router.post("/v1/notify", validate(notifySchema), (req: Request, res: Response) => {
  // req.body is now typed and validated (if using TS and the type cast)
  const body = req.body; // validated
  // TODO: your business logic here (queue message, call webhook, save to db...)
  return res.status(200).json({
    status: "ok",
    message: "Notification accepted",
    data: body,
  });
});

export default router;

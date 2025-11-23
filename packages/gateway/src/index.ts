import express, { Request, Response } from "express";
import { notifySchema } from "./validators/notify.schema";

const app = express();
app.use(express.json());

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

// Health check
app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok", service: "gateway" });
});

// POST /v1/notify
app.post("/v1/notify", (req: Request, res: Response) => {
  const parseResult = notifySchema.safeParse(req.body);

  if (!parseResult.success) {
    return res.status(400).json({
      error: "Validation failed",
      details: parseResult.error.format()
    });
  }

  const { email, title, message, payload } = parseResult.data;

console.log(`Notify request: email=${email}, title=${title}, message=${message}`);

res.status(202).json({
  status: "accepted",
  details: "notification scheduled",
  data: { email }
});
});

// 404 fallback
app.use((_req, res) => res.status(404).json({ error: "Not found" }));

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Gateway running at http://localhost:${PORT}`);
  });
}

export default app;

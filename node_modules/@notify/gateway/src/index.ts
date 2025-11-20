import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

// Health check
app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok", service: "gateway" });
});

// POST /v1/notify
app.post("/v1/notify", (req: Request, res: Response) => {
  const { to, message } = req.body ?? {};

  if (!to || !message) {
    return res.status(400).json({ error: "Missing 'to' or 'message'" });
  }
//  // hard coded values (for testing)
//  const to = "Minato@gmail.com";
//  const  message = "This is a test message";

  console.log(`Notify request: to=${to}, message=${message}`);

  res.status(202).json({
    status: "accepted",
    details: "notification scheduled",
    data: { to }
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

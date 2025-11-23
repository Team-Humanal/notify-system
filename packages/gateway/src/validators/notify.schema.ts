import { email, z } from "zod";

export const notifySchema = z.object({
  email: z.string().email(),
  title: z.string().min(1),
  message: z.string().min(1),
  payload: z.record(z.string(), z.any()).optional()
});

export type NotifyInput = z.infer<typeof notifySchema>;

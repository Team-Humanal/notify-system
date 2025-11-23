// src/middleware/validate.ts
import { ZodObject } from "zod";
import { Request, Response, NextFunction } from "express";

export const validate =
  (schema: ZodObject<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    const parsed = schema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        status: "error",
        errors: parsed.error.issues.map((issue: any) => ({
          path: issue.path.join("."),
          message: issue.message,
        })),
      });
    }

    req.body = parsed.data; // validated body
    next();
  };

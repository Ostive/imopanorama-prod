//TODO: Create ResetPasswordSchema

import * as z from "zod";

export const ResetPasswordSchema = z
  .object({

    password: z.string(),
    // .min(1, { message: "Password must be at least 8 characters long" })
    // .regex(/[A-Z]/, {
    //   message: "Password must contain at least one uppercase letter",
    // })
    // .regex(/[a-z]/, {
    //   message: "Password must contain at least one lowercase letter",
    // })
    // .regex(/[0-9]/, { message: "Password must contain at least one number" })
    // .regex(/[@$!%*?&#.]/, {
    //   message: "Password must contain at least one special character",
    // })
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

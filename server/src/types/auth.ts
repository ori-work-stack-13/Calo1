import { z } from "zod";

export const signUpSchema = z.object({
  email: z.string().email("Invalid email address"),
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one lowercase letter, one uppercase letter, and one number"
    ),
  age: z.coerce.number().min(1).max(120),
  weight: z.coerce.number().positive().optional(),
  height: z.coerce.number().positive().optional(),
});

export const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

export const updateProfileSchema = z.object({
  name: z.string().min(1).optional(),
  age: z.number().min(1).max(120).optional(),
  weight_kg: z.number().positive().optional(),
  height_cm: z.number().positive().optional(),
});

export const updateSubscriptionSchema = z.object({
  subscription_type: z.enum(["FREE", "PREMIUM", "GOLD"]),
});

export type SignUpInput = z.infer<typeof signUpSchema>;
export type SignInInput = z.infer<typeof signInSchema>;
export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;

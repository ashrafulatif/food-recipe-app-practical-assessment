import { z } from "zod";
// Validation
export const signupSchema = z.object({
  name: z.string().nonempty("Name is required"),
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  phone: z
    .string()
    .regex(/^\d{11}$/, "Phone number must be 10 digits")
    .nonempty("Phone number is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

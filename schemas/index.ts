import * as z from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please Enter valid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const RegisterSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please Enter valid email address" }),
  password: z
    .string()
    .min(6, { message: "The password must be at least 6 character" }),
  name: z.string().min(1, { message: "Name field is required" }),
});

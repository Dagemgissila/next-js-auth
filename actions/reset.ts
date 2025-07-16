"use server";

import { getUserByEmail } from "@/data/user";
import { ResetSchema } from "./../schemas/index";

import z from "zod";
import { generatePasswordResetToken } from "@/lib/tokens";
import { sendPasswordResetEmail } from "@/data/mail";

export const reset = async (values: z.infer<typeof ResetSchema>) => {
  const validatedFields = ResetSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Email field is required" };
  }
  const { email } = validatedFields.data;

  const existingUser = await getUserByEmail(email);
  if (!existingUser) {
    return { error: "Email is not found" };
  }

  const passwordResetToken = await generatePasswordResetToken(
    existingUser.email
  );

  if (passwordResetToken) {
    await sendPasswordResetEmail(
      passwordResetToken.email,
      passwordResetToken.token
    );
  }

  return { success: "Reset Email is sent" };
};

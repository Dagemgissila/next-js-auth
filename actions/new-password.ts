"use server";

import { getPasswordResetTokenByToken } from "./../data/password-reset-token";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import { NewPasswordSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import z from "zod";

export const resetPassword = async (
  values: z.infer<typeof NewPasswordSchema>
) => {
  const validatedFields = NewPasswordSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Validation failed" };
  }
  const { email, password, token } = validatedFields.data;

  const user = await getUserByEmail(email);
  if (!user) {
    return { error: "Invalid email address" };
  }
  const existingToken = await getPasswordResetTokenByToken(token);
  if (!existingToken) {
    return { error: "TOken does not exist" };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();
  if (hasExpired) {
    return { error: "Token is expired" };
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  await db.user.update({
    where: { email: email },
    data: { password: hashedPassword },
  });

  await db.passwordResetToken.delete({
    where: { token: token },
  });

  return { success: "New Password set successfully" };
};

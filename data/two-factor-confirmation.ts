import { db } from "@/lib/db";

export const getTwoFactorConfirmationByUserid = async (userId: string) => {
  try {
    const twoFactorConfirmation = await db.twoFactorConfirmation.findUnique({
      where: { userId: userId },
    });

    return twoFactorConfirmation;
  } catch {
    return null;
  }
};

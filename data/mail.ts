import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendTwoFactorTokenByEmail = async (
  email: string,
  token: string
) => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Your 2FA Verification Code",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; padding: 20px; background-color: #f9f9f9; border-radius: 8px; border: 1px solid #ddd;">
        <h2 style="color: #333;">Two-Factor Authentication Code</h2>
        <p>Hello,</p>
        <p>Your verification code is:</p>
        <p style="font-size: 24px; font-weight: bold; color: #4A90E2; margin: 16px 0;">${token}</p>
        <p>This code will expire in 10 minutes. If you did not request this code, please ignore this message.</p>
        <p>Thanks,<br/>The Team</p>
      </div>
    `,
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Confirm Your Email",
    html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto;">
          <h2 style="color: #333;">Verify Your Email Address</h2>
          <p>Thank you for signing up. Please confirm your email address by clicking the button below:</p>
          <p>
            <a href="${confirmLink}" 
               style="display: inline-block; padding: 10px 20px; background-color: #2563eb; color: white; text-decoration: none; border-radius: 5px;">
              Verify Email
            </a>
          </p>
          <p>If the button doesn’t work, you can also copy and paste the link into your browser:</p>
          <p><a href="${confirmLink}">${confirmLink}</a></p>
          <p>Thank you,<br/>The Team</p>
        </div>
      `,
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `http://localhost:3000/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Reset Your Password",
    html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto;">
          <h2 style="color: #333;">Reset Your Password</h2>
          <p>We received a request to reset your password. Click the button below to proceed:</p>
          <p>
            <a href="${resetLink}" 
               style="display: inline-block; padding: 10px 20px; background-color: #e11d48; color: white; text-decoration: none; border-radius: 5px;">
              Reset Password
            </a>
          </p>
          <p>If the button doesn’t work, copy and paste the link into your browser:</p>
          <p><a href="${resetLink}">${resetLink}</a></p>
          <p>If you did not request this, please ignore this email.</p>
          <p>Best regards,<br/>The Team</p>
        </div>
      `,
  });
};

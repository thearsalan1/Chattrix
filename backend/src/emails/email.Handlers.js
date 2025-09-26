import { resendClient } from "../lib/resend.js";
import { createWelcomeEmailTemplate } from "../emails/emailsTemplates.js";
import { sender } from "../lib/resend.js";

export const sendWelcomeEmail = async (email, name, clientURL) => {
  const { data, error } = await resendClient.emails.send({
    from: `${sender.name} <${sender.email}>`,
    to: email,
    subject: "Welcome to Chattrix!",
    html: createWelcomeEmailTemplate(name, clientURL),
  });
  if (error) {
    console.log("Error sending welcome email:", error);
    throw new Error("Failed to send welcome email");
  }
  console.log("welcome email send successfully", data);
};

import fs from "fs/promises"

type NotifyResult = { sent: boolean; reason?: string }

export async function notifyAdmin(subject: string, text: string, payload?: any): Promise<NotifyResult> {
  const admin = process.env.ADMIN_EMAIL || process.env.NEXT_PUBLIC_ADMIN_EMAIL || "admin@company.local"

  const entry = {
    subject,
    text,
    payload: payload || null,
    admin,
    timestamp: new Date().toISOString(),
  }

  // Try to send via SMTP if configured
  try {
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      // dynamic import to avoid failure when package not present in some setups
      // nodemailer is listed as a dependency in package.json
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const nodemailer = require("nodemailer")

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })

      const mail = await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: admin,
        subject,
        text: `${text}\n\nPayload:\n${JSON.stringify(payload || {}, null, 2)}`,
      })

      return { sent: true }
    }
  } catch (err: any) {
    // continue to fallback
    entry["emailError"] = err?.message || String(err)
  }

  // Fallback: append to local notifications log
  try {
    const logPath = "./data/notifications.log"
    const line = JSON.stringify(entry) + "\n"
    await fs.mkdir("./data", { recursive: true })
    await fs.appendFile(logPath, line)
    return { sent: false, reason: "logged" }
  } catch (err: any) {
    return { sent: false, reason: String(err) }
  }
}

export default notifyAdmin

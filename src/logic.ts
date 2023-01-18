import nodemailer from 'nodemailer'
import { Mail } from './interfaces'

export const contact = async ({ name, email, subject, message }: Mail) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    })

    await transporter.sendMail({
      from: `'Miguel' <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      subject,
      html: `
        <h1>${name} ha contactado desde el portfolio</h1>

        <p>Su mensaje es:</p>
        <hr/>
        <p>${message}</p>
        <hr/>
        <p>Para responderle, escribir un mensaje a ${email}</p>
      `
    })
    await transporter.sendMail({
      from: `'Miguel' <${process.env.MAIL_USER}>`,
      to: email,
      subject,
      html: `
        <h1>Hello ${name}</h1>

        <p>Your message is:</p>
        <hr/>
        <p>${message}</p>
        <hr/>
        <p>
          Thank you for contacting me!
          I'll contact you as soon as possible.
        </p>
      `
    })

    return { status: 200, data: { method: 'registerUser()' } }
  } catch (err) {
    return { status: 500, data: { method: 'registerUser()', err } }
  }
}

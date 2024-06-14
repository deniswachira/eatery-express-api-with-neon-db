import nodemailer from 'nodemailer'
import { Context } from "hono";
export const sendEmail = async ( email: string, subject: string, message: string): Promise<string> => {
    // for this to work go to this link and create an app by providing an app name and copy the generated password => https://myaccount.google.com/apppasswords?pli=1&rapt=AEjHL4MAyZMTo4Iu6mJAeW1ZhLXbUgJpVRUsRnEsDAM4Nfk5lQHlWRP-1ovJgOhbcFqQ0Kx-a_oAtdUYxjFpXR3Lgiu6_2E5sw
    // more info here => https://nodemailer.com/usage/using-gmail/
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: true,
            auth: {
                user: process.env.EMAIL_SENDER,
                pass: process.env.SENDER_PASSWORD,
            },
        });

        const mailOptions: nodemailer.SendMailOptions = {
            from: process.env.EMAIL_SENDER,
            to: email,
            subject: `🙏${subject}🙏`,
            text: message,
            html: `<h3>${message}</h3>`,
        };
        const mailRes: nodemailer.SentMessageInfo = await transporter.sendMail(mailOptions);
        let mailResponse = "";
        if (mailRes.accepted.length > 0) {
            mailResponse = "Email sent successfully";
        } else if (mailRes.rejected.length > 0) {
            mailResponse = "Email not sent, please try again";
        } else {
            mailResponse = "Email server error";
        }
        return mailResponse;
    } catch (error:any) {
        return JSON.stringify(error.message, null, 500);
    }
}
export interface EmailOptions {
    from: string;
    to: string;
    subject: string;
    text: string;
    html: string;
}

export interface MailResponse {
    accepted: string[];
    rejected: string[];
}

export const sendRegistrationEmail = async (userEmail: string, eventName: string): Promise<string> => {
    try {
        const subject: string = `Registration Confirmation for ${eventName} `;
        const message: string = `Thank you for  "${eventName}". We look forward to seeing you!`;

        const emailResponse: string = await sendEmail(userEmail, subject, message);
        return emailResponse;
    } catch (error) {
        throw error;
    }
};
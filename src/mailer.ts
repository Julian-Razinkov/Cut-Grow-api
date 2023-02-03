import {createTransport} from "nodemailer"
import { ICredentials } from "./credentials";
const credentials:ICredentials = require("./credentials.json");

export class Mailer{
    private transporter = createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth:{
            user: credentials.user,
            pass: credentials.pass,
        }
    });

    //will send notification everytime client sends a form with his data
    public async sendNotification(mailText:string){
        try {
            await this.transporter.sendMail({
                from: `"Cut and Grow" <${credentials.user}>`,
                to: `${credentials.user}`,
                subject: "New Client!",
                text: mailText
            });

            console.log("Email was sent!");
        } 
        
        catch (e) {
            console.log(e)
        }
    }
}
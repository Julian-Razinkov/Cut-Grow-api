import express from "express"
import { Mailer } from "./src/mailer";

const app = express();
app.use(express.json());

app.post('/api/client/data', async (req, res) => {
    const {name, phone, email, message} = req.body;
    
    const mailText = `You have a new client \nEmail:${email}\n Further is on the spreadsheet`;
    const mailer = new Mailer();

    mailer.sendNotification(mailText);
})
import express from "express"
import { Mailer } from "./src/mailer";

const app = express();
const PORT = 5001
app.use(express.json());

app.post('/api/client/data', async (req, res) => {
    const {name, phone, email, message} = req.body;
    const mailText = `You have a new client \nName: ${name} \nEmail: ${email} \nPhone: ${phone} \nMessage: ${message}`;
    const mailer = new Mailer();

    mailer.sendNotification(mailText);

    res.send();
})

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT} `);
})
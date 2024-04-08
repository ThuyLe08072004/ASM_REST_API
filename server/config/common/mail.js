var nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "thuyltph35992@fpt.edu.vn",
        pass: "08072004"
    }
});
module.exports = transporter 
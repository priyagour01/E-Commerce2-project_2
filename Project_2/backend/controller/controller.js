const { autoPassword } = require('../middleware/autoPassword'); // Destructure the function
const nodemailer = require("nodemailer");
const model= require("../model/model")

const costumerRegistration = async (req, res) => {
    const { name, email, number, date, address, city, state,} = req.body;
    console.log(req.body); // Fix typo: res.body -> req.body

    const myPass = autoPassword(); // Call the function directly
    const data = await model.create({
        name:name,
        email:email,
        date:date,
        city:city,
        state:state,
        number:number,
        address:address,
        password:myPass
    })

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "priyagour400@gmail.com", // Fix email address
            pass: "wgzk vlhf krhv amoz", // Ensure this is the correct app password
        },
    });

    let maildetails = {
        from: "priyagour400@gmail.com", // Fix email address
        to: email,
        subject: "E-Banking registration",
        text: `Dear ${name}, your Account successfully created \n Your password is ${myPass}`,
    };

    transporter.sendMail(maildetails, (err, info) => {
        if (err) {
            console.error("Error sending email:", err);
            res.status(500).send("Error sending email");
        } else {
            console.log("Email sent successfully");
            res.send("OK");
        }
    });
};

module.exports = {
    costumerRegistration,
};
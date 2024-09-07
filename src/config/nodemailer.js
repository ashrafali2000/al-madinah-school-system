import nodemailer from "nodemailer";

const email = "almadinah.online12@gmail.com";
const pass = "rikj bjtk lbou oggl";

export const transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: true,
  port: 465,
  auth: {
    user: "almadinah.online12@gmail.com", // Your Gmail address
    pass: pass, // Your Gmail password
  },
});

// export const POST = async (req, res) => {
//   try {
//     const { email } = await req.json();
//     const mailOptions = {
//       from: "almadinah.online12@gmail.com",
//       to: email,
//       subject: `Thank you for your Donation!`,
//       text: "FGRF Thankfull for your Donation.",
//       // html: <h1>Hello ashraf</h1><p>my name is ${name} from karachi so i will meet with you tomorrow</p><p>~${message}</p><p>~${phoneNo}</p>,
//     };

//     return NextResponse.json(
//       { message: "Message send Sucessfully" },
//       { status: 201 }
//     );
//   } catch (error) {
//     return NextResponse.json(
//       { message: "Message send to Faild" },
//       { status: 400 }
//     );
//   }
// };

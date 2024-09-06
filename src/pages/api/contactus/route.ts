import {NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: true,
  port: 465,
  auth: {
    user: "almadinah.online12@gmail.com",
    pass: process.env.NEXT_PUBLIC_GOOGLE_PASSWORD,
  },
});
export const POST = async (req: Request, res: Response) => {
  try {
    const {   email, ParentFirstName, ParentlastName, StreetAddress,  City, PostalCode,   PhoneNumber,  StudentFirstName,  StudentLastName, DOB,   YearOfEntry, WouldYouLikeToEnroll } = await req.json();
    const mailOptions = {
      from: email,
      to: "almadinah.online12@gmail.com",
      subject: name,
      html: `<p> 
  <strong>Email:</strong> Registration Form Details <br>
  <strong>Email:</strong> ${email} <br>
  <strong>Parent First Name:</strong> ${ParentFirstName} <br>
  <strong>Parent Last Name:</strong> ${ParentlastName} <br>
  <strong>Street Address:</strong> ${StreetAddress} <br>
  <strong>City:</strong> ${City} <br>
  <strong>Postal Code:</strong> ${PostalCode} <br>
  <strong>Phone Number:</strong> ${PhoneNumber} <br>
  <strong>Student First Name:</strong> ${StudentFirstName} <br>
  <strong>Student Last Name:</strong> ${StudentLastName} <br>
  <strong>Date of Birth:</strong> ${DOB} <br>
  <strong>Year of Entry:</strong> ${YearOfEntry} <br>
  <strong>Would You Like to Enroll:</strong> ${WouldYouLikeToEnroll} <br>
</p>
`,
    };
    await transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error(err);
      } else {
        console.log(info);
      }
    });
    return NextResponse.json(
      { message: "Message send Sucessfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Message send to Faild" },
      { status: 400 }
    );
  }
};
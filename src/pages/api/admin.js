// import { mailOptions, transporter } from "../../config/nodemailer";

// const handler = async (req, res) => {
//   if (req.method === "POST") {
//     const data = req.body;

//     // Log the incoming data for debugging
//     console.log("Request body:", data);

//     // Check if any field is missing
//     if (
//       !data.email ||
//       !data.parentFirstName ||
//       !data.parentLastName ||
//       !data.streetAddress ||
//       !data.city ||
//       !data.postalCode ||
//       !data.phoneNumber ||
//       !data.studentFirstName ||
//       !data.studentLastName ||
//       !data.studentDOB ||
//       !data.schoolYear ||
//       !data.enrolDate
//     ) {
//       return res
//         .status(400)
//         .json({ message: "Bad Request: Missing required fields" });
//     }

//     try {
//       // Send email
//       await transporter.sendMail({
//         from: data.email,
//         to: "almadinah.online12@gmail.com",
//         subject: `Registration  from ${data.email}`,
//         text: `Response from ${data.email}`,
//         html: `<h1>Response from ${parentFirstName} + ${parentLastName} </h1>`,
//       });

//       // Return success response
//       return res.status(200).json({ message: "Email sent successfully" });
//     } catch (error) {
//       // Return error if sending email fails
//       console.error("Email error:", error);
//       return res
//         .status(500)
//         .json({ message: "Internal Server Error", error: error.message });
//     }
//   }

//   // If the request method is not POST, return a bad request
//   return res.status(405).json({ message: "Method Not Allowed" });
// };

// export default handler;

import { mailOptions, transporter } from "../../config/nodemailer";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    // Log the incoming data for debugging
    console.log("Request body:", data);

    // Check if any field is missing
    if (
      !data.email ||
      !data.parentFirstName ||
      !data.parentLastName ||
      !data.streetAddress ||
      !data.city ||
      !data.postalCode ||
      !data.phoneNumber ||
      !data.studentFirstName ||
      !data.studentLastName ||
      !data.studentDOB ||
      !data.schoolYear ||
      !data.enrolDate
    ) {
      return res
        .status(400)
        .json({ message: "Bad Request: Missing required fields" });
    }

    try {
      // Send email
      await transporter.sendMail({
        from: "almadinah.online12@gmail.com", // Use your own email here
        to: "almadinah.online12@gmail.com",
        replyTo: data.email, // User's email can be used as reply-to
        subject: `Registration from ${data.email}`,
        text: `Response from ${data.email}`,
        html: ` <h1>Registration from Details </h1>
                <h1> Email Address  : ${data.email} 
                <h1>Parent Name :  ${data.parentFirstName} ${data.parentLastName}</h1>
                <h1>Street Adress :  ${data.streetAddress} </h1>
                <h1>City Name :  ${data.city} </h1>
                <h1>Street Adress :  ${data.postalCode} </h1>
                  <h1>Phone Number  :  ${data.phoneNumber} </h1>
                <h1>Student Name :  ${data.studentFirstName} ${data.studentLastName}</h1>,
                 <h1> DOB: ${data.studentDOB}</h1>
               <h1>School Year: ${data.schoolYear}, Enrolment Date: ${data.enrolDate}</h1>`,
      });

      // Return success response
      return res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      // Return error if sending email fails
      console.error("Email error:", error);
      return res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  }

  // If the request method is not POST, return method not allowed
  return res.status(405).json({ message: "Method Not Allowed" });
};

export default handler;

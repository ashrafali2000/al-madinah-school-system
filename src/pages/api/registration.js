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
        from: "almadinah.online12@gmail.com",
        to: data.email,
        subject: "Al madinah School ",
        text: "Thanks from Al-Madinah School",
        html: `<h1>Thanks for filling out the registration form</h1>`,
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

  // If the request method is not POST, return a bad request
  return res.status(405).json({ message: "Method Not Allowed" });
};

export default handler;

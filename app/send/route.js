// Resend
import { Resend } from "resend";

export async function POST(req) {

  try {
    const { name, email, message } = await req.json();

    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is missing");
    }

    // Debugging: check if API key is available
    const resend = new Resend(process.env.RESEND_API_KEY);


    await resend.emails.send({
      from: "onboarding@resend.dev",
      //   from: "noreply@acmeinfolabs.com",
      to: ["sahuabhishek3810@gmail.com"],
      subject: `New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });
    
    return Response.json({ success: true });
  } 
  catch (error) {
     console.error("Email error:", error);
    return Response.json({ success: false, error: error.message }, { status: 500 }

    );
  }
}



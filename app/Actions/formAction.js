"use server";
import { Resend } from "resend";

// export async function handleFormSubmit(prev,formdata)
//  {
//     "use server";

//     // //API key of Ram an
//     const resend = new Resend("re_9HjtvNQ8_4xyjeK32tFQPa5gCbfGdKvux");

//     // resend.emails.send({
//     //   from: 'nitin@phisharmor.pro',
//     //   to: 'dbuucollege@gmail.com',
//     //   subject: 'Hello World',
//     //   html: `

//     //   new email from
//     //   ${formdata.get("name")}
//     //   ${formdata.get("email")}
//     //   ${formdata.get("description")}`
//     // });

//     // Creating a template with the email

//     resend.emails.send({
//       from: "nitin@phisharmor.pro",
//       to: "dbuucollege@gmail.com",
//       subject: "Course Related Query",
//       html: `

//   <h1>New Course Query</h1>
//   <p>Hello SMCAS Admin ,</p>
//   <p>You have received a new query regarding the courses. Here are the details:</p>

//       <div class="question">
//       <p class="user-info">User Name: ${formdata.get("name")}</p>
//       <p class="user-info">User Email: ${formdata.get("email")}</p>
//       <p><strong>Query:  ${formdata.get("description")}</strong></p>
//       <p>What courses do you offer for UPSC, MPSC, and the foundation batch? I am interested in knowing more about the
//         curriculum, fees, and admission process.</p>
//     </div>

//     <p>If you have any questions or need further information, please <a href="mailto:support@example.com">contact
//         us</a>.</p>
//     <p>Best regards,<br> The Course Support Team</p>

//   new email from
//   ${formdata.get("name")}
//   ${formdata.get("email")}
//   ${formdata.get("description")}`,
//     });

//     // console.log("FORM DATA IS ", formdata);
//     // console.log("prev DATA IS ", prev);

//     return {
//       message:"email sent successfully"

//     }
//   };

export async function handleFormSubmit(prev, formdata) {
  "use server";

  
  // //API key of Ram an
  // const resend = new Resend("re_9HjtvNQ8_4xyjeK32tFQPa5gCbfGdKvux");
  const resend = new Resend("re_BamMn4An_EDNX9S8mFJWz5cZUGnpwdi5b");

  // resend.emails.send({
  //   from: 'nitin@phisharmor.pro',
  //   to: 'dbuucollege@gmail.com',
  //   subject: 'Hello World',
  //   html: `

  //   new email from
  //   ${formdata.get("name")}
  //   ${formdata.get("email")}
  //   ${formdata.get("description")}`
  // });

  // Creating a template with the email

  try{

    resend.emails.send({
      from: "contact@smcas.in",
      to: "contact@smcas.in",
      subject: "Course Related Query",
      html: `<h1>New Course Query</h1>
    <p>Hello SMCAS Admin ,</p>
    <p>You have received a new query regarding the courses. Here are the details:</p>
        
        <div class="question">
        <p class="user-info">User Name: ${formdata.get("name")}</p>
        <p class="user-info">User Email: ${formdata.get("email")}</p>
        <p><strong>Query:  ${formdata.get("description")}</strong></p>
       ${prev}
  
      <p>Best regards,<br> The Course Support Team</p>`,
    });

  console.log("FORM DATA IS ", formdata);

    return {
      message: "Email sent successfully"
    };

    
  }
  

  catch(error){

    console.log("FORM DATA IS ", formdata);
    // console.log("prev DATA IS ", prev);

    console.error("Error sending emails",error);

    return{
      message:"Failed to send email", 
      error: error.message
    }
  }



 
}

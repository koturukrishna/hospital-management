// function ContactPage() {
//   return (
//     <section>
//       <div className="mx-auto max-w-screen-md px-4">
//         <h2 className="heading text-center">Contact Us</h2>
//         <p className="text__para mb-8 text-center font-light lg:mb-16">
//           Got a technical issue? Want to send feedback about a beta feature let
//           us know.
//         </p>

//         <form action={"#"} className="space-y-8">
//           <div>
//             <label htmlFor="email" className="form__label">
//               Your Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               placeholder="example@gmail.com"
//               className="form__input mt-1"
//             />
//           </div>

//           <div>
//             <label htmlFor="subject" className="form__label">
//               Subject
//             </label>
//             <input
//               type="text"
//               id="subject"
//               placeholder="Let us know how we can help you"
//               className="form__input mt-1"
//             />
//           </div>

//           <div className="sm:col-span-2">
//             <label htmlFor="message" className="form__label">
//               Your Message
//             </label>
//             <textarea
//               rows="6"
//               type="text"
//               id="message"
//               placeholder="Leave a comment..."
//               className="form__input mt-1"
//             />
//           </div>
//           <button className="btn rounded sm:w-fit" type="submit">
//             Submit
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default ContactPage;

import { useRef } from "react";
import emailjs from "emailjs-com";

function ContactPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dbbylll", // Replace with your EmailJS service ID
        "template_n3jidtr", // Replace with your EmailJS template ID
        form.current,
        "BJQ08CqKLOTToAhDX", // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent!");
          form.current.reset(); // Clear the form after submission
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send message. Try again later.");
        },
      );
  };

  return (
    <section>
      <div className="mx-auto max-w-screen-md px-4">
        <h2 className="heading text-center">Contact Us</h2>
        <p className="text__para mb-8 text-center font-light lg:mb-16">
          Got a technical issue? Want to send feedback about a beta feature? Let
          us know.
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-8">
          <div>
            <label htmlFor="email" className="form__label">
              Your Email
            </label>
            <input
              type="email"
              name="user_email"
              placeholder="example@gmail.com"
              className="form__input mt-1"
              required
            />
          </div>

          <div>
            <label htmlFor="subject" className="form__label">
              Subject
            </label>
            <input
              type="text"
              name="user_subject"
              placeholder="Let us know how we can help you"
              className="form__input mt-1"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="form__label">
              Your Message
            </label>
            <textarea
              rows="6"
              name="message"
              placeholder="Leave a comment..."
              className="form__input mt-1"
              required
            />
          </div>

          <button type="submit" className="btn rounded sm:w-fit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactPage;

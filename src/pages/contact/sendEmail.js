import emailjs from "emailjs-com";

const serviceId = "service_izo67hj";
const templateId = "template_x9zaztt";
const userId = "0YivBGCFKQoPpOPsW";

const sendEmail = async (name, email, message) => {
  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      { name, email, message },
      userId
    );

    if (response.status === 200) {
      console.log("Successfully sent message.");
    }
  } catch (error) {
    console.error("Failed to send email. Error: ", error);
  }
};

export default sendEmail;

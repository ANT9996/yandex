import emailjs from 'emailjs-com';

export default function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_vvopxy9', 'template_ey6rqa9', e.target, 'user_UD2cRh45GVcy1v7EZeuWH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
}
const nodeMailer = require('nodemailer');

// 메일 전송 transport 생성
const mailPoster = nodeMailer.createTransport({
  service: 'Naver',
  host: 'smtp.naver.com',
  port: 587,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// mail전송 옵션 생성 함수
export const mailOpt = (email, title, contents) => {
  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: email,
    subject: title,
    text: contents,
  };

  return mailOptions;
};

// mail 전송 함수
export const sendMail = mailOption => {
  mailPoster.sendMail(mailOption, function (error, info) {
    if (error) {
      console.log('에러 ' + error);
    } else {
      console.log('전송 완료 ' + info.response);
    }
  });
};

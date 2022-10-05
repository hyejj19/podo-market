import {mailOpt, sendMail} from '@/lib/server/email';
import withHandler from '@/lib/server/withHandler';
import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

// 랜덤 인증번호 생성
const getRandomNumber = () => {
  return Math.floor(Math.random() * 9999999);
};

async function handler(req, res) {
  const user_data = req.body;
  const token = await prisma.token.create({
    data: {
      payload: getRandomNumber() + '',
      user: {
        connectOrCreate: {
          where: {
            ...user_data,
          },
          create: {
            name: '익명 사용자',
            ...user_data,
          },
        },
      },
    },
  });

  // 보낼 email, title, contents 설정
  const mailOption = mailOpt(
    user_data.email,
    '포도 마켓 인증메일',
    `당신의 포도 마켓 인증번호는 : ${token.payload} 입니다.`,
  );
  // mail 발송
  sendMail(mailOption);

  res.status(200).json({result: true});
}

// API 에서는 next.js가 실행시킬 함수를 default 로 리턴해야함
export default withHandler({
  method: 'POST',
  handler,
});

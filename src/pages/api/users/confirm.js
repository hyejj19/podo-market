import withHandler from '@/lib/server/withHandler';
import client from '@/lib/server/client';
import {withApiSession} from '@/lib/server/withSession';

async function handler(req, res) {
  const {token} = req.body;
  const foundToken = await client.token.findUnique({
    // token 테이블에서 입력된 token 과 일치하는 데이터 찾기
    where: {
      payload: token,
    },
    // 그리고 userId 로 연결되어 있는 user 테이블의 데이터를 포함하기
    include: {
      user: true,
    },
  });
  // 일치하는 token이 없을 경우 응답
  if (!foundToken) return res.status(404).end();

  // session에 user 데이터 저장
  req.session.user = {
    id: foundToken.userId,
  };
  await req.session.save();

  // 세션이 발급되었으면 token은 필요가 없으므로 삭제한다.
  await client.token.deleteMany({
    // token에서 userId 속성이 현재 userId와 일치하는 레코드는 모두 삭제
    where: {
      userId: foundToken.userId,
    },
  });

  return res.json({ok: true, msg: 'token confirmed'});
}

export default withApiSession(withHandler({method: 'POST', handler}));

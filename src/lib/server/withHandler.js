// withHandler를 호출했을 때 실행될 함수를 리턴해야한다.

export default function withHandler({method, handler, isPrivate = true}) {
  return async function (req, res) {
    if (req.method !== method) return res.status(405).end();
    console.log(isPrivate);
    if (isPrivate && !req.session.user)
      return res
        .status(401)
        .json({ok: false, error: '로그인을 먼저 해주세요.'});
    try {
      await handler(req, res);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  };
}

// withHandler를 호출했을 때 실행될 함수를 리턴해야한다.

export default function withHandler({method, handler}) {
  return async function (req, res) {
    if (req.method !== method) return res.status(405).end();
    try {
      await handler(req, res);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  };
}

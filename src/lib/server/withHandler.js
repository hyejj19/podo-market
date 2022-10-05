// withHandler를 호출했을 때 실행될 함수를 리턴해야한다.
// 리턴 함수에 async await 을 사용해야하는데, 안쓰면 어떻게되는지 궁금해서 뺐다.
export default function withHandler(method, fn) {
  return function (req, res) {
    console.log(req.method);
    if (req.method !== method) return res.status(405).end();
    try {
      fn(req, res);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  };
}

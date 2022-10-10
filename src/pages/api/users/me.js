import withHandler from '@/lib/server/withHandler';
import client from '@/lib/server/client';
import {withApiSession} from '@/lib/server/withSession';

async function handler(req, res) {
  const profile = await client.user.findUnique({
    where: {
      id: req.session.user?.id,
    },
  });
  return res.status(200).json({ok: true, profile});
}

export default withApiSession(withHandler({method: 'GET', handler}));

import {withIronSessionApiRoute} from 'iron-session/next';

const cookieOptions = {
  cookieName: 'podosession',
  password: process.env.COOKIE_PASSWORD,
  // secure : HTTPS (production ONLY)
  // cookieOptions: {
  //   secure: process.env.NODE_ENV === "production",
  // },
};

export function withApiSession(fn) {
  return withIronSessionApiRoute(fn, cookieOptions);
}

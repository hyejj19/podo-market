import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';

export default function useUser() {
  const router = useRouter();
  const [user, setUser] = useState('');
  useEffect(() => {
    // /api/users/me 에 user 데이터 요청
    fetch('/api/users/me')
      .then(res => res.json())
      .then(res => {
        // 로그인되지 않은 경우 로그인 페이지로 리다이렉트
        if (!res.ok) return router.replace('/enter');
        setUser(res);
      })
      .catch(err => {
        console.error(err);
      });

    // user data 에서 ok:false 를 리턴받은 경우 => router.replace 로 로그인 페이지로 이동한다.
  }, [router]);
  return user;
}

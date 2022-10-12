import {useRouter} from 'next/router';
import {useEffect} from 'react';
import useSWR from 'swr';

const fetcher = url => fetch(url).then(res => res.json());

export default function useUser() {
  const router = useRouter('');
  const {data, error} = useSWR('/api/users/me', fetcher);

  // 받아온 데이터가 false 라면 enter 페이지로 리다이렉트
  useEffect(() => {
    if (data && !data.ok) router.replace('/enter');
  }, [data, router]);

  return {user: data?.profile, isLoading: !data && !error};
}

/*
isLoading
- data와 error 둘 다 없으면 => 로딩중이므로 true
- data와 error 둘 중 하나만 있으면 => 어쨌든 로딩이 되었으므로 false
*/

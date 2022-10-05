// 매개변수 : url
// return : [fetch 로직 함수(payload), {loading, response, error} = state]

import {useState} from 'react';

// POST 요청, 요청 상태 변경
export function usePost(url) {
  const [state, setState] = useState({
    loding: false,
    response: undefined,
    error: undefined,
  });
  // POST 요청 처리 로직
  function fetchPost(payload) {
    setState(prev => ({...prev, loading: true}));
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(response => {
        setState(prev => ({...prev, response}));
      })
      .catch(error => setState(prev => ({...prev, error})))
      .finally(() => {
        setState(prev => ({...prev, loading: false}));
      });
  }
  return [fetchPost, state];
}

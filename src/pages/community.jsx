import Item from '@/components/Item';
import Layout from '@/components/Layout';
import useUser from '@/lib/client/useUser';
import Circle from '@/components/circle';

export default function Community() {
  const user = useUser();
  console.log(user);
  return (
    <Layout title="커뮤니티" hasTabBar>
      <div className="w-full space-y-6">
        {[1, 1, 1, 1].map((_, idx) => (
          <div key={idx} className="flex flex-col space-y-6 ">
            {/* 질문 태그 */}
            <div>
              <span className="rounded-full bg-gray-200 py-1 px-4 text-sm font-medium">
                동네 질문
              </span>
            </div>
            {/* 질문 내용 */}
            <div className="flex space-x-2 ">
              <span className="font-semibold text-purple-500">Q.</span>
              <span className="font-medium">
                캐논 프린터 수리할 곳 있을까요? 갑자기 프린터가 고장났네요 ㅜㅜ
                ...
              </span>
            </div>
            {/* 작성자 */}
            <div>
              <span className="text-sm text-gray-700">김포도입니다</span>
            </div>
            {/* 궁금해요, 답변 */}
            <div className="flex space-x-3 border-y py-2 text-sm text-gray-500">
              <div className="flex space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span>궁금해요</span>
              </div>
              <div className="flex space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  />
                </svg>

                <span>답변</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Circle />
    </Layout>
  );
}

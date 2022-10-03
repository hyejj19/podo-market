export default function Item() {
  return (
    <div className="flex justify-between py-3">
      {/* 이미지 */}
      <div className="h-20 w-20 flex-shrink-0 rounded-xl bg-slate-300" />
      <div className="flex w-full flex-col px-4 py-1">
        {/* 게시글 title 및 price */}
        <span>구 만원권 10장 수집하세요.</span>
        <span className="text-xl font-bold">150,000원</span>
        {/* 하트, 댓글 아이콘 및 갯수 */}
        <div className="flex items-center justify-end space-x-2">
          <div className="flex items-center space-x-1">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
            <span>2</span>
          </div>
          <div className="flex items-center space-x-1">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
            <span>2</span>
          </div>
        </div>
      </div>
    </div>
  );
}

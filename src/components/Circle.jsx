export default function Circle() {
  return (
    <div className="fixed bottom-0 right-0 mb-28 mr-10 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-purple-400 opacity-50 shadow-md transition-opacity hover:opacity-100">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="white"
        class="h-9 w-9"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </div>
  );
}

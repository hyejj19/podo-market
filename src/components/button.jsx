export default function Button({text}) {
  return (
    <button className="w-full rounded-full bg-purple-400 py-2 text-center text-white hover:bg-purple-700">
      {text}
    </button>
  );
}

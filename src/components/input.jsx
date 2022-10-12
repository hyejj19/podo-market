export default function Input({label, name, type, required, register}) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="text-sm text-gray-500">
        {label}
      </label>
      {/* email input */}
      {type === 'email' ? (
        <input
          type={type}
          className="w-full rounded-full border-gray-300 text-sm transition-colors  focus:border-purple-600 focus:outline-none focus:ring-purple-600"
          name={name}
          required={required}
          {...register}
        />
      ) : null}

      {type === 'text' ? (
        <input
          type={type}
          className="w-full rounded-full border-gray-300 text-sm transition-colors  focus:border-purple-600 focus:outline-none focus:ring-purple-600"
          name={name}
          required={required}
          {...register}
        />
      ) : null}
    </div>
  );
}

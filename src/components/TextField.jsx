export default function TextField({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
  required = false,
}) {
  return (
    <div className="mb-5">
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-medium text-stone-300"
      >
        {label}
        {required && <span className="text-cinema-red"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className={`cinema-input w-full rounded-xl px-4 py-3 ${
          error ? "cinema-input-error" : ""
        }`}
      />
      {error && <p className="mt-1.5 text-sm text-red-400">{error}</p>}
    </div>
  );
}

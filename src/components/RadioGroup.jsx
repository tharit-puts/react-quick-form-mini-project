export default function RadioGroup({
  name,
  label,
  options,
  selectedValue,
  onChange,
  error,
  renderOption,
  required = false,
}) {
  return (
    <div className="mb-5">
      {label && (
        <p className="mb-3 block text-sm font-medium text-stone-300">
          {label}
          {required && <span className="text-cinema-red"> *</span>}
        </p>
      )}
      <div className="space-y-2.5">
        {options.map((option) => {
          const isSelected = selectedValue === option.value;

          return (
            <label
              key={option.value}
              className={`movie-option flex cursor-pointer items-start gap-3 rounded-xl p-4 ${
                isSelected ? "movie-option-selected" : ""
              }`}
            >
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={isSelected}
                onChange={(event) => onChange(event.target.value)}
                className="mt-1 accent-cinema-gold"
              />
              {renderOption ? renderOption(option, isSelected) : option.label}
            </label>
          );
        })}
      </div>
      {error && <p className="mt-1.5 text-sm text-red-400">{error}</p>}
    </div>
  );
}

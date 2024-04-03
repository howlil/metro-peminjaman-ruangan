export default function InputSelect({
  label,
  name,
  options = [],
  value,
  onChange,
  placeholder,
}) {
  return (
    <div className="mb-4 w-full ">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <select
        name={name}
        className="block w-full pl-3  py-2 text-base border-2 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        value={value}
        onChange={onChange}
      >
        <option disabled value="">
          {placeholder}
        </option>
        {options.map((option) => (
          <option className="text-sm" key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

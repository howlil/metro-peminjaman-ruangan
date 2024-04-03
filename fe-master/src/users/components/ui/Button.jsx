export default function Button({ onClick,label, color, size, ...rest }) {
  const colorClasses = {
    primary: "text-white bg-custom-100",
    secondary: "text-white bg-gray-500",
    danger: "text-white bg-red-500",
    outline: "text-custom-300 border-custom-100 border-2",
  };

  const sizeClasses = {
    small: "text-sm px-5 py-2 w-full",
    medium: "text-sm px-5 py-2",
    large: "text-lg px-7 py-3",
  };

  let baseClasses =
    "focus:outline-none rounded transition ease-in-out duration-300 w-32";

  baseClasses += ` ${colorClasses[color] || ""}`;
  baseClasses += ` ${sizeClasses[size] || ""}`;

  return (
    <button onClick={onClick} className={baseClasses} {...rest}>
      {label}
    </button>
  );
}

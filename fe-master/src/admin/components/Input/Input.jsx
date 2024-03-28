export default function Input({label, placeholder} ) {
    return (
      <div>
        <label htmlFor="label" className="block mt-5 text-sm font-medium leading-6 text-gray-900">
          {label}
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="text"
            name="input"
            id="input"
            className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder={placeholder}
          />
        </div>
      </div>
    )
  }
  
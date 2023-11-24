export function Button(props) {
  return (
    <div className="flex justify-end">
      <button
        className="mt-[0.9375rem] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 w-full xs:w-auto rounded-3xl py-[0.6875rem] px-[1.5rem] disabled:bg-blue-800"
        disabled={props.inputDisabled}
      >
        {props.children}
      </button>
    </div>
  );
}

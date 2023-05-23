export function Button(props) {
  return (
    <div className="flex justify-end">
      <button
        className="mt-[15px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-3xl py-[11px] px-[24px] disabled:bg-blue-800"
        disabled={props.inputDisabled}
      >
        Generate
      </button>
    </div>
  );
}

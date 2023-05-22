function RequestError(props) {
  return (
    <div className="flex justify-center">
      <p className="w-[535px] text-center text-base leading-[29px] text-yellow-300">
        {props.requestError}
      </p>
    </div>
  );
}

export default RequestError;

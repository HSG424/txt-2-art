function Label(props) {
  return (
    <label htmlFor={props.htmlFor} className="hidden xs:block">
      {props.children}
    </label>
  );
}

export default Label;

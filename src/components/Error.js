export function Error(props) {
  return (
    <div className={props.wrapperClassName}>
      <p className={props.contentClassName}>{props.children}</p>
    </div>
  );
}

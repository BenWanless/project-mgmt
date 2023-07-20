export function Button({ onClick, text, icon }) {
  const iconMarkup = icon ? icon : null;
  const textMarkup = text ? <div>{text}</div> : null;

  return (
    <button className="btn btn-danger m-2" onClick={onClick}>
      <div className="d-flex align-items-center gap-3">
        {iconMarkup}
        {textMarkup}
      </div>
    </button>
  );
}

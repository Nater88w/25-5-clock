export default function Button({id, className, onClick, children}) {
  return (
    <button
      id={id}
      className={className}
      onClick={(e) => {
        onClick(e);
      }}
    >
      {children}
    </button>
  );
}

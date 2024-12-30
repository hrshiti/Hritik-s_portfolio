import "./Button.css";

function Button({ btn1, onClick, link }) {
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <>
      <button onClick={handleClick} className="home_btn1">
        {btn1}
      </button>
    </>
  );
}

export default Button;

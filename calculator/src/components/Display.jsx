import "../App.css";

function Display({ input, onChange }) {
  return (
    <input className="display" type="text" value={input} onChange={onChange} />
  );
}

export default Display;

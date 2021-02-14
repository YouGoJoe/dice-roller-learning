import "./DiePicker.css";

const DiePicker = ({ die, onPlusClick, onMinusClick }) => {
  return (
    <div className="die-controls-container">
      <span>d{die}</span>
      <div>
        <button onClick={() => onPlusClick(die)}>+</button>
        <button onClick={() => onMinusClick(die)}>-</button>
      </div>
    </div>
  );
};

export default DiePicker;

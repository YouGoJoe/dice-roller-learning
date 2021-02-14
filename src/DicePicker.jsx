import { useState } from "react";

import DiePicker from "./DiePicker";
import "./DicePicker.css";

const DicePicker = () => {
  const [dice, setDice] = useState([]);

  const [rolls, setRolls] = useState([]);

  const rollTheDice = () => {
    const rollResult = dice
      .map((die) => Math.ceil(Math.random() * die))
      .sort((a, b) => b - a)
      .map((value, index) => ({ value, highPick: index === 0 || index === 1 }));
    setRolls(rollResult);
  };

  const removeDieAtIndex = (dieIndex) =>
    setDice(dice.filter((_, index) => index !== dieIndex));

  const onMinusClick = (die) => {
    const dieIndex = dice.findIndex((dieValue) => dieValue === die);
    if (dieIndex === -1) return;
    removeDieAtIndex(dieIndex);
  };

  const onPlusClick = (die) => dice.length < 6 && setDice([...dice, die]);

  return (
    <>
      <DiePicker
        die={4}
        onPlusClick={onPlusClick}
        onMinusClick={onMinusClick}
      />
      <DiePicker
        die={6}
        onPlusClick={onPlusClick}
        onMinusClick={onMinusClick}
      />
      <DiePicker
        die={8}
        onPlusClick={onPlusClick}
        onMinusClick={onMinusClick}
      />
      <DiePicker
        die={10}
        onPlusClick={onPlusClick}
        onMinusClick={onMinusClick}
      />
      <DiePicker
        die={12}
        onPlusClick={onPlusClick}
        onMinusClick={onMinusClick}
      />

      <div>
        <button disabled={dice.length < 2} onClick={rollTheDice}>
          Roll
        </button>
        &nbsp;
        <button
          disabled={!dice.length}
          onClick={() => {
            setDice([]);
            setRolls([]);
          }}
        >
          Reset
        </button>
        &nbsp;
        <button disabled={!dice.length} onClick={() => setRolls([])}>
          Reset Rolls
        </button>
      </div>

      {!!dice.length && (
        <div className="container">
          <span>Dice:&nbsp;</span>
          <div>
            {dice.map((roll, index) => (
              <span
                key={index}
                className={`roll`}
                onClick={() => removeDieAtIndex(index)}
              >
                d{roll}
              </span>
            ))}
          </div>
        </div>
      )}
      {!!rolls.length && (
        <div className="container">
          <span>Rolls:&nbsp;</span>
          <div>
            {rolls.map(({ value, highPick }, index) => (
              <span
                key={index}
                className={`roll ${value === 1 && "nat-one-roll"} ${
                  highPick && "high-pick"
                }`}
              >
                {value}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default DicePicker;

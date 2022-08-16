import React, { useMemo, useState } from "react";

const UseMemoHook = () => {
  const [count, setCount] = useState(0);
  const [wordList, setwordList] = useState<string[]>([]);
  //   const calculation = expensiveCalculation(count);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const incrementCount = () => {
    setCount((c) => c + 1);
  };
  const addNewWord = () => {
    setwordList((t) => [...t, "A new word"]);
  };

  return (
    <div>
      <div>
        <h2>My word list</h2>
        {wordList.map((word, index) => {
          return <p key={index}>{word}</p>;
        })}
        <button onClick={addNewWord}>Add New Word</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={incrementCount}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};

const expensiveCalculation = (num: number): number => {
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

export default UseMemoHook;

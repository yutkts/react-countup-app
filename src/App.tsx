import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <main className="container">
      <article className="counter-card">
        <header>
          <h1>カウンター</h1>
        </header>

        <div className="counter-display">
          <h2>{count}</h2>
        </div>

        <div className="button-group">
          <button onClick={handleDecrement} className="secondary">
            -1(カウントダウン)
          </button>
          <button onClick={handleReset} className="contrast">
            リセット
          </button>
          <button onClick={handleIncrement}>+1(カウントアップ)</button>
        </div>
      </article>
    </main>
  );
}

export default App;

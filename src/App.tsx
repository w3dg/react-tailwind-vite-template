import { FiCheckCircle } from "react-icons/fi";

import "./App.css";

function App() {
  return (
    <>
      <div className="h-screen w-screen bg-neutral-800 text-neutral-200 text-3xl font-bold grid place-content-center">
        <div className="flex gap-4 items-center">
          <FiCheckCircle />
          <h1>Vite + React + Tailwind + React Icons Starter</h1>
        </div>
      </div>
    </>
  );
}

export default App;

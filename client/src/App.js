import { useState } from "react";
import Input from "./components/Inputs/Input";

function App() {
  const [input, setInput] = useState("");
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Input placeholder="Message Micheal" type="text" onChange={e=> setInput(e.target.value)} value={input} />
    </div>
  );
}

export default App;

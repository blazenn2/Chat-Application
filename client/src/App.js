import Card from "./components/card";

function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Card name="Hamza" ping={true} time="6:59 am" message="This is hello text :D" />
    </div>
  );
}

export default App;

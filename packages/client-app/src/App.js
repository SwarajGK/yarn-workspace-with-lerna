import { Button } from "@browserstack-demo/component-lib";

function App() {
  const onClick = () => {
    console.log("This is a sample click");
  };
  return (
    <div className="App">
      <Button onClick={onClick}>Click me</Button>
    </div>
  );
}

export default App;

import { Button, Input } from "@browserstack-demo/component-lib";

function App() {
  const onClick = () => {
    console.log("This is a sample click");
  };
  const onChange = (value) => {
    console.log(value);
  }
  return (
    <div className="App">
      <Button onClick={onClick}>Click me</Button>
      <Input type="text" placeholder="This is the sample text" onChange={onChange} />
    </div>
  );
}

export default App;

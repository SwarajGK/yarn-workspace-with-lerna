import {
  Button,
  Input,
  // Link,
  // Text,
  // Typography
} from "@browserstack-demo/component-lib";

function App() {
  const onClick = () => {
    console.log("This is a sample click");
  };
  const onChange = (value) => {
    console.log(value);
  };
  return (
    <div className="App">
      <Button onClick={onClick}>Click me</Button>
      <Input
        type="text"
        placeholder="This is the sample text"
        onChange={onChange}
      />
      {/* <Link href="/">Main page</Link> */}
      {/* <Typography tag="h1">This is the h1 tag</Typography>
      <Text>This is text component</Text> */}
    </div>
  );
}

export default App;

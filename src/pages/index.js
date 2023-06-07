import { Button, Message } from "@/components";
import Userfront from "@userfront/react";
const Index = () => {
  return (
    <>
      <h1>home page</h1>
      <Button>click me</Button>
      <Button active secondary>
        click me
      </Button>
      <Message>test</Message>
      <Button disabled={true}>click me</Button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ullam,
        magnam quo optio recusandae repudiandae alias in molestiae nesciunt
        distinctio obcaecati eaque deleniti nemo quis incidunt blanditiis.
        Pariatur, delectus ratione?
      </p>
    </>
  );
};

export default Index;

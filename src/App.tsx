import "./styles/global.css";
import "./styles/theme.css";
import { Heading } from "./components/Heading";

export function App() {
  console.log("Oi");
  return (
    <>
      <Heading attr={123} attr2="String">
        Olá mundo 1
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quam
        enim sint. Magni odit commodi placeat eius nulla eaque explicabo velit
        quo similique, pariatur, facere harum illo temporibus aspernatur
        perspiciatis.
      </p>
    </>
  );
}

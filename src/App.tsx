import "./styles/global.css";
import "./styles/theme.css";
import { Heading } from "./components/Heading";
import { TimerIcon } from "lucide-react";

export function App() {
  return (
    <>
      <Heading>
        Olá mundo 1
        <button>
          <TimerIcon />
        </button>
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

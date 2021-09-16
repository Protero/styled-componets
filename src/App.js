import { useState } from "react";

import "./styles.css";
import styled from "styled-components";
import Box from "./Box";
import { background } from "./Theme";
import { ThemeProvider } from "styled-components";

const Title = styled.h1`
  background-color: ${background};
  color: ${(props) => props.color};
  font-family: ${(props) => props.theme.fontFamily};
`;

const TitleLeft = styled(Title)`
  text-align: left;
`;

export default function App() {
  const [color, setColor] = useState(true);

  return (
    <ThemeProvider theme={{ fontFamily: "sans-serif" }} className="App">
      <Title color={color ? "red" : "yellow"}>Hello CodeSandbox</Title>
      <Title color={color ? "red" : "yellow"}>Hello CodeSandbox</Title>
      <Title color={color ? "red" : "yellow"}>Hello CodeSandbox</Title>
      <TitleLeft color={color ? "red" : "yellow"}>Hello CodeSandbox</TitleLeft>
      <button
        onClick={() => {
          setColor(!color);
        }}
      >
        Click to toogle
      </button>
      <Box color="orange" />
    </ThemeProvider>
  );
}

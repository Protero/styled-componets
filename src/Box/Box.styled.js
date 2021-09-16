import styled from "styled-components";
import Box from "./Box.component";

import { background } from "../Theme";

export default styled(Box)`
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
  width: 400px;
  height: 400px;
  background-color: ${background};
  animation: rotate 2s linear infinite;

  .text {
    color: ${(props) => props.color};
  }
`;

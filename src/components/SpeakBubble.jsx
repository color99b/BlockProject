import { useEffect, useState } from "react";
import styled from "styled-components";
const SpeakBubbleComponent = ({
  str,
  func,
  topPadding,
  placeHold,
  hover,
  type,
}) => {
  let leftMargin = "-50";
  if (str.length == 1) {
    leftMargin = "-100";
  } else {
    topPadding = "0.3";
  }

  return (
    <ButtonBox>
      <Button
        topPadding={topPadding}
        // disabled={true}
        onClick={() => {
          console.log(type);
          func(type);
        }}
      >
        {str}
      </Button>
      {!hover ? <Bubble leftMargin={leftMargin}>{placeHold}</Bubble> : ""}
    </ButtonBox>
  );
};

const Button = styled.button`
  position: relative;
  color: #0784c3;
  font-size: 0.8rem;
  background-color: white;
  box-shadow: 5px 5px 15px 0.1px rgba(0, 0, 0, 0.1);
  &:hover {
    color: white;
    background-color: #0784c3;
  }
  transition-duration: 0.5s;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  box-sizing: border-box;

  padding: ${(probs) => {
      return probs.topPadding + "rem ";
    }}
    0.5rem;
`;

const ButtonBox = styled.div`
&:hover {


  color: rgba(0, 0, 0, 0.7);
  > span {
    opacity:1;
  transition-duration : 1s;

  }

`;

const Bubble = styled.span`
  opacity: 0;
  position: absolute;
  padding: 8px;
  left: ${(probs) => {
    return probs.leftMargin;
  }}%;
  top: -2.75rem;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  background: #333;
  color: #fff;

  transition-duration: 1s;
  white-space: nowrap;
  &:after {
    position: absolute;
    top: 100%;
    left: 45%;
    width: 0;
    height: 0;
    margin-left: -10px;
    border: solid transparent;
    border-color: rgba(51, 51, 51, 0);
    border-top-color: #333;
    border-width: 10px;
    pointer-events: none;
    content: " ";
  }
`;

export default SpeakBubbleComponent;

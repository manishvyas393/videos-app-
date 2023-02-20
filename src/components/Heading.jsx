import { Heading } from "@chakra-ui/react";
import React from "react";

const HeaDing = ({ text }) => {
  return (
    <Heading
      textAlign={"center"}
      backgroundColor="blackAlpha.900"
      color={"white"}
      padding={4}
      roundedTop="3xl"
    >
      {text}
    </Heading>
  );
};

export default HeaDing;

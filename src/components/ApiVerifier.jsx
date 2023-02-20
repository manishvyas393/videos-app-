import { Box, Text } from "@chakra-ui/react";
import React from "react";
import HeaDing from "./Heading";
import Countdown from "react-countdown";
const ApiVerifier = ({ status, timer, objects }) => {
  return (
    <Box height={"50vh"} width={"20%"} shadow="dark-lg" mx={2} rounded="3xl">
      <HeaDing text={"Auto Verifier"} />
      <Box
        display={"flex"}
        flexDirection="column"
        justifyContent={"center"}
        alignItems="center"
      >
        <Box fontSize={"4xl"} my={4}>
          <Text>
            Status:
            <span style={{ color: "green" }}>{status}</span>
          </Text>
        </Box>
        <Box fontSize={"4xl"} my={4}>
          <Text>
            Objects:
            <span style={{ color: "green" }}>{objects}</span>
          </Text>
        </Box>
        <Countdown date={Date.now() + 35000}>
        </Countdown>
      </Box>
    </Box>
  );
};

export default ApiVerifier;

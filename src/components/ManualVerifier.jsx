import { Box, Button, Flex, useToast } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import HeaDing from "./Heading";

const ManualVerifier = () => {
  const toast = useToast();
  return (
    <Box width={"20%"} height={"50vh"} shadow="dark-lg" mx={2} rounded="3xl">
      <HeaDing text={"Manual Check"} />
      <Flex
        flexDirection={"column"}
        justifyContent="center"
        alignItems={"center"}
        my={8}
        padding="20px"
      >
        <Button backgroundColor={"gray.700"} color="white" width={"50%"} my={4}>
          <Link to={"/view-api"}>view</Link>
        </Button>

        <Button
          backgroundColor={"gray.700"}
          color="white"
          width={"50%"}
          my={4}
          onClick={(e) => {
            e.preventDefault();
            sessionStorage.removeItem("items");
            toast({
              title: "Cleared data",
              status: "success",
              duration: 2000,
              isClosable: true,
              position: "top",
            });
          }}
        >
          Clear
        </Button>
      </Flex>
    </Box>
  );
};

export default ManualVerifier;

import {
  Box,
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
} from "@chakra-ui/react";
import React from "react";
import HeaDing from "./Heading";
const Videos = ({ videos }) => {
  return (
    <Box height={"80vh"} rounded={"3xl"} backgroundColor="white" shadow={"dark-lg"} width="80%">
      <HeaDing text={"Videos"} />

      <Box
        overflowY={"scroll"}
        sx={{
          "&::-webkit-scrollbar": {
            width: "5px",
            borderRadius: "5px",
            backgroundColor: `rgba(0, 0, 0, 0.05)`,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: `rgba(0, 0, 0, 0.05)`,
          },
        }}
        height="68vh"
        width={"full"}
        my={2}
        shadow="3xl"
      >
        {videos?.map((v) => (
          <Box margin={2}>
            <Card>
              <CardHeader>
                <Heading size="md">{v?.name}</Heading>
                <Text pt="2" fontSize="sm">
                  {v?.textContent}
                </Text>
              </CardHeader>
              <CardBody>
                <Box>
                  <iframe
                    title={v?.name}
                    style={{
                      height: "50vh",
                      width: "100%",
                    }}
                    src={v?.videoUrl}
                    name="youtube embed"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                </Box>
              </CardBody>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Videos;

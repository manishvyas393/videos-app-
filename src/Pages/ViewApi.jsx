import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
const ViewApi = () => {
  const [response, setResponse] = useState();
  const [error, setError] = useState("");
  let items = JSON.parse(sessionStorage.getItem("items"));
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    var config = {
      method: "post",
      url: "http://97.74.94.225:8282/besstMainApi/df/videoSection",
      headers: {
        CLIENT_ID: "785878",
      },
    };
    if (items) {
      setResponse(items);
    } else {
      try {
        const { data } = await axios(config);
        sessionStorage.setItem("items", JSON.stringify(data));
        setResponse(data);
      } catch (e) {
        setError(e.response.data);
      }
    }
  };
  return (
    <Box>
      {error !== "" ? (
        <pre
          style={{
            color: "red",
            fontSize: "24px",
            fontFamily: "Poppins",
            padding: "20px",
          }}
        >
          {JSON.stringify(error, null, 4)}
        </pre>
      ) : (
        <pre
          style={{
            fontSize: "18px",
            fontFamily: "Poppins",
            padding: "20px",
          }}
        >
          {JSON.stringify(response, null, 4)}
        </pre>
      )}
    </Box>
  );
};

export default ViewApi;

import axios from "axios";
import { useEffect, useState } from "react";
import ApiVerifier from "../components/ApiVerifier";
import { Box, Spinner } from "@chakra-ui/react";
import Videos from "../components/Videos";
import ManualVerifier from "../components/ManualVerifier";

function Home() {
  const timer = 35000;
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setEror] = useState("");
  useEffect(() => {
    fetchData();
    setInterval(() => {
      fetchData();
    }, timer);
  }, []);
  const fetchData = async () => {
    setLoading(true);
    var config = {
      method: "post",
      url: "http://97.74.94.225:8282/besstMainApi/df/videoSection",
      headers: {
        CLIENT_ID: "785878",
      },
    };
    try {
      const { data } = await axios(config);
      setVideos(data?.Data);
      setStatus(data?.ResultCode === "200" ? "Active" : "Down");
      setLoading(false);
    } catch (e) {
      setEror(e.response.data);
      setStatus("Down");
      setLoading(false);
    }
  };

  return (
    <Box>
      {loading ? (
        <Box display={"flex"} justifyContent="center" alignItems={"center"}>
          <Spinner size={"xl"} my={16} alignSelf="center" />
        </Box>
      ) : error !== "" ? (
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
        <Box
          display={"flex"}
          justifyContent="space-between"
          alignItems={"center"}
          my={4}
          paddingX={4}
        >
          <ApiVerifier status={status} objects={videos?.length} timer={timer} />
          <ManualVerifier />
          <Videos videos={videos} />
        </Box>
      )}
    </Box>
  );
}

export default Home;

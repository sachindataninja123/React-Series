import React from "react";
import Box from "@mui/material/Box";
import FeedCard from "./FeedCard";

const Feed = () => {
  return (
    <Box
      flex={4}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        padding :'1rem 0'
      }}
    >
      <FeedCard />
      <FeedCard />
      <FeedCard />
    </Box>
  );
};

export default Feed;

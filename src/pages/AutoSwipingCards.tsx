import React from "react";
import { Typography, Card, CardContent } from "@mui/material"; // Removed Box from import
import Carousel from "react-material-ui-carousel";

const AutoSwipingCards = () => {
  const items = [
    { name: "About Us", description: "Learn more about Startup Gujarat." },
    { name: "Funding", description: "Explore funding options." },
    { name: "Meetups", description: "Join upcoming meetups." },
    { name: "Patent Applications", description: "File your patents easily." },
  ];

  return (
    <Carousel>
      {items.map((item, index) => (
        <Card key={index} sx={{ minWidth: 275, margin: "10px" }}>
          <CardContent>
            <Typography variant="h5">{item.name}</Typography>
            <Typography>{item.description}</Typography>
          </CardContent>
        </Card>
      ))}
    </Carousel>
  );
};

export default AutoSwipingCards;

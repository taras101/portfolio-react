import React from "react";
import { Box } from "rebass";
import { layout } from "styled-system";

interface CardProps {
  image: string;
  imgTitle: string;
  imgPage: string;
}
export const Card = ({ image, imgTitle, imgPage }: CardProps) => (
  <Box>
    <a className="imgLink" href={imgPage}>
      <img src={image} alt="" className="portfolioImg" />
      <h3>{imgTitle}</h3>
    </a>
  </Box>
);

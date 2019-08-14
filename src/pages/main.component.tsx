import React from "react";
import { Card } from "./card.component";
import { layout } from "styled-system";
import { Box, Flex } from "rebass";

class Main extends React.Component {
  constructor(props: string) {
    super(props);
    this.state = {
      visited: Boolean
    };
  }
  render() {
    return (
      <div>
        <h1>{title}</h1>
        <Flex alignItems="center" justifyContent="space-between">
          {albums.map(function(d, index) {
            return (
              <Card
                key={index}
                image={d.src}
                imgTitle={d.caption}
                imgPage={d.url}
              />
            );
          })}
        </Flex>
      </div>
    );
  }
}

let title = "TARAS PETRYK";
const s3 = "https://s3-us-west-2.amazonaws.com/s1portfolio/images/2018/";
let albums = [
  {
    src: s3 + "Grove.png",
    caption: "Grove",
    thumb: s3 + "grove-thumb.png",
    url: "http://caseysokol.com/simple_grove/home.html"
  },
  {
    src: s3 + "MJR-vr.png",
    caption: "My Job Rocks VR",
    thumb: s3 + "MJR-vr-thumb.png",
    url: "http://myjobrocks.ca/vr/"
  },
  {
    src: s3 + "CC.png",
    caption: "Crafty Containers",
    thumb: s3 + "CC-thumb.png",
    url: "http://craftycontainers.ca"
  },
  {
    src: s3 + "FL.png",
    caption: "Future Legends",
    thumb: s3 + "FL-thumb.png",
    url: "http://futurelegendstv.ca/"
  },
  {
    src: s3 + "FL-vr.png",
    caption: "Future Legends VR",
    thumb: s3 + "FL-vr-thumb.png",
    url: "http://futurelegendstv.ca/vr/#/"
  },
  {
    src: s3 + "UMS.png",
    caption: "The Underground Music Scene",
    thumb: s3 + "UMS-thumb.png",
    url: "http://www.theundergroundmusicscene.ca/"
  },
  {
    src: s3 + "mjr-ionic.png",
    caption: "My Job Rocks App",
    thumb: s3 + "mjr-ionic-thumb.png",
    url:
      "https://itunes.apple.com/us/developer/rvk-productions/id1020421356?mt=8"
  },
  {
    src: s3 + "MJR-arcade.png",
    caption: "My Job Rocks Arcade",
    thumb: s3 + "MJR-arcade-thumb.png",
    url: "http://myjobrocks.ca/mountain/#/arcade"
  }
];
export default Main;

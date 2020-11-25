import { Scrollbars } from "react-custom-scrollbars";
import { FullWidthSlider } from "global/components";

const Slides = [
  {
    title: "MINIMALISM CHART",
    description: "Lorem ka leman lorem in stu ranmatahe",
    productURL:
      "https://hongo.themezaa.com/furniture/wp-content/uploads/sites/4/2020/01/chair-02-a-1.png.webp",
  },
  {
    title: "MINIMALISM CHART 2",
    description: "Lorem ka leman lorem in stu ranmatahe",
    productURL:
      "https://hongo.themezaa.com/furniture/wp-content/uploads/sites/4/2020/01/chair-01-a.png.webp",
  },
  {
    title: "MINIMALISM CHART 3",
    description: "Lorem ka leman lorem in stu ranmatahe",
    productURL:
      "https://lh3.googleusercontent.com/proxy/EzsqhhasYJs3NZSPrA3HHdtmO2Wib57WCnjVOUTda8ic3Lv6_uoXDtzY5CSgVp2KNBcz9UiSiLN99c8kpAGBHOTKCKbxlnLs-_yBSfHDWreXG_V729Pjl0-Gcu0EtA",
  },
];

export default function Home() {
  return (
    <div style={{height: '100vh'}}>
      <Scrollbars>
        <FullWidthSlider slides={Slides} />
      </Scrollbars>
    </div>
  );
}

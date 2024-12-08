import logo from "./logo.svg";
import "./App.css";
import Accordian from "./comp/accordian/Accordian";
import StarRating from "./comp/starRating/StarRating";
import Slider from "./comp/image-slider/Slider";
import LoadMore from "./comp/Loading/LoadMore";
import DarkMod from "./comp/DarkMod/DarkMod";
import QrCode from "./comp/QR code/QrCode";
import ScrolIingIndicator from "./comp/Scroll_indicator/ScrolIingIndicator";
import TabTest from "./comp/Tabs/Tabtest";
import Poptest from "./comp/CustomPopUp/Poptest";
import GithubProfile from "./comp/githubProfileFinder/GithubProfile";
import User from "./comp/githubProfileFinder/User";
import TestWindowResize from "./comp/use_window/TestWindowResize";
import ScrollTopbottom from "./comp/scrollTopBottom/ScrollTopbottom";

function App() {
  return (
    <div className="App">
      <h2>Hello this is my new project</h2>
      <DarkMod/>
      <GithubProfile/>
      <QrCode/>
      <ScrollTopbottom/>
      <TestWindowResize/>
      <Accordian />
      <TabTest/>
      <Poptest/>
      <StarRating />
      <ScrolIingIndicator/>
      <Slider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} />
      

      <LoadMore/>

    </div>
  );
}

export default App;

import HomeHeader from "./HomeHeader";
import HomeAbout from "./HomeAbout";
import HomeOurRooms from "./HomeOurRooms";
import HomeGallery from "./HomeGallery";
import HomeBlog from "./HomeBlog";
import Contact from "../Contact";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeHeader />
      <HomeAbout />
      <HomeOurRooms />
      <HomeGallery />
      <HomeBlog />
      <Contact />
      <Footer />
    </div>
  );
}

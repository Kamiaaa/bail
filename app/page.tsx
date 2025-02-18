import Carousel from "./components/Carousel";
import MainContent from "./components/MainContent";
import NewArrivalProducts from "./components/NewArrivalProducts";
import ProductCard from "./components/ProductCard";
import ScrollToTop from "./components/ScroolToTop";

export default function Home() {
  return (
    <>
      <Carousel/>
      <ProductCard/>
      <MainContent/>
      <NewArrivalProducts/>
      <ScrollToTop/>
    </>
  );
}

import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Main } from "./components/Main";
import { ProductDetails } from "./components/Product";

const DATA = {
title: '',
description: `Tu teraz mamy randowmowy tekst opisujący jak to elegancko wygląda nalewanie kawy. czy też zapażanie, ale kto to tam wie w sumie`,
thumbnailURL: `https://picsum.photos/id/1060/5598/3732`,
thumbnailALT: `obrazek przedstawiający nalewanie kawy`,
rating: 4.5
};
const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-lime-300">
      <Header />
      <Main>
        <ProductDetails data={DATA} />
      </Main>

      <Footer />
    </div>
  );
};

export default Home;

import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Main } from "./components/Main";

const AboutPage = () => {
return (
  <div className="flex grow flex-col min-h-screen" >
    <Header />
    <Main> Cześć Piotrek</Main>
    <Footer />
  </div>
);
};
export default AboutPage;





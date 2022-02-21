import { Footer } from "./components/footer"; 
import { Header } from "./components/Header"; 
const Home = () => {
return (
  <div className=" flex-col min-h-screen bg-lime-300">
<Header />
<main className=" flex-grow max-w-7xl mx-auto w-full px-4 py-2">
  Właściwa zawartość
</main>
<Footer />

 </div>
  );
}

export default Home;

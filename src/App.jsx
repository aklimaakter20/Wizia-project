import { Card } from "@nextui-org/react";
import "./App.css";
import CompanyLogo from "./Components/CompanyLogo";
import Hero from "./Components/Hero";
import NavbarArea from "./Components/Navbar";
import CardReuse from './Components/CardReuse';
function App() {
  return (
    <>
     <main className="overflow-x-hidden">
     <NavbarArea />
      
      <Hero/>
      <CompanyLogo/>
     <CardReuse/>
     </main>
    </>
  );
}

export default App;

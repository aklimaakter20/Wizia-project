import "./App.css";

import CompanyLogo from "./Components/CompanyLogo";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import CardReuse from './Components/CardReuse';
import Train from "./Components/Train";
import Allocate from "./Components/Allocate";
import Embrace from "./Components/Embrace";
import Copyright from "./Components/Copyright";
import Testimonial from "./Components/Testimonial";
function App() {
  return (
    <>
     <main className="overflow-x-hidden">
     <Navbar/>
      
      <Hero/>
      <CompanyLogo/>
     <CardReuse/>
     <Train/>
     <Testimonial/>
     <Allocate/>
     <Embrace/>
     <Copyright/>
     </main>
    </>
  );
}

export default App;

import "./App.css";
import CompanyLogo from "./Components/CompanyLogo";
import Hero from "./Components/Hero";
import NavbarArea from "./Components/Navbar";
function App() {
  return (
    <>
     <main className="overflow-x-hidden">
     <NavbarArea />
      
      <Hero/>
      <CompanyLogo/>
     </main>
    </>
  );
}

export default App;

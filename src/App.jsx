import "./App.css";
import Hero from "./Components/Hero";
import NavbarArea from "./Components/Navbar";
function App() {
  return (
    <>
     <main className="overflow-x-hidden">
     <NavbarArea />
      
      <Hero/>
     </main>
    </>
  );
}

export default App;

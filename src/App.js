import "./App.css";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Form from "./components/Form.js";

function App() {
  return (
    <div id="body" class="overflow-hidden">
      <Navbar />
      <div className="mb-5"></div>

      <div className="flex flex-row items-center mx-auto justify-center p-8">
        <h1
          id="label"
          className=" text-sky-300 h-1/2 origin-center -rotate-90 relative  -left-8 text-4xl z-50 drop-shadow-2xl hover:animate-pulse "
        >
          FORM
        </h1>
        <div className="relative right-16 z-40">
          <Form />
        </div>
      </div>
      <h1
        id="backgroundtext"
        className="z-0 relative w-full bottom-72 left-32 text-9xl scale-150 text-white"
      >
        2022
      </h1>
      <div className="mb-5"></div>
      <Footer />
    </div>
  );
}

export default App;

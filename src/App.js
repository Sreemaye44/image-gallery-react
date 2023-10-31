import "./App.css";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <h1 className="text-2xl font-bold px-8 py-5">Gallery</h1>
      <hr></hr>
      <div className="py-10 px-10">
      <Gallery />
      </div>
    </>
  );
}

export default App;

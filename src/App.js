
import Testomonial from "./components/Testomonial";
import reviews from "./data.js"


function App() {

  
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center bg-slate-100">
          <div className="text-center">
            <h1 className="text-3xl font-bold m-10 text-center">Our Testomonials</h1>
            <div className="bg-violet-400 h-[4px] w-2/5 mt-1 mx-auto"></div>
            <Testomonial reviews={reviews} />
          </div>
    </div>
   );
}

export default App;

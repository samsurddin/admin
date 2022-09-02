import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";


function App() {
  return (
    <div>
      <Navbar />
      <div className="flex">
      <Sidebar />
      <Main />
      </div>
      
      
    </div>
   
  );
}

export default App;

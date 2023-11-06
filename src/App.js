import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Create from "./table/table"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Create />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {AksHome} from './pages'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<AksHome />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

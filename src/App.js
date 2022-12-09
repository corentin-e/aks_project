import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {AksWelcomePage, AksHome} from './pages';
import {Layout} from './components';

function App() {
  return (
    <div className='app_font'>
      <BrowserRouter>
        <Layout>
          <Routes>
              <Route path="/" element={<AksWelcomePage />}/>
              <Route path="/home" element={<AksHome />}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;

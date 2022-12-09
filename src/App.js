import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {AksWelcomePage, AksHome} from './pages';
import {Layout} from './components';
import { Provider as DojoProvider } from "./hooks/useDojo/createContext";

function App() {
    return (
        <div className='app_font'>
            <BrowserRouter>
                <DojoProvider>
                    <Layout>
                        <Routes>
                            <Route path="/" element={<AksWelcomePage />}/>
                            <Route path="/home" element={<AksHome />}/>
                            <Route path="/meaux" element={<AksHome />}/>
                            <Route path="/Trilport" element={<AksHome />}/>
                            <Route path="/lizy" element={<AksHome />}/>
                            <Route path="/magny" element={<AksHome />}/>
                        </Routes>
                    </Layout>
                </DojoProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;

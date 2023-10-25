import './App.css';
import AddPhoto from './pages/AddPhoto/AddPhoto';
import UploadPhoto from './pages/UploadedPhoto/UploadPhoto';
import LogIn from './pages/LogIn/LogIn';
import Register from './pages/Register/register';
import Interests from './pages/Interests/interests';
import FinalPage from './pages/FinalPage/FinalPage';
import InterestsCard from './pages/InterestsCard/InterestsCard';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/addphoto" element={<AddPhoto />} />
          <Route path="/uploadphoto" element={<UploadPhoto />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/interestscard" element={<InterestsCard />} />
          <Route path="/finalpage" element={<FinalPage />} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;

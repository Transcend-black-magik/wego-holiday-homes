import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WegoHolidayHomes from './homepage';
import InsightsPage from './pages/InsightsPage';
import UkAndDubaiHomes from './pages/ukanddubai';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WegoHolidayHomes />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/ukanddubai" element={<UkAndDubaiHomes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

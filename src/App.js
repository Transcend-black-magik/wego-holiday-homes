import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WegoHolidayHomes from './homepage';
import InsightsPage from './pages/InsightsPage';
import UkAndDubaiHomes from './pages/ukanddubai';
import BlogArticle from './pages/blog1';
import ShortTermVsLongTerm from './pages/blog2';
import ShortTermRentalInvesting from './pages/blog3';
import InsightsArticle from './pages/blog4';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WegoHolidayHomes />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/ukanddubai" element={<UkAndDubaiHomes />} />
        <Route path="/blog1" element={<BlogArticle />} />
        <Route path="/blog2" element={<ShortTermVsLongTerm />} />
        <Route path="/blog3" element={<ShortTermRentalInvesting />} />
        <Route path="/blog4" element={<InsightsArticle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

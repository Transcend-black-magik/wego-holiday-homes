import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WegoHolidayHomes from './homepage';
import InsightsPage from './pages/InsightsPage';
import UkAndDubaiHomes from './pages/ukanddubai';
import BlogArticle from './pages/blog1';
import ShortTermVsLongTerm from './pages/blog2';
import ShortTermRentalInvesting from './pages/blog3';
import InsightsArticle from './pages/blog4';
import PropertyPage from './pages/PropertyPage';
import DubaiMarketOutlook from './pages/DubaiMarketOutlook';
import DubaiMarketOutlook2026 from './pages/DubaiMarketOutlook2026';
import InvestorsStrategies from './pages/InvestorsStrategies';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WegoHolidayHomes />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/ukanddubai" element={<UkAndDubaiHomes />} />
        <Route path="/property" element={<PropertyPage />} />
        <Route path="/blog1" element={<BlogArticle />} />
        <Route path="/blog2" element={<ShortTermVsLongTerm />} />
        <Route path="/blog3" element={<ShortTermRentalInvesting />} />
        <Route path="/blog4" element={<InsightsArticle />} />
        <Route path='/blog5' element={ <DubaiMarketOutlook />} />
        <Route path='/blog6' element={<ShortTermVsLongTerm />} />
        <Route path='/blog7' element={<DubaiMarketOutlook2026 />} />
        <Route path='/blog8' element={<InvestorsStrategies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

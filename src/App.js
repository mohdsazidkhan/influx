import './App.css';
import Banner from './components/Banner';
import ReelDeal from './components/ReelDeal';
import Faqs from './components/Faqs';
import MobileFooter from './components/MobileFooter';

function App() {
  return (
    <div className="homepage">
      {/* Header & Banner Section */}
      <Banner />
      {/* reelDeal Section */}
      <ReelDeal />
      {/* faqs Section */}
      <Faqs />
      {/* mobileFooter Section */}
      <MobileFooter />
    </div>
  );
}

export default App;

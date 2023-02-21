
import Header from './components/NavBar/Header';
import WhyChooseDewqfInance from './components/WhyChooseDewqfInance';
import FinacialReportingSection from './components/FinacialReportingSection';
import { FaqSection } from './components/FaqSection';
import CoreTeam from './components/CoreTeam';
import Footer from './components/NavBar/Footer';
import ProgressWrap from './components/ProgressWrap';
import ContactUsForm from './components/ContactUsForm';
import ChooseUs from './components/ChooseUs';
import Herosection from './components/Herosection';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Herosection />
      <WhyChooseDewqfInance />
      <FinacialReportingSection />
      <ChooseUs />
      <FaqSection />
      <CoreTeam />
      <ContactUsForm />
      <Footer />
      <ProgressWrap />
    </>
  );
}

export default App;

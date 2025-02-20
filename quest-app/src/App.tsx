import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/header/Header';
import Footer from './components/Footer';
import QuestInfo from './pages/QuestInfo';
import Contacts from './pages/Contacts';

function App() {
  return (
    <Router>
      <div className="bg-bgcolor min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quests/:id" element={<QuestInfo />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

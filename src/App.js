import './App.css';
import Header from './components/Header/Header';
import Contacts from './components/Contacts/Contacts';
import LeftColumn from './components/LeftColumn/LeftColumn';
import RightColumn from './components/RightColumn/RightColumn';

function App() {
  return (
    <div id="container">
      <Header />
      <Contacts />
      <div id="columns">
        <LeftColumn />
        <RightColumn />
      </div>
    </div>
  );
}

export default App;

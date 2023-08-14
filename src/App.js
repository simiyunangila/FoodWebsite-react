import logo from './logo.svg';
import './App.css';
import NavigationBar from './navbar';
import Homesection from './Home';
import BDcategories from './BDCategories';
import Last from './Lastsection';
import Footer from './Footer';
import Menu from './menu';

function App() {
  return (
    <div>
     <NavigationBar/>
     <Homesection/>
     <BDcategories/>
     <Menu/>
     <Last/>
     <Footer/>

    </div>
    
  );
}

export default App;

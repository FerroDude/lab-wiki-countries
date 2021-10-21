import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/country/:id" component={CountryDetails} />
        <Route path="/" component={CountriesList} exact />
      </Switch>
    </div>
  );
}

export default App;

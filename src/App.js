import Header from "./Components/Header";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import BonsDrinks from "./Components/BonsDrinks";
import Drinks from "./Components/Drinks";
import Sobre from "./Components/Sobre";
import NossoTime from "./Components/NossoTime";
import Contato from "./Components/Contato";
import Footer from "./Components/Footer";
import Search from "./Components/SearchDrink";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <BonsDrinks />
          </Route>
          <Route path="/drinks">
            <Drinks />
          </Route>
          <Route path="/sobre">
            <Sobre />
          </Route>
          <Route path="/nosso_time">
            <NossoTime />
          </Route>
          <Route path="/contato">
            <Contato />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;

import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Etusivu from './components/Etusivu';
import Lomake from './components/Lomake';
import Palaute from './components/Palaute';

//router to the "pages"exact=show etusivu vain etusivulla navbar joka sivulle

function App() {
  return(
    <Router>
      
    <Navbar />
    <Route path="/" exact>
      <Etusivu />
    </Route>
   <Route path="/lomake">
      <Lomake />
    </Route>
     <Route path="/palaute">
     <Palaute />
    </Route>

    </Router>
 
  );
}
export default App;


import './App.css';
import Create from './Create';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Read from './Read';
import Update from './Update';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Create/>}/>
        <Route exact path="/read" element={<Read/>}/>
        <Route exact path="/update" element={<Update/>}/>
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;

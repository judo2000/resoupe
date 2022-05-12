import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Outside from "./pages/Outside";

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/outside' element={<Outside />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

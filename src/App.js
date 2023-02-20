import { Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import ViewApi from './Pages/ViewApi';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/view-api' element={<ViewApi/>} />
    </Routes>

  );
}

export default App;

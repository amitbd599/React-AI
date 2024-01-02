
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Demo from './pages/Demo';
import HomeOne from './pages/HomeOne';

function App() {
  return (
    <BrowserRouter>
      {/* <RouteScrollToTop /> */}
      <Routes>
        <Route exact path='/' element={<Demo />} />
        <Route exact path='/index' element={<HomeOne />} />
      </Routes>
      {/* <ScrollToTop smooth color='#DE2021' /> */}
    </BrowserRouter>
  );
}

export default App;

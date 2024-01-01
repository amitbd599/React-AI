
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Demo from './pages/Demo';

function App() {
  return (
    <BrowserRouter>
      {/* <RouteScrollToTop /> */}
      <Routes>
        <Route exact path='/' element={<Demo />} />
      </Routes>
      {/* <ScrollToTop smooth color='#DE2021' /> */}
    </BrowserRouter>
  );
}

export default App;

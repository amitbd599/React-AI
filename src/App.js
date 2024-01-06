import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Demo from "./pages/Demo";
import HomeOne from "./pages/HomeOne";
import HomeTwo from "./pages/HomeTwo";
import HomeThree from "./pages/HomeThree";
import Error from "./pages/Error";
import About from "./pages/About";
import BlogDetails from "./pages/BlogDetails";

function App() {
  return (
    <BrowserRouter>
      {/* <RouteScrollToTop /> */}
      <Routes>
        <Route exact path="/" element={<Demo />} />
        <Route exact path="/index" element={<HomeOne />} />
        <Route exact path="/index-2" element={<HomeTwo />} />
        <Route exact path="/index-3" element={<HomeThree />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/blog-details" element={<BlogDetails />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
      {/* <ScrollToTop smooth color='#DE2021' /> */}
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';

//main pages
import Home from './pages/home';
import Details from './pages/details';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts/:postId" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

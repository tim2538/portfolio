import { Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Album from './pages/Album';
import Masonry from './pages/Album/Masonry';
import Design from './pages/Design';
import Error from './pages/Error';
import Home from './pages/Home';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="design" element={<Design />} />
        <Route path="album">
          <Route path="" element={<Album />} />
          <Route path=":albumName" element={<Masonry />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="error/:errorId" element={<Error />} />
        <Route path="*" element={<Navigate to="/error/404" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

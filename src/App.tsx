import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

export default function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

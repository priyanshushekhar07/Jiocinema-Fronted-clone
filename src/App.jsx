<<<<<<< HEAD
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
=======
import { BrowserRouter, Routes, Route } from 'react-router-dom';
>>>>>>> 2eec4a898327cf6814c7ee78b4fabde5e9ec9124
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
=======
        <Route path="/" element={<Home />} />
>>>>>>> 2eec4a898327cf6814c7ee78b4fabde5e9ec9124
      </Routes>
    </BrowserRouter>
  );
}

export default App;

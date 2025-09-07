// frontend/src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Roompage from './components/Roompage';
import Layout from './components/Layout'; // Import the new Layout

function App() {
  return (
    <BrowserRouter>
      <Routes>s the Layout component. */
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="room/:roomId" element={<Roompage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import BookingForm from './BookingForm.jsx';
import OldBookings from './OldBookings.jsx';
import SearchArtists from './SearchArtists.jsx';
import SuccessPage from './SuccessPage.jsx';

const App = () => {
  const handleRepeat = () => {
    
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchArtists />} />
        <Route path="/booking" element={<BookingForm />} />
        <Route path="/previous" element={<OldBookings />} />
        <Route path="/success" element={<SuccessPage onRepeat={handleRepeat} />} />
      </Routes>
    </Router>
  );
};

export default App;
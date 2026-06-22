import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MoviesPage from "./pages/MoviesPage";
import ShowtimePage from "./pages/ShowtimePage";
import SeatsPage from "./pages/SeatsPage";
import CheckoutPage from "./pages/CheckoutPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import BookingHistory from "./pages/BookingHistoryPage.jsx";

function App() {
	return (
		<div className='min-h-screen bg-zinc-950 text-white'>
			<Navbar />

			<div className='max-w-6xl mx-auto px-4 py-8'>
				<Routes>
					<Route path='/' element={<MoviesPage />} />

					<Route path='/showtimes' element={<ShowtimePage />} />

					<Route path='/seats' element={<SeatsPage />} />

					<Route path='/checkout' element={<CheckoutPage />} />

					<Route path='/confirmation' element={<ConfirmationPage />} />
					<Route path='/history' element={<BookingHistory />}></Route>
				</Routes>
			</div>
		</div>
	);
}

export default App;

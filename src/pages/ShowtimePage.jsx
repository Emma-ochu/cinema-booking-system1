import { useNavigate } from "react-router-dom";

import StepBar from "../components/StepBar";
import ShowtimeCard from "../components/ShowtimeCard";

import { showtimes } from "../data/showtimes";

import { useBooking } from "../context/BookingContext";

function ShowtimePage() {
	const navigate = useNavigate();

	const { movie, showtime, setShowtime } = useBooking();

	if (!movie) {
		navigate("/");
		return null;
	}

	return (
		<>
			<StepBar active={1} />

			<button
				onClick={() => navigate("/")}
				className='mt-6 mb-4 border border-zinc-700 px-4 py-2 rounded'
			>
				Back
			</button>

			<h2 className='text-xl font-bold'>
				{movie.emoji} {movie.title}
			</h2>

			<p className='text-zinc-400 mb-6'>{movie.genre}</p>

			<div className='grid md:grid-cols-3 gap-4'>
				{showtimes.map((item) => (
					<ShowtimeCard
						key={item.id}
						showtime={item}
						selected={showtime?.id === item.id}
						onClick={() => setShowtime(item)}
					/>
				))}
			</div>

			<button
				disabled={!showtime}
				onClick={() => navigate("/seats")}
				className='
        mt-8
        w-full
        py-3
        rounded-lg

        bg-blue-600

        disabled:bg-zinc-800
        disabled:text-zinc-500
        '
			>
				Pick Seats
			</button>
		</>
	);
}

export default ShowtimePage;

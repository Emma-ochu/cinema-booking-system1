import { useNavigate } from "react-router-dom";
import { useBooking } from "../context/BookingContext";

function MovieCard({ movie }) {
	const navigate = useNavigate();

	const { setMovie } = useBooking();

	const handleClick = () => {
		setMovie(movie);
		navigate("/showtimes");
	};

	return (
		<div
			onClick={handleClick}
			className='
      cursor-pointer
      bg-zinc-900
      rounded-xl
      border
      border-zinc-800
      hover:border-blue-500
      transition
      '
		>
			<div className='h-40 flex justify-center items-center text-6xl'>
				{movie.emoji}
			</div>

			<div className='p-4'>
				<h3 className='font-semibold'>{movie.title}</h3>

				<p className='text-sm text-zinc-400'>{movie.genre}</p>

				<p className='text-sm text-zinc-500'>{movie.duration}</p>

				<p className='mt-3 text-blue-500 font-bold'>₦{movie.price}</p>
			</div>
		</div>
	);
}

export default MovieCard;

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import StepBar from "../components/StepBar";
import SeatGrid from "../components/SeatGrid";

import { useBooking } from "../context/BookingContext";

function SeatsPage() {
	const navigate = useNavigate();

	const {
		movie,
		showtime,

		takenSeats,
		setTakenSeats,

		selectedSeats,
	} = useBooking();

	useEffect(() => {
		if (!showtime) return;

		const rows = ["A", "B", "C", "D", "E", "F"];

		let seats = [];

		rows.forEach((row) => {
			for (let i = 1; i <= 8; i++) {
				seats.push(row + i);
			}
		});

		let taken = [];

		while (taken.length < showtime.taken) {
			const randomSeat = seats[Math.floor(Math.random() * seats.length)];

			if (!taken.includes(randomSeat)) {
				taken.push(randomSeat);
			}
		}

		setTakenSeats(taken);
	}, [showtime]);

	if (!movie || !showtime) return null;

	return (
		<>
			<StepBar active={2} />

			<button
				onClick={() => navigate("/showtimes")}
				className='mt-6 mb-4 border border-zinc-700 px-4 py-2 rounded'
			>
				Back
			</button>

			<h2 className='text-xl font-bold'>Choose Seats</h2>

			<p className='text-zinc-400 mb-6'>{showtime.time}</p>

			<div className='bg-zinc-900 p-4 rounded-xl'>
				<div className='text-center mb-6 text-zinc-500'>SCREEN</div>

				<SeatGrid />
			</div>

			<div className='mt-6'>
				<h3>Selected: {selectedSeats.join(", ")}</h3>
			</div>

			<button
				disabled={selectedSeats.length === 0}
				onClick={() => navigate("/checkout")}
				className='
        mt-6
        w-full
        py-3
        rounded-lg
        bg-blue-600

        disabled:bg-zinc-800
        '
			>
				Continue
			</button>
		</>
	);
}

export default SeatsPage;

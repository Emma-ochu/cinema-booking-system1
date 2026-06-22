import { useBooking } from "../context/BookingContext";

const ROWS = ["A", "B", "C", "D", "E", "F"];

const COLS = 8;

function SeatGrid() {
	const { selectedSeats, setSelectedSeats, takenSeats } = useBooking();

	const toggleSeat = (seat) => {
		if (takenSeats.includes(seat)) return;

		if (selectedSeats.includes(seat)) {
			setSelectedSeats(selectedSeats.filter((s) => s !== seat));
		} else {
			setSelectedSeats([...selectedSeats, seat]);
		}
	};

	return (
		<div>
			{ROWS.map((row) => (
				<div key={row} className='flex justify-center gap-2 mb-2'>
					<span className='w-5 text-zinc-500'>{row}</span>

					{Array.from({ length: COLS }, (_, i) => {
						const seat = row + (i + 1);

						const selected = selectedSeats.includes(seat);

						const taken = takenSeats.includes(seat);

						return (
							<button
								key={seat}
								onClick={() => toggleSeat(seat)}
								className={`
                  w-8
                  h-8
                  rounded

                  ${
										taken ? "bg-zinc-800"
										: selected ? "bg-blue-600"
										: "bg-zinc-700"
									}
                  `}
							/>
						);
					})}
				</div>
			))}
		</div>
	);
}

export default SeatGrid;

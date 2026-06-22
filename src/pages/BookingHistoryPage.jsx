import { useEffect, useState } from "react";

function BookingHistory() {
	const [bookings, setBookings] = useState([]);

	useEffect(() => {
		try {
			const stored = JSON.parse(localStorage.getItem("bookings")) || [];
			// Optional: Ensure it's always an array in case localStorage gets corrupted
			setBookings(Array.isArray(stored) ? stored : []);
		} catch (error) {
			console.error("Error parsing bookings from localStorage:", error);
			setBookings([]);
		}
	}, []);

	// Empty state fallback so the user isn't staring at a blank screen
	if (bookings.length === 0) {
		return (
			<div className='text-center py-12'>
				<h1 className='text-2xl font-bold mb-2'>Booking History</h1>
				<p className='text-zinc-400'>You haven't booked any movies yet.</p>
			</div>
		);
	}

	return (
		<div>
			<h1 className='text-2xl font-bold mb-6'>Booking History</h1>

			<div className='space-y-4'>
				{bookings.map((booking, index) => (
					<div
						key={booking.bookingReference || index} // Preferred unique key over index if available
						className='bg-zinc-900 border border-zinc-800 rounded-xl p-4'
					>
						{/* Optional Chaining (?.) stops crashes if movie is undefined */}
						<h3 className='font-bold text-lg'>
							{booking.movie?.title || "Unknown Movie"}
						</h3>

						<p className='text-zinc-400 text-sm mt-1'>
							Ref:{" "}
							<span className='font-mono text-zinc-200'>
								{booking.bookingReference || "N/A"}
							</span>
						</p>

						<p className='text-zinc-400 text-sm'>
							Seats:{" "}
							<span className='text-zinc-200'>
								{booking.selectedSeats?.join(", ") || "None"}
							</span>
						</p>

						{/* Fallback to 0 if total doesn't exist */}
						<p className='mt-3 font-semibold text-emerald-400'>
							₦{(booking.total || 0).toLocaleString()}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default BookingHistory;

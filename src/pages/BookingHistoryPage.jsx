function BookingHistory() {
	const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

	return (
		<div>
			<h1 className='text-2xl font-bold mb-6'>Booking History</h1>

			<div className='space-y-4'>
				{bookings.map((booking, index) => (
					<div
						key={index}
						className='bg-zinc-900 border border-zinc-800 rounded-xl p-4'
					>
						<h3>{booking.movie.title}</h3>
						<p>Ref: {booking.bookingReference}</p>
						<p>Seats: {booking.selectedSeats.join(", ")}</p>
						<p>₦{booking.total.toLocaleString()}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default BookingHistory;

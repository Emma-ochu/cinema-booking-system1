import { useBooking } from "../context/BookingContext";

function ConfirmationTicket() {
	const { movie, showtime, customer, selectedSeats, bookingRef } = useBooking();

	const total = movie.price * selectedSeats.length;

	return (
		<div
			id='ticket'
			className='
      bg-zinc-900
      border
      border-zinc-800
      rounded-xl
      p-8
      max-w-2xl
      mx-auto
      '
		>
			<div className='text-center'>
				<h1 className='text-3xl font-bold'>🎟 Booking Confirmed</h1>

				<p className='text-zinc-400 mt-2'>Thank you for your purchase</p>
			</div>

			<div className='mt-8 space-y-4'>
				<div className='flex justify-between'>
					<span>Reference</span>
					<span>{bookingRef}</span>
				</div>

				<div className='flex justify-between'>
					<span>Movie</span>
					<span>{movie.title}</span>
				</div>

				<div className='flex justify-between'>
					<span>Showtime</span>
					<span>{showtime.time}</span>
				</div>

				<div className='flex justify-between'>
					<span>Hall</span>
					<span>{showtime.hall}</span>
				</div>

				<div className='flex justify-between'>
					<span>Customer</span>
					<span>{customer.name}</span>
				</div>

				<div className='flex justify-between'>
					<span>Email</span>
					<span>{customer.email}</span>
				</div>

				<div className='flex justify-between'>
					<span>Seats</span>
					<span>{selectedSeats.join(", ")}</span>
				</div>

				<hr className='border-zinc-700' />

				<div className='flex justify-between text-xl font-bold text-blue-500'>
					<span>Total</span>
					<span>₦{total.toLocaleString()}</span>
				</div>
			</div>
		</div>
	);
}

export default ConfirmationTicket;

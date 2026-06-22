import { useState } from "react";

import { useNavigate } from "react-router-dom";

import StepBar from "../components/StepBar";
import OrderSummary from "../components/OrderSummary";

import { useBooking } from "../context/BookingContext";

function CheckoutPage() {
	const navigate = useNavigate();

	const {
		movie,
		showtime,
		selectedSeats,

		customer,
		setCustomer,

		setBookingRef,
	} = useBooking();

	const [error, setError] = useState("");

	if (!movie || !showtime || selectedSeats.length === 0) {
		navigate("/");
		return null;
	}

	const generateRef = () => {
		return "CBS-" + Math.random().toString(36).substring(2, 8).toUpperCase();
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!customer.name || !customer.email || !customer.phone) {
			setError("Please complete all fields.");
			return;
		}

		const bookingReference = generateRef();

		setBookingRef(bookingReference);

		const booking = {
			movie,
			showtime,
			selectedSeats,
			customer,
			bookingReference,
			total: movie.price * selectedSeats.length,
			createdAt: new Date().toISOString(),
		};

		const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

		bookings.push(booking);

		localStorage.setItem("bookings", JSON.stringify(bookings));

		navigate("/confirmation");
	};

	return (
		<>
			<StepBar active={3} />

			<button
				onClick={() => navigate("/seats")}
				className='mb-6 border border-zinc-700 px-4 py-2 rounded'
			>
				Back
			</button>

			<div className='grid lg:grid-cols-2 gap-8'>
				<div className='bg-zinc-900 rounded-xl p-6 border border-zinc-800'>
					<h2 className='text-xl font-bold mb-6'>Customer Information</h2>

					<form onSubmit={handleSubmit} className='space-y-4'>
						<input
							type='text'
							placeholder='Full Name'
							value={customer.name}
							onChange={(e) =>
								setCustomer({ ...customer, name: e.target.value })
							}
							className='w-full bg-zinc-800 p-3 rounded'
						/>

						<input
							type='email'
							placeholder='Email Address'
							value={customer.email}
							onChange={(e) =>
								setCustomer({ ...customer, email: e.target.value })
							}
							className='w-full bg-zinc-800 p-3 rounded'
						/>

						<input
							type='tel'
							placeholder='Phone Number'
							value={customer.phone}
							onChange={(e) =>
								setCustomer({ ...customer, phone: e.target.value })
							}
							className='w-full bg-zinc-800 p-3 rounded'
						/>

						{error && <p className='text-red-500'>{error}</p>}

						<button
							type='submit'
							className='w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700'
						>
							Confirm Booking
						</button>
					</form>
				</div>

				<OrderSummary />
			</div>
		</>
	);
}

export default CheckoutPage;

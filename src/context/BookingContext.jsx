import { createContext, useContext, useState, useMemo } from "react";

// 1. Export the context so other files can reference it if needed (e.g., for testing)
export const BookingContext = createContext(undefined);

export const BookingProvider = ({ children }) => {
	const [movie, setMovie] = useState(null);
	const [showtime, setShowtime] = useState(null);
	const [selectedSeats, setSelectedSeats] = useState([]);
	const [takenSeats, setTakenSeats] = useState([]);
	const [customer, setCustomer] = useState({ name: "", email: "", phone: "" });
	const [bookingRef, setBookingRef] = useState("");

	// Note: 'bookings' state removed as it wasn't exposed in the value object.
	// If you need global bookings, add it back to the value object below.

	// 2. Memoize the context value to prevent unnecessary re-renders
	const value = useMemo(
		() => ({
			movie,
			setMovie,
			showtime,
			setShowtime,
			selectedSeats,
			setSelectedSeats,
			takenSeats,
			setTakenSeats,
			customer,
			setCustomer,
			bookingRef,
			setBookingRef,
		}),
		[movie, showtime, selectedSeats, takenSeats, customer, bookingRef],
	);

	return (
		<BookingContext.Provider value={value}>{children}</BookingContext.Provider>
	);
};

// 3. Added a safety check to the hook
export const useBooking = () => {
	const context = useContext(BookingContext);
	if (context === undefined) {
		throw new Error("useBooking must be used within a BookingProvider");
	}
	return context;
};

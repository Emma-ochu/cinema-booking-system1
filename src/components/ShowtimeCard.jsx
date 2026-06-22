function ShowtimeCard({ showtime, selected, onClick }) {
	const available = showtime.seats - showtime.taken;

	return (
		<div
			onClick={onClick}
			className={`
      cursor-pointer
      rounded-xl
      border
      p-4
      text-center

      ${
				selected ? "border-blue-500 bg-blue-950" : "border-zinc-800 bg-zinc-900"
			}
      `}
		>
			<h3 className='font-bold text-lg'>{showtime.time}</h3>

			<p className='text-zinc-400'>{showtime.hall}</p>

			<p className='text-zinc-500 text-sm'>{showtime.format}</p>

			<p className='mt-2 text-green-400'>{available} seats left</p>
		</div>
	);
}

export default ShowtimeCard;

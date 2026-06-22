function Navbar() {
	return (
		<header className='border-b border-zinc-800 bg-zinc-950'>
			<div className='max-w-6xl mx-auto px-4 py-4 flex justify-between'>
				<h1 className='text-xl font-bold'>
					Cinema
					<span className='text-blue-500'>Book</span>
				</h1>

				<p className='text-zinc-400'>Online Ticket Booking</p>
			</div>
		</header>
	);
}

export default Navbar;

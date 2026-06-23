import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav className='bg-zinc-950 border-b border-zinc-800'>
			<div className='max-w-6xl mx-auto px-4 py-4 flex justify-between'>
				<Link to='/' className='text-xl font-bold'>
					🎬 CinemaBook
				</Link>

				<div className='flex gap-6'>
					<Link to='/'>Movies</Link>

					<Link to='/history'>History</Link>

					<Link to='/admin'>Admin</Link>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;

import { useState } from "react";

import { movies as initialMovies } from "../data/movies";

function AdminPage() {
	const [movies, setMovies] = useState(initialMovies);

	const [newMovie, setNewMovie] = useState({
		title: "",
		genre: "",
		duration: "",
		price: "",
	});

	const addMovie = () => {
		const movie = {
			id: Date.now(),

			...newMovie,

			emoji: "🎬",

			rating: "PG",
		};

		setMovies([...movies, movie]);

		setNewMovie({ title: "", genre: "", duration: "", price: "" });
	};

	const deleteMovie = (id) => {
		setMovies(movies.filter((movie) => movie.id !== id));
	};

	return (
		<div>
			<h1 className='text-2xl font-bold mb-8'>Admin Dashboard</h1>

			<div className='bg-zinc-900 p-6 rounded-xl mb-8'>
				<h2 className='mb-4 font-bold'>Add Movie</h2>

				<div className='grid md:grid-cols-4 gap-3'>
					<input
						placeholder='Movie Title'
						value={newMovie.title}
						onChange={(e) =>
							setNewMovie({ ...newMovie, title: e.target.value })
						}
						className='bg-zinc-800 p-3 rounded'
					/>

					<input
						placeholder='Genre'
						value={newMovie.genre}
						onChange={(e) =>
							setNewMovie({ ...newMovie, genre: e.target.value })
						}
						className='bg-zinc-800 p-3 rounded'
					/>

					<input
						placeholder='Duration'
						value={newMovie.duration}
						onChange={(e) =>
							setNewMovie({ ...newMovie, duration: e.target.value })
						}
						className='bg-zinc-800 p-3 rounded'
					/>

					<input
						placeholder='Price'
						value={newMovie.price}
						onChange={(e) =>
							setNewMovie({ ...newMovie, price: e.target.value })
						}
						className='bg-zinc-800 p-3 rounded'
					/>
				</div>

				<button
					onClick={addMovie}
					className='
          mt-4
          bg-blue-600
          px-6
          py-3
          rounded-lg
          '
				>
					Add Movie
				</button>
			</div>

			<div className='grid gap-4'>
				{movies.map((movie) => (
					<div
						key={movie.id}
						className='
            bg-zinc-900
            p-4
            rounded-xl
            flex
            justify-between
            items-center
            '
					>
						<div>
							<h3>{movie.title}</h3>

							<p className='text-zinc-400'>{movie.genre}</p>
						</div>

						<button
							onClick={() => deleteMovie(movie.id)}
							className='
              bg-red-600
              px-4
              py-2
              rounded
              '
						>
							Delete
						</button>
					</div>
				))}
			</div>
		</div>
	);
}

export default AdminPage;

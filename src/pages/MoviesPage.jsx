import { useState } from "react";
import StepBar from "../components/StepBar";
import MovieCard from "../components/MovieCard";
import { movies } from "../data/movies";

function MoviesPage() {
	// 1. Moved the state inside the component
	const [search, setSearch] = useState("");

	return (
		<>
			<input
				type='text'
				placeholder='Search movies...'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				className='w-full bg-zinc-900 border border-zinc-800 p-3 rounded-lg mb-6'
			/>
			<StepBar active={0} />

			<h2 className='mt-8 mb-6 text-xl font-bold'>Now Showing</h2>

			<div className='grid md:grid-cols-4 gap-5'>
				{/* 2. Wrapped JavaScript logic in curly braces */}
				{movies
					.filter((movie) =>
						movie.title.toLowerCase().includes(search.toLowerCase()),
					)
					.map((movie) => (
						<MovieCard key={movie.id} movie={movie} />
					))}
			</div>
		</>
	);
}

export default MoviesPage;

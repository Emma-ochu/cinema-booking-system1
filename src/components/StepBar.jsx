function StepBar({ active }) {
	const steps = ["Movies", "Showtime", "Seats", "Checkout", "Done"];

	return (
		<div className='grid grid-cols-5 border border-zinc-800 rounded-lg overflow-hidden'>
			{steps.map((step, index) => (
				<div
					key={step}
					className={`
            py-3
            text-center

            ${
							active === index ?
								"bg-blue-600 text-white"
							:	"bg-zinc-900 text-zinc-500"
						}
          `}
				>
					{step}
				</div>
			))}
		</div>
	);
}

export default StepBar;

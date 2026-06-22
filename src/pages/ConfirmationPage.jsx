import { useNavigate } from "react-router-dom";

import StepBar from "../components/StepBar";
import ConfirmationTicket from "../components/ConfirmationTicket";

function ConfirmationPage() {
	const navigate = useNavigate();

	const printTicket = () => {
		window.print();
	};

	return (
		<>
			<StepBar active={4} />

			<div className='mt-8'>
				<ConfirmationTicket />

				<div className='flex gap-4 justify-center mt-8'>
					<button
						onClick={printTicket}
						className='
            bg-green-600
            px-6
            py-3
            rounded-lg
            '
					>
						Print Ticket
					</button>

					<button
						onClick={() => navigate("/")}
						className='
            bg-blue-600
            px-6
            py-3
            rounded-lg
            '
					>
						Book Another Movie
					</button>
				</div>
			</div>
		</>
	);
}

export default ConfirmationPage;

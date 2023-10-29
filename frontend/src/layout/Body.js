import SeatLayout from "../components/SeatLayout";

function Body({selectedSeats}) {
    return (
        <div className="main-app-body">
            <SeatLayout selectedSeats={selectedSeats} />
        </div>
    );
}

export default Body;
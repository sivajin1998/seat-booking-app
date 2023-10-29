import axios from "axios";

function Footer({selectedSeats}) {
    const resetAPI = () => {
        const res = axios.get("http://192.168.0.106:1001/reset_all");
        window.location.reload();
    }

    const bookSeatAPI = (selectedSeats) => {

        const noOfSeats = document.getElementById("no_of_seats").value;
        const seatsArr = new Array(...selectedSeats);

        if(noOfSeats != seatsArr.length) {
            alert("Seats Limit Exceeded");
            return;
        }

        axios.post("http://192.168.0.106:1001/book_seats", {
            seatIds: seatsArr
        })
        .then((response) => {
            console.log(response);
            window.location.reload();
        });

    }


    return(
        <div className="app-footer">

            <button className={`proceed-btn`} onClick={() => bookSeatAPI(selectedSeats)}>
                Proceed
            </button>

            <button className={`reset-btn`} onClick={() => resetAPI()}>
                Reset
            </button>

        </div>
    );
}

export default Footer;
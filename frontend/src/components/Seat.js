import { useRef } from "react";

const Seat = ({ id, number, available, seatType, selectedSeats }) => {

  const ref = useRef(null);

  const handleSeatClick = () => {
    const btnElement = ref.current;
    
    if(available) {

      if(seatType === "PREMIUM") {
        if(!document.getElementById("seat_type_pr").checked) {
          alert("Please select PREMIUM type");
          return;
        }
      } else {
        if(!document.getElementById("seat_type_st").checked) {
          alert("Please select STANDARD type");
          return;
        }
      }
      
      if(btnElement.classList.contains("seat-selected")) {
        btnElement.classList.remove("seat-selected");
        btnElement.classList.add("seat-available");
        if(selectedSeats.has(btnElement.id)) {
          selectedSeats.delete(btnElement.id);
        }
      } else {
        if(!selectedSeats.has(btnElement.id)) {
          selectedSeats.add(btnElement.id);
        }
        btnElement.classList.add("seat-selected");
      }
    }

    console.log(`selectedSeats: ${new Array(...selectedSeats).join(' ')}`)
  };

  const seatAvail = available ? "seat-available" : "seat-booked";

  return (
    <div class="seat">
      <button ref={ref} id={id} className={`seat-btn ${seatAvail}`} onClick={() => handleSeatClick()}>
        {number}
      </button>
    </div>
  );
};

export default Seat;

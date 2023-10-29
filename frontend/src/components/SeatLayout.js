import Seat from "./Seat";
import React, { useMemo, useState } from "react";
import axios from "axios";

function SeatLayout({selectedSeats}) {

    const [data, setData ] = useState("");
    const premiumSeats = [];
    const standardSeats = [];

    const getAllSeats = async (data) => {
        const res = await axios.get("http://192.168.0.106:1001/all_seats");
        const fetchedSeats = { standard: [], premium: [] };
        res.data.forEach((element) => {
          if (element.type === "PREMIUM") {
            fetchedSeats.premium.push(element);
          } else {
            fetchedSeats.standard.push(element);
          }
        });
        setData(fetchedSeats);
    };

    useMemo(async () => {
        await getAllSeats(data);
        // eslint-disable-next-line
    }, []);

    data?.premium?.forEach((element) => {
        premiumSeats.push(<Seat
            id={element.id}
            number={element.number}
            available={element.available}
            seatType={element.type}
            selectedSeats={selectedSeats}
        />);
    });

    data?.standard?.forEach((element) => {
        standardSeats.push(<Seat
            id={element.id}
            number={element.number}
            available={element.available}
            seatType={element.type}
            selectedSeats={selectedSeats}
        />);
    });


    return(
        <>
            <div className="seat-layout-holder">
                <div className="premium-seat-layout">
                    <label>Premium:</label>
                    <div className="seat-layout">
                        {premiumSeats || null}
                    </div>
                </div>
                <div className="standard-seat-layout">
                    <label>Standard:</label>
                    <div className="seat-layout">
                        {standardSeats || null}
                    </div>
                </div>
            </div>
            <div className="seat-book-info">
                <div className="seat-info seat-available">AVAILABLE</div>
                <div className="seat-info seat-booked">BOOKED</div>
                <div className="seat-info seat-selected">SELECTED</div>
            </div>
        </>
    );
}

export default SeatLayout;
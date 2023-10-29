function Header() {
    return (
        <div className="app-header">
            <h1>Book My Seat</h1>
            <label>Please select the seat type:</label>
            <div>
                <label for="premium_radio">
                    <input type="radio" id="seat_type_pr" name="seat_type" value="premium" />
                    Premium
                </label>
                <label for="standard_radio">
                    <input type="radio" id="seat_type_st" name="seat_type" value="standard" />
                    Standard
                </label>
            </div>
            <div>
                <label>Please enter the number:</label>
                <input id="no_of_seats" type="number" />
            </div>
        </div>
    );
}

export default Header;
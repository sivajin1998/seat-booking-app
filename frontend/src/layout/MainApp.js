import { useState } from "react";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

function MainApp() {

    const [selectedSeats, setSelectedSeats ] = useState(new Set([]));
   
    return (
        <div className="main-app">
            <Header/>
            <Body selectedSeats={selectedSeats} />
            <Footer selectedSeats={selectedSeats} />
        </div>
    );

}

export default MainApp;
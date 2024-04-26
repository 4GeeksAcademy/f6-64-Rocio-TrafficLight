
import React, { useState } from "react";
const TrafficLight = () => {
    const [selectedLight, setSelectedLight] = useState("");

    return (
        <div className="semaforo">
            <div onClick={()=> {setSelectedLight("red")}} className={`red ${selectedLight == "red" ? "shine":""}`}></div>
            <div onClick={()=> {setSelectedLight("yellow")}}className={`yellow ${selectedLight == "yellow" ? "shine":""}`}></div>
            <div onClick={()=> {setSelectedLight("green")}} className={`green ${selectedLight == "green" ? "shine":""}`}></div>
            <div onClick={()=> {setSelectedLight("black")}} className={`black ${selectedLight == "black" ? "shine":""}`}></div>

        </div>

    )
}



export default TrafficLight;
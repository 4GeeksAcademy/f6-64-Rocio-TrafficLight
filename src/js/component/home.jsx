import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import TrafficLight from "./trafficlight";

//create your first component
const Home = () => {
	
	return (
		<div className="text-center">
			<TrafficLight/>
		</div>
	);
};

export default Home;

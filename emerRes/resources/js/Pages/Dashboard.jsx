import { router } from "@inertiajs/react";
import NavigationBtn from "../Components/NavigationBtn";
import TopPanel from "../Components/TopPanel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation, faKitMedical, faTruckMedical } from "@fortawesome/free-solid-svg-icons";

function Dashboard() {
    
    return(
        <div className="md:bg-slate-950">
            <div className="flex-col-between m-auto md:w-[27rem] md:bg-white">
                <div>
                    <TopPanel/>
                    <div className="flex justify-around">
                        <div className="mt-5 h-56 w-40 card shadow-primary flex-col-between justify-center items-center border border-solid">
                            <FontAwesomeIcon className="text-primary text-6xl" icon={faTriangleExclamation} />
                            <p className="text-3xl mt-5 font-black">200</p>
                            <p>Active Reports</p>
                        </div>
                        <div>
                            <div className="card h-24 w-48 mt-6 shadow-third flex items-center justify-around border border-solid">
                                <FontAwesomeIcon className="text-5xl text-third" icon={faTruckMedical} />
                                <div>
                                    <p className="text-2xl font-black">12</p>
                                    <p className="text-xs">Available Ambulance</p>
                                </div>
                            </div>
                            <div className="card h-24 w-48 mt-6 shadow-third flex items-center justify-around border border-solid">
                                <FontAwesomeIcon className="text-5xl text-third" icon={faKitMedical} />
                                <div>
                                    <p className="text-2xl font-black">12</p>
                                    <p>Today Rescue</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <NavigationBtn/>
                
            </div>
        </div>
    )
}
export default Dashboard;
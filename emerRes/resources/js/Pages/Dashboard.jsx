import { router } from "@inertiajs/react";
import NavigationBtn from "./NavigationBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation, faKitMedical, faTruckMedical } from "@fortawesome/free-solid-svg-icons";

function Dashboard() {
    const logout = (e) => {
        e.preventDefault();
        router.post('/logout');
    }
    return(
        <div className="flex-col-between">
            <div>
                <div className="h-16 shadow-md flex items-center justify-between p-5 text-primary">
                    <p className="font-extrabold text-xl">Dashboard</p>
                    <button onClick={(e) =>{logout(e)}}>Logout</button>
                </div>
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
    )
}
export default Dashboard;
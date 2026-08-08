import { router, usePage } from "@inertiajs/react";
import NavigationBtn from "../Components/NavigationBtn";
import TopPanel from "../Components/TopPanel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation, faKitMedical, faTruckMedical } from "@fortawesome/free-solid-svg-icons";
import AmbulanceDashboard from "@/Components/dashboards/AmbulanceDashboard";
import HospitalDashboard from "@/Components/dashboards/HospitalDashboard";
import UserDashboard from "@/Components/dashboards/UserDashboard";

function Dashboard({reports}) {
    const hour = new Date().getHours();

    const greeting = () => {
        if (hour < 12) {
            return "Good Morning,"
        }else if(hour < 18){
            return "Good Afternoon,"
        }else{
            return "Good Evening,"
        }
    }
    return(
        <div className="md:bg-slate-950">
            <div className="flex-col-between m-auto md:w-[27rem] md:bg-white">
                <TopPanel/>
                {/*<AmbulanceDashboard reports={reports} greeting={greeting()}/>*/}
                <HospitalDashboard reports={reports} greeting={greeting()} />
                {/*<UserDashboard reports={reports} greeting={greeting()}/> */}
                <NavigationBtn/>
                
            </div>
        </div>
    )
}
export default Dashboard;
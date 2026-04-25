import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faHospital, faTruckMedical, faMap } from "@fortawesome/free-solid-svg-icons";
function NavigationBtn(){
    return(
        <div className="text-3xl text-white h-16 flex justify-around items-center bg-primary ">
            <FontAwesomeIcon icon={faChartLine} />
            <FontAwesomeIcon icon={faHospital} />
            <FontAwesomeIcon icon={faTruckMedical} />
            <FontAwesomeIcon icon={faMap} />
        </div>
    )
}
export default NavigationBtn;
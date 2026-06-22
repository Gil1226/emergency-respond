import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faHospital, faTruckMedical, faMap } from "@fortawesome/free-solid-svg-icons";
import { Link, usePage } from "@inertiajs/react";

function NavigationBtn(){
    const { url } = usePage();
    return(
        <div className="text-3xl text-white h-16 flex justify-around items-center bg-primary ">
            <Link href="/dashboard" className={url == "/dashboard" && "text-secondary"}>
                <FontAwesomeIcon icon={faChartLine} />
            </Link>
            <Link href="/hospital" className={url == "/hospital" && "text-secondary"}>
                <FontAwesomeIcon icon={faHospital} />
            </Link>
            <Link href="/respond" className={url == "/respond" && "text-secondary"}>
                <FontAwesomeIcon icon={faTruckMedical} />
            </Link >
            <Link href="/map" className={url == "/map" && "text-secondary"}>
                <FontAwesomeIcon icon={faMap} />
            </Link>
        </div>
    )
}
export default NavigationBtn;
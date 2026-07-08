import { router } from "@inertiajs/react";
import {usePage} from "@inertiajs/react";
function TopPanel(){
    const { url } = usePage();

    const logout = (e) => {
        e.preventDefault();
        router.post('/logout');
    }
    return(
        <div className="h-16 shadow-md flex items-center justify-between p-5 text-primary">
            <p className="font-extrabold text-xl">
                {url.startsWith('/dashboard') && "Dashboard"}
                {url.startsWith('/hospital') && "Hospital"}
                {url.startsWith('/respond') && "Respond"}
                {url.startsWith('/map') && "Map"}
            </p>
            <button onClick={(e) =>{logout(e)}}>Logout</button>
        </div>
    )
}

export default TopPanel;
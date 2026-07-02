import { useForm, usePage } from "@inertiajs/react";
import CurrentLocation from "@/Utility/CurrentLocation";
import { useEffect } from "react";

function AddReportAccident({ setShowReportAccident }){

    const{ auth } = usePage().props;

    const {data, setData, post, processing, error} = useForm({
        location : "",
        relationship: "",
        severity : "",
        picture: null,
        description: "",
        lat: "",
        long: ""
    })

    console.log(data)
    useEffect(()=>{
        const getLocation = async () => {
            const loc = await CurrentLocation();
            setData("location", `${loc.address.neighbourhood} ${loc.address.town}, ${loc.address.state}`);
            setData('lat', loc.latitude);
            setData('long', loc.longitude);
        }
        getLocation();
    }, []);

    const close = () => {
        setShowReportAccident(false)
    }

    const addReportFunc = (e) => {
        e.preventDefault();
        post('/addReport', {
            forceFormData: true,

            onSuccess: (response) => {
                console.log(response);
            },

            onError: (error) => {
                console.log(error);
            }
        });
    }

    return(
        <div>
            <form className="p-12 bg-[#f1f1f1] h-[83vh] flex flex-col justify-around" onSubmit={(e) => addReportFunc(e)}>
                <p className="ml-auto -mt-16 text-lg" onClick={close}>x</p>
                <div className="relative">
                    <input type="text" placeholder=" " name="reportedBy" className="inputDesign peer"
                            value={auth.user.name}
                            readOnly/>
                    <label className="labelPosition">Reported by:</label>
                </div>
                <div className="relative">
                    <input type="text" placeholder=" " name="contact_number" className="inputDesign peer"
                            value={auth.user.contact_number}
                            readOnly/>
                    <label className="labelPosition">Contact Number:</label>
                </div>
                <div className="relative">
                    <input type="text" placeholder=" " name="location" className="inputDesign peer"
                            value={data.location}
                            readOnly/>
                    <label className="labelPosition">Location:</label>
                </div>
                <div className="relative flex justify-between">
                    <div>
                        <p>Relationship:</p>
                        <select className="w-40 dropdown" onChange={(e) => setData("relationship", e.target.value)}>
                            <option value="">Select Relationship</option>
                            <option value="victim">Victim</option>
                            <option value="witness">Witness</option>
                            <option value="passerby">Passerby</option>
                        </select>
                    </div>
                    
                    <div>
                        <p>Severity Level:</p>
                        <select className="w-40 dropdown" onChange={(e) => setData("severity", e.target.value)}>
                            <option value="">Select Severity</option>
                            <option value="minor">Minor</option>
                            <option value="moderate">Moderate</option>
                            <option value="severe">Severe</option>
                            <option value="critical">Critical</option>
                        </select>
                    </div>
                </div>
                <div>
                    <p>Description (optional):</p>
                    <textarea 
                        name="description" 
                        className="w-full"
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                    >

                    </textarea>
                </div>
                <div>
                    <p>Attach Picture of Incident:</p>
                    <input 
                        type="file" 
                        accept="image/*"
                        capture="environment"
                        onChange={(e) => setData("picture", e.target.files[0])}
                    />
                </div>
                <input type="submit" className="button-style-2 w-[24vw] h-11 ml-auto mr-auto"/>
            </form>
        </div>
    )   
}

export default AddReportAccident;
import { useForm } from "@inertiajs/react";

function AddHospital({setShowAddHospital}) {
    const close = () => {
        setShowAddHospital(false);
    }

    const {data, setData, post, processing, errors} = useForm({
        hospitalName: "",
        hospitalAddress: "", 
        availableERBed: "",
        availableICUBed: "",
        availableAmbulance: ""
    })

    const addHospitaFunc = (e) => {
        e.preventDefault();
        post("/addHospital")
        setShowAddHospital(false);
    }
    return(
        <div>
            <form className="p-12 bg-[#f1f1f1] h-[83vh] flex flex-col justify-around" onSubmit={(e) => addHospitaFunc(e)}>
                <p className="ml-auto -mt-16 text-lg" onClick={close}>x</p>
                <div className="relative">
                    <input type="text" placeholder=" " name="hospitalName" className="inputDesign peer"
                            value={data.hospitalName}
                            onChange={(e) => setData("hospitalName", e.target.value)}/>
                    <label className="labelPosition">Hospital Name</label>
                </div>
                <div className="relative">
                    <input type="text" placeholder=" " name="hospitalAddress" className="inputDesign peer"
                            value={data.hospitalAddress}
                            onChange={(e) => setData("hospitalAddress", e.target.value)}/>
                    <label className="labelPosition">Hospital Address</label>
                </div>
                <div className="relative">
                    <input type="text" placeholder=" " name="availableERBed" className="inputDesign peer"
                            value={data.availableERBed}
                            onChange={(e) => setData("availableERBed", e.target.value)}/>
                    <label className="labelPosition">Available ER Bed</label>
                </div>
                <div className="relative">
                    <input type="text" placeholder=" " name="availableICUBed" className="inputDesign peer"
                            value={data.availableICUBed}
                            onChange={(e) => setData("availableICUBed", e.target.value)}/>
                    <label className="labelPosition">Available ICU Bed</label>
                </div>
                <div className="relative">
                    <input type="text" placeholder=" " name="availableAmbulance" className="inputDesign peer"
                            value={data.availableAmbulance}
                            onChange={(e) => setData("availableAmbulance", e.target.value)}/>
                    <label className="labelPosition">Available Ambulance</label>
                </div>
                <input type="submit" className="button-style-2 ml-auto mr-auto w-[24vw] h-11"/>
            </form>
        </div>
    )
}

export default AddHospital;

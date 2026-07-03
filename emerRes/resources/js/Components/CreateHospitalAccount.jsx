import { useForm } from "@inertiajs/react"

function CreateHospitalAccount({setShowCreateAcc}) {
    const {data, setData, post, processing, errors} = useForm({
        name: "",
        email: "",
        contact_number: "",
        password: "",
        password_confirmation: "",
        is_verified: true,
        role: ""
    })
    const createAccFunc = (e) => {
        e.preventDefault()
        post("/createAcc", {
            onError: (errors) => {
                console.log(errors);
            },
            onSuccess: () => {
                setShowCreateAcc(false);
            },
        });
    }
    console.log(data)
    const close = () => {
        setShowCreateAcc(false)
    }


    return(
        <div>
            <form className="p-12 bg-[#f1f1f1] h-[76vh] flex flex-col justify-around" onSubmit={(e) => createAccFunc(e)}>
                <p className="text-2xl font-bold">Create Hospital Account</p>
                <div className="relative">
                    <input type="text" placeholder=" " name="hospitalName" className="inputDesign peer"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}/>
                    <label className="labelPosition">Hospital Name:</label>
                </div>
                <div className="relative">
                    <input type="text" placeholder=" " name="email" className="inputDesign peer"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}/>
                    <label className="labelPosition">Email:</label>
                </div>
                <div className="relative">
                    <input type="text" placeholder=" " name="contact_number" className="inputDesign peer"
                            value={data.contact_number}
                            onChange={(e) => setData("contact_number", e.target.value)}/>
                    <label className="labelPosition">Contact Number:</label>
                </div>
                <div className="relative">
                    <input type="text" placeholder=" " name="password" className="inputDesign peer"
                            value={data.password}
                            onChange={(e) => setData("password", e.target.value)}/>
                    <label className="labelPosition">Password:</label>
                </div>
                <div className="relative">
                    <input type="text" placeholder=" " name="confirmPassword" className="inputDesign peer"
                            value={data.password_confirmation}
                            onChange={(e) => setData("password_confirmation", e.target.value)}/>
                    <label className="labelPosition">Confirm Password:</label>
                </div>
                <div>
                    <label>
                        <input type="radio" 
                                name="role"
                                value="hospital"
                                checked={data.role === "hospital"}
                                onChange={(e) => setData('role', e.target.value)}/>
                        <span>For Hospital Admin</span>
                    </label>
                    <label>
                        <input type="radio" 
                                name="role"
                                value="ambulance"
                                checked={data.role === "ambulance"}
                                onChange={(e) => setData('role', e.target.value)}/>
                        <span>For Ambulance</span>
                    </label>
                </div>
                <div className="flex justify-center gap-5">
                    <button type="button" className="button-style-2 w-[24vw] h-11" onClick={close}>Cancel</button>
                    <button type="submit" className="button-style-2 w-[24vw] h-11" disabled={processing}>Submit</button>
                </div>
            </form>
        </div>
    )
}
export default CreateHospitalAccount;
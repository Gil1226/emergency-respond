import { useForm, usePage } from "@inertiajs/react";
import { useState } from "react";

function OtpConfirmation(){
    const { props } = usePage();
    const email = props.email;

    const [isEmpty, setIsEmpty] = useState();
    const {data, setData, post, processing, errors} = useForm({
        guess: "",
        email: email
    })

    const guessOtp = (e) => {
        e.preventDefault();
        if (data.guess.trim() === "") {
            setIsEmpty(true)
            return
        }
        setIsEmpty(false)
        post('/otp')
    }

    return(
        <div className="h-screen flex items-center justify-center bg-gradient-to-b from-secondary to-primary">
            <div className="h-80 w-72 card flex flex-col items-center justify-around">
                <p className="text-xl font-bold">Verify Account</p>
                <form onSubmit={(e) => guessOtp(e)} className="flex flex-col items-center justify-center">
                    <input type="text" 
                            name="guess"
                            value={data.guess}
                            onChange={(e) => setData('guess', e.target.value)}/>
                    <input type="submit" className="border-2 border-slate-900 p-2 mt-4 rounded-xl"/>
                    <p className="mt-4">Verify this email <br></br>{email}</p>
                </form>
                
                <div>
                    {errors.general && !isEmpty && <p className="text-red-700">{errors.general}</p>}
                    {errors.guess && !isEmpty && <p className="text-red-700">{errors.guess}</p>}
                    {isEmpty && <p className="text-red-700">Must not Empty</p>}
                </div>
            </div>
        </div>
    )
}
export default OtpConfirmation;
import { useForm, usePage } from "@inertiajs/react";

function OtpConfirmation(){
    const { props } = usePage();
    const email = props.email;

    const {data, setData, post, processing, errors} = useForm({
        guess: "",
        email: email
    })

    const guessOtp = (e) => {
        e.preventDefault();
        post('/otp')
    }

    return(
        <div>
            <div>
                <p>Verify Account</p>
                <form onSubmit={(e) => guessOtp(e)}>
                    <input type="text" 
                            name="guess"
                            value={data.guess}
                            onChange={(e) => setData('guess', e.target.value)}/>
                    <input type="submit" />
                </form>
                <div>
                    {errors.general && <p>{errors.general}</p>}
                    {errors.guess && <p>{errors.guess}</p>}
                </div>
            </div>
        </div>
    )
}
export default OtpConfirmation;
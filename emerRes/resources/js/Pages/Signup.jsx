import { useForm } from "@inertiajs/react";

function Signup(){
    const {data, setData, post, processing, errors} = useForm({
        name: "",
        contact_number: "",
        email: "",
        password: "",
        role: "user"
    })

    const signUp = (e) => {
        e.preventDefault();
        post("/sign-up");
    }
    
    return(
        <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-secondary to-primary">
            <div className="absolute top-6 left-6">
                <a
                    href="/"
                    className="flex items-center gap-2 text-white/80 hover:text-white 
                            transition-all duration-200 group"
                >
                    <span className="text-xl group-hover:-translate-x-1 transition-transform">
                        ←
                    </span>

                    <span className="text-sm font-medium">
                        Back to landing page
                    </span>
                </a>
            </div>
            <div className="mb-[100px] mt-[-100px]">
                <p className="title text-white">Emergency Respond</p>
            </div>

            <div>
                <div className="h-96 w-72 p-10 flex flex-col items-center justify-around card">
                    <p className="title">Sign Up</p>
                    <form onSubmit={(e) => signUp(e)}>
                        <div className="flex flex-col ">
                            <label htmlFor="" className="mt-[10px]">Username:</label>
                            <input type="text" name="name" className="input-text h-5"
                                    value={data.name}
                                    onChange={(e) => setData("name", e.target.value)}/>
                        </div>
                        <div className="flex flex-col ">
                            <label htmlFor="" className="mt-[10px]">Phone Number:</label>
                            <input type="text" name="contact_number" className="input-text h-5"
                                    value={data.contact_number}
                                    onChange={(e) => setData("contact_number", e.target.value)}/>
                        </div>
                        <div className="flex flex-col ">
                            <label htmlFor="" className="mt-[10px]">Email:</label>
                            <input type="text" name="email" className="input-text h-5"
                                    value={data.email}
                                    onChange={(e) => setData("email", e.target.value)}/>
                        </div>
                        <div className="flex flex-col ">
                            <label htmlFor="" className="mt-[10px]">Password:</label>
                            <input type="password" name="password" className="input-text h-5"
                                    value={data.password}
                                    onChange={(e) => setData("password", e.target.value)}/>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <input type="submit" className="h-10 w-28 button-style mt-[20px]"/>
                        </div>
                    </form>
                    {errors.exists && <p>errors.exists</p>}
                </div>
                <p className="text-center text-white">Create an Account? <a href="/login" className="link">Login</a></p>
            </div>
        </div>
    )
}

export default Signup;
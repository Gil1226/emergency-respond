function Signup(){
    return(
        <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-secondary to-primary">
             <div className="mb-[100px] mt-[-100px]">
                <p className="title text-white">Emergency Respond</p>
            </div>

            <div>
                <div className="h-81 w-72 p-10 flex flex-col items-center justify-around card">
                    <p className="title">Sign Up</p>
                    <form action="/sign-up" method="post">
                        <div className="flex flex-col ">
                            <label htmlFor="" className="mt-[10px]">Username:</label>
                            <input type="text" name="name" className="input-text h-5"/>
                        </div>
                        <div className="flex flex-col ">
                            <label htmlFor="" className="mt-[10px]">Phone Number:</label>
                            <input type="text" name="contact_number" className="input-text h-5"/>
                        </div>
                        <div className="flex flex-col ">
                            <label htmlFor="" className="mt-[10px]">Email:</label>
                            <input type="text" name="email" className="input-text h-5"/>
                        </div>
                        <div className="flex flex-col ">
                            <label htmlFor="" className="mt-[10px]">Password:</label>
                            <input type="password" name="password" className="input-text h-5"/>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <input type="submit" className="h-10 w-28 button-style mt-[20px]"/>
                        </div>
                    </form>
                </div>
                <p className="text-center text-white">Create an Account? <a href="/" className="link">Login</a></p>
            </div>
        </div>
    )
}

export default Signup;
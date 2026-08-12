import { router, useForm } from "@inertiajs/react";
function Login(){
    const {data, setData, post, processing, errors} = useForm({
        email: "",
        password: ""
    })
    const login = (e) =>{
        e.preventDefault();
        post('/login');
    } 
    const verify = (e, email) => {
        e.preventDefault();
        post('/verify', {
            data: {
                'email': email
            }
        });
    }
    return(
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-secondary to-primary px-4 py-16">
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                <a
                    href="/"
                    className="flex items-center gap-2 text-white/80 hover:text-white
                            transition-all duration-200 group"
                >
                    <span className="text-xl group-hover:-translate-x-1 transition-transform">
                        ←
                    </span>

                    <span className="text-sm font-medium hidden sm:inline">
                        Back to landing page
                    </span>
                </a>
            </div>

            <div className="mb-8 sm:mb-10">
                <p className="title text-white text-2xl sm:text-3xl text-center">Emergency Respond</p>
            </div>

            <div className="max-w-sm">
                <div className="h-96 w-72 p-10 flex flex-col items-center justify-around card">
                    <p className="title">Login</p>
                    <form onSubmit={login} className="w-full">
                        <div className="flex flex-col">
                            <label htmlFor="" className="mt-[20px]">Email:</label>
                            <input type="text"
                                name="email"
                                className="input-text h-8 w-full"
                                onChange={(e) => setData('email', e.target.value)}
                                value={data.email}/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="mt-[20px]">Password:</label>
                            <input type="password"
                                name="password"
                                className="input-text h-8 w-full"
                                onChange={(e) => setData('password', e.target.value)}
                                value={data.password}/>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <input type="submit" className="h-10 w-28 button-style mt-[20px]"/>
                            <a href="" className="link mt-3">Forget Password</a>
                        </div>
                    </form>
                    <div className="mt-7 text-red-700 text-center">
                        {errors.general && <p className="text-xs">{errors.general}</p>}
                        {errors.email && <p>{errors.email}</p>}
                        {errors.password && <p>{errors.password}</p>}
                        {errors.notVerify && <div><p>{errors.notVerify}</p><p className="text-center underline text-black cursor-pointer" onClick={(e) => verify(e, data.email)}>Verify now</p></div>}
                    </div>
                </div>
                <p className="text-center text-white mt-4">Create an Account? <a href="sign-up" className="link">Sign up</a></p>
            </div>
        </div>

    )
}

export default Login;
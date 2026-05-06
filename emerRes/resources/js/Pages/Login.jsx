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
    return(
        <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-secondary to-primary">
            <div className="mb-[100px] mt-[-100px]">
                <p className="title text-white">Emergency Respond</p>
            </div>

            <div>
                <div className="h-81 w-72 p-10 flex flex-col items-center justify-around card">
                    <p className="title">Login</p>
                    <form onSubmit={login}>
                        <div className="flex flex-col ">
                            <label htmlFor="" className="mt-[20px]">Email:</label>
                            <input type="text" 
                                name="email" 
                                className="input-text h-8"
                                onChange={(e) => setData('email', e.target.value)}
                                value={data.name}/>
                                
                        </div>
                        <div className="flex flex-col ">
                            <label htmlFor="" className="mt-[20px]">Password:</label>
                            <input type="password" 
                                name="password" 
                                className="input-text h-8"
                                onChange={(e) => setData('password', e.target.value)}
                                value={data.password}/>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <input type="submit" className="h-10 w-28 button-style mt-[20px]"/>
                            <a href="" className="link mt-3">Forget Password</a>
                        </div>
                    </form>
                    <div className="mt-7 text-red-700">
                        {errors.general && <p className=" text-xs">{errors.general}</p>}
                        {errors.email && <p>{errors.email}</p>}
                        {errors.password && <p>{errors.password}</p>}
                        {errors.notVerify && <p>{errors.notVerify}</p>}
                    </div>
                    
                </div>
                <p className="text-center text-white">Create an Account? <a href="sign-up" className="link">Sign up</a></p>
            </div>
        </div>
    )
}

export default Login;
import { useForm } from "@inertiajs/react"

function CreateHospitalAccount({setShowCreateAcc, selectedHospital}) {
    const {data, setData, post, processing, errors} = useForm({
        name: "",
        email: "",
        contact_number: "",
        password: "",
        password_confirmation: "",
        is_verified: true,
        role: "",
        hospital_id: selectedHospital.id
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
    const close = () => {
        setShowCreateAcc(false)
    }


    return(
        <div className="bg-[#f5f6fa] rounded-2xl shadow-xl p-8">
            <form
                onSubmit={createAccFunc}
                className="flex flex-col h-full"
            >
                {/* Header */}
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-primary">
                        Create Hospital Account
                    </h2>

                    <p className="text-gray-500 mt-1">
                        Create an account for a hospital administrator or ambulance personnel.
                    </p>
                </div>

                {/* Account Information */}
                <div className="bg-white rounded-xl shadow-sm p-6 space-y-5">
                    <h3 className="font-semibold text-lg text-gray-700">
                        Account Information
                    </h3>

                    <div className="relative">
                        <input
                            id="hospitalName"
                            type="text"
                            placeholder=" "
                            className="inputDesign peer"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                        />
                        <label
                            htmlFor="hospitalName"
                            className="labelPosition"
                        >
                            Hospital Name
                        </label>
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                        <div className="relative">
                            <input
                                id="email"
                                type="email"
                                placeholder=" "
                                className="inputDesign peer"
                                value={data.email}
                                onChange={(e) => setData("email", e.target.value)}
                            />
                            <label
                                htmlFor="email"
                                className="labelPosition"
                            >
                                Email Address
                            </label>
                        </div>

                        <div className="relative">
                            <input
                                id="contactNumber"
                                type="text"
                                placeholder=" "
                                className="inputDesign peer"
                                value={data.contact_number}
                                onChange={(e) =>
                                    setData("contact_number", e.target.value)
                                }
                            />
                            <label
                                htmlFor="contactNumber"
                                className="labelPosition"
                            >
                                Contact Number
                            </label>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                        <div className="relative">
                            <input
                                id="password"
                                type="password"
                                placeholder=" "
                                className="inputDesign peer"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />
                            <label
                                htmlFor="password"
                                className="labelPosition"
                            >
                                Password
                            </label>
                        </div>

                        <div className="relative">
                            <input
                                id="confirmPassword"
                                type="password"
                                placeholder=" "
                                className="inputDesign peer"
                                value={data.password_confirmation}
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value
                                    )
                                }
                            />
                            <label
                                htmlFor="confirmPassword"
                                className="labelPosition"
                            >
                                Confirm Password
                            </label>
                        </div>
                    </div>
                </div>

                {/* Role */}
                <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
                    <h3 className="font-semibold text-lg text-gray-700 mb-4">
                        Account Role
                    </h3>

                    <div className="grid grid-cols-2 gap-4">
                        <label
                            htmlFor="hospitalRole"
                            className={`border rounded-xl p-4 cursor-pointer transition ${
                                data.role === "hospital"
                                    ? "border-primary bg-primary/10"
                                    : "border-gray-300 hover:border-primary"
                            }`}
                        >
                            <input
                                id="hospitalRole"
                                type="radio"
                                name="role"
                                value="hospital"
                                checked={data.role === "hospital"}
                                onChange={(e) =>
                                    setData("role", e.target.value)
                                }
                                className="hidden"
                            />

                            <p className="font-semibold">
                                🏥 Hospital Admin
                            </p>
                        </label>

                        <label
                            htmlFor="ambulanceRole"
                            className={`border rounded-xl p-4 cursor-pointer transition ${
                                data.role === "ambulance"
                                    ? "border-primary bg-primary/10"
                                    : "border-gray-300 hover:border-primary"
                            }`}
                        >
                            <input
                                id="ambulanceRole"
                                type="radio"
                                name="role"
                                value="ambulance"
                                checked={data.role === "ambulance"}
                                onChange={(e) =>
                                    setData("role", e.target.value)
                                }
                                className="hidden"
                            />

                            <p className="font-semibold">
                                🚑 Ambulance Personnel
                            </p>
                        </label>
                    </div>
                </div>

                {/* Buttons */}
                <div className="mt-auto pt-8 flex justify-end gap-4">
                    <button
                        type="button"
                        onClick={close}
                        className="px-8 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        disabled={processing}
                        className="px-8 py-3 rounded-lg bg-primary text-white hover:opacity-90 disabled:opacity-50 transition"
                    >
                        Create Account
                    </button>
                </div>
            </form>
        </div>
    )
}
export default CreateHospitalAccount;
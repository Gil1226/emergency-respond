import { router } from '@inertiajs/react';
function RespondForm({setShowRespondForm, reportClickedVal}) {

    const close = () => {
        setShowRespondForm(false)
    }

    const respond = () => {
        setShowRespondForm(false)
        console.log(reportClickedVal.id)
        router.get(`/map/${reportClickedVal.id}`)
    }

    return(
        <div>
            <div className="px-10 pb-7 bg-[#f1f1f1] h-[77vh] flex flex-col justify-around">
                <div>
                    <p className="text-2xl font-bold">Severity Level: {reportClickedVal.severity}</p>
                    <p>{reportClickedVal.location}</p>
                </div>
                <div>
                    <div>
                        <p>Description: </p>
                        <p className="bg-white mb-2 border-2 w-full h-28 p-2">{reportClickedVal.description ? reportClickedVal.description : "no description reported"}</p>
                    </div>
                    
                    <div className="h-[35vh] overflow-scroll">
                        <img src={`/storage/${reportClickedVal.picture}`} alt="no picture provided" className=" "/>
                    </div>
                </div>
                <div className="flex justify-around">
                    <button className="button-style-2 w-[24vw] h-11" onClick={close}>Cancel</button>
                    <button className="button-style-2 w-[24vw] h-11" onClick={respond}>Respond</button>
                </div>
            </div>
        </div>
    )
}

export default RespondForm;
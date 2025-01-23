import { useEffect, useState } from "react"


const UserDashboard = () => {
    let [joblist, setJoblist] = useState([]);

    const getjob = () => {
        fetch("http://localhost:1234/applyapi?id="+localStorage.getItem("userid"))
            .then(response => response.json())
            .then(info => {
                setJoblist(info);
            })
    }
    
    useEffect(() => {
        getjob();
    },[]);
 
   
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-xl-12">
                <h2 className="mt-4 text-center"> You Have Applied For <br/> {joblist.length} Jobs </h2>
                </div>
            </div>
        </div>
    )
}



export default UserDashboard;
import App from "./App";
import CompanyModule from "./Company/companyapp";
import UserModule from "./User/userapp";


const MainModule = () =>{
    if(localStorage.getItem("userid")==null){
        return(
            <App/>
        )
    }else{

        if(localStorage.getItem("usertype")==="USER"){
            return(
                <UserModule/>
            )
        }else{
            return(
                <CompanyModule/>
            )
        }
    }
}

export default MainModule;
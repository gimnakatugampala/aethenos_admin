import ErrorAlert from "commonFunctions/Alerts/ErrorAlert";

export const AdminLogin = (email, password,setloading) =>{

    setloading(true)

    var formdata = new FormData();
    formdata.append("email", `${email}`);
    formdata.append("password", `${password}`);

    var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
    };

    fetch("https://aethenosinstructor.exon.lk:2053/aethenos-api/authentication/admin", requestOptions)
    .then(response => response.json())
    .then(result => {
        console.log(result)

        if(result.message == "not an admin."){
            setloading(false)
            ErrorAlert(result.message,result.variable)
            return
        }else if(result.message == "incorrect password."){
            setloading(false)
            ErrorAlert(result.message,result.variable)
            return
        }else if(result.message == "User not found"){
            setloading(false)
            ErrorAlert(result.message,result.variable)
            return
        }else{
            
            setloading(false)

            const user = {
                token:result.token,
                email:result.email,
                firstname:result.fname,
                lastname:result.lname,
                status:"Admin"
              }
      
              window.localStorage.setItem("aethenos", JSON.stringify(user));
      
      
              window.location.href = `/dashboard/default`
        }

    })
    .catch(error => console.log('error', error));
}
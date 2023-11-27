import ErrorAlert from "commonFunctions/Alerts/ErrorAlert";
import SuccessAlert from "commonFunctions/Alerts/SuccessAlert";

const CURRENT_USER = JSON.parse(window.localStorage.getItem("aethenos"));

// Unauthorized
const Unauthorized = (result,rediect_url) =>{

    if(result == 401){
      window.localStorage.removeItem("aethenos")
      window.location.href = `/login?sessionTimeout=true&rediect-url=${rediect_url}`
    }
  
  }

  export const AdminVerify = async() =>{
     
    if(CURRENT_USER != null){

      if(CURRENT_USER.status == "Admin"){

        return true

      }else if(CURRENT_USER.status == "Student"){
        return false
      }
        
    }else{

      return false
    }

}


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

export const GellAllDraftCourses = (setcourses) =>{

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${CURRENT_USER.token}`);
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("https://aethenosinstructor.exon.lk:2053/aethenos-api/course/getDraftcourses", requestOptions)
      .then(response => response.json())
      .then(result => {
        //   console.log(result)
          
          Unauthorized(result.status,"draft-courses")
          setcourses(result)
    })
      .catch(error => console.log('error', error));

}

export const ApproveDraftCourse = (code) =>{

    var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${CURRENT_USER.token}`);

var formdata = new FormData();

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch(`https://aethenosinstructor.exon.lk:2053/aethenos-api/course/setApproveCourse/${code}`, requestOptions)
  .then(response => response.json())
  .then(result => {

    Unauthorized(result.status,"draft-courses")
    // console.log(result)
    if(result.variable == "200"){
        SuccessAlert("Course Approved!",result.message)
    }else{
        ErrorAlert("Error",result.message)
    }

  })
  .catch(error => console.log('error', error));

}

export const DisapproveDraftCourse = (code,comment,setshowDisapprove,setcomment) =>{

    var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${CURRENT_USER.token}`);

var formdata = new FormData();
formdata.append("code", `${code}`);
formdata.append("comment", `${comment}`);

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("https://aethenosinstructor.exon.lk:2053/aethenos-api/course/setDisapproveCourse", requestOptions)
  .then(response => response.json())
  .then(result => {

    Unauthorized(result.status,"draft-courses")
    console.log(result)
    if(result.variable == "200"){
        SuccessAlert("Course Disapproved!",result.message)
        setshowDisapprove(false)
        setcomment("")
    }else{
        ErrorAlert("Error",result.message)
    }

  })
  .catch(error => console.log('error', error));

}
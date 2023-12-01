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
          setcourses(result.sort((a, b) => new Date(b.created_date) - new Date(a.created_date)))
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

export const AddSetDefaultPricing = (DminPrice,DmaxPrice) =>{

  
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${CURRENT_USER.token}`);

  var formdata = new FormData();
  formdata.append("min_price", `${DminPrice}`);
  formdata.append("max_price", `${DmaxPrice}`);
  
  var requestOptions = {
    method: 'POST',
    body: formdata,
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch("https://aethenosinstructor.exon.lk:2053/aethenos-api/admin/setDefaultPrice", requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result)
      Unauthorized(result.status,"set-pricing")
    })
    .catch(error => console.log('error', error));
}

export const AddSetPricing = (item) =>{

  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${CURRENT_USER.token}`);
  myHeaders.append('Content-Type', 'application/json');

  var raw = item

  var requestOptions = {
    method: 'POST',
    body: JSON.stringify(raw),
    headers: myHeaders,
    redirect: 'follow'
  };

fetch("https://aethenosinstructor.exon.lk:2053/aethenos-api/managecourse/setCoursePricing", requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result)

    if(result.variable == "200"){
      SuccessAlert("Prices Saved!",result.message)
    }else{
      ErrorAlert("Error",result.message)
    }

    Unauthorized(result.status,"set-pricing")
  })
  .catch(error => console.log('error', error));
}

export const GetPricingRange = (
  setDminPrice,
      setDmaxPrice,
      setminUSA,
      setmaxUSA,
      setminAustralia,
      setmaxAustralia,
      setminBrazil,
      setmaxBrazil,
      setminCanada,
      setmaxCanada,
      setminChile,
      setmaxChile,
      setminColumbia,
      setmaxColumbia,
      setminEgypt,
      setmaxEgypt,
      setminEU,
      setmaxEU,
      setminGB,
      setmaxGB,
      setminindonedia,
      setmaxindonedia,
      setminIsrael,
      setmaxIsrael,
      setminIndia,
      setmaxIndia,
      setminJapan,
      setmaxJapan,
      setminKorea,
      setmaxKorea,
      setminMexico,
      setmaxMexico,
      setminMalaysia,
      setmaxMalaysia,
      setminNigeria,
      setmaxNigeria,
      setminNorway,
      setmaxNorway,
      setminPeru,
      setmaxPeru,
      setminPhilipine,
      setmaxPhilipine,
      setminPoland,
      setmaxPoland,
      setminRomania,
      setmaxRomania,
      setminRussia,
      setmaxRussia,
      setminSingapore,
      setmaxSingapore,
      setminThailand,
      setmaxThailand,
      setminTurkey,
      setmaxTurkey,
      setminTaiwan,
      setmaxTaiwan,
      setminVietnam,
      setmaxVietnam,
      setminSA,
      setmaxSA) =>{

  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${CURRENT_USER.token}`);


  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch("https://aethenosinstructor.exon.lk:2053/aethenos-api/managecourse/getpricingrange", requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result)

      setDminPrice(result[29].minPrice)
      setDmaxPrice(result[29].maxPrice)

      setminUSA(result[0].minPrice)
      setmaxUSA(result[0].maxPrice)

      setminAustralia(result[1].minPrice)
      setmaxAustralia(result[1].maxPrice)

      setminBrazil(result[2].minPrice)
      setmaxBrazil(result[2].maxPrice)

      setminCanada(result[3].minPrice)
      setmaxCanada(result[3].maxPrice)

      setminChile(result[4].minPrice)
      setmaxChile(result[4].maxPrice)

      setminColumbia(result[5].minPrice)
      setmaxColumbia(result[5].maxPrice)

      setminEgypt(result[6].minPrice)
      setmaxEgypt(result[6].maxPrice)

      setminEU(result[7].minPrice)
      setmaxEU(result[7].maxPrice)

      setminGB(result[8].minPrice)
      setmaxGB(result[8].maxPrice)

      setminindonedia(result[9].minPrice)
      setmaxindonedia(result[9].maxPrice)

      setminIsrael(result[10].minPrice)
      setmaxIsrael(result[10].maxPrice)

      setminIndia(result[11].minPrice)
      setmaxIndia(result[11].maxPrice)

      setminJapan(result[12].minPrice)
      setmaxJapan(result[12].maxPrice)

      setminKorea(result[13].minPrice)
      setmaxKorea(result[13].maxPrice)

      setminMexico(result[14].minPrice)
      setmaxMexico(result[14].maxPrice)

      setminMalaysia(result[15].minPrice)
      setmaxMalaysia(result[15].maxPrice)

      setminNigeria(result[16].minPrice)
      setmaxNigeria(result[16].maxPrice)

      setminNorway(result[17].minPrice)
      setmaxNorway(result[17].maxPrice)

      setminPeru(result[18].minPrice)
      setmaxPeru(result[18].maxPrice)

      setminPhilipine(result[19].minPrice)
      setmaxPhilipine(result[19].maxPrice)

      setminPoland(result[20].minPrice)
      setmaxPoland(result[20].maxPrice)

      setminRomania(result[21].minPrice)
      setmaxRomania(result[21].maxPrice)

      setminRussia(result[22].minPrice)
      setmaxRussia(result[22].maxPrice)

      setminSingapore(result[23].minPrice)
      setmaxSingapore(result[23].maxPrice)

      setminThailand(result[24].minPrice)
      setmaxThailand(result[24].maxPrice)

      setminTurkey(result[25].minPrice)
      setmaxTurkey(result[25].maxPrice)

      setminTaiwan(result[26].minPrice)
      setmaxTaiwan(result[26].maxPrice)

      setminVietnam(result[27].minPrice)
      setmaxVietnam(result[27].maxPrice)

      setminSA(result[28].minPrice)
      setmaxSA(result[28].maxPrice)

      Unauthorized(result.status,"set-pricing")
    })
    .catch(error => console.log('error', error));
}
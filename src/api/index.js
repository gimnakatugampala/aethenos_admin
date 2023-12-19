import ErrorAlert from "commonFunctions/Alerts/ErrorAlert";
import SuccessAlert from "commonFunctions/Alerts/SuccessAlert";
import Cookies from 'js-cookie';

const BACKEND_HOST = "https://aethenosinstructor.exon.lk:2053/aethenos-api"

const CURRENT_USER = Cookies.get('aethenos_admin')

// Unauthorized
const Unauthorized = (result,rediect_url) =>{

    if(result == 401){
      // window.localStorage.removeItem("aethenos_admin")
      Cookies.remove('aethenos_admin')
      window.location.href = `/login?sessionTimeout=true&rediect-url=${rediect_url}`
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

    fetch(`${BACKEND_HOST}/authentication/admin`, requestOptions)
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
        }else if(result.message == "Your admin account deactivated."){
          setloading(false)
          ErrorAlert(result.message,result.variable)
          return
        }else{
            
            setloading(false)

            Cookies.set('aethenos_admin', `${result.token}`, { expires: 7, path: '' })
console.log(result)

            // const user = {
            //     token:result.token,
            //     email:result.email,
            //     firstname:result.fname,
            //     lastname:result.lname
            //   }
      
            //   window.localStorage.setItem("aethenos_admin", JSON.stringify(user));
      
      
              window.location.href = `/dashboard`
        }

    })
    .catch(error => console.log('error', error));
}

export const GellAllDraftCourses = (setcourses) =>{

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${CURRENT_USER}`);
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch(`${BACKEND_HOST}/course/getDraftcourses`, requestOptions)
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
myHeaders.append("Authorization", `Bearer ${CURRENT_USER}`);

var formdata = new FormData();

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch(`${BACKEND_HOST}/course/setApproveCourse/${code}`, requestOptions)
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
myHeaders.append("Authorization", `Bearer ${CURRENT_USER}`);

var formdata = new FormData();
formdata.append("code", `${code}`);
formdata.append("comment", `${comment}`);

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch(`${BACKEND_HOST}/course/setDisapproveCourse`, requestOptions)
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

export const AddSetDefaultPricing = (DminPrice,DmaxPrice,DTip,DminValue) =>{

  
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${CURRENT_USER}`);

  var formdata = new FormData();
  formdata.append("minPrice", `${DminPrice}`);
  formdata.append("maxPrice", `${DmaxPrice}`);
  formdata.append("tip", `${DTip}`);
  formdata.append("minimumPrice", `${DminValue}`);
  
  var requestOptions = {
    method: 'POST',
    body: formdata,
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch(`${BACKEND_HOST}/managecourse/setDefaultPriceRange`, requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result)

      if(result.variable == "200"){
        SuccessAlert("Saved!",result.message)
      }else{
        ErrorAlert("Error",result.variable)
      }

      Unauthorized(result.status,"set-pricing")
    })
    .catch(error => console.log('error', error));
}

export const AddSetPricing = (item) =>{

  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${CURRENT_USER}`);
  myHeaders.append('Content-Type', 'application/json');

  

  var requestOptions = {
    method: 'POST',
    body: JSON.stringify(item),
    headers: myHeaders,
    redirect: 'follow'
  };

fetch(`${BACKEND_HOST}/managecourse/setCoursePricing`, requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result)

    if(result.variable == "200"){
      SuccessAlert("Prices Saved!",result.message)
    }else{
      ErrorAlert("Error",result.variable)
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
      setmaxSA,
      // -------
      setUSATip,
      setUSAminValue,
      setAusTip,
      setAusminValue,
      setBrazilTip,
      setBrazilminValue,
      setCanadaTip,
      setCanadaminValue,
      setChileTip,
      setChileminValue,
      setColumbiaTip,
      setColumbiaMinValue,
      setEgyptTip,
      setEgyptminValue,
      setEUTip,
      setEUminValue,
      setGBPTip,
      setGBPminValue,
      setIndoTip,
      setIndominValue,
      setIsrealTip,
      setIsrealminValue,
      setIndiaTip,
      setIndiaminValue,
      setJapanTip,
      setJapanminValue,
      setKoreaTip,
      setKoreaminValue,
      setMexicoTip,
      setMexicominValue,
      setMalaysiaTip,
      setMalaysiaminValue,
      setNigeriaTip,
      setNigeriaminValue,
      setNorwayTip,
      setNorwayminValue,
      setPeruTip,
      setPeruminValue,
      setPhilippinesTip,
      setPhilippinesminValue,
      setPolandTip,
      setPolandminValue,
      setRomaniaTip,
      setRomaniaminValue,
      setRussiaTip,
      setRussiaminValue,
      setSingaporeTip,
      setSingaporeminValue,
      setThailandTip,
      setThailandminValue,
      setTurkeyTip,
      setTurkeyminValue,
      setTaiwanTip,
      setTaiwanminValue,
      setVietnamTip,
      setVietnamminValue,
      setSATip,
      setSAminValue,
      setDTip,
      setDminValue
      ) =>{

  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${CURRENT_USER}`);


  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch(`${BACKEND_HOST}/managecourse/getpricingrange`, requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result)

      
      Unauthorized(result.status,"set-pricing")
      setDminPrice(result[29].minPrice)
      setDmaxPrice(result[29].maxPrice)
      setDTip(result[29].tip)
      setDminValue(result[29].minimumPrice)

      setminUSA(result[0].minPrice)
      setmaxUSA(result[0].maxPrice)
      setUSATip(result[0].tip)
      setUSAminValue(result[0].minimumPrice)


      setminAustralia(result[1].minPrice)
      setmaxAustralia(result[1].maxPrice)
      setAusTip(result[1].tip)
      setAusminValue(result[1].minimumPrice)

      setminBrazil(result[2].minPrice)
      setmaxBrazil(result[2].maxPrice)
      setBrazilTip(result[2].tip)
      setBrazilminValue(result[2].minimumPrice)

      setminCanada(result[3].minPrice)
      setmaxCanada(result[3].maxPrice)
      setCanadaTip(result[3].tip)
      setCanadaminValue(result[3].minimumPrice)

      setminChile(result[4].minPrice)
      setmaxChile(result[4].maxPrice)
      setChileTip(result[4].tip)
      setChileminValue(result[4].minimumPrice)

      setminColumbia(result[5].minPrice)
      setmaxColumbia(result[5].maxPrice)
      setColumbiaTip(result[5].tip)
      setColumbiaMinValue(result[5].minimumPrice)

      setminEgypt(result[6].minPrice)
      setmaxEgypt(result[6].maxPrice)
      setEgyptTip(result[6].tip)
      setEgyptminValue(result[6].minimumPrice)

      setminEU(result[7].minPrice)
      setmaxEU(result[7].maxPrice)
      setEUTip(result[7].tip)
      setEUminValue(result[7].minimumPrice)

      setminGB(result[8].minPrice)
      setmaxGB(result[8].maxPrice)
      setGBPTip(result[8].tip)
      setGBPminValue(result[8].minimumPrice)

      setminindonedia(result[9].minPrice)
      setmaxindonedia(result[9].maxPrice)
      setIndoTip(result[9].tip)
      setIndominValue(result[9].minimumPrice)

      setminIsrael(result[10].minPrice)
      setmaxIsrael(result[10].maxPrice)
      setIsrealTip(result[10].tip)
      setIsrealminValue(result[10].minimumPrice)

      setminIndia(result[11].minPrice)
      setmaxIndia(result[11].maxPrice)
      setIndiaTip(result[11].tip)
      setIndiaminValue(result[11].minimumPrice)

      setminJapan(result[12].minPrice)
      setmaxJapan(result[12].maxPrice)
      setJapanTip(result[12].tip)
      setJapanminValue(result[12].minimumPrice)

      setminKorea(result[13].minPrice)
      setmaxKorea(result[13].maxPrice)
      setKoreaTip(result[13].tip)
      setKoreaminValue(result[13].minimumPrice)

      setminMexico(result[14].minPrice)
      setmaxMexico(result[14].maxPrice)
      setMexicoTip(result[14].tip)
      setMexicominValue(result[14].minimumPrice)

      setminMalaysia(result[15].minPrice)
      setmaxMalaysia(result[15].maxPrice)
      setMalaysiaTip(result[15].tip)
      setMalaysiaminValue(result[15].minimumPrice)

      setminNigeria(result[16].minPrice)
      setmaxNigeria(result[16].maxPrice)
      setNigeriaTip(result[16].tip)
      setNigeriaminValue(result[16].minimumPrice)

      setminNorway(result[17].minPrice)
      setmaxNorway(result[17].maxPrice)
      setNorwayTip(result[17].tip)
      setNorwayminValue(result[17].minimumPrice)

      setminPeru(result[18].minPrice)
      setmaxPeru(result[18].maxPrice)
      setPeruTip(result[18].tip)
      setPeruminValue(result[18].minimumPrice)

      setminPhilipine(result[19].minPrice)
      setmaxPhilipine(result[19].maxPrice)
      setPhilippinesTip(result[19].tip)
      setPhilippinesminValue(result[19].minimumPrice)

      setminPoland(result[20].minPrice)
      setmaxPoland(result[20].maxPrice)
      setPolandTip(result[20].tip)
      setPolandminValue(result[20].minimumPrice)

      setminRomania(result[21].minPrice)
      setmaxRomania(result[21].maxPrice)
      setRomaniaTip(result[21].tip)
      setRomaniaminValue(result[21].minimumPrice)

      setminRussia(result[22].minPrice)
      setmaxRussia(result[22].maxPrice)
      setRussiaTip(result[22].tip)
      setRussiaminValue(result[22].minimumPrice)

      setminSingapore(result[23].minPrice)
      setmaxSingapore(result[23].maxPrice)
      setSingaporeTip(result[23].tip)
      setSingaporeminValue(result[23].minimumPrice)

      setminThailand(result[24].minPrice)
      setmaxThailand(result[24].maxPrice)
      setThailandTip(result[24].tip)
      setThailandminValue(result[24].minimumPrice)

      setminTurkey(result[25].minPrice)
      setmaxTurkey(result[25].maxPrice)
      setTurkeyTip(result[25].tip)
      setTurkeyminValue(result[25].minimumPrice)

      setminTaiwan(result[26].minPrice)
      setmaxTaiwan(result[26].maxPrice)
      setTaiwanTip(result[26].tip)
      setTaiwanminValue(result[26].minimumPrice)

      setminVietnam(result[27].minPrice)
      setmaxVietnam(result[27].maxPrice)
      setVietnamTip(result[27].tip)
      setVietnamminValue(result[27].minimumPrice)

      setminSA(result[28].minPrice)
      setmaxSA(result[28].maxPrice)
      setSATip(result[28].tip)
      setSAminValue(result[28].minimumPrice)

     

      
    })
    .catch(error => console.log('error', error));
}
export const AddAdminAPI = (firstname,lastname,email,conpassword,user_type) =>{
  
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${CURRENT_USER}`);

  var formdata = new FormData();
  formdata.append("firstName", `${firstname}`);
  formdata.append("lastName", `${lastname}`);
  formdata.append("email", `${email}`);
  formdata.append("password", `${conpassword}`);
  formdata.append("gup_type_id", `${user_type}`);
  
  var requestOptions = {
    method: 'POST',
    body: formdata,
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch(`${BACKEND_HOST}/manageAdmins/add`, requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result)
      Unauthorized(result.status,"add-admin")

      if(result.variable == "200"){
        SuccessAlert("Admin Added",result.message)
      }

    })
    .catch(error => console.log('error', error));

}

export const ViewAdminAPI = (setadmins) =>{

    
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${CURRENT_USER}`);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch(`${BACKEND_HOST}/manageAdmins/view`, requestOptions)
    .then(response => response.json())
    .then(result => {

      Unauthorized(result.status,"all-admins")
      console.log(result)
      setadmins(result)
    })
    .catch(error => console.log('error', error));

}

export const ActivateAdminAPI = (id) =>{

  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${CURRENT_USER}`);
  myHeaders.append('Content-Type', 'application/json');

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch(`${BACKEND_HOST}/manageAdmins/activate/${id}`, requestOptions)
    .then(response => response.json())
    .then(result => {
      Unauthorized(result.status,"all-admins")
      console.log(result)
      if(result.variable == "200"){
        SuccessAlert("Success",result.message)
        return
      }
    })
    .catch(error => console.log('error', error));

}

export const GetSubmitReview = (setcourses) =>{

  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${CURRENT_USER}`);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch(`${BACKEND_HOST}/course/getAllRequestedCourse`, requestOptions)
    .then(response => response.json())
    .then(result => {
      // console.log(result)
      Unauthorized(result.status,"submit-courses")
      setcourses(result)
      if(result.message == "Error"){
      setcourses([])

      }
    })
    .catch(error => console.log('error', error));

}

export const ApproveSubmittedCourse = (code) =>{

  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${CURRENT_USER}`);

  var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch(`${BACKEND_HOST}/course/approveRequestedCourse/${code}`, requestOptions)
    .then(response => response.json())
    .then(result => {
      // console.log(result)
      Unauthorized(result.status,"submit-courses")

      if(result.variable == "200"){
        SuccessAlert("Success",result.message)
        return
      }

      if(result.message == "Error"){
        ErrorAlert("Error",result.variable)
        return
      }

    })
    .catch(error => console.log('error', error));

}

export const DispproveSubmittedCourse = (CODE,comment,setshowDisapprove) =>{

  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${CURRENT_USER}`);

  var formdata = new FormData();
formdata.append("code", `${CODE}`);
formdata.append("comment", `${comment}`);

var requestOptions = {
  method: 'PUT',
  body: formdata,
  headers: myHeaders,
  redirect: 'follow'
};

fetch(`${BACKEND_HOST}/course/disapproveRequestedCourse`, requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result)

    Unauthorized(result.status,"submit-courses")


    if(result.message == "Error"){
      ErrorAlert("Error",result.variable)
      return
    }

    if(result.variable == "200"){
      SuccessAlert("Disapproved",result.message)
      setshowDisapprove(false)
      return
    }

  })
  .catch(error => console.log('error', error));

}

export const GetIntendedLeaners = async(code,setstudentsLearnData,setrequirementsData,setwhosData) =>{

  var myHeaders = new Headers();
  myHeaders.append("Authorization",`Bearer ${CURRENT_USER}`);
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch(`https://aethenosinstructor.exon.lk:2053/aethenos-api/managecourse/getIntendedLearners/${code}`, requestOptions)
    .then(response => response.json())
    .then(result => {

      Unauthorized(result.status,`submit-courses`)

      setstudentsLearnData(result.studentsLearn)
      setrequirementsData(result.requirements)
      setwhosData(result.who)

      console.log(result)
    
    })
    .catch(error => console.log('error', error));

 }

 export const GetCourseLandingPage = async(code,setcourse_title,setcourse_subtitle,setcourse_desc,setpreview_img,seVideoSrc,setkeywords,setcourse_cat,setcourse_sub_cat,setlevel,setlang) =>{

  var myHeaders = new Headers();
  myHeaders.append("Authorization",`Bearer ${CURRENT_USER}`);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch(`https://aethenosinstructor.exon.lk:2053/aethenos-api/managecourse/getcourselandingpage/${code}`, requestOptions)
    .then(response => response.json())
    .then(result => {

      console.log(result)
      Unauthorized(result.status,`submit-courses`)

      setcourse_title(result.courseTitle)
      setcourse_subtitle(result.courseSubTitle)
      setcourse_desc(result.description)
      setkeywords(result.keywords)
      setcourse_cat(result.category)
      setcourse_sub_cat(result.subCategory)
      setlevel(result.level)
      setlang(result.language)
      setpreview_img(`${result.courseImage}`)
      seVideoSrc(`${result.promotionalVideo}`)

    })
    .catch(error => console.log('error', error));

 }
 export const GetCountriesListPricing = async(code, setcountriesData) =>{

  var myHeaders = new Headers();
  myHeaders.append("Authorization",`Bearer ${CURRENT_USER}`);


  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch(`https://aethenosinstructor.exon.lk:2053/aethenos-api/managecourse/getCoursePricing/${code}`, requestOptions)
    .then(response => response.json())
    .then(result => {

      setcountriesData(result)
      console.log(result)


    })
    .catch(error => console.log('error', error));
 }

 const removeHtmlTags = (htmlString) => {
  // Create a new DOMParser
  const parser = new DOMParser();

  // Parse the HTML string
  const doc = parser.parseFromString(htmlString, 'text/html');

  // Get the text content
  const textContent = doc.body.textContent || '';

  return textContent;
};

 export const GetCourseMessages = async(code,setcongratsmsg,setwelcomemsg) =>{
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${CURRENT_USER}`);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch(`https://aethenosinstructor.exon.lk:2053/aethenos-api/managecourse/getMessages/${code}`, requestOptions)
    .then(response => response.json())
    .then(result => {

      setcongratsmsg(removeHtmlTags(result.congratulations_msg))
      setwelcomemsg(removeHtmlTags(result.welcome_msg))


    })
    .catch(error => console.log('error', error));
 }
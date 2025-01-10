//callback

function submitForm(submit,db){
    var[dbname,comment]=db()
    console.log("DB name is",dbName,comment);
    console.log("submit");
}
function database(){
    dbName="SECE"
    return[dbName,"Data Stored Successfully"]
}
submitForm("Form Submitted Successfully",database)



//another
function submitForm(submit,isFormValid){
    if(isFormValid){
        console.log("Feilds validated successfully");
        console.log(submit);
    }
    else{
        console.log("Feilds validated Failed");
        console.log("Form Submission Unsuccessful");
    }
}
function formValidation(){
    email="gangasree@gmail.com"
    password="123456789"
    if(email==="gangasree@gamil.com" && password){
        return true
    }
    else{
        return false
    }
}
submitForm("Form Submitted successfully",formValidation)
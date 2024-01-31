function validateForm(){

  var name=document.forms["myform"]["name"].value;
  var phno=document.forms["myform"]["phno"].value;
  var dob=document.forms["myform"]["dob"].value;
  var pin=document.forms["myform"]["pin"].value;
  var course = document.querySelector('input[name="course"]:checked');




  var namewarning=document.getElementById("namewarning");
  var phonewarning=document.getElementById("phonewarning");
  var datewarning=document.getElementById("datewarning");
  var pinwarning=document.getElementById("pinwarning");
  var coursewarning=document.getElementById("coursewarning");
  

   
  namewarning.innerHTML="";
  phonewarning.innerHTML="";
  datewarning.innerHTML="";
  pinwarning.innerHTML="";
  coursewarning.innerHTML="";
  
  
 if(name.trim()===""){
  namewarning.innerHTML="Name should not be null";
  document.myform.name.focus();
  return false;
 }
 pat=/^[A-Za-z]+$/
 if(!pat.test(name))
 {
  namewarning.innerHTML="Name should contain only alphabhets"
  return false;
 }
 if(phno.length !==10){
phonewarning.innerHTML="Invalid phone number";
document.myform.phno.focus();
return false;
 }
pa=/^[0-9]*\d$/
 if(!pa.test(phno))
 {
  phonewarning.innerHTML="phone number should contain only numbers";
 document.myform.phno.focus();
return false; 
 }
if(dob==="")
{
  datewarning.innerHTML="Enter a valid date";
  document.myform.dob.focus();
  return false;
}
const pattern=/^\d{2}\/\d{2}\/\d{4}$/;
if(!pattern.test(dob)){

  document.getElementById("datewarning").innerHTML="Invalid date.please use dd/mm/yyy";
  document.myform.dob.focus;
  return false;
}
const parts=split.dob("/");
const day=parseInt(parts[0],10);
const month=parseInt(parts[1],10);
const year=parseInt(parts[2],10);
if (day < 1 || day > 31 || month < 1 || month > 12) {
  document.getElementById("datewarning").innerHTML="invaild day or month";
  document.myform.dob.focus();
  return false;

}
if (course) {
  coursewarning.innerHTML = "Please select a course";
  return false;
}
alert("form submitted successfully");
return true;
}
 

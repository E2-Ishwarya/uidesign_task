function check()
{ 
    var userName=document.getElementById("username");
 if(userName.value=="" || userName.value==null)
 {
    document.getElementById("x").innerHTML="*Username shouldn't be empty";
 }
 else
 {
    document.getElementById("x").innerHTML=" ";
 }
}
 function check1()
 {
 var passWord=document.getElementById("password"); 
 
 if(passWord.value=="" || passWord.value==null)
 {
    document.getElementById("y").innerHTML="*Password shouldn't be empty";
 }
 else
 {
    document.getElementById("y").innerHTML=" ";
 }

}
const testDB = [{emailId:"abcd@gmail.com" ,password:"capable@1357"},{emailId:"xyz@hotmail.com",password:"keeping1234"},{emailId:"abc@ipo.com",password:"iamabcd@1337"}]


const checkLoginDetails = (email,password) =>{
    let valid=false;
    for(let i=0;i<testDB.length;i++)
    {
        if(email===testDB[i].emailId && password===testDB[i].password)
        {
         //   console.log('ssdssdsd');
            valid=true;
        }
    }
  //  console.log(password);
    //showSuccess(emailEl);

  return valid;

}

const isEmailValid = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};


$(document).ready(function(){
    $("#loginForm").click(function(){
      $("#loginForm").modal("show");
    });
    $("#submit").click(function(){
        console.log("login");
       let emailForLogin=document.getElementById('EmailForLogin').value.trim();
       let passwordForLogin=document.getElementById('PasswordForLogin').value.trim();
       if(emailForLogin.length===0 && passwordForLogin.length===0)
       {
       $('#blankBoth').show();
       setTimeout(function() {
        $('#blankBoth').hide();
       },1000);
       }
       else if(isEmailValid(emailForLogin)===false && passwordForLogin.length!==0)
       {
          $('#invalidemail').show();
          setTimeout(function() {
            $('#invalidemail').hide();
          },1000);
       }
       else if(emailForLogin.length===0)
       {
        $('#blankEmail').show();
        setTimeout(function() {
          $('#blankEmail').hide();
        },1000);
       }
       else if(passwordForLogin.length===0)
       {
        $('#blankPassword').show();  
        setTimeout(function() {
            $('#blankPassword').hide();
        },1000);
       }
       let valid=checkLoginDetails(emailForLogin,passwordForLogin);
       let validFlag=false;
       if(isEmailValid(emailForLogin)===true && valid===true)
       {
       //   document.getElementById('EmailForLogin').innerHTML='abc';
          validFlag=true;
     
       }
      // console.log(valid);
       if(validFlag===false && emailForLogin.length!==0 && passwordForLogin.length!==0 && isEmailValid(emailForLogin))
       {
          
           $('#incorrect').show();
       }
       if(validFlag===true)
       {
        console.log(emailForLogin);
        console.log(passwordForLogin);
        $('#incorrect').hide();  
        $('#blankEmail').hide();
        $('#blankPassword').hide();   
        $('#blankBoth').hide(); 
        $('#invalidemail').hide();

        $('#loginForm').modal("hide");
  
       let l= document.getElementById('loggedin');
       l.textContent += emailForLogin;
        document.getElementById('loggedin').style.visibility="visible";      
        document.getElementById('loginbutton').style.visibility='hidden';
        document.getElementById('logout').style.visibility='visible';
        document.getElementById('logout').onclick=function(){
          let emailForLogin=document.getElementById('EmailForLogin');
          let passwordForLogin=document.getElementById('PasswordForLogin');
          emailForLogin.value='';
          passwordForLogin.value='';
          console.log(emailForLogin);
          console.log(passwordForLogin);
          document.getElementById('loginbutton').style.visibility='visible';
          document.getElementById('logout').style.visibility='hidden';
          document.getElementById('loggedin').style.visibility="hidden";   
         
        }
       }
    });
    $("#close").click(function(){
        let emailForLogin=document.getElementById('EmailForLogin');
        let passwordForLogin=document.getElementById('PasswordForLogin');
        emailForLogin.value='';
        passwordForLogin.value='';
        //console.log(emailForLogin);
        //console.log(passwordForLogin);
        $('#incorrect').hide();  
        $('#blankEmail').hide();
        $('#blankPassword').hide();   
        $('#blankBoth').hide(); 
        $('#invalidemail').hide();  
    });
  });
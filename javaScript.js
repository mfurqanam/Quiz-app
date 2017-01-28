
    var count=0, Result=0;
    
function signUp(name,email,pass) {
    var a = [name,email,pass];
    var val = document.getElementById(name).value;
     
    
     for (var i = 0; i < val.length; i++) {
           if (isNaN(val[i]) === false) {
			   if(val[i]==' ')
			   {
				   count++;
				   if(count == val.length){
					   alert("Name must be alphabetically");
                       return false;
				   }
				   continue;
			   }
                alert("Name must be alphabetically");
                return false;
             }
			 
        }
        
     var password = document.getElementById(pass).value;
    
     var numberSomewhere = false;
      for (var i = 0; i < password.length; i++) {
           if (isNaN(password[i]) === false || password[i] ===' ') {
                numberSomewhere = true;
                break;
             }
        }
        
        if(numberSomewhere===false){
             alert("Atleast one character must be numeric");
             return false;
        }
     var em = document.getElementById(email).value;
    
    // checking @ in email
     var temp = em.indexOf("@");
     if(temp==-1 || temp==0){
         alert("Please enter correct email adress");
         return false;
     }
     // checking . in email
    var temp1 = em.lastIndexOf(".");  
    if(temp==temp1-1 || temp1==-1){
         alert("Please enter correct email adress");
         return false;
     }
   
     var users = [];
     users[0]= val;
     users[1]=password;
     users[2]=em;
    
     if(localStorage.getItem(em)===null){
          localStorage.setItem(em,users);
          localStorage.setItem("name",val);
     }
     else{
         alert("This email address has already taken by an other user");
         return false;
     }
    users = localStorage.getItem(em).split(',');
     alert("Succesfully login");
      return true;
    // window.location.pathname = "D:/HTML&CSS/qiuzApp/Quiz.html";
     
}
 function login(pass,email){
        
     var password = document.getElementById(pass).value;
    
     var numberSomewhere = false;
      for (var i = 0; i < password.length; i++) {
           if (isNaN(password[i]) === false || password[i] ===' ') {
                numberSomewhere = true;
                break;
             }
        }
        
        if(numberSomewhere===false){
             alert("Wrong password atleast one character must be a numeric");
             return false;
        }
     var em = document.getElementById(email).value;
    
    // checking @ in email
     var temp = em.indexOf("@");
     if(temp==-1 || temp==0){
         alert("Wrong email address please enter correct email adress");
         return false;
     }
     // checking . in email
    var temp1 = em.lastIndexOf(".");  
    if(temp==temp1-1 || temp1==-1){
         alert("Wrong email address enter correct email adress");
         return false;
     }
   
     var users = [];
     users[0]=password;
     users[1]=em;
    
     if(localStorage.getItem(em)===null){
      
         alert("Wrong email address enter correct email adress");
         return false;
     }
   
    else if(password==saveUserData[1] && em==saveUserData[2] )
    {  var saveUserData = localStorage.getItem(em).split(',');
        alert("Succesfully login");
       return true;
    }
 }
 var myVar = setInterval(myTimer ,1000);
  var min = 0 ,sec=29;
  
 
  var timer;
function myTimer() {
   
    if(sec < 10)
    {
        
        timer = "Time Out  " + min + " : 0" + sec--;
       // localStorage.setItem("sec",sec);
    }
    else
    {
        timer = "Time Out  " + min + " : " + sec--;
       // localStorage.setItem("sec",sec);
    }
    document.getElementById("timeout").innerHTML = timer;
    if(sec == -1){
        min--;
        sec=59;
        // localStorage.setItem("min",min);
        if(min==-1){
            clearInterval(myVar);
            document.getElementById('q1').className+= " d";
            document.getElementById('q2').className+= " d";
            document.getElementById('q3').className+= " d";
            document.getElementById('b').className+= " d";
             document.getElementById("result").classList.remove("d");
             Result = Result/3 *100;
              document.getElementById("result").innerHTML = "Sorry you have faild with score " + Result;
              if(Result >= 40){
                        document.getElementById("result").innerHTML = "Congratulations you have passed with score " + Result;
                 }
             else
                {
                   document.getElementById("result").innerHTML = "Sorry you have faild with score " + Result;
                }
         }
    }
    
}
function username(){
    document.getElementById("name").innerHTML = "User name : "+ localStorage.getItem("name");
    
}


function validateRadios() {
 var radios = document.getElementsByName("r1");
 for (var i = 0; i < radios.length; i++) {
 if (radios[i].checked) {
     if(count==0)
    { document.getElementById("q2").classList.remove("d");
     document.getElementById('q1').className+= " d";
     count++;
     radios[i].checked = false;
      if(i==0){
          Result = ++Result;
      }
    }
   else if(count==1)
    { document.getElementById("q3").classList.remove("d");
     document.getElementById('q2').className+= " d";
     count++;
      radios[i].checked = false;
      if(i==4){
          Result = ++Result ;
      }
    }
    else if(count==2){
         document.getElementById("result").classList.remove("d");
         document.getElementById("b").classList.remove("btn");
          document.getElementById('b').className+= " d";
         document.getElementById('q3').className+= " d";
          if(i==7){
          Result = ++Result;
      }
      Result = Result/3 *100;
	   if(Result >= 40){
         document.getElementById("result").innerHTML = "Congratulations you have passed with score " + Result;
		  clearInterval(myVar);
		  document.getElementById("timeout").innerHTML = "timeout 0 : 00";
    }
    else
    {
         document.getElementById("result").innerHTML = "Sorry you have faild with score " + Result;
		  clearInterval(myVar);
		  document.getElementById("timeout").innerHTML = "timeout 0 : 00";
    }
    }
   
 return true;
 }
 }
 alert("Please check one.");
 return false;
 }
 function LoginOrRegister(id){
     
     if(id==='log'){
          document.getElementById("login").classList.remove("hid");
          document.getElementById('wel').className+= " hid";
          document.getElementById('signup').className = " hid";
     }
     else
     {
          document.getElementById("signup").classList.remove("hid");
          document.getElementById('wel').className+= " hid";
           document.getElementById('login').className = " hid";
     }
    
 }
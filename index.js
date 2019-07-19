function gName(){
  var input = document.getElementById('dob').value;
  
    var day= new Date(input);

        MM=day.getMonth();
        MM= MM +1;
        DD=day.getDate(); 
        YY=day.getFullYear();

        
    var gender= document.getElementById("gender").value;

    var CCC = (YY - 1) / 100 + 1;
    var CC = parseFloat(CCC);
    var d = parseInt(( ((CC/4) - 2*CC -1) +((5* YY / 4)) + ((26*(MM + 1) / 10)) + DD)) % 7;
    var d = (d.toFixed(0));
    
    if (d == 0 && gender =="male")
    {
        document.getElementById("output").innerHTML = "Kwasi";
        
    
    } 
    else if (d == 4 && gender == 'male')
    {
        document.getElementById("output").innerHTML = "Yaw";
    
    } 
//     else if(d == 0 && gender == 'female')
//     {
//         console.log("Akosua") ;
    
//     }
//     else if (d == 1 && gender == 'male')
//     {
//         console.log("Kwadwo") ;
    
//     } 
//     else if(d == 1 && gender == 'female')
//     {
//         console.log("Adwoa") ;
    
//     }
//     else if (d == 2 && gender == 'male')
//     {
//         console.log("Kwabena") ;
   
//     } 
//     else if(d == 2 && gender == 'female')
//     {
//         console.log("Abena") ;
    
//     }
//     else if (d == 3 && gender == 'male')
//     {
//         console.log("Kwako") ;
    
//     } 
//     else if(d == 3 && gender == 'female')
//     {
//         console.log("Akwa") ;
    
//     }
//     else if (d == 4 && gender == 'male')
//     {
//         console.log("Yaw") ;
    
//     } 
//     else if(d == 4 && gender == 'female')
//     {
//         console.log("yaa") ;
   
//     }
}







// else if (d == 5 && gender == 'male')
// {
// alert("Kofi");
// } 
// else if(d == 5 && gender == 'female')
// {
// alert("Afua");
// }
// else if (d == 6 && gender == 'male')
// {
// alert("Kwamo");
// } 
// else if(d == 6 && gender == 'female')
// {
// alert("Ama");
// }



// if (document.getElementById('male').checked)
// {
//     gender= document.getElementById('male').value;
//     alert("born on" +Dw[dC] + "Your akan name is" + male[d]);
//     document.getElementById('output').innerHTML = dW[d];
// }
// else if (document.getElementById('female').checked)
// {
//     gender= document.getElementById('female').value;
//     alert("born on" +Dw[dC] + "Your akan name is" + female[d]);
//     document.getElementById('output').innerHTML = dW[d];
// }






// const btn = document.querySelector('#name');
// const nameDisplay = document.querySelector('#gender');
// const dobInput = document.querySelector('#DoB');


// // btn.addEventListener('click' , generate);

// function generate(){
//  let bday = dobInput.value; //to hold value from input

// var bdayArray = bday.split('-'); //makes entered date into an array
// if(bdayArray.length !== 3){
//     alert("invalid Date");
// }else{
//    if(!bdayArray[0].match(/^\d\d\d\d$/) || 
//       !bdayArray[1].match(/^\d\d$/) || 
//       !bdayArray[2].match(/^\d\d$/)){
//        alert("invalid Date");    
//       }else{
//        var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday', 'Saturday'];  
//        var names = ['John' ,'Bien' , 'Meghan' ,'Mugisha' ,'Mireille' , 'Fanny'];   
//        var currentTime = new Date(            
//            parseInt(bdayArray[0]),
//            parseInt(bdayArray[1]) - 1, //month starts from 0
//            parseInt(bdayArray[2])
//        );        
//        var currentDay = currentTime.getDay();       
//        var currentDayName= days[currentDay];
//        var dayName = names[currentDay];
//       nameDisplay.innerHTML = "You were born on "+currentDayName+ " your name is "+ dayName;
//    }
// }};







// var DD = parseInt(prompt("Enter the Day"));
// var MM = parseInt(prompt("Enter the Month"));
// var YYYY = parseInt(prompt("Enter the Year"));
// var gender = prompt("Enter your Gender");
// var CCC = (YYYY - 1) / 100 + 1;
// var CC = parseFloat(CCC);
// var d = math.Round(( ((CC/4) - 2*CC -1) +((5* YYYY / 4)) + ((26*(MM + 1) / 10)) + DD)) % 7;

// var d = (d.tofixed(0));

// if (d == 0 && gender == 'male')
// {
// alert("Kwasi");
// } 
// else if(d == 0 && gender == 'female')
// {
// alert("Akosua");
// }
// else if (d == 1 && gender == 'male')
// {
// alert("Kwadwo");
// } 
// else if(d == 1 && gender == 'female')
// {
// alert("Adwoa");
// }
// else if (d == 2 && gender == 'male')
// {
// alert("Kwabena");
// } 
// else if(d == 2 && gender == 'female')
// {
// alert("Abena");
// }
// else if (d == 3 && gender == 'male')
// {
// alert("Kwako");
// } 
// else if(d == 3 && gender == 'female')
// {
// alert("Akwa");
// }
// else if (d == 4 && gender == 'male')
// {
// alert("Yaw");
// } 
// else if(d == 4 && gender == 'female')
// {
// alert("yaa");
// }
// else if (d == 5 && gender == 'male')
// {
// alert("Kofi");
// } 
// else if(d == 5 && gender == 'female')
// {
// alert("Afua");
// }
// else if (d == 6 && gender == 'male')
// {
// alert("Kwamo");
// } 
// else if(d == 6 && gender == 'female')
// {
// alert("Ama");
// }

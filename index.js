function gName(){
  var input = document.getElementById('dob').value;
  
    var day= new Date(input);

        MM = day.getMonth();
        MM = MM + 1;
        DD = day.getDate(); 
        DD = DD +1;
        YY = day.getFullYear();
 
        var gender= document.getElementById('gender').value;
        var CCC = (YY - 1) / 100 + 1;
        var CC = parseFloat(CCC);
        var d = parseInt(( ((CC/4) - 2*CC -1) +((5* YY / 4)) + ((26*(MM + 1) / 10)) + DD)) % 7;
        var dd = (d.toFixed(0));
        
        document.getElementById('output').innerHTML = output;
        
        if (dd == 0 && gender =='male')
        {
           
            document.getElementById("output").innerHTML = "Kwasi";
        } 
    
        else if(dd == 0 && gender == 'female')
        {
            document.getElementById("output").innerHTML = "Akosua" ;
        
        }
        else if (dd == 1 && gender == 'male')
        {
            document.getElementById("output").innerHTML = "Kwadwo";
        
        } 
        else if(dd == 1 && gender == 'female')
        {
            document.getElementById("output").innerHTML = "Adwoa";
        
        }
        else if (dd == 2 && gender == 'male')
        {
            document.getElementById("output").innerHTML = "Kwabena" ;
       
        } 
        else if(dd == 2 && gender == 'female')
        {
            document.getElementById("output").innerHTML = "Abena";
        
        }
        else if (dd == 3 && gender == 'male')
        {
            document.getElementById("output").innerHTML = "Kwako";
        
        } 
        else if(dd == 3 && gender == 'female')
        {
            document.getElementById("output").innerHTML = "Akwa"; 
        
        }
        else if (d == 4 && gender == 'male')
        {
            document.getElementById("output").innerHTML = "Yaw";  
        
        } 
        else if(d == 4 && gender == 'female')
        {
            document.getElementById("output").innerHTML = "Yaa";
       
        }
       else if (dd == 5 && gender == 'male')
       {
        document.getElementById("output").innerHTML = "Kofi";
       } 
       else if(dd == 5 && gender == 'female')
       {
        document.getElementById("output").innerHTML = "Afua";
      }
       else if (dd == 6 && gender == 'male')
       {
        document.getElementById("output").innerHTML = "Kwamo";
       } 
       else if(dd == 6 && gender == 'female')
       {
        document.getElementById("output").innerHTML = "Ama";
      }
      }
    


        /* ************************ arrays fails***************************** */
// const nameDisplay = document.querySelector('#gender');
// const dobInput = document.querySelector('#dob');
// function gName(){
//     let dob = dobInput.value; //to hold value from input

//     var dobArray = dob.split('-'); //makes entered date into an array
    
//     var gender= document.getElementById('gender').value;
//     var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday', 'Saturday'];  
//     var male = ['Kwasi' ,'Kwadwo' , 'Kwabena' ,'Kwako' ,'Yaw' , 'Kofi','Kwamo'];
//     var female =['Akosua','Adwoa','Abena','Akwa','Yaa','Afua','Ama'];
//         MM = day.getMonth();
//         MM = MM + 1;
//         DD = day.getDate(); 
//         DD = DD +1;
//         YY = day.getFullYear();
//     var CCC = (YY - 1) / 100 + 1;
//     var CC = parseFloat(CCC);
//     var d = parseInt(( ((CC/4) - 2*CC -1) +((5* YY / 4)) + ((26*(MM + 1) / 10)) + DD)) % 7;
//     var dd = (d.toFixed(0));

// //     if(dobArray.length !== 3 && gender ="male")
// //     {
// //         alert("invalid Date");
// //     }
// //    else if(!dobArray[0].match(/^\d\d\d\d$/) || !dobArray[1].match(/^\d\d$/) ||  !dobArray[2].match(/^\d\d$/))
// //         {
// //          alert("invalid Date");    
// //         }
// //    else if(!dobArray[0].match(/^\d\d\d\d$/) || !dobArray[1].match(/^\d\d$/) || !dobArray[2].match(/^\d\d$/))
// //        {
// //         alert("invalid Date");    
// //        }
// //        else{
         
// //           var currentTime = new Date(parseInt(dobArray[0]),parseInt(dobArray[1]) - 1, //month starts from 0
// //             parseInt(dobArray[2])
// //         );        
// //         var currentDay = currentTime.getDay();       
// //         var currentDayName= days[currentDay];
// //         var dayName = names[currentDay];
// //        nameDisplay.innerHTML = "You were born on "+currentDayName+ " your name is "+ dayName;
// //     }
 
 






   




// const btn = document.querySelector('#name');
// const nameDisplay = document.querySelector('#gender');
// const dobInput = document.querySelector('#DoB');


// // btn.addEventListener('click' , generate);

// function generate(){
//  let bday = dobInput.value; //to hold value from input

// 






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

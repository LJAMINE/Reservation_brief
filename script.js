var formData={};

function submitFunct(){

    // var formData={};

//     formData["fullName"]=document.getElementById("fullName").value;
//     formData["email"]=document.getElementById("email").value;
//     formData["etatDepart"]=document.getElementById("etatDepart").value;
//     formData["etatArrive"]=document.getElementById("etatArrive").value;
//     formData["date"]=document.getElementById("date").value;
//     console.log(formData)

// return formData;



    }
 




function scrollintrodPage(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });

     section.style.display = 'block';
}


function scrollPage(sectionId) {
    let inputValue=document.getElementById("fullName").value;
    let email=document.getElementById("email").value;
    let etatDepart=document.getElementById("etatDepart").value;
    let etatArrive=document.getElementById("etatArrive").value;
    let date=document.getElementById("date").value;

    if(inputValue && email && etatDepart && etatArrive && date){
    
       console.log(inputValue)   
       console.log(email)   
       console.log(etatDepart)   
       console.log(etatArrive)   
       console.log(date)   
       
       const section = document.getElementById(sectionId);
       section.scrollIntoView({
           behavior: 'smooth',
           block: 'start'
       });
   
        section.style.display = 'block';
        
        }else{
            alert("entrer les info ");
        }



    
       
    }
   
 

 



 


let arrayTable = [];  
function getData() {
     arrayTable = [
        document.getElementById("fullName").value,    
        document.getElementById("email").value,       
        document.getElementById("etatDepart").value,  
        document.getElementById("etatArrive").value,  
        document.getElementById("date").value         
    ];

    console.log(arrayTable);   
    return arrayTable;
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
   
    getData();
 
    if(arrayTable[0]!=="" && arrayTable[1]!=="" && arrayTable[2]!=="" && arrayTable[3]!=="" && arrayTable[4]!==""){
    
       console.log(arrayTable[0])   
       console.log(arrayTable[1])   
       console.log(arrayTable[2])   
       console.log(arrayTable[3])   
       console.log(arrayTable[4])   
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
   
 


   let  plusValeurAdult=document.querySelector(".plusbuttonAdult")
    let moinsValeurAdult=document.querySelector(".minusbuttonAdult")
    let numbeerAdult=document.querySelector('#numbeerAdult')
    let  plusValeurMoins=document.querySelector(".plusbuttonSmall")
    let moinsValeurMoins=document.querySelector(".moinsbuttonSmall")
    let numbeerMoins=document.querySelector('#numbeerSmall')


    // adult


let i=0;
    plusValeurAdult.addEventListener("click",function(){
    


        if(i<10)    
            i=i+1;
            numbeerAdult.innerHTML=i
    })


    moinsValeurAdult.addEventListener("click",()=>{

     if(i>0){
        i--;
        numbeerAdult.innerHTML=i

     }else{
        i=0;
     }


    })


    //pas adult

    plusValeurMoins.addEventListener("click",function(){
    


        if(i<10)    
            i=i+1;
            numbeerMoins.innerHTML=i
    })


    moinsValeurMoins.addEventListener("click",()=>{

     if(i>0){
        i--;
        numbeerMoins.innerHTML=i

     }else{
        i=0;
     }


    })




    let prixAdult=document.querySelector('#prixAdult');

    console.log(prixAdult)




    






 




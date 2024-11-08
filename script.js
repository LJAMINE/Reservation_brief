
 


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
   
 //----------------------------------------------------------------------------------


   let  plusValeurAdult=document.querySelector(".plusbuttonAdult")
    let moinsValeurAdult=document.querySelector(".minusbuttonAdult")
    let numbeerAdult=document.querySelector('#numbeerAdult')
    let  plusValeurMoins=document.querySelector(".plusbuttonSmall")
    let moinsValeurMoins=document.querySelector(".moinsbuttonSmall")
    let numbeerMoins=document.querySelector('#numbeerSmall')


    // adult-----------------------


//plus o mois button adult

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

        // adult-----------------------



    //enfant-------------------------------------------------------

//plus o mois button enfant
let z=0
    plusValeurMoins.addEventListener("click",function(){
    


        if(z<10)    
            z=z+1;
            numbeerMoins.innerHTML=z
    })


    moinsValeurMoins.addEventListener("click",()=>{

     if(z>0){
        z--;
        numbeerMoins.innerHTML=z

     }else{
        z=0;
     }


    })


    //enfant-------------------------------------------------------






   // calcuuele total sur  button--------------------------------------

   //adult-------------------------------------------------------------

    plusValeurAdult.addEventListener("click",function(){
    
            let a=0;
            let sum=0;
            a=a+500;
 
            sum+=500*i;

            console.log(a)
            console.log(sum)

     document.querySelector('#newPrixAdult').innerHTML=`prix total : ${sum} dh  `



    })


    moinsValeurAdult.addEventListener("click",function(){
    


     
            let a=0;
            let sum=0;
            a=a-500;
 
            sum+=500*i;

            console.log(a)
            console.log(sum)

     document.querySelector('#newPrixAdult').innerHTML=`prix total : ${sum} dh  `



    })

   //adult-------------------------------------------------------------

      // start enfant-------------------------------------------------------------


    plusValeurMoins.addEventListener("click",function(){
    


   

            let b=0;
            let sumMois=0;
            b=b+500;
 
            sumMois+=100*z;

            console.log(b)
            console.log(sumMois)

     document.querySelector('#newPrixMoins').innerHTML=`prix total : ${sumMois} dh  `



    })


    moinsValeurMoins.addEventListener("click",function(){
 
            let c=0;
            let sumMois=0;
            c=c-100;
            sumMois+=100*z;

            console.log(c)
            console.log(sumMois)

     document.querySelector('#newPrixMoins').innerHTML=`prix total :  ${sumMois} dh  `



    })

          //fin enfant-------------------------------------------------------------


   


  

//final prix totalll


          let  buttonTotal=document.querySelector('#totttal')

   buttonTotal.addEventListener("click",function(){ 
   let  ValueTotal=document.querySelector('#prixTotal')
   let  prixTotalAdult=document.querySelector('#newPrixAdult')
   let  prixTotalEnfant=document.querySelector('#newPrixMoins')

   console.log(ValueTotal);
   console.log(prixTotalAdult);
   console.log(prixTotalEnfant);
       var sumTottal=0; 

       console.log("amineeeeee")


        sumTottal===prixTotalAdult+prixTotalEnfant

   console.log(sumTottal);


        
    


        

       
        // console.log(sumTottal);

 document.querySelector('#prixTotal').innerHTML=`prix total :  ${sumTottal} dh `



}
)

    






 




//blog button processing
document.getElementById('btn-blog').addEventListener('click',function(){
    window.location.href ='blog.html';
})

//history button processing
document.getElementById('btn-history').addEventListener('click',function(){
    document.getElementById('card-container').classList.add('hidden');
    document.getElementById('btn-history').classList.add('bg-lime-300');
    document.getElementById('btn-donation').classList.remove('bg-lime-300');
    document.getElementById('history-section').classList.remove('hidden');
})


//Donation button processing
document.getElementById('btn-donation').addEventListener('click',function(){
    document.getElementById('card-container').classList.remove('hidden');
    document.getElementById('btn-history').classList.remove('bg-lime-300');
    document.getElementById('btn-donation').classList.add('bg-lime-300');
    document.getElementById('history-section').classList.add('hidden');
})


// Donate Now button processing
// Donate Now-1
document.getElementById('btn-donate-now1').addEventListener('click',function(){
const inputAmount1= getValue('input-amount1');
// if(isNaN(inputAmount1)){
//     alert('Enter a valid amount');
// }
// else if(inputAmount1<=0){
//     alert('Enter Amount correctly');
// }
// else{

// }

const donationAmount=parseInt(getInnertext('donation-amount1')) ;
const mainAmount= parseInt(getInnertext('main-amount')) ;
const id1=document.getElementById('main-amount');
const id2=document.getElementById('donation-amount1');
const id3=document.getElementById('donation1-header').innerText;
 donateNow(inputAmount1 ,donationAmount, mainAmount,id1,id2,id3);
 
})



//shared function or utilities

//funtion for get a value from ID:
function getValue(id){
  const value=  document.getElementById(id).value;
return value;
}
//functin for get a innertext from Id:
function getInnertext(id){
    const value = document.getElementById(id).innerText;
    return value;
}

//Function for Donate Now button:
function donateNow(amount,donationAmount, mainAmount, id1, id2,id3){
   if(isNaN(amount)){
    alert('Enter a valid amount');
   
}
else if(amount<=0){
    alert('Enter Amount correctly');
    
}
else{
    // const donationAmount1=parseInt(getInnertext('donation-amount1')) ;
    // console.log(donationAmount1);
    // const mainAmount =parseInt(getInnertext('main-amount')) ;
    // console.log(mainAmount);
    const balance=parseInt(amount) ;
    // console.log(balance);
    if(mainAmount<balance){
        alert('Insufficient balace');
        return; 
    }
   const nowDonationAmount= donationAmount+balance;
   const nowMainAmount=mainAmount-balance;
   id1.innerText=nowMainAmount;
   id2.innerText= nowDonationAmount;
 

   const history = document.getElementById('history-section');
   const p=document.createElement('p');
   p.innerText=`${amount} Taka is Donated for ${id3}`;
   p.classList.add('font-bold');
   const today = new Date();
   const p1=document.createElement('p');
   p1.innerText=today;
   history.appendChild(p);
   history.appendChild(p1); 
  
}
}


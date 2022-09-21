function sub() {  

    if(currentRate===0) return undefined;  
    document.getElementById("rating-state").style.display="none";
    document.getElementById("selected").textContent = `You selected ` + currentRate + ` out of 5`;
    document.getElementById("thankyou-state").style.display="flex";
};
let currentRate=0;
function rate(rating) {
    
    currentRate = rating;
    for (let i = 1; i <= 5; i++) 
    {
        let btn = document.getElementById(i);
        
        if(i === rating) 
        {
            btn.style.background="hsl(25, 97%, 53%)";
            continue;
        }
        btn.style.background="#262F38";
    }
    
    
    
}
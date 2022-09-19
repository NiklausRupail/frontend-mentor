function Sub() {  switch (currentRate) {
        case 0:
            break;
        case 1:
          document.getElementById('submit').textContent = currentRate;
          break;
        case 2: 
          document.getElementById('submit').textContent = currentRate;
          break;    
        case 3: 
          document.getElementById('submit').textContent = currentRate;
          break;  
        case 4: 
          document.getElementById('submit').textContent = currentRate;
          break;  
        case 5: 
          document.getElementById('submit').textContent = currentRate;
          break;  
        default:
          document.getElementById('submit').textContent = "Kutas";
          break;
    }
    
  
        document.getElementById("rating-state").style.display="none";
        document.getElementById("selected").textContent = `You selected ` + currentRate + ` out of 5`;
        document.getElementById("thankyou-state").style.display="flex";
};
let currentRate=0;
function Rate(rating) {
    
    currentRate = rating;
    for (var i = 1; i <= 5; i++) 
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
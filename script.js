//1___ for the alert message when we select the city I run the alert inside html by : onclick for each city 
//onclick=alert("loading..")


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//2___ remove the cookie part from web page   <button class="accept" onclick="removeCookie()">I Accept</button>//

var acceptCookie=document.querySelector(".cookie"); //select the entire cookie div which has message and I accept button//

// let the cookie displays after 2000ms
function removeHidden(){ //I set the hidden class inside Css to: display:none so the cookie div will disappear once I refresh the page and after 2000 ms I will remove this hidden class again to display the cookie div//
    acceptCookie.classList.remove("hidden");
}
//this function will make the div dissapeard untill 2000ms //
setTimeout(removeHidden, 2000);

//remove the cookie message once I accept button clicked // I added the hidden class again to cookie div to remove it once I click the button
function removeCookie(){
   acceptCookie.classList.add("hidden");
}


// ///////////////////////////we have finished removing the cookie from the webpage /////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var tempretureArray=[]; // this array to set all what inside the .temp
var newArray=[] // this array is to store the fahrenheite value after converting  
for(var i=0;i<8;i++){
    var tempPick=Number(document.querySelectorAll(".temp")[i].innerHTML);//this will gives us 8 values and push them in an array
    tempretureArray.push(tempPick);

}

//this function to change the degree from c to f and vice versa

function changeDegree(){
    var chooseOption=document.getElementById("tempreture-unit").value;
    for(var x=0;x<tempretureArray.length;x++){
    if(chooseOption=="fahranheite"){
        var fahrenhietEquation=Math.floor((1.8*tempretureArray[x])+32);
        newArray.push(fahrenhietEquation);//pushing all fahrenheite value to use it later in converting to celceuis
        document.querySelectorAll(".temp")[x].innerText=fahrenhietEquation;
    }
    else{
        var celceuisEquation=Math.floor((newArray[x]-32)/1.8)+1;
        document.querySelectorAll(".temp")[x].innerText=celceuisEquation;
    }

    }
    
}

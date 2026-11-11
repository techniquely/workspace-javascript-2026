function randIInt(min,max){
    let num = (Math.random()*(max-min+1)+min);
    return num;
    
}
let M = randIInt (500,7000);
document.getElementByIf("M").textContent = M.toString();

// generate random for N, and update the textCont
let N = 100; // change
// generate random number for K, and update the the textcontent. 
let K =3; //change 
console.log(randIInt(100,200));

document.querySelector('[value="3"]').nextSibling.nodeValue=M.toString()+"-"+N.toString()+"-"+K.toString();

// change style of the answer block --- click selected to unclicked, unselected to selected 4
function changeStyle(event){// checkbox has defalut behavior in html
    alert("clicked"); // event.preventDefault ( only used if you do have default )
    console.log(this.getAttribute('class')); // this refers to the object which calls the function
    let classroom = this.getAttribute('class');
    if (classroom == "answer selected"){
        classname = "answer";
    }
    

    this.setAttribute("clas , classroom"); 
}


document.getElementById('answer')[0,1,2,3,4].addEventListener('click' , changeStyle);
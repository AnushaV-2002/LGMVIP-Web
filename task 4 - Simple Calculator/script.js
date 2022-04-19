//Storing the value of the input field
let output=document.getElementById("output");

//to add the value one after other
function display(num){
    output.value+=num;
}

//to calculate the result
function calculate(){
    try{
        output.value=eval(output.value);
    }
    catch(err){
        alert('Invalid Input');
    }
}

//to clear the output screen
function cl(){
    document.getElementById("output").value='';
}

//to delete the value one by one from backside
function del(){
    output.value=output.value.slice(0,-1);
}


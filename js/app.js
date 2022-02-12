function generatePin(){
    let displayInput = document.getElementById('display-input');
    displayInput.value = '';
    const pin = Math.round(Math.random()*10000);
    const pinLength = pin + '';
    if( pinLength.length>3){
    const getValue = document.getElementById('get-pin');
    getValue.value = pin;
    }
}
document.getElementById('numbers').addEventListener('click', function(e){
    const number = e.target.innerText;
    let displayInput = document.getElementById('display-input');
    if(isNaN(number)){
        if (number == 'C'){
            displayInput.value = '';
            
        }
        else if(number == '<'){
            displayInput.value = (displayInput.value.slice(0, -1)) ;
        }
        
        }
        else{
            const prevNum = displayInput.value;
            const currentNum = prevNum + number;
            displayInput.value = currentNum;
    }
})

function submit(){
    const success = document.getElementById('success');
    const failure = document.getElementById('failure');
    const getValue = document.getElementById('get-pin');
    
    const generatedPin= getValue.value
    
    let displayInput = document.getElementById('display-input');
    /* displayInput.value = ''; */
    const givenPin = displayInput.value;

    if ((generatedPin == '') || (givenPin == '')){
        alert("you have to generate and then input the number ")
        displayInput.value = ''
        getValue.value = ''
    }  
    else if (generatedPin === givenPin ) {
        console.log("success");
        success.style.display = 'block';
        failure.style.display = 'none';
        displayInput.value = ''
        getValue.value = ''
    } 
    else{
        console.log("Failure");
        failure.style.display = 'block';
        success.style.display = 'none';
        displayInput.value = ''
        getValue.value = ''


         var count = 3;
        var btn = document.getElementById("sub");
        var disp = document.getElementById('left');
  
        btn.onclick = function () {
            
                count--;
            if(count>=0){
                disp.innerText = count;
                
                alert("You exceed your limit")
                displayInput.value = ''
                getValue.value = ''
            }
            if (count<0) {

                alert("You exceed your limit")
                displayInput.value = ''
                getValue.value = ''

            }
        } 
    }
    
}
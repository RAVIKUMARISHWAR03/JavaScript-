const qrInput = document.getElementById('qr-input');
const qrImg = document.getElementById('qr-img');
const qrButton = document.getElementById('qr-button');
console.log(qrButton,qrImg,qrInput)

qrButton.addEventListener('click', () => {
    
    
    const inputValue = qrInput.value;
    console.log(inputValue)

    if( !inputValue){
        alert('Please enter a valid URL') ;
        return;
    }else{
        qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        arImg.alt = `QR code for ${inputValue}`;
    }
})
const length = 12;
const passwordBox =document.getElementById('password');
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const symbols = '!#$%&*+,-./:;<=>?@\^_';
const allChars = upperCase + lowerCase + symbols ;


function createPassword(){
    let password = '';
    password +=  upperCase[Math.floor(Math.random() * upperCase.length)];
    password +=  lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password +=  symbols[Math.floor(Math.random() *symbols.length)];

    while(password.length < length){
        password +=  allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password ;
}
 const button = document.getElementsByClassName('btn')[0];
 button.addEventListener('click', createPassword);
 const copyImage = document.getElementsByClassName('copy')[0];
 copyImage.addEventListener('click', copyPasword);
 
 function copyPasword(){
    passwordBox.select();
    document.execCommand('copy');
 }




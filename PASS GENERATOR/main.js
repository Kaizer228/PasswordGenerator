function GeneratePass() {

    let UserPassLength = document.getElementById('PasslengthEL');
    let PassLength =  UserPassLength.value;
    let LowerCaseChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
    let Password = '';
  
      if(PassLength === ''){
          alert('PLEASE INPUT PASSWORD LENGTH');
      }
      if (PassLength >= 21){
        alert('Only 20 letters can generate');
      }
      else{
  
          for (let i = 0; i < PassLength; i++) {
            let RandomIndex = Math.floor(Math.random() * LowerCaseChars.length);
          Password += LowerCaseChars[RandomIndex];
      }
  
      let ResultEl = document.getElementById('Result');
      ResultEl.textContent = Password;
  
      }
  
     
  }
  
  
  function copyToClipboard() {
      let ResultEl = document.getElementById('Result');
      let textArea = document.createElement('textarea');
              textArea.value = ResultEl.textContent;
              document.body.appendChild(textArea);
              textArea.select();
              document.execCommand('copy');
              document.body.removeChild(textArea);
              alert('Password copied to clipboard!');
          }
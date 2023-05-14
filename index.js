const input = document.querySelectorAll('form div input');
onload = input[0].focus();
input[0].addEventListener('input',()=>{
  if (input[0].value.length===6) {
    input[1].focus();
  }
})
input[1].addEventListener('input',()=>{
  if (input[1].value.length===1) {
    input[2].focus();
  }
})
input[2].addEventListener('input',()=>{
  if (input[2].value.length===12) {
    input[3].focus();
  }
})

const form = document.getElementsByTagName('form')[0];
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  // console.log(form.ID.value, form.PW.value, form.firstNumber.value, form.secondNumber.value);
  dataValidation();
})

function dataValidation() {
  (()=>{
    const myRegExp = /^[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;
    if (!myRegExp.test(form.firstNumber.value)) {
      const message = document.querySelector('fieldset > div:nth-of-type(1) > p:nth-of-type(2)')
      Object.assign(message, {
        innerText : '주민등록번호가 유효하지 않습니다',
        className : 'errorMessage'
      })
      throw message;
    } else {
      const message = document.querySelector('fieldset > div:nth-of-type(1) > p:nth-of-type(2)');
      Object.assign(message, {
        innerText : '',
        className : ''
      })
    }
  })();
  (()=>{
    const myRegExp = /^[1-4]$/
    if (!myRegExp.test(form.secondNumber.value)) {
      const message = document.querySelector('fieldset > div:nth-of-type(2) > p')
      Object.assign(message, {
        innerText : '뒷 자리가 유효하지 않습니다.',
        className : 'errorMessage'
      })
      throw message;
    } else {
      const message = document.querySelector('fieldset > div:nth-of-type(2) > p');
      Object.assign(message, {
        innerText : '',
        className : ''
      })
    }
  })();
  (()=>{
    const myRegExp = /^[\w-]{4,12}$/
    if (!myRegExp.test(form.ID.value)) {
      const message = document.querySelector('fieldset > div:nth-of-type(3) > p:nth-of-type(2)')
      Object.assign(message, {
        innerText : '아이디는 4자리 이상 12자리 이하 숫자,문자,밑줄(_),하이픈(-)만 사용 가능합니다.',
        className : 'errorMessage'
      })
      throw message;
    } else {
      const message = document.querySelector('fieldset > div:nth-of-type(3) > p:nth-of-type(2)')
      Object.assign(message, {
        innerText : '',
        className : ''
      })
    }
  })();
  (()=>{
    const myRegExp = /(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*+=-]).{8,25}/
    if (!myRegExp.test(form.PW.value)) {
      const message = document.querySelector('fieldset > div:nth-of-type(4) > p:nth-of-type(2)')
      Object.assign(message, {
        innerText : '비밀번호는 특수문자, 숫자, 영어를 포함하여 8자리 이상 25자리 이하여야 합니다.',
        className : 'errorMessage'
      })
      throw message;
    } else {
      const message = document.querySelector('fieldset > div:nth-of-type(4) > p:nth-of-type(2)')
      Object.assign(message, {
        innerText : '',
        className : ''
      })
    }
  })();
  console.log(document.getElementsByClassName('errorMessage'));
  console.log('유효성 검사 완료 submit만 하면 됩니다.');
}
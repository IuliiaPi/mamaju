const FORM = document.getElementById("julia-register");

const PSWD_INPUT = document.getElementById("password-input");
const CONF_PSWD_INPUT = document.getElementById("confirm-password-input");
const RESULT = document.getElementById("result");

const checkPasswordParameters = () => {
  if (PSWD_INPUT.value !== CONF_PSWD_INPUT.value){
      RESULT.innerHTML = "";
      return false;
  }

  const PSWD_INPUT_VALUE = PSWD_INPUT.value
    const hasUpperCase = /[A-Z]/.test(PSWD_INPUT_VALUE)
    const hasLowerrCase = /[a-z]/.test(PSWD_INPUT_VALUE)
    const hasDigital = /[\d]/.test(PSWD_INPUT_VALUE)

    if (PSWD_INPUT_VALUE.length < 8 || !hasUpperCase || !hasLowerrCase || !hasDigital)
    {return false}

  return true;
}

FORM.addEventListener("submit",(event) =>{
    event.preventDefault();

    const isValid = checkPasswordParameters();

    if (isValid){
        RESULT.innerHTML = "Success!";
    }
})


PSWD_INPUT.addEventListener("change", (event) => {
    const PSWD_INPUT_VALUE = PSWD_INPUT.value
    const hasUpperCase = /[A-Z]/.test(PSWD_INPUT_VALUE)
    const hasLowerrCase = /[a-z]/.test(PSWD_INPUT_VALUE)
    const hasDigital = /[\d]/.test(PSWD_INPUT_VALUE)

    if (PSWD_INPUT_VALUE.length < 8 || !hasUpperCase || !hasLowerrCase || !hasDigital) {
        event.target.classList.add("invalid")
    }else {
        event.target.classList.remove("invalid")
    }
    }
)




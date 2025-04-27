let Validacao = {
  handleSubmit: (event) => {
    event.preventDefault();
    let send = true;

    let inputs = form.querySelectorAll('input');

    Validacao.clearErrors();

    for (let i = 0; i < inputs.length; i++) {
      let input = inputs[i];
      let check = Validacao.checkInput(input);
      if (check !== true) {
        send = false;
        Validacao.showError(input, check);
      }
    }

    if (send) {
      form.submit();
    }
  },
  checkInput: (input) => {
    let rules = input.getAttribute('data-rules');

    if (rules !== null) {
      rules = rules.split('|');
      for (let k in rules) {
        let rDetails = rules[k].split('=');
        switch (rDetails[0]) {
          case 'required':
            if (input.value == '') {
              return 'O campo não pode está vazio!';
            }
            break;
          case 'min':
            if (input.value.length < rDetails[1]) {
              return "O campo deve ter no mínimo " + rDetails[1] + " caracteres.";
            }
            break;
          case 'email':
            if (input.value != '') {
              let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()\[\]\\.,;:\s@"]+\.)+[^<>()\[\]\\.,;:\s@"]{2,})$/i;
              if (!regex.test(input.value.toLowerCase())) {
                return 'Digite um e-mail válido!';
              }
            }
        }
      }
    }
    return true;
  },
  showError: (input, error) => {
    input.style.borderColor = '#ee5253';

    let errorElement = document.createElement('div');
    errorElement.classList.add('error');
    errorElement.innerHTML = error;

    input.parentElement.insertBefore(errorElement, input.ElementSibling);
  },
  clearErrors: () => {
    let inputs = form.querySelectorAll('input');
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].style = '';
    }

    let errorElements = document.querySelectorAll('.error');
    for (let i = 0; i < errorElements.length; i++) {
      errorElements[i].remove();
    }
  }
};

let form = document.querySelector('.Validacao');
form.addEventListener('submit', Validacao.handleSubmit);
const STORAGE_KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');


loadFormData();

form.addEventListener('input', onInput);
form.addEventListener('submit', onSubmit);


function onInput(event) {
  const name = event.target.name;   
  const value = event.target.value;


  formData[name] = value.trim(); 


  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}


function onSubmit(event) {
  event.preventDefault(); 


  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }


  console.log(formData);


  form.reset();


  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
}


function loadFormData() {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';

    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
}

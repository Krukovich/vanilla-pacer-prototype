var endeavors = [
  {
    name: 'Разбогатеть',
    cats: '136'
  }
];

const addEndeavorModal = new Modal("front/modals/addEndeavor.html");

function selectByButton(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }

  event.target.classList.toggle('selected');
  const option = addEndeavorForm.querySelector(`option[value="${event.target.innerText}"]`);
  option.selected = !option.selected;
}

function saveEndeavor() {
  event.preventDefault();
  const cats = [...addEndeavorForm.cats.options]
    .map((option, index) => [option, index])
    .filter(([option]) => option.selected)
    .map(([_, index]) => index)
    .join('');
  endeavors.push({name: addEndeavorForm.name.value, cats});
  console.log(endeavors);
}

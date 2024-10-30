const url = 'https://api-rickandmorty-llbq.onrender.com/api/characters';
const container = document.querySelector('.container');
function updateList() {
  fetch(url)
    .then(res => res.json())
    .then(results => {
      for (let character of results) {
        let p = document.createElement('p');
        let { id, name, species } = character;
        let show = { id, name, species }
        p.textContent = JSON.stringify(show);
        container.append(p);
      }
    })
    .catch(err => console.error(err));
}

function handleSubmit(e) {
  e.preventDefault();
  let f = e.target;
  let newCharacter = {
    id: f.id.value,
    name: f.name.value,
    img: f.img.value,
    species: f.species.value
  };
  fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(newCharacter) })
    .then(res => res.json())
    .then(data => console.log(data));
  f.reset();
}

updateList();
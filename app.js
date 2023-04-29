const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
    for (let i of fruits){
        i.toLowerCase().includes(str.toLowerCase()) ? results.push(i) : null;
    }
	showSuggestions(results);
}

function showSuggestions(results) {
    clearSuggestions();
    for (let result in results){

        const listFruit = document.createElement('li');
        listFruit.innerText = results[result];
        listFruit.style.listStyle = 'none';
        listFruit.setAttribute('id', results[result]);
        
        suggestions.append(listFruit);
    }
}

function clearSuggestions(){
    const items = document.querySelectorAll('li');
    let itemArr = [...items];
    itemArr.forEach((item) => item.remove());
}

input.addEventListener(('keyup'), () => search(input.value));

suggestions.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'li'){
        input.value = e.target.innerText;
        clearSuggestions();
    }
});
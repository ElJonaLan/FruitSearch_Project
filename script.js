const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	for (let fruit of fruits) {
		if (fruit.toLowerCase().includes(str.toLowerCase())) {
			results.push(fruit)
		}
	}
	return results;
}

// function searchHandler(e) {
// 	suggestions.innerHTML = '';
// 	const fruits = search(e.target.value);
// 	for (let fruit of fruits) {
// 		let newLi = document.createElement('li');
// 		newLi.innerText = fruit;
// 		suggestions.append(newLi);
// 	}
// 	showSuggestions(results, input.value)
// }

function searchHandler(e) {
	if (input.value === '') {
		suggestions.innerHTML = '';                // why doesn't this work?
	}
	let searchResults = '';
	const results = search(input.value);
	for (let fruit of results) {
		searchResults += `<li>${fruit}</li>`;
	}
	suggestions.innerHTML = searchResults;
}

// function showSuggestions(results, inputVal) {
// 	if (inputVal) {
// 		for (let each of results) {
// 			each.classList.add('has-suggestions');
// 		}
// 	}
// }  

function useSuggestion(e) {
	input.value = e.target.innerText;
	suggestions.innerHTML = '';
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
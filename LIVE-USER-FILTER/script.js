const result = document.getElementById('result');
const filter = document.getElementById('filter');
const listItems = [];

async function getData() {
    try {
        const res = await fetch('https://randomuser.me/api/?results=100'); // Reduced to 100 for better performance
        const { results } = await res.json();

        result.innerHTML = '';

        results.forEach(user => {
            const li = document.createElement('li');
            li.innerHTML = `
                <img src="${user.picture.large}" alt="${user.name.first}">
                <div class="user-info">
                    <h4>${user.name.first} ${user.name.last}</h4>
                    <p>${user.location.city}, ${user.location.country}</p>
                </div>
            `;
            listItems.push(li);
            result.appendChild(li);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function filterData(searchTerm) {
    const lowerCaseTerm = searchTerm.toLowerCase();
    listItems.forEach(item => {
        item.classList.toggle('hide', !item.innerText.toLowerCase().includes(lowerCaseTerm));
    });
}

let debounceTimeout;
filter.addEventListener('input', (e) => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => filterData(e.target.value), 300);
});

getData();

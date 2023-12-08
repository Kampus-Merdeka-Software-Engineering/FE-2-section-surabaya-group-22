const API_BASE_URL = 'http://localhost:3000';

async function fetchMenu() {
    const menuList = document.getElementsByClassName('tim')
    try {
        const response = await fetch(`${API_BASE_URL}/menu`)
        const menu = await response.json();
        console.log(menu);
        const menuListelement = menu.map((menu) => {
            return `
                <img src='${menu.cakeImg}'/>
                <h6>${cakeName}<h6>
                <span>Rp. ${price}<span>
            `;
        });

        menuList.innerHTML = bookListElement;
    } catch (err) {
        console.log(err)
    }
};

fetchMenu();
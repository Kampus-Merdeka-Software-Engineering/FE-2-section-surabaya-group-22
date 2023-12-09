const API_BASE_URL = 'http://localhost:3000';

async function fetchMenu() {
    const menuList = document.getElementById('item-menu')
    console.log(menuList);
    try {
        const response = await fetch(`${API_BASE_URL}/menu`)
        const menu = await response.json();
        console.log(menu);
        const menuListElement = menu.map((item) => {
            return `
                <div>    
                    <img loading="lazy" src='${item.cakeImg}'/>
                    <h6>${item.cakeName}<h6>
                    <span>Rp. ${item.price}<span>
                </div>
            `;
        });

        menuList.innerHTML = menuListElement;
    } catch (err) {
        console.log(err)
    }
};

fetchMenu();

async function orderCake() {
    const name = document.getElementById('fname').value;
    const cake = document.getElementById('cake-variant').value;
    const cakeSum = document.getElementById('lname').value;
    const address = document.getElementById('subject').value;
    const resMessage = document.getElementById('res-message');
    console.log('berjalan');
    console.log(resMessage);
    try {
        await fetch(`${API_BASE_URL}/consument`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, cake, cakeSum, address})
        });
        
        resMessage.innerHTML = `
            <h3>Pesanan Terkirim!</h3>
        `

    } catch (err) {
        console.log(err);
        resMessage.innerHTML = `
            <h3>Gagal tersimpan!</h3>
        `
    } 
    
}
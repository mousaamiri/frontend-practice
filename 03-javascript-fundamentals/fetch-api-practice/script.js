const usersUrl = "https://jsonplaceholder.typicode.com/users"
const app = document.getElementById('app')
const loading = document.getElementById('loading')
loadUsers()
async function loadUsers() {
    try {
        showLoading()
        await new Promise(resolve => setTimeout(resolve, 3000));
        const response = await fetch(usersUrl)
        if (!response.ok) {
            throw new Error(`Request failed: ${response.status} ${response.statusText}`);
        }
        const users = await response.json()
    
        users.forEach(user => {
            render(user)
        });
    } catch (err) {
        showError(err.message)
        console.log("err message : " + err)
    } finally {
        hiddenLoading()
    }
}
function showError(message){
    app.innerHTML = `<p class="error-message">خطا: ${message}</p>`
}
function hiddenLoading() {
    loading.style.display = 'none'
}
function showLoading() {
    loading.style.display = 'flex'
}
function render(user) {

    const card = document.createElement('article')
    card.className = 'user-card'

    const cardHeader = document.createElement('header')
    cardHeader.className = 'user-card__header'

    const name = document.createElement('h2')
    name.className = 'user-card__name'
    name.textContent = user.name

    const userName = document.createElement('span')
    userName.className = 'user-card__username'
    userName.textContent = "@" + user.username

    cardHeader.appendChild(name)
    cardHeader.appendChild(userName)

    const contact = document.createElement('section')
    contact.className = 'user-card__contact'

    const contactHeader = document.createElement('h3')
    contactHeader.textContent = 'Contact: '

    const contactParagraphh = document.createElement('p')
    const cpEmailLabel = document.createElement('strong')
    cpEmailLabel.textContent = "Email: "

    const cpEmail = document.createElement('a')
    cpEmail.href = `mailto:${user.email}`
    cpEmail.textContent = user.email

    contactParagraphh.appendChild(cpEmailLabel)
    contactParagraphh.appendChild(cpEmail)

    contact.appendChild(contactHeader)
    contact.appendChild(contactParagraphh)

    const address = document.createElement('section')
    address.className = 'user-card__address'

    const addressLabel = document.createElement('h3')
    addressLabel.textContent = 'Address: '

    const streetP = document.createElement('p')
    const streetLabel = document.createElement('strong')
    streetLabel.textContent = 'Street:'
    streetP.appendChild(streetLabel)
    streetP.append(user.address.street)

    const suiteP = document.createElement('p')
    const suteLabel = document.createElement('strong')
    suteLabel.textContent = 'Suite: '
    suiteP.appendChild(suteLabel)
    suiteP.append(user.address.suite)

    const cityP = document.createElement('p')
    const cityLabel = document.createElement('strong')
    cityLabel.textContent = 'City: '
    cityP.appendChild(cityLabel)
    cityP.append(user.address.city)

    const zipCodeP = document.createElement('p')
    const zipCodeLabel = document.createElement('strong')
    zipCodeLabel.textContent = 'Zip Code: '
    zipCodeP.appendChild(zipCodeLabel)
    zipCodeP.append(user.address.zipcode)

    address.appendChild(addressLabel)
    address.appendChild(streetP)
    address.appendChild(suiteP)
    address.appendChild(cityP)
    address.appendChild(zipCodeP)

    card.appendChild(cardHeader)
    card.appendChild(contact)
    card.appendChild(address)

    app.appendChild(card)
}
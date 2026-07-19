const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200, stock: 0 },
    { id: 2, name: "Mechanical Keyboard", category: "Accessories", price: 95, stock: 15 },
    { id: 3, name: "Wireless Mouse", category: "Accessories", price: 40, stock: 0 },
    { id: 4, name: "27-inch Monitor", category: "Electronics", price: 320, stock: 10 },
    { id: 5, name: "USB-C Hub", category: "Accessories", price: 55, stock: 22 },
    { id: 6, name: "Gaming Chair", category: "Furniture", price: 280, stock: 0 },
    { id: 7, name: "Webcam", category: "Electronics", price: 75, stock: 18 },
    { id: 8, name: "Headphones", category: "Audio", price: 150, stock: 12 },
    { id: 9, name: "Smartphone", category: "Electronics", price: 900, stock: 7 },
    { id: 10, name: "Notebook", category: "Stationery", price: 5, stock: 100 }
];
const searchInput = document.getElementById('search-input')
const categorySelect = document.getElementById('category-select')
const sortSelect = document.getElementById('sort-select')
const stockOnly = document.getElementById('stock-only')
const productsCount = document.getElementById('products-count')
const productList = document.getElementById('product-list')
const emptyState = document.getElementById('empty-state')

const sortBy = {
    name: 'name',
    priceAsc: 'price-asc',
    priceDesc: 'price-desc'
}
let state = {
    searchTerm: "",
    selectedCategory: "all",
    sortBy: sortBy.name,
    inStockOnly: false
}
setState(state)
function getFilteredProducts() {
    let result = [...products]

    if (state.searchTerm.trim() !== "") {
        result = result.filter(p =>
            p.name.toLowerCase().includes(state.searchTerm.toLowerCase())
        )
    }

    if (state.selectedCategory !== "all") {
        result = result.filter(p => p.category === state.selectedCategory)
    }

    if (state.inStockOnly) {
        result = result.filter(p => p.stock > 0)
    }

    if (state.sortBy === sortBy.priceAsc) {
        result = result.sort((a, b) => a.price - b.price)
    } else if (state.sortBy === sortBy.priceDesc) {
        result = result.sort((a, b) => b.price - a.price)
    } else {
        result = result.sort((a, b) => a.name.localeCompare(b.name))
    }

    return result
}
function setSearchTerm(value) {
    setState({ searchTerm: value })
}
function setCategory(category) {
    setState({ selectedCategory: category })
}
function toggleInStockOnly() {
    setState({ inStockOnly: !state.inStockOnly })
}
function setSortBy(value) {
    setState({ sortBy: value })
}
function setState(newState) {
    state = { ...state, ...newState }
    render()
}
function render() {
    //================= Init product list 
    const filtered = getFilteredProducts()
    productList.innerHTML = ""

    productsCount.textContent = filtered.length
    if (filtered.length === 0) {
        emptyState.style.display = 'block'
        return
    }
    emptyState.style.display = 'none'
    filtered.forEach(product => {
        const card = document.createElement('div')
        card.className = 'product-card'
        card.innerHTML = `
            <h3>${product.name}</h3>
            <p class='category'>${product.category}</p>
            <p class='price'>$${product.price}</p>
            <p class='stock ${product.stock > 0 ? "in-stock" : "out-of-stock"}'>${product.stock > 0 ? `موجودی: ${product.stock}` : 'ناموجود'}</p>
        `
        productList.appendChild(card)
    })
}
//================= Initialize category selection (setting it up once is sufficient; no need to re-render it every time)
const categories = [...new Set(products.map(p => p.category))]
categorySelect.innerHTML = ""
categorySelect.innerHTML = `<option value="all">همه دسته ها</option>`
categories.forEach(cate => {
    categorySelect.innerHTML +=
        `<option value="${cate}">${cate}</option>`
})
//================= Listeners 
searchInput.addEventListener('input', (e) => {
    setSearchTerm(e.target.value)
})
categorySelect.addEventListener('change', (e) => {
    e.preventDefault()
    setCategory(e.target.value)
})
sortSelect.addEventListener('change', (e) => {
    e.preventDefault()
    setSortBy(e.target.value)
})
stockOnly.addEventListener('change', () => {
    toggleInStockOnly()
})
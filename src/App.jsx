import { useState } from 'react'
import './App.css'
import DarkModeToggle from './components/DarkModeToggle'
import ProductList from './components/ProductList'
import Cart from './components/Cart'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [cart, setCart] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <header className="app-header">
        <h1>🛒 Shopping App</h1>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </header>

      <div className="filter-section">
        <label htmlFor="category-select">Filter by category: </label>
        <select
          id="category-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
        </select>
      </div>

      <div className={darkMode ? 'app-container dark-mode' : 'app-container'}>
        <div className="main-content">
          <ProductList
            selectedCategory={selectedCategory}
            addToCart={addToCart}
          />
          <Cart cart={cart} />
        </div>
      </div>
    </div>
  )
}

export default App

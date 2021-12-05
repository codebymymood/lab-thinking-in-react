
import React, {useState} from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'


function FilterableProductTable(props) {

    const {products} = props

    const[productsArr, setProducts] = useState(products)
    const [productsArrCopy, setProductsCopy] = useState([])

    const handleSearch = (event) => {
       let product = event.target.value
       let filteredProducts = products.filter((something) => {
        return something.name.toLowerCase().includes(product.toLowerCase())
       })
       setProductsCopy(filteredProducts)
    }

    return (
        <div>
            <h1>IronProducts</h1>
            <SearchBar search={handleSearch}/>
            <ProductTable products={productsArr} />
        </div>
    )
}

export default FilterableProductTable


import { useContext, useEffect, useState } from 'react';
import { ProductContext } from './ProductContext.jsx';

const UseFetchProducts = () => {
    const { setProducts } = useContext(ProductContext);
    const [products, setLocalProducts] = useState([]);
console.log(products)
    useEffect(() => {
        fetch('http://localhost:5000/api/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setLocalProducts(data);
                console.log('data_at_UseFetchProducts:', data);
            })
            .catch(error => console.error('Error fetching products:', error));
    }, [setProducts]);

    return products;
}

export default UseFetchProducts;
import { useEffect, useState } from "react";

const useProducts = () => {
    const [theProducts, setTheProducts] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setTheProducts(data))
    }, []);
    return [theProducts,setTheProducts];
}

export default useProducts;
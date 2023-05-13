
import {Link} from 'react-router-dom'

const productList = [{
    id: 1,
    name: "televisor",
    price: 123,
    description: "televisor - Lorem ASD ADA SD ASDA SDASDASDSADSDASDASDASDASDASDASDASD"
},
{
    id: 2,
    name: "Computer",
    price: 456,
    description: "Computadora - Loasdddas 5651561 asd asdas312d 3ad asdASDASDSADSDASDASDASDASDASDASDASD"
},
{
    id: 3,
    name: "CellPhone",
    price: 88987,
    description: "Celularsadas -sadasdsadasdsadadLorem ASD ADA SD ASDA SDASDASDSADSDASDASDASDASDASDASDASD"
}
];


function Products(props) {
    let id = Number(props.match.params.id);

    let product = productList.find(oneProduct => oneProduct.id === id);

    return (
        <div>
            <h2>Soy el componente Products</h2>

            <Link to="/products/1">products 1</Link><br/>
            <Link to="/products/2">products 2</Link><br/>
            <Link to="/products/3">products 3</Link><br/>
            <Link to="/products/58">products 58</Link><br/>
            {
                product &&
                <>
                    <p>{product.id} </p>
                    <p>{product.name}</p>
                    <p>{product.price} </p>
                    <p>{product.description} </p>
                </>
            }
            {
                !product && <p>No hay productos con ese ID</p>
            }
        </div>
    )
}

export default Products;
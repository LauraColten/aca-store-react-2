function ShoppingCart(props) {

    let products = props.shoppingCart.map(product=>
        <a href="#" className="list-group-item" key={product.id}>{product.name}</a>
    )
    return(
    <div className="list-group">
        {products}
    </div>)
}

ShoppingCart.propTypes = {
    shoppingCart: PropTypes.array.isRequired
}
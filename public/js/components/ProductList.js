function ProductList(props) {
    return props.products.map((p,i)=>{
        return  <ProductDetail
        addToCart={props.addItemToCart}
        key={i}
        product={p} />
    });
}
function Layout(props) {
    return <div className="Layout">
        <Header cart={props.shoppingCart} routeTo={props.routeTo}/>
        <div className="container">
            {props.children}
        </div>
        <hr/>
        <Footer />
    </div>
}
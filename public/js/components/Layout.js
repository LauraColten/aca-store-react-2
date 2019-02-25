function Layout(props) {
    return <div className="Layout">
        <Header cart={props.cart} changeView={props.changeView}/>
        <div className="container">
            {props.children}
        </div>
        <hr/>
        <Footer />
    </div>
}

Layout.propTypes = {
    cart: PropTypes.array.isRequired,
    changeView: PropTypes.func.isRequired,
    children: Proptypes.any
}
class App extends React.Component {
    state = {
        shoppingCart: [],
        route: "products"
    }
    addItemToCart = (product) => {
        this.setState(() => {
            this.state.shoppingCart.push(product);
            return { shoppingCart: this.state.shoppingCart }
        })
    }
    routeTo = (route) => {
        this.setState({route:route})
    }
    render() {
        return (
            <div className="App">
                <Layout shoppingCart={this.props.numberOfItemsInCart} routeTo={this.routeTo}>
                    <div className="row" style={{display:this.state.route==="products"?"show":"none"}}>
                        <div className="col-md-3">
                            <p className="lead">Shop Name</p>
                            <div className="list-group">
                                <a href="#" className="list-group-item">Category 1</a>
                                <a href="#" className="list-group-item">Category 2</a>
                                <a href="#" className="list-group-item">Category 3</a>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <Carousel />
                            <div className="row">
                                <ProductList products={this.props.products} addItemToCart={this.addItemToCart} />
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{display:this.state.route==="cart"?"show":"none"}}>
                        <ShoppingCart shoppingCart={this.state.shoppingCart}/>
                    </div>
                </Layout>
            </div>
        );
    }
}
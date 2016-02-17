app.controller('DetailsCtrl',DetailsCtrl);

function DetailsCtrl(productSrv, cartSrv, product,$location){
	var ctrl = this;
	ctrl.cartSrv = cartSrv;
	ctrl.$location = $location;
    ctrl.product = product;
    ctrl.size;
}
DetailsCtrl.prototype.addToCart = function(product){
    var ctrl = this;
    var cartProduct = {
            name: product.name,
            description:product.description,
            price: product.price,
            quantity: 1,
            size: ctrl.size
        };
    ctrl.cartSrv.cart.push(cartProduct);
    console.log(ctrl.cartSrv.cart);
};


DetailsCtrl.prototype.selectSize = function(size){
    var ctrl = this;
    ctrl.size = size;
}

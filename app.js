var app = angular.module("myModule", [])
				.controller("myController", function($scope){
				$scope.carts=[];
				$scope.products = [
					{p_id: "1", p_name: "Samsung Galaxy S7 Edge", p_image: "1.png", p_price: 380},
					{p_id: "2", p_name: "iPhone 8", p_image: "2.jpg", p_price: 680},
					{p_id: "3", p_name: "Sony Xperia Z3+", p_image: "3.jpeg", p_price: 300},
					{p_id: "4", p_name: "ALIENWARE 17", p_image: "4.jpg", p_price: 1500},
					{p_id: "5", p_name: "Luvaglio Laptop", p_image: "5.png", p_price: 1000000},
					{p_id: "6", p_name: "Motorola Moto G4 16GB", p_image: "6.jpeg", p_price: 200}
				];
				
				$scope.add_cart = function(product){
					if(product){
						$scope.carts.push({p_id: product.p_id, p_name: product.p_name, p_price: product.p_price});
					}	
				}
				
				$scope.total = 0;
				
				$scope.setTotals = function(cart){
					if(cart){
						$scope.total += cart.p_price;
					}
				}
				
				$scope.remove_cart = function(cart){
					if(cart){
						$scope.carts.splice($scope.carts.indexOf(cart), 1);
						$scope.total -= cart.p_price;
					}
				}
	});
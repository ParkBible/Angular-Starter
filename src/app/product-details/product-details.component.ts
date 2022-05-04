import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productb: Product | undefined;
  constructor(private route: ActivatedRoute,
            private cartService: CartService) {}

  add(product: Product){
    this.cartService.addToCart(product);
    window.alert("Your product has been added to the cart!")
  }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap; // 현재 url 전체 갖고옴
    const productIdFromRoute = Number(routeParams.get('productId')); // 파라미터 값 갖고옴

    // Find the product that correspond with the id provided in route.
    // products 배열에서 찾는다. product를 -> product.id와 파라미터가 같은 product를
    this.productb = products.find(
      (product) => product.id === productIdFromRoute
    );
  }
}

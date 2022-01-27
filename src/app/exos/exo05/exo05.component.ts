import { Component, OnInit } from '@angular/core';
import { Article } from './models/article.model';
import { ShoppingService } from './services/shopping.service';

@Component({
  selector: 'app-exo05',
  templateUrl: './exo05.component.html',
  styleUrls: ['./exo05.component.css']
})
export class Exo05Component implements OnInit {

  article: Article = new Article() 

  cart: Article[] = []

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.cart = this.shoppingService.cart
  }

  addToCart() {
    const art = new Article
    art.label = this.article.label
    this.shoppingService.addToCart(art)
  }

  deleteToCart(index: number) {
    this.shoppingService.removeToCart(index)
  }

  increment(index: number) {
    this.shoppingService.increaseQuantity(index)
  }

  decrement(index: number) {
    this.shoppingService.decreaseQuantity(index)
  }

}

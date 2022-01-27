import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  @Input() cart: Article[]

  @Output() eventDelete: EventEmitter<number>
  @Output() eventIncrease: EventEmitter<number>
  @Output() eventDecrease: EventEmitter<number>

  constructor() {
    this.eventDelete = new EventEmitter<number>()
    this.eventIncrease = new EventEmitter<number>()
    this.eventDecrease = new EventEmitter<number>()
  }

  ngOnInit(): void {
  }

  emitDeleteToCart(index: number) {
    this.eventDelete.emit(index)
  }

  emitIncrease(index: number) {
    this.eventIncrease.emit(index)
  }

  emitDecrease(index: number) {
    this.eventDecrease.emit(index)
  }


}

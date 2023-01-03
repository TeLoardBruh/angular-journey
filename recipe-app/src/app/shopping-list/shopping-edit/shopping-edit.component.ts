import { Component, ElementRef, ViewChild } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('nameItem', { static: false }) nameItemRef: ElementRef;
  @ViewChild('amountItem', { static: false }) amountItemRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  onAddItem() {
    this.shoppingListService.addIngredient(
      this.nameItemRef.nativeElement.value,
      this.amountItemRef.nativeElement.value
    );
  }
}

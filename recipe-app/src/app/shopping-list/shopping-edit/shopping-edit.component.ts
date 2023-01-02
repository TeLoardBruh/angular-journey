import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('nameItem', { static: false }) nameItemRef: ElementRef;
  @ViewChild('amountItem', { static: false }) amountItemRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  onAddItem() {
    const newIngredient = new Ingredient(
      this.nameItemRef.nativeElement.value,
      this.amountItemRef.nativeElement.value
    );
    this.ingredientAdded.emit(newIngredient);
  }
}

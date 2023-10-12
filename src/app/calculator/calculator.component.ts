import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  expression: string = '';

  addToExpression(value: string) {
    this.expression += value;
  }

  clearExpression() {
    this.expression = '';
  }

  calculateResult() {
    try {
      this.expression = eval(this.expression);
    } catch (error) {
      this.expression = 'Erro';
    }
  }
}

import { Component, inject, Injectable } from '@angular/core';

@Component({
  selector: 'app-angular-calculator-16',
  standalone: true,
  imports: [],
  templateUrl: './angular-calculator-16.component.html',
  styleUrl: './angular-calculator-16.component.scss',
})
export class AngularCalculator16Component {
  calculator: Calculator = inject(Calculator);
  result: number = 0;
  expression: string | null = null;

  private left: number = 0;
  private right: number = 0;
  private midOperation: string | null = null;

  onClick(button: CalculatorButton): void {
    //console.log(`${button.value ?? button.operation}`);
    if (button.value !== null) {
      this.onNumClick(button.value);
    }
    if (button.operation !== null) {
      this.onOperationClick(button.operation);
    }
  }

  onNumClick(value: number) {
    if (this.expression === null) {
      if (this.left === 0) {
        this.left = value;
      } else {
        this.left = parseInt(`${this.left}${value}`);
      }
      this.expression = `${this.left}`;
    } else {
      if (this.right === 0) {
        this.right = value;
      } else {
        this.right = parseInt(`${this.right}${value}`);
      }
      this.expression = `${this.expression}${this.right}`;
    }
  }

  onOperationClick(operation: string) {
    switch (operation) {
      case 'C':
        this.left = 0;
        this.right = 0;
        this.result = 0;
        this.expression = null;
        break;
      case '=':
        this.result = this.calculator.performOperation(
          this.left,
          this.right,
          operation
        );
        this.left = this.result;
        this.right = 0;
        this.expression = `${this.result}`;

        break;
      default:
        //debugger;
        if (this.midOperation === null) {
          this.midOperation = operation;
          this.expression = `${this.left}${this.midOperation}`;
        } else {
          this.result = this.calculator.performOperation(
            this.left,
            this.right,
            this.midOperation
          );
          this.midOperation = operation;
          this.left = this.result;
          this.right = 0;
          this.expression = `${this.result}${operation}`;
        }
        break;
    }
  }
}

@Injectable({ providedIn: 'root' })
export class Calculator {
  buttons: CalculatorButton[] = [
    { value: 1, operation: null, useNumberClass: true },
    { value: 2, operation: null, useNumberClass: true },
    { value: 3, operation: null, useNumberClass: true },
    { value: null, operation: '+', useNumberClass: false },

    { value: 4, operation: null, useNumberClass: true },
    { value: 5, operation: null, useNumberClass: true },
    { value: 6, operation: null, useNumberClass: true },
    { value: null, operation: '-', useNumberClass: false },

    { value: 7, operation: null, useNumberClass: true },
    { value: 8, operation: null, useNumberClass: true },
    { value: 9, operation: null, useNumberClass: true },
    { value: null, operation: '*', useNumberClass: false },

    { value: null, operation: 'C', useNumberClass: true },
    { value: 0, operation: null, useNumberClass: true },
    { value: null, operation: '=', useNumberClass: true },
    { value: null, operation: '/', useNumberClass: false },
  ];

  performOperation(left: number, right: number, operation: string): number {
    switch (operation) {
      case '-':
        return this.subtract(left, right);
      case '*':
        return this.multiply(left, right);
      case '/':
        return this.divide(left, right);
      default:
        return this.add(left, right);
    }
  }

  private add(numberOne: number, numberTwo: number): number {
    return numberOne + numberTwo;
  }

  private subtract(numberOne: number, numberTwo: number): number {
    return numberOne - numberTwo;
  }

  private multiply(numberOne: number, numberTwo: number): number {
    return numberOne * numberTwo;
  }

  private divide(numberOne: number, numberTwo: number): number {
    return numberOne / numberTwo;
  }
}

export interface CalculatorButton {
  value: number | null;
  operation: string | null;
  useNumberClass: boolean;
}

import { IValidation } from "../../protocols/i-validation";

export class RequiredFieldValidation implements IValidation {

  constructor(
    private fieldName: string
  ) { }

  validate(input: any): Error {
    if (!input[this.fieldName]) {
      return new Error(`Field ${this.fieldName} is required !`);
    }
  }

}
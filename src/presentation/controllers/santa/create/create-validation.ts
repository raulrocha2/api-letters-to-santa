import { IValidation } from "../../../protocols/i-validation"
import { RequiredFieldValidation } from "../../../helpers/validators/require-field-validation"
import { ValidationComposite } from "../../../helpers/validators/validation-composite"

export const createSantaValidation = () => {

  const validations: IValidation[] = []
  for (const field of ['login', 'password']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
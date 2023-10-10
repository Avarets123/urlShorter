import { CodeExceptionsEnum } from '@infrastructure/exceptions/enums'

export class ValidationException extends Error {
  constructor(
    readonly field: string,
    readonly rule: string,
    readonly message: string,
    readonly code = CodeExceptionsEnum.ValidationException,
  ) {
    super()
  }
}

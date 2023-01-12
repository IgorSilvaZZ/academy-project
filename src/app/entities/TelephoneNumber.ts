/* eslint-disable prettier/prettier */

export class TelephoneNumber {
  private readonly telephoneNumber: string;

  constructor(telephoneNumber: string) {
    const telephoneNumberIsValid =
      this.validateTelephoneNumber(telephoneNumber);

    if (!telephoneNumberIsValid) {
      throw new Error('Telephone is not valid formatter!');
    }

    const notTelephoneFormatter = this.extractPhoneNumber(telephoneNumber);

    this.telephoneNumber = notTelephoneFormatter;
  }

  public get value() {
    return this.telephoneNumber;
  }

  /* private validateTelephoneNumber(phoneNumberFormatter: string): boolean {
    // Expressão regular para validar numero de telefone com DD entre parenteses
    const expressionRegex =
      '^\\(((1[1-9])|([2-9][0-9]))\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$';

    const regex = new RegExp(expressionRegex);

    return regex.test(phoneNumberFormatter);
  } */

  private validateTelephoneNumber(phoneNumberFormatter: string): boolean {
    const sanitizedPhone = phoneNumberFormatter.replace(/\D/g, '');
    return sanitizedPhone.length >= 10 && sanitizedPhone.length <= 11;
  }

  private extractPhoneNumber(phoneNumberWithMask: string): string {
    const phoneNumberWithoutMask = phoneNumberWithMask.replace(/\D/g, '');

    return phoneNumberWithoutMask;
  }
}

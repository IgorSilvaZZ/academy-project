/* eslint-disable prettier/prettier */

import { TelephoneNumber } from './TelephoneNumber';

describe('Telephone Number Academy', () => {
  it('Should be able create a academy telephone number with formatter valid', () => {
    const telephoneNumber = new TelephoneNumber('(11)9889-90909');

    expect(telephoneNumber).toBeTruthy();
  });

  it('Should not be able to create a academy formatter telephone number without parentheses', () => {
    expect(() => new TelephoneNumber('119889-90909')).toThrow();
  });

  it('Should not be able to create a academy formatter telephone number formatter invalid', () => {
    expect(() => new TelephoneNumber('(11)2020-202')).toThrow();
  });

  it('Should be able create a academy telephone number only numbers', () => {
    const telephoneNumber = new TelephoneNumber('(11)9889-90909');

    expect(telephoneNumber.value).toEqual('11988990909');
  });
});

/* eslint-disable prettier/prettier */

import { Description } from './Description';

describe('Description Academy', () => {
  it('Should be able to create a academy description', () => {
    const description = new Description(
      'Essa academia é uma academia tradicional de muitos anos de contribuição para a comunidade de São Miguel Paulista!'
    );

    expect(description).toBeTruthy();
  });

  it('Should not be able to create a academy description with less than 10 characters', () => {
    expect(() => new Description('Academia')).toThrow();
  });

  it('Should not be able to create a academy description with more than 300 caracters', () => {
    expect(() => new Description('Academia'.repeat(300))).toThrow();
  });
});

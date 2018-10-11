import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'a9d'
})
export class A9dPipe implements PipeTransform {

  transform(value: string): any {
    const punctuationRegExp = new RegExp(/('|-|_)/g);
    const sentenceEndersRegExp = new RegExp(/(\.|!|,|\?)/g);
    const a9dWords = [];

    if ( value ) {
      const cleanWords = value.replace(punctuationRegExp, '').split(' ');

      for (const word of cleanWords) {
        const firstLetter = word[0];
        const sentenceEnders = word.match(sentenceEndersRegExp) ? word.match(sentenceEndersRegExp).join('') : '';
        const charsToEnd = sentenceEnders.length;
        const lastLetter = word[word.length - (charsToEnd + 1)];

        switch (word.length) {
          case 0:
            break;

          case 1:
            a9dWords.push(word);
            break;

          default:

            const middleLength = word.substr(1, word.length - (charsToEnd + 2)).length;

            a9dWords.push(`${firstLetter}${middleLength}${lastLetter}${sentenceEnders}`)
            break;
        }
      }
    }

    return a9dWords.join(' ');
  }

}

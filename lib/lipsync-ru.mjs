/**
 * @class Russian lip-sync processor
 * @author Andrey Chertkov
 */

import { convert as convertNumberToWordsRu } from 'number-to-words-ru'

class LipsyncRu {
  /**
   * @constructor
   */
  constructor() {
    this.visemes = {
      'а': 'aa',
      'б': 'PP',
      'в': 'FF',
      'г': 'kk',
      'д': 'DD',
      'е': 'E',
      'ё': 'O',
      'ж': 'SS',
      'з': 'SS',
      'и': 'I',
      'к': 'kk',
      'л': 'sil',
      'м': 'nn',
      'н': 'nn',
      'о': 'O',
      'п': 'PP',
      'р': 'RR',
      'с': 'SS',
      'т': 'DD',
      'у': 'U',
      'ф': 'FF',
      'х': 'kk',
      'ц': 'TH',
      'ч': 'CH',
      'ш': 'SS',
      'щ': 'CH',
      'ы': 'I',
      'э': 'E',
      'ю': 'U',
      'я': 'aa',
    };

    // Viseme durations in relative unit (1=average)
    this.visemeDurations = {
      aa: 0.95,
      E: 0.9,
      I: 0.92,
      O: 0.96,
      U: 0.95,
      PP: 1.08,
      SS: 1.23,
      DD: 1.05,
      FF: 1.0,
      kk: 1.21,
      nn: 0.88,
      RR: 0.88,
      DD: 1.05,
      sil: 1,
    };

    // Pauses in relative units (1=average)
    this.specialDurations = { " ": 1, ",": 3, "-": 0.5 };

    this.numbers = [
      "один",
      "два",
      "три",
      "четыре",
      "пять",
      "шесть",
      "семь",
      "восемь",
      "девять",
      "десять",
      "одиннадцать",
      "двеннадцать",
      "тренадцать",
      "четырнадцать",
      "пятнадцать",
      "шестандцать",
      "семьнадцать",
      "восемнадцать",
      "девятнадцать",
    ];

    this.symbols = {
      "%": "процент",
      "€": "эвро",
      "&": "и",
      "+": "плюc",
      $: "доллар",
    };
    this.symbolsReg = /[%€&\+\$]/g;
  }

  /**
   * Preprocess text:
   * - convert symbols to words
   * - convert numbers to words
   * - filter out characters that should be left unspoken
   * @param {string} s Text
   * @return {string} Pre-processsed text.
   */
  preProcessText(s) {
    return s
      .replace(/[#_*\'\":;]/g, "")
      .replace(this.symbolsReg, (symbol) => {
        return " " + this.symbols[symbol] + " ";
      })
      .replace(/(\d)\,(\d)/g, "$1 и $2") // Number separator
      .replace(/\d+/g, (string) => {
        return convertNumberToWordsRu(string, { showCurrency: { integer: false, fractional: false } });
      }) // Numbers to words
      .replace(/(\D)\1\1+/g, "$1$1") // max 2 repeating chars
      .replaceAll("  ", " ") // Only one repeating space
      .normalize("NFD")
      .replace(/[\u0300-\u0307\u0309\u030b-\u036f]/g, "")
      .trim();
  }

  /**
   * Convert words to Oculus LipSync Visemes and durations
   * @param {string} w Words
   * @return {Object} Oculus LipSync Visemes and durations.
   */
  wordsToVisemes(w) {
    let o = { words: w, visemes: [], times: [], durations: [] };
    let t = 0;

    const chars = [...w];
    for (let i = 0; i < chars.length; i++) {
      const viseme = this.visemes[chars[i].toLowerCase()];
      if (viseme) {
        if (o.visemes.length && o.visemes[o.visemes.length - 1] === viseme) {
          const d = 0.7 * (this.visemeDurations[viseme] || 1);
          o.durations[o.durations.length - 1] += d;
          t += d;
        } else {
          const d = this.visemeDurations[viseme] || 1;
          o.visemes.push(viseme);
          o.times.push(t);
          o.durations.push(d);
          t += d;
        }
      } else {
        t += this.specialDurations[chars[i]] || 0;
      }
    }

    return o;
  }
}

export { LipsyncRu };

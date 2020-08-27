// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  }
  else
    return b;
}
// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(words) {
  if (words.length == 0) {
    return null;
  }
  maxword = words[0];
  for (var i = 0; i < words.length; i++) {
    if (maxword.length < words[i].length) {
      maxword = words[i];
    }
  }
  return maxword;
}
// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(prices) {
  if (prices.length == 0) {
    return 0;
  }
  var sum = 0;
  for (var i = 0; i < prices.length; i++) {
    sum = sum + prices[i];
  }
  return sum;
}

function sumOfArray(mixedarr) {
  var sum;
  for (var i = 0; i < mixedarr.length; i++) {
    if (typeof (mixedarr[i]) == 'string') {
      sum = sum + mixedarr[i].length;
    }
    else if (mixedarr[i] == true) {
      sum = sum + 1;
    }
    else if (mixedarr[i] == false) {
      sum = sum + 0;
    }
    else
      sum = sum + mixedarr[i];
  }
  return sum;
}
function add(mixedarr) {
  if (mixedarr.length == 0) {
    return 0;
  }
  var sum = 0;
  for (var i = 0; i < mixedarr.length; i++) {
    if (typeof (mixedarr[i]) == 'object') {
      throw new Error('Unsupported data type sir or ma\'am');
    }
    else if (typeof (mixedarr[i]) == 'string') {
      sum = sum + mixedarr[i].length;
    }
    else if (mixedarr[i] == true) {
      sum = sum + 1;
    }
    else if (mixedarr[i] == false) {
      sum = sum + 0;
    }
    else if (mixedarr[i] == 0) {
      sum = sum + 0;
    }
    else
      sum = sum + mixedarr[i];
  }
  return sum;
}

// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function midPointOfLevels(arrayval) {
  if (arrayval.length == 0) {
    return null;
  }
  var sumval = netPrice(arrayval);
  sumval = sumval / (arrayval.length)
  return sumval;
}
// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArr) {
  if (wordsArr.length == 0) {
    return null;
  }
  var sumval = add(wordsArr);
  return (sumval / (wordsArr.length));
}
function avg(arr) {
  if (arr.length == 0) {
    return null;
  }
  var sumval = add(arr);
  sumval = sumval / (arr.length);
  sumval = sumval.toFixed(2);
  return (Number(sumval));
}

// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];
function uniqueArray(wordsUnique) {
  if (wordsUnique.length == 0) {
    return null;
  }
  var newarr = [];
  for (var i = 0; i < wordsUnique.length; i++) {
    if (newarr.indexOf(wordsUnique[i]) == -1) {
      newarr[i] = wordsUnique[i];
    }
  }
  return newarr;
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function searchElement(wordsfind, searchval) {
  if (wordsfind.length == 0) {
    return null;
  }
  var i = wordsfind.indexOf(searchval);
  if (i == -1) {
    return false;
  }
  else
    return true;
}
// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimesElementRepeated(wordsCount, charval) {
  if (wordsCount.length == 0) {
    return 0;
  }
  var nooftimes = 0;
  for (var i = 0; i < wordsCount.length; i++) {
    if (wordsCount[i] == charval) {
      nooftimes = nooftimes + 1;
    }
  }
  return nooftimes;
}
// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];

function maximumProduct(matrix) {

  var maxvalue = 0;
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 6; j++) {
      maxvalue = matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3];
    }
  }
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 6; j++) {
      maxvalue = matrix[j][i] * matrix[j][i + 1] * matrix[j][i + 2] * matrix[j][i + 3];
    }
  }
  return maxvalue;
}
function maximumProductOfDiagonals(matrix) {
  var j = 10;
  var maxvalue = 0;
  for (var i = 0; i < 6; i++) {
    maxvalue = matrix[i][i] * matrix[i][i + 1] * matrix[i][i + 2] * matrix[i][i + 3];
  }

  for (var i = 0; i < 6; i++) {
    maxvalue = matrix[i][j] * matrix[i][j - 1] * matrix[i][j - 2] * matrix[i][j - 3];
    j = j - 1;
  }
  return maxvalue;
}
const NumberAssistent = function() {};

// این تابع عدد انگلیسی ورودی را به صورت فارسی برمی‌گرداند
NumberAssistent.prototype.number = function(input) {
  if (input || input === 0) {
    input = String(input);
    if (input && input.length) {
      return input.replace(/\d/g, function(x) {
        return String.fromCharCode(x.charCodeAt(0) + 1728);
      });
    }
    return "";
  }
  return input;
};


// این تابع عدد فارسی  ورودی را به صورت انگلیسی برمی‌گرداند
NumberAssistent.prototype.Enumber = (input) => {
  if (input) {
    input = String(input);
    if (input && input.length) {
      input = input.replace(/,/g, '');
      return input.replace(/[۰-۹]/g, function(x) {
        return String.fromCharCode(x.charCodeAt(0) - 1728);
      });
    }
    return '';
  }
  return input;
}

// این تابع تمامی اعدادی که در ورودی باشند را سه رقم سه رقم با علامت 
// ,
// از هم جدا می‌کند
NumberAssistent.prototype.ESeparator = function(input, Decimals = 3) {
  let Input = String(input);
  return Input.replace(/\d+(\.\d+)?/g, function(x) {
    const t = ",",
      s = x < 0 ? "-" : "";
    let j = null,
      i = String(parseInt((n = Math.abs(Number(x) || 0))));
    (j = (j = i.length) > 3 ? j % 3 : 0),
      (decimal =
        parseFloat(x) - parseInt(x) > 0
          ? String(
              Math.round((parseFloat(x) - parseInt(x)) *( 10**Decimals )) / (10**Decimals)
            )
          : "");
    return (
      (j ? i.substr(0, j) + t : "") +
      i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) +
      s +
      decimal.slice(1)
    );
  });
};

// این تابع تمامی اعدادی که در ورودی باشند را سه رقم سه رقم با علامت 
// ,
// از هم جدا می‌کند  و به صورت فارسی بر می‌گرداند
NumberAssistent.prototype.PSeparator = function (input, Decimals = 3){
  return this.number(this.ESeparator(input, Decimals));
}

// عدد را به حروف بر می‌گرداند
NumberAssistent.prototype.word = function(value) {
  let delimiter,
    valueParts,
    digit,
    i,
    iThree,
    numbers,
    parts,
    result,
    resultThree,
    three;

  if (!isFinite(value)) {
    return 'عدد اشتباه است';
  }  
  value = String( Math.floor( Math.abs(value) ) );
  if (value.length > 24) {
    return 'عدد بسیار بزرگ است';
  }

  parts = [
    '',
    'هزار',
    'میلیون',
    'میلیارد',
    'تریلیون',
    'کوادریلیون',
    'کویینتیلیون',
    'سکستیلیون'
  ];
  numbers = {
    0: [
      '',
      'صد',
      'دویست',
      'سیصد',
      'چهارصد',
      'پانصد',
      'ششصد',
      'هفتصد',
      'هشتصد',
      'نهصد'
    ],
    1: ['', 'ده', 'بیست', 'سی', 'چهل', 'پنجاه', 'شصت', 'هفتاد', 'هشتاد', 'نود'],
    2: ['', 'یک', 'دو', 'سه', 'چهار', 'پنج', 'شش', 'هفت', 'هشت', 'نه'],
    two: [
      'ده',
      'یازده',
      'دوازده',
      'سیزده',
      'چهارده',
      'پانزده',
      'شانزده',
      'هفده',
      'هجده',
      'نوزده'
    ],
    zero: 'صفر'
  };
  delimiter = ' و ';

  valueParts = value
    .split('')
    .reverse()
    .join('')
    .replace(/\d{3}(?=\d)/g, '$&,')
    .split('')
    .reverse()
    .join('')
    .split(',')
    .map(function(str) {
      return Array(4 - str.length).join('0') + str;
    });

  result = (function() {
    var _results;
    _results = [];
    const calc =() =>{
     
        var _i, _len, _results1;
        _results1 = [];

        for (i = _i = 0, _len = three.length; _i < _len; i = ++_i) {
          digit = three[i];
          if (i === 1 && digit === '1') {
            _results1.push(numbers.two[three[2]]);
          } else if (
            (i !== 2 || three[1] !== '1') &&
            numbers[i][digit] !== ''
          ) {
            _results1.push(numbers[i][digit]);
          } else {
            continue;
          }
        }

        return _results1;
   
    }
    for (iThree in valueParts) {
      three = valueParts[iThree];

      resultThree = calc();

      resultThree = resultThree.join(delimiter);

      if (!!resultThree)
        _results.push(
          resultThree + ' ' + parts[valueParts.length - iThree - 1]
        );
    }
    return _results;
  })();

  result = result.filter(function(x) {
    return x.trim() !== '';
  });

  result = result.join(delimiter).trim();
  if (result === '') {
    result = numbers.zero;
  }

  return result;
}

module.exports = NumberAssistent;

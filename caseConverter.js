String.prototype.toKebabCase = function() {
  return kebabSnakeCaseBase(this.valueOf()).replace(/ /g, '-');
};

String.prototype.toSnakeCase = function() {
  return kebabSnakeCaseBase(this.valueOf()).replace(/ /g, ' _');
};

String.prototype.toCamalCase = function() {
  let s = titleCamalCaseBase(this.valueOf());
  return `${s[0].toLowerCase()}${s.substring(1)}`;
};

String.prototype.toTitleCase = function() {
  let s = titleCamalCaseBase(this.valueOf());
  return `${s[0].toUpperCase()}${s.substring(1)}`;
};

function kebabSnakeCaseBase(string) {
  return string
    .replace(/_/g, ' ')
    .replace(/-/g, ' ')
    .split('')
    .reduce(
      (str, char) =>
        char.toUpperCase() === char ? `${str} ${char}` : `${str}${char}`,
      ''
    )
    .trim()
    .replace(/ * /g, ' ')
    .toLowerCase();
}

function titleCamalCaseBase(string) {
  return string
    .replace(/(-\w)/g, m => m[1].toUpperCase())
    .replace(/(_\w)/g, m => m[1].toUpperCase())
    .replace(/( * \w)/g, m => m[1].toUpperCase())
    .replace(/_/g, ' ')
    .replace(/-/g, ' ')
    .trim();
}

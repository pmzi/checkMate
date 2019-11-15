export function validateForNumbers(items) {
  const tranformedItems = items.reduce((a, val) => {
    a.push(...val);
    return a;
  }, []);
  const whites = tranformedItems.filter(
    item => item !== "" && item.charAt(1) === "w"
  );
  const blacks = tranformedItems.filter(
    item => item !== "" && item.charAt(1) === "b"
  );
  // check shah
  if (
    whites.filter(item => item.charAt(0) === "b").length > 1 ||
    blacks.filter(item => item.charAt(0) === "b").length > 1
  )
    return false;
  // check vazir
  if (
    whites.filter(item => item.charAt(0) === "v").length > 1 ||
    blacks.filter(item => item.charAt(0) === "v").length > 1
  )
    return false;

  // check asb
  if (
    whites.filter(item => item.charAt(0) === "a").length > 2 ||
    blacks.filter(item => item.charAt(0) === "a").length > 2
  )
    return false;

  // check ghale
  if (
    whites.filter(item => item.charAt(0) === "g").length > 2 ||
    blacks.filter(item => item.charAt(0) === "g").length > 2
  )
    return false;

  // check fil
  if (
    whites.filter(item => item.charAt(0) === "f").length > 2 ||
    blacks.filter(item => item.charAt(0) === "f").length > 2
  )
    return false;

  // check sarbaz
  if (
    whites.filter(item => item.charAt(0) === "s").length > 8 ||
    blacks.filter(item => item.charAt(0) === "s").length > 8
  )
    return false;

  return true;
}

export const getItemName = value => {
  const item = items.find(({ value: itemValue }) => value === itemValue);
  if (item) {
    return item.name;
  } else {
    if (value !== "") return Math.random().toFixed(2);
    return "";
  }
};

export function isCheck(cells) {
  for (let i = 0; i < cells.length; i++) {
    for (let j = 0; j < cells[i].length; j++) {
      const cell = cells[i][j];
      if (cell !== "") {
        // There is sth in here!!
        const color = cell.charAt(1);
        const reverseColor = color === "b" ? "w" : "b";
        const item = cell.charAt(0);
        if (item === "b") {
          // it is shah
          const movements = shahMovements(i, j);
          if (checkMovement(movements, cells, color))
            return {
              from: cell,
              to: "b" + reverseColor
            };
        }
        if (item === "v") {
          // It is vazir
          const movements = vazirMovements(i, j, cells);
          if (checkMovement(movements, cells, color))
            return {
              from: cell,
              to: "b" + reverseColor
            };
        }
        if (item === "a") {
          // It is asb
          const movements = asbMovements(i, j);
          if (checkMovement(movements, cells, color))
            return {
              from: cell,
              to: "b" + reverseColor
            };
        }
        if (item === "g") {
          // It is ghale
          const movements = ghaleMovements(i, j, cells);
          if (checkMovement(movements, cells, color))
            return {
              from: cell,
              to: "b" + reverseColor
            };
        }
        if (item === "f") {
          // It is fil
          const movements = filMovements(i, j, cells);
          if (checkMovement(movements, cells, color))
            return {
              from: cell,
              to: "b" + reverseColor
            };
        }
        if (item === "s") {
          // It is sarbaz
          const movements = sarbazMovements(i, j, color, cells);
          if (checkMovement(movements, cells, color))
            return {
              from: cell,
              to: "b" + reverseColor
            };
        }
      }
    }
  }
  return false;
}

function validateCoordinates([f, l]) {
  return f < 8 && l < 8 && f > -1 && l > -1;
}

function shahMovements(i, j) {
  return [
    [i + 1, j + 1],
    [i + 1, j - 1],
    [i - 1, j + 1],
    [i - 1, j - 1],
    [i - 1, j],
    [i + 1, j],
    [i, j + 1],
    [i, j - 1]
  ].filter(validateCoordinates);
}

function vazirMovements(i, j, cells) {
  const movements = [];
  // Up
  for (let a = i - 1; a > -1; a--) {
    movements.push([a, j]);
    if (cells[a][j] !== "") break;
  }
  // Down
  for (let a = i + 1; a < 8; a++) {
    movements.push([a, j]);
    if (cells[a][j] !== "") break;
  }
  // Right
  for (let a = j + 1; a < 8; a++) {
    movements.push([i, a]);
    if (cells[i][a] !== "") break;
  }
  // Left
  for (let a = j - 1; a > -1; a--) {
    movements.push([i, a]);
    if (cells[i][a] !== "") break;
  }
  // Bottom Right
  for (let a = 1; i + a < 8 && j + a < 8; a++) {
    movements.push([i + a, j + a]);
    if (cells[i + a][j + a] !== "") break;
  }
  // Bottom Left
  for (let a = 1; i - a > -1 && j - a > -1; a++) {
    movements.push([i - a, j - a]);
    if (cells[i - a][j - a] !== "") break;
  }
  // Top Right
  for (let a = 1; i - a > -1 && j + a < 8; a++) {
    movements.push([i - a, j + a]);
    if (cells[i - a][j + a] !== "") break;
  }
  // Top Left
  for (let a = 1; i + a < 8 && j - a > -1; a++) {
    movements.push([i + a, j - a]);
    if (cells[i + a][j - a] !== "") break;
  }
  return movements;
}

function asbMovements(i, j) {
  return [
    [i - 2, j + 1],
    [i - 2, j - 1],
    [i + 2, j + 1],
    [i + 2, j - 1],
    [i + 1, j - 2],
    [i - 1, j - 2],
    [i + 1, j + 2],
    [i - 1, j + 2]
  ].filter(validateCoordinates);
}

function ghaleMovements(i, j, cells) {
  const movements = [];
  // Up
  for (let a = i - 1; a > -1; a--) {
    movements.push([a, j]);
    if (cells[a][j] !== "") break;
  }
  // Down
  for (let a = i + 1; a < 8; a++) {
    movements.push([a, j]);
    if (cells[a][j] !== "") break;
  }
  // Right
  for (let a = j + 1; a < 8; a++) {
    movements.push([i, a]);
    if (cells[i][a] !== "") break;
  }
  // Left
  for (let a = j - 1; a > -1; a--) {
    movements.push([i, a]);
    if (cells[i][a] !== "") break;
  }
  return movements;
}

function filMovements(i, j, cells) {
  const movements = [];
  // Bottom Right
  for (let a = 1; i + a < 8 && j + a < 8; a++) {
    movements.push([i + a, j + a]);
    if (cells[i + a][j + a] !== "") break;
  }
  // Bottom Left
  for (let a = 1; i - a > -1 && j - a > -1; a++) {
    movements.push([i - a, j - a]);
    if (cells[i - a][j - a] !== "") break;
  }
  // Top Right
  for (let a = 1; i - a > -1 && j + a < 8; a++) {
    movements.push([i - a, j + a]);
    if (cells[i - a][j + a] !== "") break;
  }
  // Top Left
  for (let a = 1; i + a < 8 && j - a > -1; a++) {
    movements.push([i + a, j - a]);
    if (cells[i + a][j - a] !== "") break;
  }
  return movements;
}

function sarbazMovements(i, j, color, cells) {
  const movements = [];
  if (color === "b") {
    // black
    movements.push([i - 1, j]);
    if (i - 1 > -1 && i === 6 && cells[i - 1][j] === "") {
      // First movements
      movements.push([i - 2, j]);
    }
  } else {
    // white
    movements.push([i + 1, j]);
    if (i + 1 < 8 && i === 1 && cells[i + 1][j] === "") {
      // First movements
      movements.push([i + 2, j]);
    }
  }
  return movements.filter(validateCoordinates);
}

function checkMovement(movements, cells, color) {
  const reverseColor = color === "b" ? "w" : "b";
  return Boolean(
    movements.find(([i, j]) => {
      return cells[i][j] === "b" + reverseColor;
    })
  );
}

export function isMate(cells) {
  const info = isCheck(cells);
  if (info) {
    return isCheckMateByColor(cells, info.to.charAt(1));
  }
  return false;
}

function doMovement(cells, [i, j], [iPrime, jPrime]) {
  const newCells = [
    [...cells[0]],
    [...cells[1]],
    [...cells[2]],
    [...cells[3]],
    [...cells[4]],
    [...cells[5]],
    [...cells[6]],
    [...cells[7]]
  ];
  const current = cells[i][j];
  const color = current.charAt(1);
  if (!cells[iPrime][jPrime].includes(color)) {
    newCells[iPrime][jPrime] = current;
    newCells[i][j] = "";
  }
  return newCells;
}

function isCheckMateByColor(cells, color) {
  for (let i = 0; i < cells.length; i++) {
    for (let j = 0; j < cells[i].length; j++) {
      const cell = cells[i][j];
      if (cell.includes(color)) {
        const color = cell.charAt(1);
        const item = cell.charAt(0);
        let movements = [];
        if (item === "b") {
          // it is shah
          movements = shahMovements(i, j);
        }
        if (item === "v") {
          // It is vazir
          movements = vazirMovements(i, j, cells);
        }
        if (item === "a") {
          // It is asb
          movements = asbMovements(i, j);
        }
        if (item === "g") {
          // It is ghale
          movements = ghaleMovements(i, j, cells);
        }
        if (item === "f") {
          // It is fil
          movements = filMovements(i, j, cells);
        }
        if (item === "s") {
          // It is sarbaz
          movements = sarbazMovements(i, j, color, cells);
        }
        // we have movements
        if (
          movements.filter(movement => {
            const newCells = doMovement(cells, [i, j], movement);
            const check = isCheck(newCells);
            if (check && check.to.includes(color)) return false;
            return true;
          }).length
        )
          return false;
      }
    }
  }
  return true;
}

export const items = [
  {
    name: "شاه سیاه",
    value: "bb"
  },
  {
    name: "وزیر سیاه",
    value: "vb"
  },
  {
    name: "اسب سیاه",
    value: "ab"
  },
  {
    name: "قلعه سیاه",
    value: "gb"
  },
  {
    name: "فیل سیاه",
    value: "fb"
  },
  {
    name: "سرباز سیاه",
    value: "sb"
  },
  {
    name: "شاه سفید",
    value: "bw"
  },
  {
    name: "وزیر سفید",
    value: "vw"
  },
  {
    name: "اسب سفید",
    value: "aw"
  },
  {
    name: "قلعه سفید",
    value: "gw"
  },
  {
    name: "فیل سفید",
    value: "fw"
  },
  {
    name: "سرباز سفید",
    value: "sw"
  }
];

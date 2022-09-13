const row1 = document.getElementById("row1");
const row2 = document.getElementById("row2");
const row20 = document.getElementById("row20");
const row21 = document.getElementById("row21");

const produceRowArray = () => {
  const randNum = Math.ceil(Math.random() * 4) + 3;

  let pillArray = [];
  let totalWidth = 60;

  const getRandWidth = (total) => {};

  for (let i = 0; i < randNum; i++) {
    if (i === 0) {
      const width = getRandWidth(totalWidth);
      totalWidth -= width;

      pillArray.push({ colour: "trans", width: width });
    } else if (i === randNum - 1) {
      pillArray.push({ colour: "trans", width: totalWidth });
    } else {
      const width = getRandWidth(totalWidth);
      totalWidth -= width;
      pillArray.push({ colour: "dark", width: width });
    }
  }

  return pillArray;
};

const produceRow = (row, arr) => {
  let totalWidth = 600;

  const getRandWidth = () => {
    const width = Math.round(totalWidth / arr.length / 10) * 10;

    totalWidth -= width;

    return width;
  };

  for (let i = 0; i < arr.length; i++) {
    const pill = document.createElement("div");
    if (i < arr.length - 1) {
      pill.classList.add("pill", arr[i].colour, `width-${getRandWidth()}`);
    } else {
      pill.classList.add("pill", arr[i].colour, `width-${totalWidth}`);
    }

    row.appendChild(pill);
  }
};

const rowArray1 = produceRowArray();
const rowArray2 = produceRowArray();
const rowArray20 = produceRowArray();
const rowArray21 = produceRowArray();

// console.log(rowArray1);
// console.log(rowArray2);
// console.log(rowArray20);
// console.log(rowArray21);

produceRow(row1, rowArray1);
produceRow(row2, rowArray2);
produceRow(row20, rowArray20);
produceRow(row21, rowArray21);

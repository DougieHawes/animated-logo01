const row1 = document.getElementById("row1");
const row2 = document.getElementById("row2");
const row3c1 = document.getElementById("r3c1");
const row4c1 = document.getElementById("r4c1");
const row5c1 = document.getElementById("r5c1");
const row6c1 = document.getElementById("r6c1");
const row7c1 = document.getElementById("r7c1");
const row8c1 = document.getElementById("r8c1");
const row9c1 = document.getElementById("r9c1");
const row10c1 = document.getElementById("r10c1");
const row11c1 = document.getElementById("r11c1");
const row12c1 = document.getElementById("r12c1");
const row13c1 = document.getElementById("r13c1");
const row14c1 = document.getElementById("r14c1");
const row15c1 = document.getElementById("r15c1");
const row16c1 = document.getElementById("r16c1");
const row17c1 = document.getElementById("r17c1");
const row18c1 = document.getElementById("r18c1");
const row19c1 = document.getElementById("r19c1");
const row3c3 = document.getElementById("r3c3");
const row4c3 = document.getElementById("r4c3");
const row5c3 = document.getElementById("r5c3");
const row6c3 = document.getElementById("r6c3");
const row7c3 = document.getElementById("r7c3");
const row8c3 = document.getElementById("r8c3");
const row9c3 = document.getElementById("r9c3");
const row10c3 = document.getElementById("r10c3");
const row11c3 = document.getElementById("r11c3");
const row12c3 = document.getElementById("r12c3");
const row13c3 = document.getElementById("r13c3");
const row14c3 = document.getElementById("r14c3");
const row15c3 = document.getElementById("r15c3");
const row16c3 = document.getElementById("r16c3");
const row17c3 = document.getElementById("r17c3");
const row18c3 = document.getElementById("r18c3");
const row19c3 = document.getElementById("r19c3");
const row20 = document.getElementById("row20");
const row21 = document.getElementById("row21");

const produceRowArrayLeft = () => {
  const randNum = Math.ceil(Math.random() * 3) + 1;

  let pillArray = [];

  for (let i = 0; i < randNum; i++) {
    if (i === 0) {
      pillArray.push({ colour: "trans" });
    } else {
      pillArray.push({ colour: "dark" });
    }
  }

  return pillArray;
};

const produceRowArrayRight = () => {
  const randNum = Math.ceil(Math.random() * 3) + 1;

  let pillArray = [];

  for (let i = 0; i < randNum; i++) {
    if (i === randNum - 1) {
      pillArray.push({ colour: "trans" });
    } else {
      pillArray.push({ colour: "dark" });
    }
  }

  return pillArray;
};

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

const produceRow = (row, arr, width) => {
  let totalWidth = width;

  const getWidth = () => {
    const width = Math.round(totalWidth / arr.length / 10) * 10;

    totalWidth -= width;

    return width;
  };

  for (let i = 0; i < arr.length; i++) {
    const pill = document.createElement("div");
    if (i < arr.length - 1) {
      pill.classList.add("pill", arr[i].colour, `width-${getWidth()}`);
    } else {
      pill.classList.add("pill", arr[i].colour, `width-${totalWidth}`);
    }

    row.appendChild(pill);
  }
};

const rowArray1 = produceRowArray();
const rowArray2 = produceRowArray();
const rowArray3c1 = produceRowArrayLeft();
const rowArray4c1 = produceRowArrayLeft();
const rowArray5c1 = produceRowArrayLeft();
const rowArray6c1 = produceRowArrayLeft();
const rowArray7c1 = produceRowArrayLeft();
const rowArray8c1 = produceRowArrayLeft();
const rowArray9c1 = produceRowArrayLeft();
const rowArray10c1 = produceRowArrayLeft();
const rowArray11c1 = produceRowArrayLeft();
const rowArray12c1 = produceRowArrayLeft();
const rowArray13c1 = produceRowArrayLeft();
const rowArray14c1 = produceRowArrayLeft();
const rowArray15c1 = produceRowArrayLeft();
const rowArray16c1 = produceRowArrayLeft();
const rowArray17c1 = produceRowArrayLeft();
const rowArray18c1 = produceRowArrayLeft();
const rowArray19c1 = produceRowArrayLeft();
const rowArray3c3 = produceRowArrayRight();
const rowArray4c3 = produceRowArrayRight();
const rowArray5c3 = produceRowArrayRight();
const rowArray6c3 = produceRowArrayRight();
const rowArray7c3 = produceRowArrayRight();
const rowArray8c3 = produceRowArrayRight();
const rowArray9c3 = produceRowArrayRight();
const rowArray10c3 = produceRowArrayRight();
const rowArray11c3 = produceRowArrayRight();
const rowArray12c3 = produceRowArrayRight();
const rowArray13c3 = produceRowArrayRight();
const rowArray14c3 = produceRowArrayRight();
const rowArray15c3 = produceRowArrayRight();
const rowArray16c3 = produceRowArrayRight();
const rowArray17c3 = produceRowArrayRight();
const rowArray18c3 = produceRowArrayRight();
const rowArray19c3 = produceRowArrayRight();
const rowArray20 = produceRowArray();
const rowArray21 = produceRowArray();

// console.log(rowArray1);
// console.log(rowArray2);
// console.log(rowArray3c1);
// console.log(rowArray4c1);
// console.log(rowArray5c1);
// console.log(rowArray6c1);
// console.log(rowArray7c1);
// console.log(rowArray8c1);
// console.log(rowArray20);
// console.log(rowArray21);

produceRow(row1, rowArray1, 600);
produceRow(row2, rowArray2, 600);
produceRow(row3c1, rowArray3c1, 200);
produceRow(row4c1, rowArray4c1, 200);
produceRow(row5c1, rowArray5c1, 200);
produceRow(row6c1, rowArray6c1, 200);
produceRow(row7c1, rowArray7c1, 200);
produceRow(row8c1, rowArray8c1, 200);
produceRow(row9c1, rowArray9c1, 200);
produceRow(row10c1, rowArray10c1, 200);
produceRow(row11c1, rowArray11c1, 200);
produceRow(row12c1, rowArray12c1, 200);
produceRow(row13c1, rowArray13c1, 200);
produceRow(row14c1, rowArray14c1, 200);
produceRow(row15c1, rowArray15c1, 200);
produceRow(row16c1, rowArray16c1, 200);
produceRow(row17c1, rowArray17c1, 200);
produceRow(row18c1, rowArray18c1, 200);
produceRow(row19c1, rowArray19c1, 200);
produceRow(row3c3, rowArray3c3, 200);
produceRow(row4c3, rowArray4c3, 200);
produceRow(row5c3, rowArray5c3, 200);
produceRow(row6c3, rowArray6c3, 200);
produceRow(row7c3, rowArray7c3, 200);
produceRow(row8c3, rowArray8c3, 200);
produceRow(row9c3, rowArray9c3, 200);
produceRow(row10c3, rowArray10c3, 200);
produceRow(row11c3, rowArray11c3, 200);
produceRow(row12c3, rowArray12c3, 200);
produceRow(row13c3, rowArray13c3, 200);
produceRow(row14c3, rowArray14c3, 200);
produceRow(row15c3, rowArray15c3, 200);
produceRow(row16c3, rowArray16c3, 200);
produceRow(row17c3, rowArray17c3, 200);
produceRow(row18c3, rowArray18c3, 200);
produceRow(row19c3, rowArray19c3, 200);
produceRow(row20, rowArray20, 600);
produceRow(row21, rowArray21, 600);

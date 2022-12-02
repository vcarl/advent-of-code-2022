import { createReadStream } from "fs";
const sum = (arr) => arr.reduce((sum, val) => sum + val, 0);

const instream = createReadStream("./1/input", { highWaterMark: 1 });
const MAX_RECORDS = 3;
const SORT_DESC = (a, b) => b - a;

const topLoads = Array.from({ length: 3 }, () => 0);
let lastBuffer = 0;
let loadBuffer = 0;
let newElf = false;
instream.on("data", (chunk) => {
  console.log(chunk[0], loadBuffer);
  switch (chunk[0]) {
    case 10: // \n
      if (newElf) {
        newElf = false;
        if (topLoads[MAX_RECORDS - 1] < lastBuffer) {
          topLoads.push(lastBuffer);
          topLoads.sort(SORT_DESC);
          topLoads.length = 3;
        }
        lastBuffer = 0;
      } else {
        newElf = true;
        lastBuffer += loadBuffer;
      }
      loadBuffer = 0;
      return;
    default:
      newElf = false;
      loadBuffer = loadBuffer * 10 + Number(chunk[0]) - 48;
      return;
  }
});
instream.on("end", () => {
  lastBuffer += loadBuffer;
  if (topLoads[MAX_RECORDS - 1] < lastBuffer) {
    topLoads.push(lastBuffer);
    topLoads.sort(SORT_DESC);
    topLoads.length = 3;
  }
  console.log(topLoads[0], sum(topLoads));
});

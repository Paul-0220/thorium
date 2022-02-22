const d = new Date();
console.log(d);

const a = new Date();
let month = a.getMonth();
console.log(month);

function getBatchInfo(batch, week, day, topic) {
  console.log(`${batch},${week}${day},the topic for today is ${topic}`);
}

getBatchInfo("Thorium", "W3", "D1", "nodejs");

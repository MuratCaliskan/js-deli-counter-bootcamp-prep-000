function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing() {
  var katzDeliLine = []
  while(katzDeliLine.length > 0) {
    console.log(`Currently serving ${name}`);
    katzDeliLine.shift; }
    return "There is nobody waiting to be served!";
}
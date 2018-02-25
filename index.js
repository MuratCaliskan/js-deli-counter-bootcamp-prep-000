function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function takeANumber(katzDeli, name) {
+  katzDeli.push(`${name}`);
+  return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
+}
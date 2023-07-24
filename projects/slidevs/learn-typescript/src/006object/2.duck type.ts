interface LabeledValue {
  label: string
}
function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label)
}
const myObj = { size: 10, label: 'Size 10 Object' }
printLabel(myObj) // OK

// printLabel({ size: 10,label: "Size 10 Object" }); // Error

let labeledObj: LabeledValue = { label: 'sa' }
const labeledObj2 = { size: 10, label: 'Size 10 Object' }
// const labeledObj3:LabeledValue = { size: 10, label: "Size 10 Object" }
labeledObj = labeledObj2
console.log('labeledObj', labeledObj)

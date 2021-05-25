var myObject = {
  name: "Dolly",
  hight: 168,
  type: "human",
};

function removeProp(prop) {
  const hasProp = myObject.hasOwnProperty("type");

  if (hasProp) {
    delete myObject["type"];
    return true;
  }

  return false;
}

console.log("isRemoved", removeProp());
console.log("obj", myObject);

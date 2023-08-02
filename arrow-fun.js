// Normal sum function
function sum(a, b) {
    return a + b;
  }
  
  // Arrow Func 1
  const sumV2 = (a, b) => {
    return a + b;
  };
  
  // Arrow Func 2
  const sumV3 = (a, b) => a + b;
  
  // First way
  fetch("url").then(function (krishna) {
    return krishna.json();
  });
  
  // Arrow way
  fetch("url")
    .then((krishna) => {
      return krishna.json();
    })
    .then((data) => {
      console.log(data);
    });
  
  // Arrow way 2
  fetch("url")
    .then((krishna) => krishna.json())
    .then((data) => console.log(data));
  
  // Arrow way 2
  const apihandler = (krishna) => krishna.json();
  fetch("url").then(apihandler);
  
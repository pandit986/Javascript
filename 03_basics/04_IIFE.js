// Immediately Invoked Function Expressions (IIFE)

// it is used to avoid polluting the global namespace
// it saves some memory because when the function is executed the variable scope is available at that time only
// after function run completely the varaible is not available

// used as Db Connection

function chai() {
  console.log("DB CONNECTION");
}
// chai();

(function chai() {
  //named IIFE
  console.log("DB CONNECTION");
})();


((name) => {
  console.log("DB CONNECTION ",name);
})("MongoDb");

//if you write two iife function make shower => ;









// Encapsulation: IIFE allows you to create a self-contained block of code. Any variables or functions declared inside the IIFE are kept separate from the rest of your code. This helps prevent naming conflicts and keeps your code organized.

// For example, if you have a piece of code that should only run once and doesn't need to be accessed elsewhere, you can put it inside an IIFE. This way, it won't interfere with other parts of your code.

// Isolation: IIFE helps you control the scope of your variables. Variables declared inside an IIFE are not accessible from outside the IIFE. This is useful for keeping data private and avoiding unintentional modifications from other parts of your code.

// For instance, if you have sensitive data or temporary variables that are only needed within a specific context, you can use an IIFE to ensure they are isolated and can't be tampered with by other parts of your program.

// In summary, IIFE is a technique in JavaScript that helps you create a contained and isolated environment for your code, improving code organization and reducing the risk of naming conflicts or unintended variable modifications.

/**
 * Arrays
 * 
 * always use camel case where needed
 * 
 * Make sure to write the question/instruction and then the answers below
 * 
 */

/**
 * Question 5 - concat two different arrays by using .concat() method
 * 
 * intialise the variable summer work 1 to the values: moving lawn, washing car
 * then intialise the variable summer work 2 to the values: construction, selling candy
 *then .concat the two arrays in a variable called all summer work with summer work 1 first then summer work 2
 *  console.log all summer work below
 */

 var summerWork1 = ["moving lawn","washing car"];
 var summerwork2 = ["construction", "selling candy"];
 var allSummerWork = summerWork1.concat(summerwork2);
 console.log(allSummerWork);
 
 
 
 
 
 
 /**
  * Question 6 - create a 2 dimensions array that is 2-by-4. Grab some values out of this array to create a sentence using concatenation.
  * 
  * Initialise the variable create a sentence to a 2-dimensional array 
  * the first array will contain the values: i, to, joe, john
  * the second array will contain the values: my, name, is, cool
  * then using concatentation console.log creat a sentence below
  *  
  */
 
 var createASentence = [
     ["I","to", "Joe","John"],
     ["My","name", "is","cool"],
  
 ]
 console.log(`${createASentence[1][0]} ${createASentence[1][1]} ${createASentence[1][2]} ${createASentence[0][2]}`);  
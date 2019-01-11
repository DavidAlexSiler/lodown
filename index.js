'use strict';

// YOU KNOW WHAT TO DO //

/**
 * indentity: Designed to return any value, unchanged. Thats... about it.
 * 
 * @param Any Value : Just put it in there.
 * 
 * @return: Value unchanged. 
 * 
 * var name = 'Alex'
 * identity(name)->returns  'Alex'
 *    
 * 
 * 
*/
function identity(value){
    return value;
}
module.exports.identity = identity;

/**
* typeOf: Designed to return the type of any value as a string.
* 
* @param Any Value : that you can think of.
* 
* @return: String containing the data type of given value.
* 
* typeOf('Alex')-> returns 'string'
* typeOf(2)-> returns 'number'
*/
function typeOf(value){
  return Array.isArray(value) ? 'array'
                : value === null ? 'null'
                : typeof (value);
 }
module.exports.typeOf = typeOf;

/**
* first: Designed to find the given number value in an array starting from the begining.
*           if not given number value, or value not in array, returns first item in array.
* 
* @param [array] : collection over which to iterate.
* @param2 number : a number of values to find in our array.
* 
* return: [array] the elements our number dictated to put out,
*                  in an array. 
* 
* var ramano = [1, 2, 3, 4, 5];
* first(ramano, 3)-> returns [1, 2, 3]
* first(ramano, 'puppies')-> returns [1]
*/
function first(arr, num){
    var newArr = [];
    if(!Array.isArray(arr)) return newArr;
   if(!typeof (num) === 'number' || num === undefined) return arr[0];
    if(num > arr.length -1) return arr;
    if(num >= 0){
        for(var i = 0; i < num; i++){
            newArr.push(arr[i]);
        }
    }
           return newArr;
    }
module.exports.first = first;

/**
* last: Designed to find the given number value in an array starting from the end.
*        if not given number value, or value not in array, returns last item in array
* 
* @param [array] : collection over which to iterate.
* @param2 number : a number of values to find in our array.
* 
* return: [array] the elements our number dictated to put out,
*                  in an array. 
* 
* var ramano = [1, 2, 3, 4, 5];
* last(ramano, 3)-> returns [3, 4, 5]
* first(ramano, 'puppies')-> returns [5]
*/
function last(arr, num){
    var newArr = [];
    if(!Array.isArray(arr)) return newArr;
   if(!typeof (num) === 'number' || num === undefined) return arr[arr.length -1];
   if(num > arr.length -1) return arr;
   if(num >= 0){
        for(var i = num -1; i <= num; i++){
            newArr.push(arr[i]);
        }
}
return newArr;
}
module.exports.last = last;

/**
 * indexOf: Designed to return in index of an array that is the first occurence
 *          of the given value. Returns -1 if value is not in array.
 * 
 * @param [Array] : to iterate though.
 * @param2 Value : take your pick.
 * 
 * @return: index number of this value. or -1.
 * 
 * var ramano = [1, 2, 3, 4, 4, 5];
 * indexOf(ramano, 4) -> returns 3
 * indexOf(ramano, 'fraiser') -> returns -1
*/
function indexof(arr, val){
//Return the index of <array> that is the first occurrance of <value>
for(let i = 0; i < arr.length; i++){
    if(arr[i] === val){
        return i;
    }
}    
        return -1;
}
module.exports.indexOf = indexof;

/**
* contains: Designed to return a boolean if given array contains given value.
* 
* @param [Array] : to interate through.
* @param2 Value : to search for.
* 
* return: Boolean.
* 
* var name = ['a', 'l', 'e', 'x']
* contains(name, 'y') -> returns false
* contains(name, 'x') _. returns true
*/
function contains(arr, val){
   return (arr.includes(val)) ? true : false;
}
module.exports.contains = contains;


/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 *          action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * 
 * return: no return value until initiated. but it can return any information from 
 *          your collection when you ask for it.
 * 
 * each(['why', 'god', 'y'], function(e,i,a){ console.log(e)});
 *      -> logs "why" "god" "y" to the console
 * each({firstName: 'alex', lastName: 'siler', nickName: 'panther'}, function(e, i, a){console.log(value)});
 *      -> logs 'alex' 'siler' 'panther'
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
* unique: Designed to return a new array of a elements from given [array] with no duplicates.
* 
* @param [Array] : to iterate though.
* 
* return: [Array] with no duplicates.
* 
* var arr = [1, 2, 3, 4, 5, 6, 6, 6];
* unique(arr)-> returns [1, 2, 3, 4, 5, 6]
*/
function unique(arr){
   return Array.from(new Set(arr));
}
module.exports.unique = unique;

/**
* filter: Designed to take an [array] and a {function} and call <function> for each 
*           element in <array> passing the arguments e, i, a and return a new array
*           of elements for which calling <function> returned true.
* 
* @param: [Array] : to iterate through
* @param2: {function} : test to be applied to each iteration of the array.
* 
* return: [Array] of elements that function returned true
* 
* var arr = [1, 2, 3, 4, 5, 6];
* filter(arr, function(e, i, a){return e % 2 !== 0});-> returns [1, 3, 5]
*/
function filter(arr, test){
    //console.log(arr, test);
    let filteredArr = [];
    each(arr, function(e, i, a){
        if(test(e, i, a)){
            filteredArr.push(e);
        }
    });
     return filteredArr; 
}
module.exports.filter = filter;

/**
* reject: Designed to take an [array] and a {function} and call <function> for each 
*           element in <array> passing the arguments e, i, a and return a new array
*           of elements for which calling <function> returned false.
* 
* @param: [Array] : to iterate through
* @param2: {function} : test to be applied to each iteration of the array.
* 
* return: [Array] of elements that function returned false.
* 
* var arr = [1, 2, 3, 4, 5, 6];
* reject(arr, function(e, i, a){return e % 2 !== 0});-> returns [2, 4, 6]
*/
function reject(arr, test){
        let filteredArr = [];
    each(arr, function(e, i, a){
        if(!test(e, i, a)){
            filteredArr.push(e);
        }
    });
     return filteredArr; 
}
module.exports.reject = reject;

/**
* partition: Designed to call <function> for each element in <array> passing it the arguments(e, i a)
*            and return an array that is made up of 2 sub arrays:
*               an array that contains all the values for which <function> returned something truthy.
*               an array that contains all the values for which <function> returned something falsy.
* 
* @param: [Array] to iterate through
* @param2: {Function} test to be applied to each iteration of the array.
* 
* return: [Array] made up of 2 arrays.. one for truths one for false.
* 
* var arr = [1, 2, 3, 4, 5, 6];
* partition(arr, function(e, i, a){return e % 2 !== 0});-> returns [[1, 3, 5], [2, 4, 6]]
*/
function partition(arr, test){
   var newArrA = [];
   var newArrB = [];
   each(arr, function(e, i, a){
       if(test(e, i, a)){
          newArrA.push(e);
       }else if(!test(e, i, a)){
           newArrB.push(e);
       }
       });return [newArrA, newArrB];
   }
module.exports.partition = partition;

/**
* map: Designed to call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array - (e, i, a)
*        if <collection> is an object: (v, k, c)(value key collection)
* 
* @param: [Array] or {Object} to iterate through
* @param2: {Function} test to be applied to each iteration of the collection
* 
* return: [Array] with return value of each iteration.
* 
* var arr = [1, 2, 3, 4, 5, 6]
* map(arr, function(e, i, a){return e % 2 !=== 0});-> returns [2, 4, 6]
* var obj = {firstName: 'alex', lastName: 'siler', nickName: 'panther'}
* map(obj, function(e, i, a){return `${a[firstName]`, ${`a[lastName]`}});-> returns ['alex', `siler` ]
*/
function map(arr, test){
    var newArr = [];
    each(arr, function(e, i, a){
        newArr.push(test(e, i, a));
         });
         return newArr;
}
module.exports.map = map;

/**
* pluck: Designed to take an [array of {objects}] and a <property> and return
*           an array containing the value of <property> for every element in <array>.
* 
* @param: [Array of {Objects}] to iterate through.
* @param2: <property> to search for a key in given [Aof{O's}]
* 
* result: [Array] containing string of keys from given <properties>
* 
* var arrOfO = [{firstName: 'alex', lastName: 'siler', nickName: 'panther'}]
* pluck(arrOfO, 'nickName')-> returns ['panther']
*/
function pluck(arr, prop){
    var newArr = [];
  map(arr, function(e, i, a){
      newArr.push(e[prop]);
      
  }); 
  return newArr;
}
module.exports.pluck = pluck;

/**
* every: Designed to call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array: (e, i, a), if <collection> is an object: (v, k, c).
*      If the return value of calling <function> for every element is true, return true
*      If even one of them returns false, return false
*      If <function> is not provided, return true if every element is truthy, otherwise return false.
* 
* @param: [Collection] to iterate over.
* @param2: {Function} test to be applied to each iteration of the collection.
* 
* return: Boolean value 
* 
* var arr = [1, 2, 3, 4, 5, 6]
* every(arr, function(e, i, a){e % 2 === 0});-> returns false
* every(arr, function(e, i, a){e === typeOf('Number')});-> true
*/
function every(collection, test){
    var truths = true;
    //call a function on every element of the collection
    //map to get all the e, i ,a info all tested upon
    if (test) {
    each(collection, function(e, i, a){
        //but if ones false its ALL fAlse
        if(!test(e, i, a)){
            truths = false;
        }
        });
    } else {
     each(collection, function(e, i, a){
        //but if ones false its ALL fAlse
        if(!e){
            truths = false;
        }
        });
    }
        //now, if these values are ALL true , return true
return truths;
}
module.exports.every = every;

/**
* some: Designed to call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array: (e, i, a), if <collection> is an object: (v, k, c).
*      If the return value of calling <function> for every element is true, return true
*      If even one of them returns true, return true
*      If <function> is not provided, return false if every element is falsey, otherwise return true.
* 
* @param: [Collection] to iterate over.
* @param2: {Function} test to be applied to each iteration of the collection.
* 
* return: Boolean value 
* 
* var arr = [1, 2, 3, 4, 5, 6, 'six']
* some(arr, function(e, i, a){e % 2 === 0});-> returns true
* some(arr, function(e, i, a){e === typeOf('String')});-> true
*/
function some(coll, test){
var truths = false;
    //call a function on every element of the collection
    //map to get all the e, i ,a info all tested upon
    if (test) {
    each(coll, function(e, i, a){
        //but if ones false its ALL fAlse
        if(test(e, i, a)){
            truths = true;
        }
        });
        
    } else {
     each(coll, function(e, i, a){
        //but if ones false its ALL fAlse
        if(e){
            truths = true;
        }
        });
    }
        //now, if these values are ALL true , return true
return truths;
}
module.exports.some = some;

/**
* reduce: Designed to Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*         On the very first iteration, use <seed> as the "previous result"
*         If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*  
* @param: [Array] to iterate over
* @param2: {Function} called on every interation with the arguments previous result, element, index
* @param3: Seed accumlates callback's returns
* 
* return: the return value of the final <function> call
* 
* var arr = [5, 6, 7]
* reduce(arr, function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> returns 18
* var arrArr = [[0, 1], [2, 3], [4, 5]];
* reduce(arrArr, function(accumulator, currentValue) { return accumulator.concat(currentValue); }, []); -> returns [0, 1, 2, 3, 4, 5]
*/
function reduce(arr, test, seed){
    //call function for every 
        each(arr, function(e, i, a) {
    //What if <seed> is not given?
            if(seed === undefined){
    // If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
                 seed = a[0];
            }else{
    //use return value of function as previous result
                 seed = test(seed, e, i);
            }
    //on last iteration return the return value of the last function call
        });return seed;
    }
module.exports.reduce = reduce;

/**
* extend: Designed to copy properties from <object 2> to <object 1>
*            If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*            
* @param: {Object} to copy onto
* @param2 - param1,000,000,000,000,...,...,etc...
* 
* return: {object} with obj2's properties added to it.
* 
* var obj1 = {a:"one"};
*   extend(obj1, {b:"ONE SUCKS"}); -> obj1 now equals {a:"one",b:"ONE SUCKS"}
*   extend(obj1, {a:"TWO RULES"}); -> obj1 now equals {a:"TWO RULES"}
*/
function extend(obj1, obj2){
  let objects = Array.from(arguments);
  for(let i = 0; i < objects.length; i++){
      Object.assign(obj1, objects[i]);
  }
       return obj1;
}
module.exports.extend = extend;
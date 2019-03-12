// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // var result = [];
  // var i, j, length = array.length, slice;
  // i = 0, j = i+size;
  // while(j<=length) {
  //     slice = array.slice(i,j);
  //     result.push(slice);
  //     i=j;
  //     j=i+size;
  // }
  // if(i<length) {
  //     slice = array.slice(i, length);
  //     result.push(slice)
  // }
  // return result;

  //   var chunked = [];
  //   var length = array.length;
  //   var chunk = [];
  //   for (var i = 0; i < length; i++) {
  //     chunk = chunked[chunked.length-1];
  //     if (!chunk || chunk.length === size) {
  //       chunk = [];
  //       chunk.push(array[i]);
  //       chunked.push(chunk);
  //     } else {
  //         chunk.push(array[i]);
  //     }
  //   }
  //   return chunked;

  //   const chunked = [];
  //   for(let element of array) {
  //       const last = chunked[chunked.length - 1];
  //       if(!last || last.length === size) {
  //           chunked.push([element]);
  //       } else {
  //           last.push(element);
  //       }
  //   }

  //   return chunked;

  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

// i=0, j=i+length

// first_element = arr.slice(i,j)
// i = j
// j=i+length

// x = [0,1,2,3,4,5,6,7,8,9];

// var result = [];
// length = 4;

// i=2
// j=4

// loop i from 0 to length:
//     j = i+length;
//     result.push(arr.slice(i,j));
//     i = j;

function chunk2(array, size) {
  var chunkArray = [],
    i;
  for (var i = 0; i < array.length; i = i + size) {
    chunkArray.push(array.slice(i, i + size));
  }
  return chunkArray;
}

module.exports = chunk2;


// some comment for testing
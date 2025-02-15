function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0; // Pointer for arr1
    let j = 0; // Pointer for arr2
  
    // Traverse both arrays
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        mergedArray.push(arr1[i]);
        i++;
      } else {
        mergedArray.push(arr2[j]);
        j++;
      }
    }
  
    // Add remaining elements of arr1
    while (i < arr1.length) {
      mergedArray.push(arr1[i]);
      i++;
    }
  
    // Add remaining elements of arr2
    while (j < arr2.length) {
      mergedArray.push(arr2[j]);
      j++;
    }
  
    return mergedArray;
  }
  
  // Example usage
  const array1 = [1, 3, 5,5, 7];
  const array2 = [2, 4,5,6, 8];
  const merged = mergeSortedArrays(array1, array2);
  console.log("Merged Array:", merged);
  

  let str= new String("hello")
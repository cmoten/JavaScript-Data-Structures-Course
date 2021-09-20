function bubbleSort(arr) {
    var noSwaps;
    for(let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for(let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j + 1])
            if(arr[j] > arr[j+1]) {
                swap(arr, j, j+1)
                noSwaps = false;
            }
            
        }
      if(noSwaps) break;
    }


    return arr
}

function swap(arr, idx1, idx2){
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

bubbleSort([9, 1, 2, 3, 4, 5, 6, 7])
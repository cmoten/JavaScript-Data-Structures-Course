function selectionSort(arr) {

    for(let i = 0; i < arr.length; i++) {
        var min_idx = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[min_idx]) min_idx = j
        }

        if(i !== min_idx) {
           //console.log(i, min_idx)
           swap(arr, i, min_idx)
        }

        
    }
    return arr;
}


function swap(arr, idx1, idx2){
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

selectionSort([0, 2, 19, 44, 38, 5, 47, 15])
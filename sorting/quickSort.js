const N = 100000;
const arr = [];

for (let i = 0; i < N; i++) {
  const randomNumber = Math.floor(Math.random() * 100);
  arr.push(randomNumber);
}

const partition = (arr, start, end) => {
    const pivot = arr[Math.floor((start + end) / 2)];
    let left = start;
    let right = end;

    while (left <= right) {
        while (arr[left] < pivot){
            left++;
        }

        while (arr[right] > pivot) {
            right--
        }

        if (left <= right) {
            const tmp = arr[right];
            arr[right] = arr[left]
            arr[left] = tmp;
            
            left++
            right--;
        }
    }

    return left;
}

const quickSort = (arr, start, end) => {
    if (arr.length > 1) {
        let index = partition(arr, start, end);
        if (start < index - 1) {
            quickSort(arr, start, index - 1);
        }
        if (index < end) {
            quickSort(arr, index, end);
        }
    }

    return arr;
}

const startTime = new Date();

const result = quickSort(arr, 0, arr.length - 1);

const endTime = new Date();

console.log(`Time elapsed: ${endTime - startTime} ms`);

/*
    Results:
    10^3 elements - 1 ms
    10^4 elements - 4 ms
    10^5 elements - 11 ms
*/
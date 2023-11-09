const N = 100000;
const arr = [];

for (let i = 0; i < N; i++) {
  const randomNumber = Math.floor(Math.random() * 100);
  arr.push(randomNumber);
}

const startTime = new Date();

let swapped;
let length = arr.length;

do {
    swapped = false;
    for (let i = 1; i < length; i++){
        if (arr[i - 1] > arr[i]) {
            const tmp = arr[i - 1];
            arr[i - 1] = arr[i];
            arr[i] = tmp;
            swapped = true;
        }
    }
    length--;
} while(swapped);

const endTime = new Date();

console.log(`Time elapsed: ${endTime - startTime} ms`);

/*
    Results:
    10^3 elements - 3 ms
    10^4 elements - 83 ms
    10^5 elements - 15138 ms
*/
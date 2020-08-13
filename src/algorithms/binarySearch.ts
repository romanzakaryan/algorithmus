export const binarySearch = (arr: Array<string | number>, val: number | string) => {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === val) {
            return mid;
        }

        if (val < arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}

export const binarySearchRecursive = (arr: Array<number | string>, val: number | string, start: number = 0, end: number = arr.length-1): number | boolean => {
    if (start > end) return false;

    let mid = Math.floor((start + end)/2);

    if (arr[mid] === val) return mid;
    if (arr[mid] > val) {
        return binarySearchRecursive(arr, val, start, mid-1);
    } 
    else {
        return binarySearchRecursive(arr, val, mid+1, end);
    }
}

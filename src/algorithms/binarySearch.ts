export const binarySearch = (arr: [], val: Number) => {
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

export const binarySearchRecursive = (arr: number[], x: number, start: number, end: number): boolean => {
    if (start > end) return false;

    let mid = Math.floor((start + end)/2);

    if (arr[mid] === x) return true;
    if (arr[mid] > x) {
        return binarySearchRecursive(arr, x, start, mid-1);
    } 
    else {
        return binarySearchRecursive(arr, x, mid+1, end);
    }
}

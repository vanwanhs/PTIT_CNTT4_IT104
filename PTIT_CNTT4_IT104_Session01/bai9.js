const mergeSort = (arr1, arr2) => {
    const merged = [...arr1, ...arr2].sort((a, b) => a - b);
    console.log(merged);
    return merged;
};

mergeSort([1, 2, 3, 5, 9], [4, 6, 7, 8]);

function sortResultByCount(countedObject) {
    let sortable = [];
    for (let word in countedObject) {
    sortable.push([word, countedObject[word]]);
    }
    sortable.sort(function (a, b) {
        return a[1] - b[1];
    });
    console.log(sortable);
    /* let objSorted = Object.fromEntries(sortable);
    return objSorted; */
}
console.log(sortResultByCount({hat:5, that:3, was:6, good:8, not:10}));
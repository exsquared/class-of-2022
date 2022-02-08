function sortResultByCount(string) {
    let sortable = [];
    for (let word in string) {
    sortable.push([word, string[word]]);
    }
    console.log(sortable);
    sortable.sort(function (a, b) {
        return a[1] - b[1];
    });
    console.log(sortable);
    let objSorted = {}
    sortable.forEach(function(item){
    objSorted[item[0]]=item[1]
    })
    return objSorted;
}
console.log(sortResultByCount({hat:5, that:3, was:6, good:8, not:10}));
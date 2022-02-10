const { callbackify } = require('util');

function getTotalNumberOfDocuments(dir){
    const fs = require('fs');

    var fileLength;

    fs.readdirSync(dir, function(err, content) {
        if (err) {
          return err;
        } else {
          return content;
        }
      });
}

//console.log(getTotalNumberOfDocuments("C:\\Users\\vprakash\\Desktop\\Assignments\\day-nine\\class-of-2022\\data"));

function test(){
    const fs = require('fs');
const length = fs.readdirSync('data').length;
return length;
}



console.log(test());
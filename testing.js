const http = require('http');
const fs = require('fs');


var array = ['234234524','22341634564352', '23423423','2343567678563452','2856767896758', '865745634654325', '67545334675464', '567453345345'];

for(var x = 0; x < array.length; x++){
  const file = fs.createWriteStream(`${x+1}file.mp4`);
  const request = http.get(`testBox/deliveries/${array[x]}.bin`, function(response){
    const newLocal = response.pipe(file);
  });
}


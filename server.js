const data = require("./json.json");
const filemodule=require('fs')
const request = require("sync-request");
// counter = 0

data.forEach((element, index) => {
    // parsedData = JSON.parse(element.json);
    // parsedData.brandImages && counter++;
    // if (parsedData.images) counter += parsedData.images.length;
  var parsedData = JSON.parse(element.json);

  // for brand image
  parsedData.brandImage = putImage('brand', parsedData.brandImage, parsedData.title, 0)

  // for images
  parsedData.images.forEach((image, i) => {
      parsedData.images[i] = putImage('listing', image, parsedData.title, i)
  })

  data[index].json = JSON.stringify(parsedData)
});
const f=filemodule.writeFile('./updated.json',JSON.stringify(data) ,err=>{
 if(err){
     console.log("error", err)
 }
    console.log("send")
})
// console.log(data);

function putImage(foldername, link, title, i) {

  var path = `${foldername}/${title}-${i}`;
  // const res = request('GET', encodeURI(link));
  // if (res.statusCode != 200) {
  //   console.log('failed with:' + link);
  // } else {
  //   s3.putObject(
  //     { Body: res.body, Key: path, Bucket: "citybook" },
  //     function (error, data) {
  //       if (error) {
  //         console.log(error);
  //       } else {
  //         console.log('upload '+ path);
  //       }
  //     }
  //   );
  // }
  return path;
};

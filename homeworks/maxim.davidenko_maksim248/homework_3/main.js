function build(block, spaceBetween, height) {
  for (var i = 1; i < height + 1; i++){
  var buildPyramid = spaceBetween.repeat(height - i) + block.repeat(i) + '  ' + block.repeat(i);
  console.log(buildPyramid);
 }
};
build('#',' ', 4);


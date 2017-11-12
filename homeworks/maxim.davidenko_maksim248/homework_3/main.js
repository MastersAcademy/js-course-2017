function build(block, height) {
  for (let i = 1; i < height + 1; i++){
  let buildPyramid = ' '.repeat(height - i) + block.repeat(i) + '  ' + block.repeat(i);
  console.log(buildPyramid);
 }
};
build('#', 10);


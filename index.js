function applicator(fn, val){
  return function(){
    fn(val);
  }
}

function speak(str){
  console.log(str);
}

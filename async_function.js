var arr=[1,2,1,3,5,0,1,6,2]

function resolve_function(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, x*500);
    });
  }
  
  async function asyncc() {
    //console.log('calling');
    for(let i in arr){
            var result = await resolve_function(arr[i]);
            console.log(result);
    }
  }
  
  asyncc();
  
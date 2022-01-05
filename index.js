let makeBreakfast=x=>"make breakfast"
let drinkCoffee =function(){

}


function  receivesAFunction(makeBreakfast) {
    makeBreakfast();
    
  }

  function  returnsANamedFunction(){
       return drinkCoffee
  }

  function  returnsAnAnonymousFunction(){
      return function(){
          return "hi i am anonymous"
      }
  }
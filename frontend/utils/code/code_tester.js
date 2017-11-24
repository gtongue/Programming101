class Testing {
  static isEqual(returnedValue, expectedValue, errorText){
    if(!(expectedValue instanceof Array)){
      if(returnedValue === expectedValue)
      {
        this.successLog(returnedValue, expectedValue);
      }else{
        this.errorLog(returnedValue, expectedValue, errorText);
      }
    }else{
      if(!(returnedValue instanceof Array)){
        this.errorLog(returnedValue, "[ " + expectedValue + " ]", errorText);
      }else{
        for(let i = 0; i < returnedValue.length; i++){
          if(returnedValue[i] !== expectedValue[i]){
            this.errorLog("[ " + returnedValue + " ]", "[ " + expectedValue + " ]", errorText);            
            return;
          }
        }
        this.successLog("[ " + returnedValue + " ]", "[ " + expectedValue + " ]");
      }
    }
  }

  static successLog(returnedValue, expectedValue){
    // console.log(`Passed: ${returnedValue} === ${expectedValue}`);    
    window.programming101env.testing.logSuccess(`Passed: ${returnedValue} === ${expectedValue}`);    
  }

  static errorLog(returnedValue, expectedValue, errorText){
    // console.error(`${errorText}: Expected: ${expectedValue}, Got: ${returnedValue}`);
    window.programming101env.testing.logFail(`${errorText}: Expected: ${expectedValue}, Got: ${returnedValue}`);
  }

}
export default Testing;


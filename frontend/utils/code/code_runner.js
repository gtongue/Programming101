import { spawn } from 'threads';

const formatCode = code => {
  code = '"use strict" \n' + code;
  return code;
};

const formatTest = code => {
  return code.replace(/Testing./g, "window.programming101env.testing.testingLibrary.");
};

const setupTestLogging = () => {
  return `
  // console.log = (string) => {
  //   window.programming101env.testing.logSuccess(string);
  // };
  let consoleError = console.error;
  console.error = (string) => {
    window.programming101env.testing.logFail(string);
  };`;
};

export const testCodeAsync = (codeString, testString) => {
  runCodeAsync(codeString + formatTest(testString));
};

export const runCodeAsync = (codeString) => {
  let thread = spawn((input, done) => {
    done({integer: input.integer, code: input.code, output: input.output});    
  });
  thread.send({
    integer: 1,
    code: codeString,
    output: []
  }).on('message', (response) => {
    if(response.code)
    {
      let consoleLog = console.log;
      let consoleError = console.error;

      console.log = (...strings) => {
        for(let i = 0; i < strings.length; i++)
        { 
          if(typeof strings[i] === 'object')
          {
            response.output.push(strings[i] + " {");
            Object.keys(strings[i]).forEach(key => (response.output.push("\u0020\u0020\u0020\u0020" + key)));
            response.output.push("}");
          }else{
            response.output.push(strings[i]);
          }
        }
      };
      try{
        new Function(formatCode(response.code))();
      }catch(error){
        console.log(error);
      }
      response.code = "";
      console.log = consoleLog;
      console.error = consoleError;
    }
    if(response.output.length === 0)
    {
      thread.kill();
    }else{
      // let outputArray = response.output.split("\n");
      let outputArray = response.output;
      if(window.programming101env && window.programming101env.logTerminal){
        window.programming101env.logTerminal(outputArray.splice(0,100));
        response.output = outputArray;

        //This is to log all at once instead of 1000 outputs at a time
        //window.programming101env.logTerminal(response.output);
        //response.output = "";
        // thread.kill();

        thread.send({
          integer: response.integer + 1,
          code: response.code, 
          output: response.output});
      }else{
        console.log(response.output);
        thread.kill();
      }
    }
  }).on('exit', function() {
    console.log('Worker is done.');
  });
};
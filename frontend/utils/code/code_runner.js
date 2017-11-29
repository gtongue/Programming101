import { spawn } from 'threads';

const formatCode = code => {
  code = '"use strict" \n' + code;
  // (while|for)(.*?)[\{]
  // code = code.replace(/(while|for)(.*?)[\{]/g, "replaceme");
  code = "let loopCountingVariable = 0;" + code;
  code = code.replace(/for/g, "loopCountingVariable = 0;for");
  code = code.replace(/while/g, "loopCountingVariable = 0;while");
  code = code.replace(/{/g, "{loopCountingVariable+=1; if(loopCountingVariable > 100000) {throw `Possible infinite loop`;}");
  console.log(code);
  return code;
};

const formatTest = code => {
  return code.replace(/Testing./g, "window.programming200env.testing.testingLibrary.");
};

export const testCodeAsync = (codeString, testString) => {
  runCodeAsync(codeString + formatTest(";" + testString));
};

export const runCodeAsync = (codeString) => {
  let thread = spawn((input, done) => {
    done({integer: input.integer, code: input.code, output: input.output});    
  });
  thread.send({
    integer: 1,
    code: codeString,
    output: ""
  }).on('message', (response) => {
    if(response.code)
    {
      let consoleLog = console.log;
      let code = formatCode(response.code);
      console.log = (...strings) => {
        for(let i = 0; i < strings.length; i++)
        { 
          if(typeof strings[i] === 'object')
          {
            response.output +=  strings[i] + " {" + "\n";
            Object.keys(strings[i]).forEach(key => (response.output += "\u0020\u0020\u0020\u0020" + key + "\n"));
            response.output += "}" + "\n";
          }else{
            response.output += strings[i] + "\n";
          }
        }
      };
      try{
        new Function(code)();
      }catch(error){
        window.programming200env.logError(error.toString());
      }
      response.code = "";
      console.log = consoleLog;
    }
    if(!response.output)
    {
      thread.kill();
    }else{
      if(window.programming200env && window.programming200env.logTerminal){
        // window.programming200env.logTerminal(outputArray.splice(0,500).join("\n"));
        // response.output = outputArray.join("\n");
        //This is to log all at once instead of 1000 outputs at a time
        window.programming200env.logTerminal(response.output);
        response.output = "";
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
  });
};
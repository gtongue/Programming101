import { spawn } from 'threads';

const formatCode = code => {
  code = '"use strict" \n' + code;
  return code;
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
      let log = console.log;
      console['log'] = (...strings) => {
        for(let i = 0; i < strings.length; i++)
        { 
          if(typeof strings[i] === 'object')
          {
            response.output +=  strings[i] + " {" + "\n";
            Object.keys(strings[i]).forEach(key => (response.output += key + "\n"));
            response.output += "}" + "\n";
          }else{
            response.output += strings[i] + "\n";
          }
        }
      };
      new Function(formatCode(response.code))();
      response.code = "";
      console['log'] = log;
      console.log(response);
    }
    if(!response.output)
    {
      thread.kill();
    }else{
      //TODO check for terminal available
      let outputArray = response.output.split("\n");
      window.loggingtest(outputArray.splice(0,750).join("\n"));
      response.output = outputArray.join("\n");
      // window.loggingtest(response.output);
      // response.output = "";
      thread.send({
        integer: response.integer + 1,
        code: response.code, 
        output: response.output});
      }
  }).on('exit', function() {
    console.log('Worker has been terminated.');
  });
};
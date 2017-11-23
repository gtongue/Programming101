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
            Object.keys(strings[i]).forEach(key => (response.output += "\u0020\u0020\u0020\u0020" + key + "\n"));
            response.output += "}" + "\n";
          }else{
            response.output += strings[i] + "\n";
          }
        }
      };
      new Function(formatCode(response.code))();
      response.code = "";
      console['log'] = log;
    }
    if(!response.output)
    {
      thread.kill();
    }else{
      let outputArray = response.output.split("\n");
      if(window.programming101env && window.programming101env.logTerminal){
        window.programming101env.logTerminal(outputArray.splice(0,1000).join("\n"));
        response.output = outputArray.join("\n");
        //This is to log all at once instead of 1000 outputs at a time
        //window.programming101env.logTerminal(response.output);
        //response.output = "";
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
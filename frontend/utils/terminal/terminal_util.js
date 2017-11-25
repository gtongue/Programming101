export const formatOutput = (output) => {
  // return output.split(/\n/);
  return output;
};

export const formatCode = code => {
  code = '"use strict" \n' + code;
  // code = code.replace(/let /g, "this.");  

  return code;
};

export const runCode = code => {
  let output = "";
  let log = console.log;

  console['log'] = (...strings) => {
    strings.forEach(string => (output += string + "\n"));
  };

  let func = Function(code);
  func.call();
  
  console['log'] = log;
  return output;
};
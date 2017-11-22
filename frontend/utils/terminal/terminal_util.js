export const formatOutput = (output) => {
  output = output.replace(/console.log/g, "this.log");
  return output.split(/\n/);
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
export const formatOutput = (output) => {
  output = output.replace(/console.log/g, "this.log");
  return output.split(/\n/);
};
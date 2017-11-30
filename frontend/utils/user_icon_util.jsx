import React from 'react';

const iconRange = (string) => {
  if(string.length === 0) return 0;
  let char = string.toLowerCase().charAt(0);
  if(/[a-d]/.test(char)){
    return 0;
  }else if(/[e-g]/.test(char)){
    return 1;
  }else if(/[h-j]/.test(char)){
    return 2;
  }else if(/[k-m]/.test(char)){
    return 3;
  }else if(/[n-p]/.test(char)){
    return 4;
  }else if(/[q-s]/.test(char)){
    return 5;
  }else if(/[t-v]/.test(char)){
    return 6;
  }else if(/[w-z]/.test(char)){
    return 7;
  }
};
//http://tinygraphs.com/labs/isogrids/hexa/tinygraphs?theme=frogideas&numcolors=4&size=220&fmt=svg
//http://tinygraphs.com/labs/isogrids/hexa/tinygraphs?theme=sugarsweets&numcolors=4&size=220&fmt=svg
//http://tinygraphs.com/labs/isogrids/hexa/tinygraphs?theme=heatwave&numcolors=4&size=220&fmt=svg
const themes = ["frogideas", "sugarsweets", "heatwave", "daisygarden", "seascape","bythepool","duskfalling","berrypie"];
export const generateIcon = (username, size, className) =>
{
    let num = iconRange(username);
    return (
      <img 
      className = {className} 
      src={`http://tinygraphs.com/labs/isogrids/hexa/${username}?theme=${themes[num]}&numcolors=4&size=${size}&fmt=svg`}/>
    );
};

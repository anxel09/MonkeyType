export function textToLetter(text:string):string[]{
  let letters:string[] =[];
  for (const iterator of text) {
    letters.push(iterator)
  } 
  return letters
}
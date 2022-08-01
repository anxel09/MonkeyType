export function WordsPerMinute(time:number, countCharacters:number){
  if(time === 0) time = 1
  return +((60/time) * countCharacters).toFixed();
}
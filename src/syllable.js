export default function syllable(text) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let ogArray = text.split('');
  let newArray = [];
  for (let i = 0; i <= ogArray.length; i++) {
    if (!ogArray.includes(vowels)) {
    console.log(ogArray);
    return ogArray;
  }
    else if (vowels.includes(ogArray[i])) {
      newArray = ogArray.splice(i+1);
      console.log(newArray)
      return newArray;
  }
  }
}



var input_word = "Enterree";
function maxChar(input_string)
{
    const input_word_array = input_word.split("");
    const distinctLetters = [... new Set(input_word_array)];
    console.log(distinctLetters);
    let max= 0;
    let max_char = "";
    for(let i=0;i<distinctLetters.length;i++)
    {
        
        let cnt = 0;
        for(let k=0;k<input_word_array.length;k++)
        {
            
            if(distinctLetters[i] === input_word_array[k])
            {
                
                cnt++;
                
    
            }
        }
        if(i===0)
        {
            max=cnt;
            max_char = distinctLetters[i];
    
        }
        if(cnt>max)
        {
            max=cnt;
            max_char = distinctLetters[i];
        }
    }
    return max_char;
}    
const max_character = maxChar(input_word); 

console.log("maximum found character of the string is: " + max_character);



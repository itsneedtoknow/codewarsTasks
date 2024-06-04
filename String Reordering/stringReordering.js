// The input will be an array of dictionaries.

// Return the values as a string-seperated sentence in the order of their keys' integer equivalent (increasing order).

// The keys are not reoccurring and their range is -999 < key < 999. The dictionaries' keys & values will always be strings and will always not be empty.

function sentence(arrayOfObjects) {
    let orderedArrayOfKeys = [];
    let orderedSentence = [];
    let sortedorderedArrayOfKeys;
    let objectKey;
    let objectEntry;
    for(let i=0;i < arrayOfObjects.length; i++){
        
        objectKey = Object.keys(arrayOfObjects[i]);
        objectEntry = Object.entries(arrayOfObjects[i]);

        orderedArrayOfKeys.push(objectKey[0]);
    }

        sortedorderedArrayOfKeys = orderedArrayOfKeys.sort((a,b) =>  a - b);
        console.log(sortedorderedArrayOfKeys)

        for(let j=0; j < sortedorderedArrayOfKeys.length; j++){
             for(let k = 0; k < arrayOfObjects.length; k++){
               
                if(sortedorderedArrayOfKeys[j] === Object.entries(arrayOfObjects[k])[0][0]){
                    orderedSentence.push(Object.entries(arrayOfObjects[k])[0][1]);
                    console.log(orderedSentence)
                }else(console.log('false'))
            }
             }
             let sentence = orderedSentence.join(" ");
             console.log(sentence)
             return sentence
    }
  
  sentence([
    {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
    {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
   ])
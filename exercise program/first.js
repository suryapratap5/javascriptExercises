let subArray = [];
function SubString( str , n)
    {
       for (var i = 0; i < n; i++)
           for (var j = i+1; j <= n; j++)
            
                subArray.push(str.slice(i, j));
    }
        var str = "abcdedf";
        SubString(str, str.length);
        let subStrings = new Set(subArray)
        
        console.log(Array.from(subStrings).join(","))
        
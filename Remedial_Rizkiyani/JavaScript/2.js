var depth = 5*100;
    
    i = 1;
    
    for (; depth > 1;) {
        i++;
        
        depth -= 50
        if (depth > 0) {
            depth += 15
        }
    }
    console.log(i);
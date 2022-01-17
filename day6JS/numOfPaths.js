
   const x=3;
   const y=3;
    function numberOfPaths(m, n)
    {
    
        
        if( m==x-1 || n ==y-1)
          return 1;
        return numberOfPaths(m + 1, n) + numberOfPaths(m, n + 1);
       
       
    }
    
    console.log(numberOfPaths(0, 0));
    


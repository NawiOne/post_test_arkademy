# // const print_triangle = (num) => {
# //     for(let i = 1; i <= num; i++){
# //         for(let j =1; j < i; j++){
# //             console.log(' ')
# //         }
# //         for(let j = 1; j <= (num * 2 - (2* i - 1)); j++){
# //             if(i === 1 || j === 1 || j === (num * 2 - (2 * i -1))){
# //                 console.log('#')
# //             } else console.log(' ')
# //         }
# //         console.log('\n')
# //     }


# // };

# // print_triangle(5);

def printPattern(n) : 
      
    for i in range(1,n+1) : 
          
        # Print spaces 
        for j in range(1,i) : 
            print (" ", end="") 
              
        # Print hollow inverted pyramid 
        for j in range(1,(n * 2 - (2 * i - 1))  
                                       +1) : 
            if (i == 1 or j == 1 or 
               j == (n * 2 - (2 * i - 1))) : 
                print ("#", end="")  
            else : 
                print(" ", end="")  
                  
        # next line 
        print (""), 
  
# Driver code 
n = 6
printPattern(n) 

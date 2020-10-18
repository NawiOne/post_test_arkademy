def segitiga(num) :
    if (num % 2) == 1:
        print('angka harus genap boy')
    else:
        for i in range(1,num+1) : 
              
            for j in range(1,i) : 
                print (" ", end="") 
                  
            for j in range(1,(num * 2 - (2 * i - 1))  
                                           +1) : 
                if (i == 1 or j == 1 or 
                   j == (num * 2 - (2 * i - 1))) : 
                    print ("0", end="")  
                else : 
                    print(" ", end="")  
                      
            print (""), 
        
      
segitiga(6) 

# pyhton 3

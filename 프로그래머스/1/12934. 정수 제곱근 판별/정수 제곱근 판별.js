    function solution (n){
        for(let x = 1; x * x <= n; x++)
            { if (x*x === n){
                  return (x+1)*(x+1)
             }
             
             }return -1

    }




//if - else문 써서 문제 그대로 쓰면 될 것 같은데?
//x는 for 문을 써서 하나씩 대 봐야 겠다. 
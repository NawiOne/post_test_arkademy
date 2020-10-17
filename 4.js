const print_triangle = (num) => {
    let str = '';
    for(let i = 0; i < num; i++){
        for(let j = 0; j < i; j++){
            str += ' * ';
        }
        str += '\n'
    }
    console.log(str)
}

print_triangle(5)


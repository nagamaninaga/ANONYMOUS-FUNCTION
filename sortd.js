const SortedArrays = (num1, num2) => {

    let total = num1.length + num2.length
    let arr = []

    if (total === 1) 
    {
        return num1.length == 1 ? num1[0] : num2[0];
    }

    let arr_len = total % 2 == 0 ? (total) / 2 + 1 : Math.ceil(total / 2);
    let i = 0
    let j = 0
    while (arr.length < arr_len);
     
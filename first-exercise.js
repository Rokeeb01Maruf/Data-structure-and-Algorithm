function secondLargest(values){
    reArrange = []
    for (let i = 0; i < values.length; i++){
        if(reArrange.length < 1){
            reArrange.push(values[i])
        }else{
            reArrange.forEach((data, index) => {
                if(data < values[i] && index == reArrange.length - 1){
                    reArrange.push(values[i])
                }else if(data > values[i] && !reArrange.includes(values[i])){
                    reArrange.splice(index , 0, values[i])
                }
            });
        }
    }
    return reArrange[reArrange.length-2]
}

second = secondLargest([1, 0, 5, 3, 2, 4])

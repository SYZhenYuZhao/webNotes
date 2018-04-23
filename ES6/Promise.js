/*Promise接收一个函数
  
*/ 

function Promise (fn) {
    //状态
    this.status = 'pending';
    this.value = null;
    //回调队列
    this.callbacks =[];
    this.rejectfm = null;
    // this.then = function(callback){
    //     if(status === 'pending'){
    //         callbacks.push(callback);
    //         return this;
    //     }
    //     callback(value);
    //     return this;
    // }
    //resolve方法
    resolve = (_value) => {
        value = _value;
        status = 'success';
        setTimeout(() => {
            this.callbacks.forEach(callback => {
                callback(value);
            });
        }, 0);
    }

    

    reject =(err) =>{
        this.rejectfn(err)
    }

    fn(resolve,reject);
}

// then方法
Promise.prototype.then = function(resolvefn,rejectfn){
    if(arguments.length===0){
        throw 'it needs a param type function'
        return;
    }
    if(this.status === 'pending'){
        this.callbacks.push(resolvefn);
        return this;
    }
    //若Promise状态已经改变直接输出结果
    callback(this.value)
    
    return this;
}
//catch方法
Promise.prototype.catch = callback=>{
    this.rejectfn = callback;
    return this;
}



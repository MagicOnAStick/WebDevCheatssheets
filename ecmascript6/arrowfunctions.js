function Prefixer(prefix) {
    this.prefix = prefix;
}
//prototype dynamically adds method to object
/* Prefixer.prototype.prefixArray = function(arr){
    let that = this;

    //map calls a function for each array element
    return arr.map(function(x){
        console.log(that.prefix + x);
    });
}
 */
//instead
Prefixer.prototype.prefixArray = function(arr){
    return arr.map((x)=>{
        console.log(this.prefix + x);
    });
}



let pre = new Prefixer("Hello ");
pre.prefixArray(["Brad","Jeff"]);
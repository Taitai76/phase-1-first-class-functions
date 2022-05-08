function receivesAFunction(callback){
    return callback();

}
function returnsANamedFunction(){
    function n(){

    }
    return n;
}
function returnsAnAnonymousFunction(){
    
    return ()=>{}


}
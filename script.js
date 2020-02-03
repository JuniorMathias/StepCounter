function counter(){
    var from =  document.getElementById('txtf')
    var to =    document.getElementById('txtt')
    var steps = document.getElementById('txts')
    var res =   document.getElementById('res')
    if( from.value.length == 0 || to.value.length == 0 || steps.value.length == 0){
        alert("Fill up the Data")
    }else{
        var f = Number(from.value)
        var t = Number(to.value)
        var s = Number(steps.value)
        for( var c= f; c <= t; c = c + s){
           res.innerHTML += `  ${c}` 
        }
        
    }








}
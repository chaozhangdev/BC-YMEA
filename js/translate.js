const translation = () => {
    var current = new Array(); 
    current = window.location.href;
    l = current.length;
    array.splice(l-6, 0, 'E');
    // current.splice(l-6, l-5, '_EN');
    console.log(current);
    console.log(l);
}
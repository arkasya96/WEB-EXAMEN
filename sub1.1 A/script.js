
function myFunction(){
    var in1 = document.getElementById('input1').value;
    var in2 = document.getElementById('input2').value;

    var optiune = document.getElementById("sel").value;
    var result;

    if(optiune == '+')
    {
        result = adunare(in1,in2);
        var node = document.createElement("divv");
        node.innerHTML = in1 + '+' + in2 + '=' + result + '<br>';
        document.getElementById('result').appendChild(node);
    }
    if(optiune == '*')
    {
        result = inmultire(in1,in2);
        var node = document.createElement("divv");
        node.innerHTML = in1 + '*' + in2 + '=' + result + '<br>';
        document.getElementById('result').appendChild(node);
    }
}


function adunare(in1,in2)
{
    return parseInt(in1)+parseInt(in2);
}

function inmultire(in1,in2)
{
    return parseInt(in1)*parseInt(in2);
}

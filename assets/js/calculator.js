var _number01,_number02,_answer,_operator;



function setScreen(num){
    
      if(document.getElementById('txtScreen').value != "0"){
        document.getElementById('txtScreen').value += num;
      }
      else{
        document.getElementById('txtScreen').value = num;
      }


    console.log(num);
}

function reset()
{
    document.getElementById('txtScreen').value="0"
}

function setOperator(op)
{
    console.log(op);
    _number01 = document.getElementById('txtScreen').value;
    document.getElementById('txtScreen').value ="0";
    console.log("_number01 :" + _number01);
    console.log("_operator :" +op);

    _operator = op;
}

function getAnswer()
{
    _number02 = document.getElementById('txtScreen').value;
    console.log("_number02 :" + _number02);

    if(_operator == '+')
    {
        _answer = Number(_number01) + Number(_number02);

    }
    else if(_operator == '-')
    {
        _answer = Number(_number01) - Number(_number02);
    }
    else if(_operator == '*')
    {
        _answer = Number(_number01) * Number(_number02);
    }
    else if(_operator == '/')
    {
        _answer = Number(_number01) / Number(_number02);
    }

    console.log("Answer : " + _answer);

    document.getElementById('txtScreen').value = _answer
   
    
}


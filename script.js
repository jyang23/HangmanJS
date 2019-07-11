var list = ["tree","rain","bear","encourage","promise","soup","chess","insurance","pancakes","stream"]
var guesses = 0;


var index = Math.floor((Math.random() * (list.length)));
var word = list[index];

var split = word.split("");
var list1 = [];
list1.length = split.length;


for (var i = 0; i < list1.length; i++)
{
    list1[i] = split[i];
}

var list2 = [];
list2.length = split.length;

var list3 = [];

//------------------------------------------------------------------------
function test()
{
    alert(list1);
}
//------------------------------------------------------------------------
function myFunction()
{
    for(var i = 0; i<list2.length;i++)
    {
        list2[i] = " _ ";
    }
    document.getElementById("message").innerHTML = list2;
}
//------------------------------------------------------------------------
function guess()
{
    v = document.getElementById("command").value;
    document.getElementById("command").value = "";
    {
        if(v == word)
        {
            document.getElementById("message2").innerHTML = "YOU WON!";
            document.getElementById("message").innerHTML = list1;
            document.getElementById("message4").innerHTML = guesses;

        }

        else if((word.includes(v) == false))
        {
            guesses++;
            if(guesses == 1)
            {
                list3.push(v);
                // alert(v+" is not a correct letter");
                document.getElementById('stage1').src="stage2.png";
                document.getElementById("message3").innerHTML = list3;
                document.getElementById("message4").innerHTML = guesses;

            }
            else if(guesses == 2)
            {
                list3.push(v);
                //alert(v+" is not a correct letter");
                document.getElementById('stage1').src="stage3.png";
                document.getElementById("message3").innerHTML = list3;
                document.getElementById("message4").innerHTML = guesses;

            }
            else if(guesses == 3)
            {
                list3.push(v);
                //alert(v+" is not a correct letter");
                document.getElementById('stage1').src="stage4.png";
                document.getElementById("message3").innerHTML = list3;
                document.getElementById("message4").innerHTML = guesses;

            }
            else if(guesses == 4)
            {
                list3.push(v);
                //alert(v+" is not a correct letter");
                document.getElementById('stage1').src="stage5.png";
                document.getElementById("message3").innerHTML = list3;
                document.getElementById("message4").innerHTML = guesses;

            }
            else if(guesses == 5)
            {
                list3.push(v);
                //alert(v+" is not a correct letter");
                document.getElementById('stage1').src="stage6.png";
                document.getElementById("message3").innerHTML = list3;
                document.getElementById("message4").innerHTML = guesses;

            }
            else
            {
                list3.push(v);
                //alert(v+" is not a correct letter");
                document.getElementById('stage1').src="stage7";
                document.getElementById('stage1').src="https://media.giphy.com/media/RCwOTgJidoMda/giphy.gif";
                document.getElementById("message4").innerHTML = guesses;
                document.getElementById("message3").innerHTML = list3;
                document.getElementById("message2").innerHTML = "YOU LOSE!";
                document.getElementById("message").innerHTML = list1;
                reset();
            }
        }
        else {
            for (var i = 0; i < list2.length; i++)
            {
                if (v == list1[i]) {
                    list2[i] = v;
                }
            }
            document.getElementById("message").innerHTML = list2;
            document.getElementById("message4").innerHTML = guesses;

        }

        for (var i = 0; i < list2.length; i++)
        {
            if (list2.includes(" _ ") === false)
            {
                document.getElementById("message2").innerHTML = "YOU WON!";
                document.getElementById("message").innerHTML = list1;
                document.getElementById("message4").innerHTML = guesses;
            }
        }
    }
}
//------------------------------------------------------------------------
function reset()
{
    alert("YOU DEAD MEAT");
    setTimeout('Redirect()', 5000);
}

function Redirect() {
    window.location = "http://localhost:63342/HangmanJS/hangman.html?_ijt=1obdt9a5a5heqp61os5e4fbdm2";
}
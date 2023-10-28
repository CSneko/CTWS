
document.addEventListener("DOMContentLoaded", function(){
    getPlayerStickTop();
    getNekoStickTop();
})

function getPlayerStickTop(){
    fetch('https://toneko.api.crystalneko.online/sticktop?type=player')
        .then(response => response.json())
        .then(JSON =>{
            //获取数值
            var players = JSON;
            // 获取表格元素和表格主体元素
            var table = document.getElementById("scoreTable");
            var tbody = table.getElementsByTagName("tbody")[0];

            // 循环读取每个 player 的数据，并生成表格行
            for (var i = 1; i <= 10; i++) {
            var player = players["player" + i];
            var row = document.createElement("tr");
            var nameCell = document.createElement("td");
            var scoreCell = document.createElement("td");
            nameCell.textContent = player.name;
            scoreCell.textContent = player.score;
            row.appendChild(nameCell);
                row.appendChild(scoreCell);
                tbody.appendChild(row);
            }

        })
        .catch(error => console.log('出错了', error));
}

function getNekoStickTop(){
    fetch('https://toneko.api.crystalneko.online/sticktop?type=neko')
        .then(response => response.json())
        .then(JSON =>{
            //获取数值
            var players = JSON;
            // 获取表格元素和表格主体元素
            var table = document.getElementById("scoreTable1");
            var tbody = table.getElementsByTagName("tbody")[0];

            // 循环读取每个 player 的数据，并生成表格行
            for (var i = 1; i <= 10; i++) {
            var player = players["player" + i];
            var row = document.createElement("tr");
            var nameCell = document.createElement("td");
            var scoreCell = document.createElement("td");
            nameCell.textContent = player.name;
            scoreCell.textContent = player.score;
            row.appendChild(nameCell);
                row.appendChild(scoreCell);
                tbody.appendChild(row);
            }

        })
        .catch(error => console.log('出错了', error));
}
document.getElementById("getStick").addEventListener("click", function() {
    // 获取表单元素的值
    var optionValue = document.getElementById("option").value;
    var inputValue = document.getElementById("input").value;
    //查询统计数据
    fetch(`https://toneko.api.crystalneko.online/getstick?type=${optionValue}&&player=${inputValue}&&neko=${inputValue}`)
        .then(reponse => reponse.text())
        .then(Text =>{
            //获取元素
            var resultDiv = document.getElementById('result');
            var times= Text;
            var result;
            var resultOut;
            //设定变量
            if(optionValue == 'neko'){
                if(parseInt(times) <= 500){
                    resultOut = `,看起来它的主人应该不怎么活跃喵`;
                }
                if(parseInt(times) > 500 && parseInt(times) <= 5000){
                    resultOut = `,再接再厉喵`
                }
                if(parseInt(times) > 5000 && parseInt(times) <= 50000){
                    resultOut = `,它的主人应该经常和它van游(♀️)戏(♂️)喵`
                }
                if(parseInt(times) >50000){
                    resultOut = `,怎么做到的喵`
                }
                result = `<p>猫娘 ${inputValue} 一共被撅了 ${times} 次` + resultOut;
                //显示内容
                resultDiv.innerHTML = result;
            }else{
                if(parseInt(times) <= 500){
                    resultOut = `,看起来他应该不怎么活跃喵`;
                }
                if(parseInt(times) > 500 && parseInt(times) <= 5000){
                    resultOut = `,再接再厉喵`
                }
                if(parseInt(times) > 5000 && parseInt(times) <= 50000){
                    resultOut = `,他应该经常和猫娘一起van游(♀️)戏(♂️)喵`
                }
                if(parseInt(times) >50000){
                    resultOut = `,怎么做到的喵`
                }
                result = `<p>玩家 ${inputValue} 一共撅了 ${times} 次猫娘` + resultOut;
                //显示内容
                resultDiv.innerHTML = result;
            }

             
        })
    
  });
  
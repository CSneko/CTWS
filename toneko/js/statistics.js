document.addEventListener("DOMContentLoaded", function(){
    getPlayerStickTop();
    getNekoStickTop();
})

function getPlayerStickTop(){
    fetch('https://toneko.cneko.org/getStickTop?type=player')
        .then(response => response.json())
        .then(data =>{
            populateTable(data, 'player');
        })
        .catch(error => console.log('出错了', error));
}

function getNekoStickTop(){
    fetch('https://toneko.cneko.org/getStickTop?type=neko')
        .then(response => response.json())
        .then(data =>{
            populateTable(data, 'neko');
        })
        .catch(error => console.log('出错了', error));
}

function populateTable(data, type) {
    var tableBody;
    if (type === 'player') {
        tableBody = document.getElementById("scoreTable").getElementsByTagName('tbody')[0];
    } else if (type === 'neko') {
        tableBody = document.getElementById("scoreTable1").getElementsByTagName('tbody')[0];
    }

    // 清空表格内容
    tableBody.innerHTML = '';

    // 遍历数据并动态添加到表格中
    data.forEach(function(item) {
        var row = document.createElement("tr");
        var nameCell = document.createElement("td");
        var countCell = document.createElement("td");

        nameCell.textContent = item.name;
        if (type === 'player') {
            countCell.textContent = item.time.attack;
        } else if (type === 'neko') {
            countCell.textContent = item.time.attacked;
        }

        row.appendChild(nameCell);
        row.appendChild(countCell);

        tableBody.appendChild(row);
    });
}

document.getElementById("getStick").addEventListener("click", function() {
    // 获取表单元素的值
    var optionValue = document.getElementById("option").value;
    var inputValue = document.getElementById("input").value;
    //查询统计数据
    fetch(`https://toneko.cneko.org/getStick?name=${inputValue}`)
        .then(reponse => reponse.json())
        .then(JSON =>{
            var response = JSON;
            //获取元素
            var resultDiv = document.getElementById('result');
            var attack = response.attack;
            var attacked = response.attacked;
            var result;
            var resultOut;
            //设定变量
            if(optionValue == 'neko'){
                if(parseInt(attack) <= 500){
                    resultOut = `,看起来它的主人应该不怎么活跃喵`;
                }
                if(parseInt(attack) > 500 && parseInt(attack) <= 5000){
                    resultOut = `,再接再厉喵`
                }
                if(parseInt(attack) > 5000 && parseInt(attack) <= 50000){
                    resultOut = `,它的主人应该经常和它van游(♀️)戏(♂️)喵`
                }
                if(parseInt(attack) >50000){
                    resultOut = `,怎么做到的喵`
                }
                result = `<p>猫娘 ${inputValue} 一共被撅了 ${attack} 次` + resultOut;
                //显示内容
                resultDiv.innerHTML = result;
            }else{
                if(parseInt(attacked) <= 500){
                    resultOut = `,看起来他应该不怎么活跃喵`;
                }
                if(parseInt(attacked) > 500 && parseInt(times) <= 5000){
                    resultOut = `,再接再厉喵`
                }
                if(parseInt(attacked) > 5000 && parseInt(times) <= 50000){
                    resultOut = `,他应该经常和猫娘一起van游(♀️)戏(♂️)喵`
                }
                if(parseInt(attacked) >50000){
                    resultOut = `,怎么做到的喵`
                }
                result = `<p>玩家 ${inputValue} 一共撅了 ${attacked} 次猫娘` + resultOut;
                //显示内容
                resultDiv.innerHTML = result;
            }

             
        })
    
  });
  
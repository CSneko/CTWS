document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单的默认提交行为

    // 获取用户输入的数值
    var serverIp = document.getElementById('server-ip').value;
    var password = document.getElementById('password').value;

    // 发送数据给服务器进行验证
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/login'); // 这里的 '/login' 是你在插件中创建的处理登录请求的接口路径
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        if (xhr.status === 200) {
            // 登录成功，执行相应操作
        } else {
            // 登录失败，提示错误信息
        }
    };
    xhr.send(JSON.stringify({ serverIp: serverIp, password: password }));
});


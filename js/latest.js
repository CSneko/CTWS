document.addEventListener("DOMContentLoaded", function() {
    var serverInfo1;
    var serverInfo2;

    function renderServerInfo(containerId, serverInfo) {
        var container = document.getElementById(containerId);
        container.innerHTML = "<table style='font-size: 20px;width: 100%;color: rgb(174, 185, 185);'><tr><th>名称</th><td>"+serverInfo.assets[0].name+"</td></tr>" +
        "<tr><th>最新版本</th><td>"+serverInfo.tag_name+"</td></tr>" +
        "<tr><th>版本主题</th><td>"+serverInfo.name +"</td></tr>"+
        "<tr><th>发布时间</th><td>"+serverInfo.assets[0].updated_time+"</td></tr>" +
        "<tr><th>项目地址</th><td>"+serverInfo.html_url+"</td></tr>" +
        "<tr><th>下载链接</th><td>"+serverInfo.assets[0].browser_download_url+"</td></tr></table>";
    }

    fetch('https://api.github.com/repos/CSNeko/ctLib/releases/latest')
        .then(response => response.json())
        .then(data => {
            serverInfo1 = data;
            renderServerInfo("server-info", serverInfo1);
        })
        .catch(error => {
            var container = document.getElementById("server-info");
            container.innerHTML = "<h2>获取数据失败，可能是因为无法连接到API服务器</h2>";
        });

    fetch('https://api.github.com/repos/CSNeko/CSNKTools/releases/latest')
        .then(response => response.json())
        .then(data => {
            serverInfo2 = data;
            renderServerInfo("server-info2", serverInfo2);
        })
        .catch(error => {
            var container = document.getElementById("server-info2");
            container.innerHTML = "<h1>获取数据失败, 可能是因为无法连接到API服务器</h1>";
        });

    fetch('https://api.github.com/repos/CSNeko/toNeko/releases/latest')
        .then(response => response.json())
        .then(data => {
            serverInfo3 = data;
            renderServerInfo("server-info3", serverInfo3);
        })
        .catch(error => {
            var container = document.getElementById("server-info3");
            container.innerHTML = "<h1>获取数据失败, 可能是因为无法连接到API服务器</h1>";
        });

});

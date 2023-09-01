 function openNav() {
  document.getElementById("mySidebar").style.width = "150px";
  document.getElementById("main").style.marginLeft = "150px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

      function toggleOptions() {
      var options = document.getElementById('options');
      
      if (options.style.visibility === 'hidden') {
        options.style.visibility = 'visible';
      } else {
        options.style.visibility = 'hidden';
      }
    }
	
	
	
    function setBackground(selection) {
      var background;
      
      switch (selection) {
        case 'option1':
          background = getRandomBackground(['https://cdn.jsdelivr.net/gh/CSneko/csneko.github.io@main/images/na1.png', 'https://cdn.jsdelivr.net/gh/CSneko/csneko.github.io@main/images/na2.jpg', 'https://cdn.jsdelivr.net/gh/CSneko/csneko.github.io@main/images/na3.png', 'https://cdn.jsdelivr.net/gh/CSneko/csneko.github.io@main/images/na4.png']);
          break;
        case 'option2':
          background = getRandomBackground(['https://cdn.jsdelivr.net/gh/CSneko/csneko.github.io@main/images/ll1.png', 'https://cdn.jsdelivr.net/gh/CSneko/csneko.github.io@main/images/ll2.jpg', 'https://cdn.jsdelivr.net/gh/CSneko/csneko.github.io@main/images/ll3.jpg','https://cdn.jsdelivr.net/gh/CSneko/csneko.github.io@main/images/ll6.png','images/ll7.jpg']);
          break;
        case 'option3':
          background = getRandomBackground(['images/f1.png','images/f2.png','images/f3.png','images/f4.png','images/f5.png','images/f6.png','images/f7.png','images/f8.png','images/f9.png','images/f10.png','images/f11.png','images/f12.png','images/f13.png','images/f14.png','images/f15.png','images/f16.png']);
          break;
        case 'option4':
          background = getRandomBackground(['']);
          break;
        default:
          background = '';
      }
      
      // 将选择的值保存在localStorage中
      localStorage.setItem('background', background);
      
      applyBackground(background);
      
      // 隐藏选项框
      document.getElementById('options').style.visibility = 'hidden';
    }
    
    function getRandomBackground(images) {
      var randomIndex = Math.floor(Math.random() * images.length);
      return images[randomIndex];
    }
    
    function applyBackground(background) {
      document.body.style.backgroundImage = 'url(' + background + ')';
    }
    
    // 页面加载完成时应用之前保存的背景图片
    document.addEventListener('DOMContentLoaded', function() {
      var background = localStorage.getItem('background');
      if (background) {
        applyBackground(background);
      }
    });
    
    // 显示选项框
    window.onload = function() {
      document.getElementById('options').style.visibility = 'visible';
    };
	
	
	
	
	
        var progressBar = document.getElementById('progressBar');
        var elements = document.getElementsByClassName('element');

        // 检查本地存储是否有之前保存的值
        if (localStorage.getItem('progressValue')) {
            progressBar.value = localStorage.getItem('progressValue');
            setOpacity(localStorage.getItem('progressValue'));
        }

        // 监听滑动条的变化事件
        progressBar.addEventListener('input', function() {
            // 将当前值保存到本地存储
            localStorage.setItem('progressValue', progressBar.value);
            setOpacity(progressBar.value);
        });

        function setOpacity(value) {
            // 将进度条的值转换为透明度值
            var opacity = parseFloat(value) / 100;

            // 遍历所有元素，并设置它们的透明度
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.opacity = opacity;
                elements[i].style.filter = 'alpha(opacity=' + (opacity * 100) + ')';
            }
        }
		


document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById('link');
  link.addEventListener('click', openInputBox);
});

function openInputBox() {
  var linkUrl = prompt('请输入链接');
  if (linkUrl) {
    localStorage.setItem('background', linkUrl);
    applyBackground(linkUrl);
  }
}

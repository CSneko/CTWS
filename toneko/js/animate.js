  // 获取目标元素
  const div = document.querySelector('#top-place');
  const title = document.querySelector('#top-title');
  const table = document.querySelector('.top');
  const place = document.querySelector('#top-place');
  // 创建 Intersection Observer 实例
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      // 当目标元素进入视口时添加动画类
      if (entry.isIntersecting) {
        title.classList.add('loadTopTitle');
        table.classList.add('loadTable');
        place.remove();
      }
    });
  });

  // 开始观察目标元素
  observer.observe(div);
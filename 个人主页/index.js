
// 获取所有的导航菜单项
var navItems = document.querySelectorAll('nav li');

// 为每个导航菜单项添加点击事件
navItems.forEach(function(item) {
    item.addEventListener('click', function(e) {
        // 阻止默认行为
        e.preventDefault();
        // 获取所有导航菜单项并隐藏它们
        navItems.forEach(function(item) {
            item.classList.remove('active');
        });
        // 添加 'active' 类到被点击的菜单项上
        item.classList.add('active');
    });
});

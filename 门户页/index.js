
// 获取页面中的导航链接
var navLinks = document.querySelectorAll('nav a');

// 获取页面中的主要内容部分
var mainSections = document.querySelectorAll('main section');

// 为每个导航链接添加点击事件监听器
navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        // 阻止链接的默认行为（即阻止跳转）
        e.preventDefault();
        
        // 根据链接的href属性找到对应的主要内容部分，并滚动到那个部分
        var targetSection = document.querySelector('main section#' + this.hash.substr(1));
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

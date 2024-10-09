// 监听进入按钮的点击事件
document.querySelector('.enter-button').addEventListener('click', function() {
    document.querySelector('.welcome-screen').style.display = 'none'; // 隐藏欢迎页面
    document.querySelector('.portfolio').classList.remove('hidden'); // 显示作品栏
    document.querySelector('.video-section').classList.remove('hidden'); // 显示视频栏
    document.querySelector('.social-media').classList.remove('hidden'); // 显示社交媒体
});

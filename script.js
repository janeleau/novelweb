// 小说数据 - 修改为使用GitHub路径
const novelsData = [
    {
       id: 1,
        title: "贵妃，你怎么才找到我",
        description: "讲述贵妃与皇帝之间复杂的情感纠葛。",
        tags: ["情侣"],
        volumes: [
            {
                title: "第一卷：我们的故事",
                chapters: [
                    {
                        title: "第一章 Y先生的日常",
                        githubPath: "https://github.com/janeleau/novelweb/blob/main/txtfiles/data1/volume1/chapter1"
                    },
                    {
                        title: "第二章 初见皇帝",
                        githubPath: "https://raw.githubusercontent.com/yourusername/yourrepo/main/chapters/chapter2.txt"
                    },
                    {
                        title: "第三章 宫中的暗流",
                        githubPath: "https://raw.githubusercontent.com/yourusername/yourrepo/main/chapters/chapter3.txt"
                    },
                    { title: "第四章 宫中的暗流",
                        githubPath: "https://raw.githubusercontent.com/yourusername/yourrepo/main/chapters/chapter3.txt"
                    }
                ]
            },
            {
                title: "第二卷：情愫",
                chapters: [
                    {
                        title: "第一章 御花园偶遇",
                        githubPath: "https://raw.githubusercontent.com/yourusername/yourrepo/main/chapters/chapter4.txt"
                    },
                    {
                        title: "第二章 宫中的嫉妒",
                        githubPath: "https://raw.githubusercontent.com/yourusername/yourrepo/main/chapters/chapter5.txt"
                    }
                ]
            },
            {
                title: "第三卷：危机",
                chapters: [
                    {
                        title: "第一章 皇后的警告",
                        githubPath: "https://raw.githubusercontent.com/yourusername/yourrepo/main/chapters/chapter6.txt"
                    },
                    {
                        title: "第二章 阴谋",
                        githubPath: "https://raw.githubusercontent.com/yourusername/yourrepo/main/chapters/chapter7.txt"
                    },
                    {
                        title: "第三章 真相大白",
                        githubPath: "https://raw.githubusercontent.com/yourusername/yourrepo/main/chapters/chapter8.txt"
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        title: "长安十二时辰",
        description: "在长安城最危险的十二个时辰里，一个死囚与一名女捕快联手阻止了一场惊天阴谋。",
        tags: ["悬疑", "历史", "动作"],
        volumes: [
            {
                title: "第一卷：危机初现",
                chapters: [
                    {
                        title: "第一章 死囚出狱",
                        githubPath: "https://raw.githubusercontent.com/yourusername/yourrepo/main/chapters/chapter9.txt"
                    },
                    {
                        title: "第二章 第一个线索",
                        githubPath: "https://raw.githubusercontent.com/yourusername/yourrepo/main/chapters/chapter10.txt"
                    }
                ]
            },
            {
                title: "第二卷：追捕",
                chapters: [
                    {
                        title: "第一章 地下密道",
                        githubPath: "https://raw.githubusercontent.com/yourusername/yourrepo/main/chapters/chapter11.txt"
                    },
                    {
                        title: "第二章 敌人的真面目",
                        githubPath: "https://raw.githubusercontent.com/yourusername/yourrepo/main/chapters/chapter12.txt"
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        title: "青丘狐传说",
        description: "一位书生无意中救下一只受伤的白狐，从此卷入人妖两界的纷争。",
        tags: ["奇幻", "爱情", "妖怪"],
        volumes: [
            {
                title: "第一卷：相遇",
                chapters: [
                    {
                        title: "第一章 雪夜救狐",
                        githubPath: "https://raw.githubusercontent.com/yourusername/yourrepo/main/chapters/chapter13.txt"
                    },
                    {
                        title: "第二章 狐女报恩",
                        githubPath: "https://raw.githubusercontent.com/yourusername/yourrepo/main/chapters/chapter14.txt"
                    }
                ]
            },
            {
                title: "第二卷：纷争",
                chapters: [
                    {
                        title: "第一章 猎妖师",
                        githubPath: "https://raw.githubusercontent.com/yourusername/yourrepo/main/chapters/chapter15.txt"
                    },
                    {
                        title: "第二章 青丘的秘密",
                        githubPath: "https://raw.githubusercontent.com/yourusername/yourrepo/main/chapters/chapter16.txt"
                    }
                ]
            }
        ]
    }
];

// DOM元素
const novelsContainer = document.getElementById('novels-container');
const searchInput = document.getElementById('search-input');
const novelSection = document.getElementById('novel-section');
const aboutSection = document.getElementById('about-section');
const fictionLink = document.getElementById('fiction-link');
const aboutLink = document.getElementById('about-link');
const fictionAllLink = document.getElementById('fiction-all-link');
const novelModal = document.getElementById('novel-modal');
const fullscreenReader = document.getElementById('fullscreen-reader');
const closeBtns = document.querySelectorAll('.close-btn');
const volumesContainer = document.getElementById('volumes-container');
const homeLink = document.getElementById('home-link');

// 评论相关DOM元素
const commentAuthor = document.getElementById('comment-author');
const commentContent = document.getElementById('comment-content');
const submitCommentBtn = document.getElementById('submit-comment');
const commentsList = document.getElementById('comments-list');

// 当前阅读状态
let currentNovelId = null;
let currentNovel = null;
let currentVolumeIndex = 0;
let currentChapterIndex = 0;
let rainInterval;
let currentChapterTitle = '';
let currentChapterIdentifier = '';
let valineInstance = null;

// Valine配置
const valineConfig = {
    appId: '7VUQAAaWZARxazhDAA9DmIay-gzGzoHsz',
    appKey: 'DznETOpf40sXQKeYrZNYYPs1',
    placeholder: '欢迎评论~ (支持Markdown语法)',
    path: window.location.pathname,
    avatar: 'mp',
    meta: ['nick', 'mail', 'link'],
    pageSize: 10,
    lang: 'zh-CN',
    highlight: true,
    recordIP: true,
    serverURLs: '',
    emojiCDN: '',
    emojiMaps: null,
    enableQQ: false,
    requiredFields: []
};

// 从GitHub加载章节内容
async function loadChapterFromGitHub(githubPath) {
    try {
        const response = await fetch(githubPath);
        if (!response.ok) {
            throw new Error(`HTTP错误: ${response.status}`);
        }
        
        const text = await response.text();
        return convertTextToHtml(text);
    } catch (error) {
        console.error('从GitHub加载章节失败:', error);
        return `<p>加载失败: ${error.message}</p>`;
    }
}

// 文本转HTML函数
function convertTextToHtml(text) {
    const paragraphs = text.split(/\n\s*\n/);
    let html = '';
    
    paragraphs.forEach(paragraph => {
        const trimmed = paragraph.trim();
        if (trimmed) {
            const withLineBreaks = trimmed.replace(/\n/g, '<br>');
            html += `<p>${withLineBreaks}</p>`;
        }
    });
    
    return html || '<p>无法解析内容</p>';
}

// 生成阅读界面雨滴效果
function createReaderRain() {
    const rainContainer = document.createElement('div');
    rainContainer.className = 'reader-rain';
    fullscreenReader.appendChild(rainContainer);
    
    // 生成雨滴
    const dropsCount = Math.floor(window.innerWidth / 2);
    for (let i = 0; i < dropsCount; i++) {
        const drop = document.createElement('div');
        drop.className = 'reader-drop';
        
        // 随机属性
        const left = Math.random() * 100;
        const delay = Math.random() * 2;
        const duration = 0.5 + Math.random() * 1.5;
        const height = 20 + Math.random() * 40;
        const opacity = 0.3 + Math.random() * 0.5;
        const width = 0.5 + Math.random() * 1.5;
        
        drop.style.left = `${left}%`;
        drop.style.animationDelay = `${delay}s`;
        drop.style.animationDuration = `${duration}s`;
        drop.style.height = `${height}px`;
        drop.style.opacity = opacity;
        drop.style.width = `${width}px`;
        
        rainContainer.appendChild(drop);
    }
    
    // 生成涟漪
    rainInterval = setInterval(() => {
        const ripple = document.createElement('div');
        ripple.className = 'reader-ripple';
        ripple.style.left = `${Math.random() * 100}%`;
        ripple.style.top = `${85 + Math.random() * 15}%`;
        rainContainer.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 1000);
    }, 150);
}

// 清除雨滴效果
function clearRainEffect() {
    clearInterval(rainInterval);
    const rain = document.querySelector('.reader-rain');
    if (rain) rain.remove();
}

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
    // 渲染所有小说
    renderNovels(novelsData);
    
    // 设置导航链接事件
    setupNavigation();
    setupHomeLink();
    // 设置搜索功能
    setupSearch();
    
    // 设置模态框关闭事件
    setupModalClose();
    
    // 初始化阅读器控制
    initReaderControls();
});

/**
 * 渲染小说列表
 * @param {Array} novels - 小说数据数组
 */
function renderNovels(novels) {
    novelsContainer.innerHTML = '';
    
    novels.forEach((novel, index) => {
        const card = document.createElement('div');
        card.className = 'novel-card';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <h3>${novel.title}</h3>
            <p>${novel.description}</p>
            <div class="tags">
                ${novel.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <button class="details-btn" data-id="${novel.id}">查看详情</button>
        `;
        
        novelsContainer.appendChild(card);
    });
    
    // 为详情按钮添加事件
    document.querySelectorAll('.details-btn').forEach(button => {
        button.addEventListener('click', function() {
            const novelId = parseInt(this.getAttribute('data-id'));
            showNovelDetails(novelId);
        });
    });
}

/**
 * 显示小说详情（卷列表）
 * @param {number} novelId - 小说ID
 */
function showNovelDetails(novelId) {
    currentNovelId = novelId;
    currentNovel = novelsData.find(n => n.id === novelId);
    
    if (!currentNovel) return;
    
    document.getElementById('modal-title').textContent = currentNovel.title;
    volumesContainer.innerHTML = '';
    
    // 添加返回按钮
    const backButton = document.createElement('button');
    backButton.className = 'back-btn';
    backButton.textContent = '返回小说列表';
    backButton.addEventListener('click', function() {
        novelModal.style.display = 'none';
    });
    volumesContainer.appendChild(backButton);
    
    // 添加卷列表
    currentNovel.volumes.forEach((volume, index) => {
        const volumeCard = document.createElement('div');
        volumeCard.className = 'volume-card';
        volumeCard.innerHTML = `<h3>${volume.title}</h3>`;
        
        volumeCard.addEventListener('click', function() {
            showChapters(novelId, volume, index);
        });
        
        volumesContainer.appendChild(volumeCard);
    });
    
    novelModal.style.display = 'block';
}

/**
 * 显示章节列表
 * @param {number} novelId - 小说ID
 * @param {Object} volume - 卷数据
 * @param {number} volumeIndex - 卷索引
 */
function showChapters(novelId, volume, volumeIndex) {
    const novel = novelsData.find(n => n.id === novelId);
    if (!novel) return;
    
    volumesContainer.innerHTML = '';
    
    // 添加返回按钮
    const backButton = document.createElement('button');
    backButton.className = 'back-btn';
    backButton.textContent = '返回卷列表';
    backButton.addEventListener('click', function() {
        showNovelDetails(novelId);
    });
    volumesContainer.appendChild(backButton);
    
    // 添加章节列表
    volume.chapters.forEach((chapter, index) => {
        const chapterCard = document.createElement('div');
        chapterCard.className = 'volume-card';
        chapterCard.innerHTML = `<h3>${chapter.title}</h3>`;
        
        chapterCard.addEventListener('click', function() {
            showChapterContent(novel.title, volume.title, chapter, index, volumeIndex);
        });
        
        volumesContainer.appendChild(chapterCard);
    });
}

/**
 * 显示章节内容
 * @param {string} novelTitle - 小说标题
 * @param {string} volumeTitle - 卷标题
 * @param {Object} chapter - 章节数据
 * @param {number} chapterIndex - 章节索引
 * @param {number} volumeIndex - 卷索引
 */
async function showChapterContent(novelTitle, volumeTitle, chapter, chapterIndex, volumeIndex) {
    // 设置加载状态
    document.getElementById('reader-content').innerHTML = '<div class="loading">正在加载章节内容...</div>';
    
    // 从GitHub加载内容
    let contentHtml;
    if (chapter.githubPath) {
        contentHtml = await loadChapterFromGitHub(chapter.githubPath);
    } else if (chapter.content) {
        contentHtml = chapter.content; // 保留对原有content字段的支持
    } else {
        contentHtml = '<p>内容不存在</p>';
    }
    
    // 更新页面内容
    document.getElementById('reader-content').innerHTML = contentHtml;
    
    currentChapterIndex = chapterIndex;
    currentVolumeIndex = volumeIndex;
    
    document.getElementById('reader-title').innerHTML = `
        ${novelTitle} <small>> ${volumeTitle} > ${chapter.title}</small>
    `;
    
    novelModal.style.display = 'none';
    fullscreenReader.style.display = 'block';
    
    clearRainEffect();
    createReaderRain();
    
    updateReaderNavButtons();
    initPullToRead();
    
    setTimeout(() => {
        initValine(novelTitle, volumeTitle, chapter.title);
    }, 500);
}

/**
 * 更新阅读器导航按钮状态
 */
function updateReaderNavButtons() {
    const prevBtn = document.getElementById('prev-chapter');
    const nextBtn = document.getElementById('next-chapter');
    
    // 上一章按钮状态
    prevBtn.disabled = currentChapterIndex <= 0;
    
    // 下一章按钮状态
    const currentVolume = currentNovel.volumes[currentVolumeIndex];
    nextBtn.disabled = currentChapterIndex >= currentVolume.chapters.length - 1;
}

/**
 * 设置导航链接事件
 */
function setupNavigation() {
    // 非虚构小说 - 只显示第一本
    fictionLink.addEventListener('click', function(e) {
        e.preventDefault();
        novelSection.style.display = 'block';
        aboutSection.style.display = 'none';
        
        const nonFictionNovel = novelsData.filter(novel => novel.id === 1);
        renderNovels(nonFictionNovel);
        
        window.scrollTo({
            top: novelSection.offsetTop - 20,
            behavior: 'smooth'
        });
    });
    
    // 虚构小说 - 显示第二和第三本
    fictionAllLink.addEventListener('click', function(e) {
        e.preventDefault();
        novelSection.style.display = 'block';
        aboutSection.style.display = 'none';
        
        const fictionNovels = novelsData.filter(novel => novel.id !== 1);
        renderNovels(fictionNovels);
        
        window.scrollTo({
            top: novelSection.offsetTop - 20,
            behavior: 'smooth'
        });
    });
    
    // 添加首页链接功能
    function setupHomeLink() {
        homeLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 隐藏所有特殊页面
            novelSection.style.display = 'block';
            aboutSection.style.display = 'none';
            
            // 显示所有小说
            renderNovels(novelsData);
            
            // 滚动到顶部
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            // 清空搜索框
            searchInput.value = '';
        });
    }
    
    // 关于页面
    aboutLink.addEventListener('click', function(e) {
        e.preventDefault();
        novelSection.style.display = 'none';
        aboutSection.style.display = 'block';
        
        window.scrollTo({
            top: aboutSection.offsetTop - 20,
            behavior: 'smooth'
        });
    });
}

/**
 * 设置搜索功能
 */
function setupSearch() {
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        if (searchTerm === '') {
            renderNovels(novelsData);
            return;
        }
        
        const filteredNovels = novelsData.filter(novel => {
            return novel.title.toLowerCase().includes(searchTerm) ||
                   novel.description.toLowerCase().includes(searchTerm) ||
                   novel.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        });
        
        renderNovels(filteredNovels);
    });
}

/**
 * 设置模态框关闭事件
 */
function setupModalClose() {
    // 点击关闭按钮
    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            novelModal.style.display = 'none';
            fullscreenReader.style.display = 'none';
            clearRainEffect();
        });
    });
    
    // 点击模态框外部关闭
    window.addEventListener('click', function(e) {
        if (e.target === novelModal) {
            novelModal.style.display = 'none';
        }
        if (e.target === fullscreenReader) {
            fullscreenReader.style.display = 'none';
            clearRainEffect();
        }
    });
    
    // 按ESC键关闭
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && fullscreenReader.style.display === 'block') {
            fullscreenReader.style.display = 'none';
            clearRainEffect();
        }
    });
}

/**
 * 初始化阅读器控制
 */
function initReaderControls() {
    // 关闭阅读器
    document.getElementById('close-reader').addEventListener('click', function() {
        fullscreenReader.style.display = 'none';
        clearRainEffect();
    });
    
    // 返回目录
    document.getElementById('back-to-volumes').addEventListener('click', function() {
        fullscreenReader.style.display = 'none';
        clearRainEffect();
        showNovelDetails(currentNovel.id);
    });
    
    // 上一章
    document.getElementById('prev-chapter').addEventListener('click', function() {
        if (currentChapterIndex > 0) {
            const prevChapter = currentNovel.volumes[currentVolumeIndex].chapters[currentChapterIndex - 1];
            showChapterContent(
                currentNovel.title,
                currentNovel.volumes[currentVolumeIndex].title,
                prevChapter,
                currentChapterIndex - 1,
                currentVolumeIndex
            );
        }
    });
    
    // 下一章
    document.getElementById('next-chapter').addEventListener('click', function() {
        const currentVolume = currentNovel.volumes[currentVolumeIndex];
        if (currentChapterIndex < currentVolume.chapters.length - 1) {
            const nextChapter = currentVolume.chapters[currentChapterIndex + 1];
            showChapterContent(
                currentNovel.title,
                currentVolume.title,
                nextChapter,
                currentChapterIndex + 1,
                currentVolumeIndex
            );
        }
    });
}

// 新增下拉阅读功能
function initPullToRead() {
    const reader = document.getElementById('fullscreen-reader');
    let startY = 0;
    let currentY = 0;
    let isDragging = false;
    let currentScrollTop = 0;

    reader.addEventListener('touchstart', (e) => {
        currentScrollTop = window.scrollY;
        if (currentScrollTop === 0) {
            startY = e.touches[0].pageY;
            isDragging = true;
        }
    }, { passive: true });

    reader.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        
        currentY = e.touches[0].pageY;
        const deltaY = currentY - startY;
        
        // 只有在下拉时才处理
        if (deltaY > 0 && currentScrollTop === 0) {
            e.preventDefault();
            
            // 计算阻尼效果
            const dragPercent = Math.min(1, deltaY / window.innerHeight);
            const dragOffset = dragPercent * 100;
            
            // 应用视觉反馈
            document.getElementById('reader-content').style.transform = `translateY(${dragOffset}px)`;
            
            // 当下拉足够距离时加载上一章
            if (dragPercent > 0.3) {
                loadPreviousChapter();
                isDragging = false;
            }
        }
    }, { passive: false });

    reader.addEventListener('touchend', () => {
        if (!isDragging) return;
        
        // 恢复原位
        document.getElementById('reader-content').style.transform = 'translateY(0)';
        isDragging = false;
    }, { passive: true });
}

function loadPreviousChapter() {
    if (currentChapterIndex > 0) {
        const prevChapter = currentNovel.volumes[currentVolumeIndex].chapters[currentChapterIndex - 1];
        showChapterContent(
            currentNovel.title,
            currentNovel.volumes[currentVolumeIndex].title,
            prevChapter,
            currentChapterIndex - 1,
            currentVolumeIndex
        );
    } else {
        // 已经是第一章，回弹效果
        const readerContent = document.getElementById('reader-content');
        readerContent.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)';
        readerContent.style.transform = 'translateY(0)';
        
        setTimeout(() => {
            readerContent.style.transition = '';
        }, 500);
    }
}

// 简单的首页链接实现
function setupHomeLink() {
    homeLink.addEventListener('click', function(e) {
        e.preventDefault();
        location.reload(); // 直接刷新页面回到初始状态
    });
}

/**
 * 初始化Valine评论系统
 */
function initValine(novelTitle, volumeTitle, chapterTitle) {
    // 生成唯一ID（确保长度不超过50）
    const id = `${currentNovelId}-${currentVolumeIndex}-${currentChapterIndex}`.substring(0, 50);
    
    // 设置页面路径
    valineConfig.path = `/novel/${currentNovelId}/volume/${currentVolumeIndex}/chapter/${currentChapterIndex}`;
    
    // 如果Valine实例已存在，先销毁
    if (valineInstance) {
        const vcomments = document.getElementById('vcomments');
        vcomments.innerHTML = '';
    }
    
    // 初始化Valine
    valineInstance = new Valine({
        ...valineConfig,
        el: '#vcomments',
        path: valineConfig.path,
        placeholder: `欢迎评论《${novelTitle} - ${volumeTitle} - ${chapterTitle}》~ (支持Markdown语法)`
    });
}

/**
 * HTML转义函数
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

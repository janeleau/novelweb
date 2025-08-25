// 小说数据
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
                        content: `
                            <h3>No1.</h3>
                            <p>我老是问Y我的优点是什么，缺点是什么，从不厌烦。同居之前——</p>
                            <p>Y同学如实回答："肤白貌美，前凸后翘。小鸟依人，善解人意，软软的。时而温柔，时而可爱，时而活泼。"</p>
                            <p>同居以后——</p>
                            <p>"会做饭，会洗衣。"</p>
                            <p>"还有呢？"</p>
                            <p>"没了。"</p>
                            <p>......</p>
                            <p>你老婆如此贤惠聪明居然都看不到?</p>
                            <p>我觉得我做饭不好吃，Y同学不嫌弃我这要归功性格里不挑食的习惯。</p>
                            <p>"真的好吃吗？""反正比食堂好吃。"不愧是我老公，净说些我喜欢听的一些大实话。</p>
                            <p>衣服有洗衣机洗，有一次Y打算把一些不是当季穿的衣服洗了，我指着床单："床单也得要洗了，都三月了。"</p>
                            <p>他笑"是的啊。所以你为什么不洗？"我想，他忙的时候我多体谅他，有求必应。不过我执行力很差，不知道什么时候能做到。Y同学...直到我第三次延误火车他才知道原来真有人不出意外还是赶不到火车。</p>
                            <p>有一天我又来了兴致，问他我的缺点是什么。</p>
                            <p>Y生一反常态，说鄙人唯一的缺点是爱生气。</p>
                            <p>我装作很不解的样子：</p>
                            <p>"以前我问你喜欢我哪一点，你说哪里都喜欢。没什么理由就是喜欢。"</p>
                            <p>他说，那就是你变了。</p>
                            <p>我说，我没变。</p>
                            <p>他说，那就更严重了。</p>
                            <p>......</p>
                            <p>我翻到以前的微信聊天记录：</p>
                            <p>"没有什么理由就是喜欢，是发自内心的喜欢"</p>
                            <p>"可能你方方面面都是我喜欢你的理由。"</p>

                            <h3>No2.</h3>
                            <p>昨天晚上Y先生在床上威胁我，"你以前说过的我都记得"。</p>
                            <p>本来他光着膀子我就已经蠢蠢欲动了。我马上扑过去，缠住他的胸。</p>
                            <p>在我艰难的色诱下，他终于松口："你想想自己做过哪些承诺。"</p>
                
                            <p>Y每件事记得清清楚楚。他记得清楚却从来不肯说，让我猜。我说过很多话，但是记性不好，所以说过了就忘了,Y说不该记得的记得清清楚楚。</p>
                            </p>还没在一起那会儿，他说我过日子挺糊涂的，没想到这么早就被看穿了。枉费我天天装一个向上的三好女强人。况且他一说我莫名觉得理亏，好汉不吃眼前亏，打算放他一马，于是不再逼问他我的优点。</p>


                            <h3>No3.</h3>
                           <p>Y无论做什么都非常严谨认真。我们第一次爆发大规模争吵的原因仅仅是因为我没赶上火车，死活都不肯给我改签。</p>
                            <p>他说，没见过有人能算好时间还能延误上火车的。这种事在我身上从来没发生过。</p>
                            <p>我内心OS：延误火车对我来说是家常便饭。我要是有钱一点，延误飞机也不成问题。</p>
                            <p>但我还是捋他的毛，这肯定是最后一次了，我这个人最大的优点就是说到做到。</p>
                            <p>Y生后来才知道这都是骗人的，还逼问我到底隐瞒了他哪些事。我说想起来再讲，太多了我都不记得了......</p>
                            <p>终于，在最后一刻确定我是真的赶不上之后，给我退票了，重新买的下一趟车，但是硬卧变硬座。</p>
                            <p>怪我不知道火车48h之前才可以改签的。这也成为后来他嘲笑我缺乏常识的论据之一。</p>
                            <p>彼时我囊中羞涩，他说我寅吃卯粮。为了还信用卡我吃了好多顿泡面，坐火车一直都是绿皮硬座。他又心疼我，买的硬卧。</p>
                            <p>据他后来形容，我第一次告诉他我回家坐硬座的时候他整宿睡不好，后悔没给我买一张硬卧票。这人心里有什么事会失眠，我们在一起第一天晚上也整宿没睡。</p>
                            <p>这次又只能坐硬座，我安慰他说，我就是坐硬座的命。以后交通的价格降下来了，我就坐飞机。哈哈哈飞机我肯定不敢延误。我又骗了他......</p>


                            <h3>No4.</h3>
                            <p>Y每天离开实验室很晚，恨不得周末也泡在实验室里和实验室抱着睡吧。有次实验室人都走了，带着耳机给我打语音，打了半个小时，一个师弟回来了请教事情，又恢复了正经严肃的样子，连音色都变了。我目瞪口呆。这厮看着平时不显山不露水，居然切换得如此丝滑。对爸妈也是一副高冷的样子，从来报喜不报忧，我知道他担心父母忧虑远行。</p>
                            
<p>某天晚上Y同学从实验室回来兴致不错，心情很好，不像是和科研虐恋情深的样子。回来给我一个大大的拥抱，脱衣服直奔卫生间，洗澡哼着歌？平常说自己五音不全不亮嗓子的人才是我的老公。雷嗨bingo？</p>
                            <p>躺在床上我在想今儿什么事这么高兴。旁边Y同学休息好了，本来四仰八叉，转过来说："你求我"。</p>
                            <p>聪明如我，当然立马反应过来。</p>
                            <p>"小妞挺嚣张啊"，这明明是我的台词。</p>
                            <p>"我求你，来成全老子。"</p>
                            <p>严肃正经的Y同学已经被我带坏。</p>
                            <p>一去不返。</p>

                             <h3>No5.</h3>
                            <p>Y同学比我更有仪式感，我怀疑他就算不是遇到我也能待其他人一样好。我在感情上天生没有安全感，父母恩爱夫妻不疑什么样子我都想象不到。这是我十分想确定我在Y心目中的优缺点和他为什么喜欢我的原因，我一直认为我没什么可被他喜欢的。</p>
                            <p>Y的朋友经历爱情长跑之后都结婚了，而我的朋友经历爱情长跑后（八年以上）互删微信各自嫁娶层出不穷。</p>
                            <p>Y说你的朋友都不太正常。</p>
                            <p>......</p>
<p>我对Y的第一印象是聪明，冷静，脸上没表情。</p>
                            <p>Y天性高冷，生人勿近，刚恋爱那会送我一个镯子。</p>
                            <p>看他煞有仪式地帮我戴上，严肃、严谨、专注......我不由得升起一股对科研人员的敬意——Respect。</p>
                            <p>我心想这和电视剧里演的根本不一样！哪有什么浪漫......</p>
                            <p>接着Y把我拉过去，搂着肩，捏我的手指，在他学校旁边的小树林......</p>
                            <p>分别的时候，送我去地铁站，习惯性抓拍一张我离开的照片。</p>
                            <p>我提醒他：丑照丑照！我根本不上镜。</p>
                            <p>他说学校隔得远，他做科研忙，一周只能见一次。留着一个人在学校的时候可以看。</p>
                            <p>我后来在他手机里看到那是我在看手机的照片。</p>
                            <p>当时他发微信告诉我礼物里面还有一张纸条。</p>
                            <p>在地铁我打开看，上面写着：</p>
                            <p>"遇见你是我前半生最开心的事，我想用这份礼物表达在余生将你牢牢'圈住'，余生只疼爱你一人。"</p>
                            <p>2023年4月22日。</p>

<h3>No6.</h3>
                            <p>我不那么冒昧地觉得我在Y同学心里可能算是美女。毕竟他们专业女生屈指可数。有也追不到，我咯噔一下，好像搞得我很容易追到手一样，害我那时觉得我这个黄花大闺女闺中待字便宜了这小子。不过好在没有情史，甚合吾意。</p>
                            <p>高中时我那个感天动地的好闺蜜给我起绰号叫做"小眼"。高二的时候我在鼻头上长了个三胞胎，三个摸上去很硬的痘痘连成一体，挤出来血崩一地，后来感染导致皮肤增生，该长的地方不长全长到痘痘坑的隔壁了，几次激光都消不掉，放大了估计和月球表面相似度99%。</p>
                            <p>Y同学姓杨，我赐他名为杨贵妃。刚在一起时，QQ情侣空间里有个小问答是要说出对方三个优点。在我的私相授受下，Y坦言相告，知无不言又言无不尽。肤白貌美，前凸后翘，时而温柔时而可爱时而活泼，小鸟依人，善解人意。</p>
                            <p>我心花怒放，看不出来年纪轻轻竟然有这般见识前途无忧。或者爱妃太懂我了，朕从古至今蓝颜知己第一人非你莫属。当即打算大笔一就，诚实乃Y同学最大的优点。碍于刚开始确定关系，我还是谨慎地写上"没有缺点，全是优点"。在我后来不谦虚的时候，Y生却再也没说过这么靠谱的话了。</p>
                            <p>
                            <p>但是，我既不肤白又不貌美，前凸后翘更谈不上。虽然只要Y认为他的老婆长得跟仙女下凡似的，那到底长什么样都无伤大雅。但是主观终究会被客观改造......意淫是坏习惯，我得实事求是。"这个结论怎么得出来的。不会是自动加的滤镜吧"。</p>"你是我老婆，我怎么看你都是肤白貌美，前凸后翘。其他人我才没兴趣看。"</p>
                            <p>我说荷尔蒙的滤镜只能维持三个月，到了第四个月就会破掉。</p>
                            <p>周末出去约会，我羡慕他这双眼皮高鼻子，"以后的小孩要是像你就好了。"</p>
                            <p>"无所谓。只要性格不像你就好。"</p>
                            <p>......</p>
                            <p>三个月后，Y生留言"喜欢超过三个月之后就是爱了，你说我对你的喜欢不会超过三个月，但是我每天都比前一天更喜欢你。这就是爱吧。"</p>
                            <p>但是事实证明，这丫就是没见识。同居之后某天他突然侧过身捆住我，低下头突然开口："你是平胸"。还笑得不怀好意。</p>
                            <p>"啊呀呀"，我叫起来，"你终于说实话了"，一边扯着嗓子吼："你终于说出来了......你还是说出来了......"我力气小，用尽全力也破不了功。</p>
                            <p>"好歹我是你老婆"</p>
                            <p>听及，他伸出一只手，另外一只把我压着。"不对说错了。再来"，过会，"C"</p>
                            <p>我冲他喊："是B啊我是B……"</p>
                            <p>"以前你不是说和F差不多吗？"</p>
                            <p>"你肯定听错了，我说的明明是差好多"</p>
                            <p>我就是被Y"我不会说情话，说的全是真心话"的这种言论哄骗的。</p>

                           

                            <h3>No7.</h3>
                            
                                                        <p>某天下午Y先生干着家务，我不好意思地躺在床上看手机。我琢磨着Y也许具有和我同样的想法。</p>
                            <p>我跑过去摸Y胸口："扪心自问，你老婆漂亮吗？"</p>
                            <p>"漂亮"</p>
                            <p>"可爱吗？"</p>
                            <p>"可爱"</p>
                            <p>"那你老婆贤惠吗？"</p>
                            <p>"贤惠"</p>
                            <p>"你老婆懒吗？"</p>
                            <p>停顿了一秒，面不改色：</p>
                            <p>"勤快"</p>
                            <p>"？"</p>
                            <p>这个男人笑眯眯看着我。</p>
                            <p>"你这是哪门子扪心自问！"</p>
                            <p>"我还是有自知之明的。"</p>
                            <p>Y前俯后仰，"有自知之明就好有自知之明就好……"。</p>

                            <h3>No9.</h3>
                            <p>刚认识时Y读博，我考研到上海。后来疫情封城，下学期才见成。</p>
<p>老实说，Y先生是完美居家、事业、顾家级人才，简称三好男人。Y先生平静多年的人生被我打破了。不过我仍然对于Y先生在他的计划之中如此具有远见找了我作对象感觉十分之欣慰。毕竟，从来没有体验过变数的人生，多么无趣呀。至于后来......Y先生人生中最大的变数是鄙人。<p>
                 `
                    },
                    {
                        title: "第二章 初见皇帝",
                        content: "在太后的寿宴上，我第一次见到了他——当今的皇帝。他身着明黄色龙袍，眉宇间透着威严，却在看到我的瞬间，眼中闪过一丝我读不懂的情绪..."
                    },
                    {
                        title: "第三章 宫中的暗流",
                        content: "入宫不到一月，我便感受到了后宫中涌动的暗流。皇后表面和善，眼神却冰冷；其他妃嫔或明或暗地试探着我的底线。我知道，我必须尽快找到立足之地..."
                    }
                ]
            },
            {
                title: "第二卷：情愫",
                chapters: [
                    {
                        title: "第一章 御花园偶遇",
                        content: "那日我在御花园赏花，不期然遇见了独自散步的皇帝。他见到我时，眼中闪过一丝惊讶，随即露出了难得的笑容。我们聊起了诗词歌赋，竟发现彼此有着相似的喜好..."
                    },
                    {
                        title: "第二章 宫中的嫉妒",
                        content: "自从那次御花园相遇后，皇帝来我宫中的次数明显增多。这引起了其他妃嫔的不满，各种流言蜚语开始在宫中流传。我知道，真正的考验才刚刚开始..."
                    }
                ]
            },
            {
                title: "第三卷：危机",
                chapters: [
                    {
                        title: "第一章 皇后的警告",
                        content: "皇后终于按捺不住，亲自来到我的宫中。她表面上关心我的起居，言语间却处处暗示我不要太接近皇帝。我知道，这是她对我的正式警告..."
                    },
                    {
                        title: "第二章 阴谋",
                        content: "宫中突然传出有妃嫔怀孕的消息，而这个人竟是我宫中的侍女。更令人震惊的是，她声称孩子是皇帝的。我知道这是一个精心设计的陷阱，但我该如何证明自己的清白..."
                    },
                    {
                        title: "第三章 真相大白",
                        content: "经过一番调查，我终于找到了证据证明那侍女的孩子并非皇帝所出。然而，当我准备揭穿这一切时，却发现背后隐藏着一个更大的阴谋..."
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
                        content: "长安城的清晨，我——一个被判死刑的囚犯，被秘密带出了监狱。带我出来的是一名女捕快，她告诉我，长安城正面临一场前所未有的危机，而我是唯一能帮助她的人..."
                    },
                    {
                        title: "第二章 第一个线索",
                        content: "在长安城最繁华的东市，我们找到了第一个线索——一家突然关闭的香料铺。铺子里残留的奇怪气味让我想起了西域某种致命的毒药..."
                    }
                ]
            },
            {
                title: "第二卷：追捕",
                chapters: [
                    {
                        title: "第一章 地下密道",
                        content: "追查线索的过程中，我们意外发现了长安城地下纵横交错的密道网络。这些密道通向城中各处重要地点，显然是阴谋者精心准备的逃生路线..."
                    },
                    {
                        title: "第二章 敌人的真面目",
                        content: "当我们终于截获一名信使时，从他口中得知了一个惊人的消息：这次阴谋的主使者，竟然是..."
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
                        content: "那是一个风雪交加的夜晚，我从书院回家的路上，发现了一只受伤的白狐。它美丽的眼睛中闪烁着人类般的智慧光芒，让我无法弃之不顾..."
                    },
                    {
                        title: "第二章 狐女报恩",
                        content: "三天后的满月之夜，一位白衣女子出现在我的书房。她自称是我救下的白狐，前来报恩。从此，我的平凡生活被彻底改变..."
                    }
                ]
            },
            {
                title: "第二卷：纷争",
                chapters: [
                    {
                        title: "第一章 猎妖师",
                        content: "一位神秘的猎妖师来到小镇，他敏锐地察觉到了妖气，开始四处搜寻。我必须想办法保护她，但作为一个普通书生，我能做什么..."
                    },
                    {
                        title: "第二章 青丘的秘密",
                        content: "她终于向我坦白了自己的身份——她不是普通的狐妖，而是青丘狐族的公主。因为族内叛乱而流落人间，现在叛军派出的杀手已经追踪到了这里..."
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
    appId: '7VUQAAaWZARxazhDAA9DmIay-gzGzoHsz', // 请替换为你的LeanCloud App ID
    appKey: 'DznETOpf40sXQKeYrZNYYPs1', // 请替换为你的LeanCloud App Key
    placeholder: '欢迎评论~ (支持Markdown语法)',
    path: window.location.pathname,
    avatar: 'mp', // 头像样式
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
function showChapterContent(novelTitle, volumeTitle, chapter, chapterIndex, volumeIndex) {

    currentChapterIndex = chapterIndex;
    currentVolumeIndex = volumeIndex;

    
    // 设置全屏阅读器内容
    document.getElementById('reader-title').innerHTML = `
        ${novelTitle} <small>> ${volumeTitle} > ${chapter.title}</small>
    `;
    document.getElementById('reader-content').innerHTML = `
        <p>${chapter.content}</p>
    `;
    
    // 隐藏其他模态框，显示全屏阅读器
    novelModal.style.display = 'none';
    fullscreenReader.style.display = 'block';
    
    // 创建雨滴效果
    clearRainEffect();
    createReaderRain();
    
    // 更新导航按钮状态
    updateReaderNavButtons();
initPullToRead();
 
// 初始化Valine评论系统
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

console.log("加载汉化模块");

//1.汉化杂项
var cnItems = {
    _OTHER_: [],
    'Next monster': '下一个怪物',
    'Preparing game for you!': '为您准备游戏！',
    'Statistics': '统计',
    'Stay tuned!': '敬请关注！',
    'Unlocks': '解锁',
    'Credits': '鸣谢',
    'Gunshot': '机枪',
    'Lasergun': '激光枪',
    'Rockster': '罗克斯特',
    'Spikes': '尖刺',
    'Turrets': '炮塔',
    'Support my work on': '支持我的工作在',
    'Save & Load': '保存 & 加载',
    'Load from string': '加载存档代码',
    'Load from file': '从文件加载',
    'Import & Export': '导入 & 导出',
    'It\'s about time': '它是关于时间',
    'Manual save': '手动保存',
    'Music volume': '音乐音量',
    'Number notation': '数字符号',
    'Play my other games on': '玩我的其他游戏在',
    'Rebirth': '重生',
    'Reload save': '重新加载存档',
    'Back to menu': '返回菜单',
    'Bally': '拇指',
    'Humble numbers': '不起眼的数字',
    'Monsters': '怪物',
    'Play time': '游戏时长',
    'Total click': '总计点击',
    'Click Hero': '点击英雄',
    'Show me!': '展示给我看!',
    'Selected': '已选择',
    'Spawns very fast': '生产非常快',
    'Unlocked': '已解锁',
    'Wrong place': '错误的地方',
    '- Build': '- 建造',
    '- Rotate': '- 旋转',
    '- Remove': '- 移除',
    'Build Mode': '建造模式',
    'Base Stats': '基础属性',
    'Attack range': '攻击范围',
    'Bullet speed': '子弹速度',
    'Damage': '伤害',
    'Limit reached': '达到限制',
    'Reload duration': '装弹时间',
    'Rotation speed': '旋转速度',
    'Speed': '速度',
    'Total': '总计',
    'Deals enough': '造成足够',
    'Buildings': '建筑',
    'Error': '错误',
    'Reload': '装弹',
    'RP made': 'RP制造',
    'Shoots very': '射击非常',
    'Spawns very': '生产非常',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    'Special Stats': '特殊属性',
    'Spawn duration': '生产持续时间',
    'Shield': '护盾',
    'Rotation': '转动',
    'Reward': '奖励',
    'Range': '范围',
    'Move speed': '移动速度',
    'Max count': '最大数量',
    'Instant spawn chance': '即时重生机会',
    'Health': '生命值',
    'Duration': '持续时间',
    'Count': '数量',
    'Chance': '几率',
    'Base stats upgrades': '基础属性升级',
    'You are playing since': '从你开始玩的游戏时间',
    'menu!': '菜单!',
    'LEFT MOUSE BUTTON!': '鼠标左键！',
    'Just make them disappear, that\'s all': '只是让它们消失，仅此而已',
    'in the main menu!': '在主菜单中！',
    'Ignores shield': '忽略盾牌',
    'I\'l try!': '我试试看！',
    'Hey, you have a buddy now! Turrets will help you': '嘿，你现在有朋友了!炮塔会帮助你',
    'Has not much health': '没有多少生命值',
    'Has a very small range': '有一个很小的范围内',
    'Has a ton of health': '有成吨的生命值',
    'Has a decent range': '有一个不错的范围',
    'First turret unlocked!': '第一个炮塔已解锁！',
    'First monster unlocked!': '第一个怪物已解锁！',
    'Enabled': '已启用',
    'Disabled': '已禁用',
    'Deals enough damage': '造成足够的伤害',
    'Can rotate': '可以旋转',
    'Can stun monsters': '可以使怪物昏迷',
    'Can give a lot of coins': '可以给很多硬币',
    'Can move really fast': '可以快速移动',
    'Can deal health-based damage': '可以造成基于生命值的伤害',
    'Build mode': '建造模式',
    'At first, to do this, use your main super power...': '首先，要执行此操作，请使用您的主要超级力量...',
    'are the main way to earn money!': '是赚钱的主要方式！',
    'You just got your first monster! Monsters here are': '您刚刚得到了第一个怪物！ 这里的怪物是',
    'Very slow spawn & movement': '生成和移动速度非常慢',
    'to defend... Wait, it\'s idle game, nevermind!': '捍卫...等等，这是放置游戏，没关系！',
    'To build the turret, use': '要建造炮塔，使用',
    'Shoots very accurately': '射得非常准',
    'Reloads & rotates really fast': '重新加载&旋转非常快',
    'Join community and follow the news on': '加入社区并关注新闻在',
    'Sounds volume': '声音音量',
    'Screen': '屏幕',
    'Save to file': '保存到文件',
    'Save to clipboard': '复制到剪切板',
    'Buy Bally to unlock': '购买去解锁',
    'Settings': '设置',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    'Version:':'版本:',
    "(December": "(十二月",
    "• ": "• ",
    "Total Coins": "总计硬币",
    "Total RP made": "总计制作的RP",
    "Total RP": "总计RP",
    "Total spawned": "总计生产",
    "You are playing since": "你开始玩的时间是 ",
    'Total click damage': '总计点击伤害',
    "Play time: ": "游戏时长: ",
    "Monsters clicked": "点击的怪物",
    "Coins made": "制造的硬币",
    "Click kills": "点击杀死",
    "Damage dealt": "造成的伤害",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^\s*$/,
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^You made it (\d+) times$/, '你制作了它 $1 次'],
    [/^Collect (.+) Coins total to unlock$/, '总计收集 $1 硬币以解锁'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^(\d+)m (\d+)s ago$/, '$1分钟 $2秒 前'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);

//2.采集新词
//20190320@JAR

var cnItem = function () {

    //传参是否非空字串
    if (!arguments[0]) return;

    //检验传参是否对象
    let text = arguments[0],
        s = '';
    if (typeof (text) != "string")
        return text;
    else
        s = arguments[0].charCodeAt();

    //检验传参是否英文
    // if (
    //     s < 65 || (s > 90 && s < 97) || (s > 122)
    //
    // ) return text;

    //处理前缀
    let text_prefix = "";
    for(let prefix in cnPrefix){
        if (text.substr(0,prefix.length) === prefix){
            text_prefix = cnPrefix[prefix];
            text = text.substr(prefix.length);
        }
    }
    //处理后缀
    let text_postfix = "";
    for(let postfix in cnPostfix){
        if (text.substr(-postfix.length) === postfix){
            text_postfix = cnPostfix[postfix];
            text = text.substr(0,text.length-postfix.length);
        }
    }
    //处理正则后缀
    let text_reg_exclude_postfix = "";
    for(let reg of cnExcludePostfix){
        let result = text.match(reg);
        if (result){
            text_reg_exclude_postfix = result[0];
            text = text.substr(0, text.length-text_reg_exclude_postfix.length);
        }
    }

    //检验字典是否可存
    if (!cnItems._OTHER_) cnItems._OTHER_ = [];

    //检查是否排除
    for(let reg of cnExcludeWhole){
        if (reg.test(text)){
            return text_prefix + text + text_reg_exclude_postfix + text_postfix;
        }
    }
for (let [key, value] of cnRegReplace.entries()) {
        if (key.test(text)) {
            return text_prefix + text.replace(key, value) + text_reg_exclude_postfix + text_postfix;
        }
    }
    //遍历尝试匹配
    for (let i in cnItems) {
        //字典已有词汇或译文、且译文不为空，则返回译文
        if (
            text == i || text == cnItems[i] &&
            cnItems[i] != ''
        )
            return text_prefix + cnItems[i] + text_reg_exclude_postfix + text_postfix;
    }

    //调整收录的词条，0=收录原文，1=收录去除前后缀的文本
    let save_cfg = 1;
    let save_text = save_cfg?text:arguments[0]
    //遍历生词表是否收录
    for (
        let i = 0; i < cnItems._OTHER_.length; i++
    ) {
        //已收录则直接返回
        if (save_text == cnItems._OTHER_[i])
            return arguments[0];
    }

    if (cnItems._OTHER_.length < 500){
        //未收录则保存
        cnItems._OTHER_.push(save_text);
        cnItems._OTHER_.sort(
            function (a, b) {
                return a.localeCompare(b)
            }
        );
    }

    /*
        //开启生词打印
        //console.log(
            '有需要汉化的英文：', text
        );
    */

    //返回生词字串
    return arguments[0];
};

document.createElement = function(name,opt){
	if(name=='canvas'){
		let canvasElement = document.__proto__.createElement.bind(this)(name,opt);
		canvasElement.getContext('2d').fillText = function(text,x,y,max){
			return this.__proto__.fillText.bind(this)(cnItem(text),x,y,max);
		}
		canvasElement.getContext('2d').strokeText = function(text,x,y,max){
			return this.__proto__.strokeText.bind(this)(cnItem(text),x,y,max);
		}
		canvasElement.getContext('2d').measureText = function(text){
			return this.__proto__.measureText.bind(this)(cnItem(text));
		}
		return canvasElement;
	}
	else
		return document.__proto__.createElement.bind(this)(name,opt);
}
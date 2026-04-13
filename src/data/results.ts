export interface ResultType {
  id: string;
  name: string;
  title: string;
  description: string;
  weapon: string;
  drop: string;
  image?: string; // 添加图片路径字段
}

export const resultsData: Record<string, ResultType> = {
  ASLI: {
    id: 'ASLI',
    name: '独狼狙神',
    title: '千里之外，一枪毙命',
    description: '你是一个自信且致命的独狼。喜欢孤军奋战，主动寻找猎物，在远距离给敌人带来压迫感。你不需要队友的保护，你的枪法就是最好的防守。',
    weapon: 'AWM / Kar98k + 高倍镜',
    drop: '高资源打野点 (如研究所、防空洞)',
    image: '/photos/独狼狙神.png' // 假设图片格式为 png，如果是 jpg 请自行修改。另外请确保 photos 文件夹位于项目的 public 目录中
  },
  ASLF: {
    id: 'ASLF',
    name: '隐形杀手',
    title: '耐心是最好的猎枪',
    description: '你同样喜欢单兵作战，但更加沉稳。你擅长远距离架枪，默默跟随圈型寻找完美时机，不到万不得已不会暴露自己的位置。',
    weapon: 'M24 / SKS + 消音器',
    drop: '地图边缘野区'
  },
  ASQI: {
    id: 'ASQI',
    name: '嗜血狂魔',
    title: '不是在打架，就是在去打架的路上',
    description: '单兵作战能力极强，热爱落地钢枪，冲脸不服就干。你享受近距离贴脸秒杀的快感，听到枪声就像听到了冲锋号。',
    weapon: 'M416 + 猛男枪 (Beryl M762)',
    drop: 'P城 / 机场 / 豪宅 (跳伞就干)'
  },
  ASQF: {
    id: 'ASQF',
    name: '老六刺客',
    title: '你看不到我，但我能看到你',
    description: '你喜欢独来独往，擅长近战爆发，但不喜欢刚正面。你更喜欢蹲点阴人，在敌人最意想不到的地方给他们致命一击。',
    weapon: 'S686 / UZI + 燃烧瓶',
    drop: '城楼或桥头卡点'
  },
  ACLI: {
    id: 'ACLI',
    name: '团队之眼',
    title: '我看到他们了，跟我上',
    description: '你是团队的指挥兼狙击手，不仅能远距离压制敌人，还能敏锐地察觉战机，主动带领队伍发难。',
    weapon: 'Mini14 / SKS + 突击步枪',
    drop: 'R城 / Y城 (资源适中，易于转移)'
  },
  ACLF: {
    id: 'ACLF',
    name: '火力支援',
    title: '你们冲，我架枪',
    description: '团队的中坚力量。你不争功，默默在后方远距离架枪，为冲锋的队友提供最坚实的火力保护。',
    weapon: '大菠萝 (M249) / 连狙',
    drop: '随队跳伞'
  },
  ACQI: {
    id: 'ACQI',
    name: '突击队长',
    title: '冲冲冲！我顶在最前面！',
    description: '你是带头冲锋的猛将，撕破敌人防线的尖刀。你享受和队友并肩作战的快感，总是第一个冲进敌阵。',
    weapon: '满配 M416 + 冲锋枪',
    drop: '资源丰富的刚枪城'
  },
  ACQF: {
    id: 'ACQF',
    name: '近战保镖',
    title: '谁也别想动我兄弟',
    description: '你紧跟队友，保护后排，近战不虚任何人。当有敌人试图切后排时，你就是他们无法逾越的高墙。',
    weapon: 'Vector / 喷子 + 步枪',
    drop: '配合队长选点'
  },
  TSLI: {
    id: 'TSLI',
    name: '战术大师',
    title: '一切都在我的计算之中',
    description: '你喜欢独自行动，但步步为营。你不轻易开枪，一旦开枪，必然是通过远距离压制和走位将敌人玩弄于股掌之间。',
    weapon: '栓狙 + 步枪',
    drop: '高地或易守难攻的房区'
  },
  TSLF: {
    id: 'TSLF',
    name: '求生专家',
    title: '活着才有输出',
    description: '孤狼苟分之神。你把生存放在第一位，利用远距离武器偶尔开两枪摸摸情况，只要能活进决赛圈，一切都值得。',
    weapon: '什么苟带什么，多带药',
    drop: '地图最偏远的角落'
  },
  TSQI: {
    id: 'TSQI',
    name: '攻楼奇兵',
    title: '房区就是我的主场',
    description: '虽然是战术型玩家，但你在近战攻防中充满心机。你战术动作丰富，利用投掷物和身法，主动清理一切靠近的威胁。',
    weapon: '大量手雷/闪光弹 + 步枪',
    drop: '错综复杂的房区'
  },
  TSQF: {
    id: 'TSQF',
    name: '终极老六',
    title: '我是一棵树，我是一块石头',
    description: '不开枪不露头，近身一击致命，绝地求生真正的忍者。你有着惊人的耐心，可以趴在草丛里半个小时只为最终的绝杀。',
    weapon: '消音冲锋枪 / 喷子',
    drop: '趴在草丛里就行'
  },
  TCLI: {
    id: 'TCLI',
    name: '运筹帷幄',
    title: '听我指挥，这把吃鸡',
    description: '团队的大脑。你擅长布置战术，分析圈型，利用远距离优势消耗敌人，带领团队走向胜利。',
    weapon: '全能搭配，视情况而定',
    drop: '中心区域，便于控制整局节奏'
  },
  TCLF: {
    id: 'TCLF',
    name: '战术后勤',
    title: '三级甲给你，医疗包还有吗？',
    description: '团队的医疗兵/司机。你无私奉献，默默带枪架远点，背包里装满了队友需要的物资。有你在，团队就充满了安全感。',
    weapon: '不挑枪，能打就行，多带物资',
    drop: '安全发育点'
  },
  TCQI: {
    id: 'TCQI',
    name: '稳健清道夫',
    title: '步步为营，清理死角',
    description: '你协同团队作战，不盲目冲锋，而是稳扎稳打地推进。你擅长利用掩体，清理近点的敌人，是团队推进中最稳的一环。',
    weapon: '稳定步枪 + 冲锋枪',
    drop: '稳妥的城区边缘'
  },
  TCQF: {
    id: 'TCQF',
    name: '全能辅助',
    title: '我来补枪，我来封烟',
    description: '你紧跟队伍，不轻易暴露自己，随时准备在近战中支援队友。你是最好的绿叶，补枪、封烟、拉人，样样精通。',
    weapon: '步枪 + 连狙',
    drop: '跟随大部队'
  }
};

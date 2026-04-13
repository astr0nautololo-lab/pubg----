export interface OptionType {
  text: string;
  effect: Record<string, number>; // e.g., { A: 1, Q: 1 }
}

export interface QuestionType {
  id: number;
  text: string;
  options: OptionType[];
}

export const questionsData: QuestionType[] = [
  {
    id: 1,
    text: "落地P城，听见隔壁房子有脚步声，你会？",
    options: [
      { text: "拿上喷子直接冲！", effect: { A: 1, Q: 1, I: 1 } },
      { text: "卡视野观察，等他出来", effect: { T: 1, Q: 1, F: 1 } }
    ]
  },
  {
    id: 2,
    text: "毒圈刷新，你们在圈外，只有一辆蹦蹦，你会？",
    options: [
      { text: "我来开车，带兄弟进圈！", effect: { I: 1, C: 1 } },
      { text: "兄弟你开，我负责看后面", effect: { F: 1, C: 1 } },
      { text: "你们先走，我找别的车", effect: { S: 1 } }
    ]
  },
  {
    id: 3,
    text: "捡到一个空投，里面是AWM和吉利服，你会？",
    options: [
      { text: "自己穿上，找高点架枪", effect: { L: 1, S: 1 } },
      { text: "把AWM给队里枪法最好的兄弟", effect: { C: 1 } }
    ]
  },
  {
    id: 4,
    text: "决赛圈只剩3个人，你听见另外两个人在火拼，你会？",
    options: [
      { text: "摸过去劝架，直接收割！", effect: { A: 1, Q: 1 } },
      { text: "找掩体趴好，等他们打完再出手", effect: { T: 1, F: 1 } }
    ]
  },
  {
    id: 5,
    text: "看到前方有一队人在野外跑毒，你会？",
    options: [
      { text: "开镜直接抽靶，不能放过", effect: { A: 1, L: 1, I: 1 } },
      { text: "报点给队友，等大家一起开火", effect: { C: 1, T: 1 } }
    ]
  },
  {
    id: 6,
    text: "队友倒地，敌人在不远处架枪，你会？",
    options: [
      { text: "封烟，强行拉起队友", effect: { C: 1, F: 1 } },
      { text: "先拉枪线把架枪的人秒了再救", effect: { A: 1, I: 1, S: 1 } }
    ]
  },
  {
    id: 7,
    text: "包里空间有限，你会优先带什么？",
    options: [
      { text: "更多的子弹和投掷物，准备打架", effect: { A: 1, I: 1 } },
      { text: "更多的急救包和饮料，保证生存", effect: { T: 1 } }
    ]
  },
  {
    id: 8,
    text: "队伍需要一个人去探点，你会？",
    options: [
      { text: "义不容辞，我就是突破手", effect: { I: 1, A: 1 } },
      { text: "等队长安排，我负责架枪", effect: { F: 1, L: 1 } }
    ]
  },
  {
    id: 9,
    text: "拿到八倍镜，你会装在什么枪上？",
    options: [
      { text: "拴狙 (Kar98k/M24)，追求一枪爆头", effect: { L: 1, S: 1 } },
      { text: "连狙 (SKS/Mini)，提供持续火力压制", effect: { L: 1, C: 1 } }
    ]
  },
  {
    id: 10,
    text: "房子里可能有老六，怎么攻楼？",
    options: [
      { text: "捏一颗瞬爆雷直接冲", effect: { A: 1, Q: 1, I: 1 } },
      { text: "先扔闪光，再卡视角慢慢排查", effect: { T: 1, Q: 1 } }
    ]
  },
  {
    id: 11,
    text: "你的常用枪械组合是？",
    options: [
      { text: "步枪 + 冲锋枪/喷子，近战无敌", effect: { Q: 1, A: 1 } },
      { text: "步枪 + 狙击枪，远近皆可", effect: { L: 1, T: 1 } }
    ]
  },
  {
    id: 12,
    text: "这局游戏你的目标是？",
    options: [
      { text: "杀穿全场，人头最重要！", effect: { A: 1, I: 1 } },
      { text: "苟到吃鸡，吃鸡才是王道！", effect: { T: 1, F: 1 } }
    ]
<<<<<<< HEAD
  },
  {
    id: 13,
    text: "你是选择落地钢枪还是跳野区发育？",
    options: [
      { text: "落地钢枪，不服就干！", effect: { A: 1, I: 1, Q: 1 } },
      { text: "跳野区发育，稳扎稳打才是王道", effect: { T: 1, F: 1 } }
    ]
=======
>>>>>>> 9c1d501aa433e9acdb4b855566703dc271a55e18
  }
];

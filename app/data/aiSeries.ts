export type AssetItem = {
  src: string;
  alt: string;
};

export type AssetGroup = {
  key: string;
  label: string;
  items: AssetItem[];
};

export type Episode = {
  number: string;
  title: string;
  bilibiliUrl: string;
  poster?: AssetItem;
};

export type AIDramaProject = {
  slug: string;
  title: string;
  cover: AssetItem | null;
  episodeLayout?: 'landscape' | 'portrait';
  episodes: Episode[];
  assetGroups: AssetGroup[];
};

export type TVCProject = {
  slug: string;
  title: string;
  cover: AssetItem | null;
  bilibiliUrl: string;
  assetGroups: AssetGroup[];
};

export type ShortVideoProject = {
  slug: string;
  title: string;
  videoSrc: string;
  bilibiliUrl: string;
  format: 'portrait' | 'landscape';
  expectedPath: string;
  poster: AssetItem | null;
  assetGroups?: AssetGroup[];
};

const dramaAssetGroups = (): AssetGroup[] => [
  { key: 'characters', label: 'CHARACTERS / 角色', items: [] },
  { key: 'environments', label: 'ENVIRONMENTS / 场景', items: [] },
  { key: 'props', label: 'PROPS / 道具', items: [] },
];

const tvcAssetGroups = (): AssetGroup[] => [
  { key: 'key-visual', label: 'KEY VISUAL / 主视觉', items: [] },
  { key: 'product', label: 'PRODUCT / 产品', items: [] },
  { key: 'character', label: 'CHARACTER / 角色', items: [] },
  { key: 'environment', label: 'ENVIRONMENT / 场景', items: [] },
  { key: 'storyboard', label: 'STORYBOARD / 分镜', items: [] },
];

export const aiDramaProjects: AIDramaProject[] = [
  {
    slug: 'border-king',
    title: '边军之王',
    cover: { src: '/works/ai-series/drama/border-king/cover/project-cover.webp', alt: '《边军之王》古代边关军营项目封面' },
    episodes: [
      { number: 'EP.03', title: '第三集', bilibiliUrl: 'https://www.bilibili.com/video/BV1si8b6KEGr/', poster: { src: '/works/ai-series/drama/border-king/posters/ep-03.webp', alt: '《边军之王》第三集播放封面' } },
      { number: 'EP.04', title: '第四集', bilibiliUrl: 'https://www.bilibili.com/video/BV1si8b6KE6V/', poster: { src: '/works/ai-series/drama/border-king/posters/ep-04.webp', alt: '《边军之王》第四集播放封面' } },
    ],
    assetGroups: [
      {
        key: 'characters',
        label: 'CHARACTERS / 角色',
        items: [
          { src: '/works/ai-series/drama/border-king/characters/zhou-qi-design.webp', alt: '周起角色设定图' },
          { src: '/works/ai-series/drama/border-king/characters/han-commander.webp', alt: '韩总兵角色设定图' },
          { src: '/works/ai-series/drama/border-king/characters/prince.webp', alt: '王爷角色设定图' },
          { src: '/works/ai-series/drama/border-king/characters/heir-half-body.webp', alt: '世子白底半身图' },
          { src: '/works/ai-series/drama/border-king/characters/heir-full-body.webp', alt: '世子白底全身正面图' },
          { src: '/works/ai-series/drama/border-king/characters/heir-expressions.webp', alt: '世子表情设定图' },
          { src: '/works/ai-series/drama/border-king/characters/veteran-spear-ground.webp', alt: '胖老兵枪杵地动作图' },
          { src: '/works/ai-series/drama/border-king/characters/veteran-with-spear.webp', alt: '胖老兵持枪图' },
          { src: '/works/ai-series/drama/border-king/characters/veteran-shout.webp', alt: '胖老兵怒吼表情图' },
          { src: '/works/ai-series/drama/border-king/characters/veteran-full-body.webp', alt: '胖老兵全身图' },
          { src: '/works/ai-series/drama/border-king/characters/veteran-foreground-position.webp', alt: '胖老兵群像前景站位图' },
        ],
      },
      {
        key: 'environments',
        label: 'ENVIRONMENTS / 场景',
        items: [
          { src: '/works/ai-series/drama/border-king/environments/training-ground-from-platform.webp', alt: '从高台看校场' },
          { src: '/works/ai-series/drama/border-king/environments/platform-from-training-ground.webp', alt: '从校场看高台' },
          { src: '/works/ai-series/drama/border-king/environments/tiger-camp-formation.webp', alt: '虎啸营阵地方向' },
          { src: '/works/ai-series/drama/border-king/environments/soldier-formation-zone.webp', alt: '校场一侧士卒列阵区' },
          { src: '/works/ai-series/drama/border-king/environments/crossbow-on-desk.webp', alt: '案面连弩展示视角' },
          { src: '/works/ai-series/drama/border-king/environments/tent-entrance-view.webp', alt: '从周起进入帐中的视角' },
          { src: '/works/ai-series/drama/border-king/environments/heir-at-desk.webp', alt: '世子坐案前视角' },
          { src: '/works/ai-series/drama/border-king/environments/tent-wide-view.webp', alt: '帐内大全景' },
          { src: '/works/ai-series/drama/border-king/environments/tent-candle-closeup.webp', alt: '帐内烛火氛围近景' },
          { src: '/works/ai-series/drama/border-king/environments/desk-closeup.webp', alt: '桌案近景' },
        ],
      },
      {
        key: 'props',
        label: 'PROPS / 道具',
        items: [
          { src: '/works/ai-series/drama/border-king/props/crossbow-structure-closeup.webp', alt: '连弩近景结构特写' },
          { src: '/works/ai-series/drama/border-king/props/military-flags.webp', alt: '军旗设定图' },
          { src: '/works/ai-series/drama/border-king/props/crossbow-45-degree.webp', alt: '连弩45度展示图' },
          { src: '/works/ai-series/drama/border-king/props/crossbow-side.webp', alt: '连弩侧面图' },
          { src: '/works/ai-series/drama/border-king/props/crossbow-firing.webp', alt: '连弩发射状态' },
          { src: '/works/ai-series/drama/border-king/props/crossbow-front.webp', alt: '连弩正面图' },
          { src: '/works/ai-series/drama/border-king/props/crossbow-loaded.webp', alt: '连弩装箭状态' },
          { src: '/works/ai-series/drama/border-king/props/silver-and-gambling.webp', alt: '赏银与赌钱道具' },
          { src: '/works/ai-series/drama/border-king/props/crossbow-handheld.webp', alt: '手持连弩展示图' },
          { src: '/works/ai-series/drama/border-king/props/drawing-lots-box.webp', alt: '抽签盒子设定图' },
        ],
      },
    ],
  },
  {
    slug: 'years-in-bloom',
    title: '岁月成章，她把人生写成春天',
    cover: { src: '/works/ai-series/drama/years-in-bloom/cover/project-cover.webp', alt: '《岁月成章》现实家庭情感项目封面' },
    episodeLayout: 'portrait',
    episodes: [
      { number: 'EP.01', title: '第一集', bilibiliUrl: 'https://www.bilibili.com/video/BV1sQ8x6bEB8/', poster: { src: '/works/ai-series/drama/years-in-bloom/posters/ep-01.webp', alt: '《岁月成章》第一集播放封面' } },
      { number: 'EP.02', title: '第二集', bilibiliUrl: 'https://www.bilibili.com/video/BV1NQ8x6bEu7/', poster: { src: '/works/ai-series/drama/years-in-bloom/posters/ep-02.webp', alt: '《岁月成章》第二集播放封面' } },
    ],
    assetGroups: [
      {
        key: 'characters',
        label: 'CHARACTERS / 角色',
        items: [
          { src: '/works/ai-series/drama/years-in-bloom/characters/gu-father-retired.webp', alt: '顾父退休老人造型' },
          { src: '/works/ai-series/drama/years-in-bloom/characters/gu-father-expressions.webp', alt: '顾父表情九宫格' },
          { src: '/works/ai-series/drama/years-in-bloom/characters/gu-father-cafe-look.webp', alt: '顾父咖啡馆造型' },
          { src: '/works/ai-series/drama/years-in-bloom/characters/gu-father-turnaround.webp', alt: '顾父三视图' },
          { src: '/works/ai-series/drama/years-in-bloom/characters/shen-qinglan-full-body.webp', alt: '沈清岚白底全身正面照' },
          { src: '/works/ai-series/drama/years-in-bloom/characters/shen-qinglan-expressions.webp', alt: '沈清岚表情设定图' },
          { src: '/works/ai-series/drama/years-in-bloom/characters/shen-qinglan-cafe-look.webp', alt: '沈清岚咖啡馆造型' },
          { src: '/works/ai-series/drama/years-in-bloom/characters/shen-qinglan-turnaround.webp', alt: '沈清岚三视图' },
          { src: '/works/ai-series/drama/years-in-bloom/characters/shen-zhiyuan-half-body.webp', alt: '沈志远半身造型' },
          { src: '/works/ai-series/drama/years-in-bloom/characters/shen-zhiyuan-expressions.webp', alt: '沈志远表情设定图' },
        ],
      },
      {
        key: 'environments',
        label: 'ENVIRONMENTS / 场景',
        items: [
          { src: '/works/ai-series/drama/years-in-bloom/environments/kitchen-area.webp', alt: '厨房区域' },
          { src: '/works/ai-series/drama/years-in-bloom/environments/packing-by-bed.webp', alt: '床边收拾行李视角' },
          { src: '/works/ai-series/drama/years-in-bloom/environments/bedroom-door-view.webp', alt: '房门视角' },
          { src: '/works/ai-series/drama/years-in-bloom/environments/gu-family-living-room-wide.webp', alt: '顾家客厅大全景' },
          { src: '/works/ai-series/drama/years-in-bloom/environments/entry-door-view.webp', alt: '入户门视角' },
          { src: '/works/ai-series/drama/years-in-bloom/environments/sofa-area.webp', alt: '沙发区域' },
          { src: '/works/ai-series/drama/years-in-bloom/environments/bedroom-wide.webp', alt: '卧室大全景' },
          { src: '/works/ai-series/drama/years-in-bloom/environments/agreement-table-area.webp', alt: '协议桌面区域' },
        ],
      },
      {
        key: 'props',
        label: 'PROPS / 道具',
        items: [
          { src: '/works/ai-series/drama/years-in-bloom/props/roommate-agreement.webp', alt: '同住规则协议' },
          { src: '/works/ai-series/drama/years-in-bloom/props/marriage-contract.webp', alt: '婚姻协议合同文件' },
          { src: '/works/ai-series/drama/years-in-bloom/props/prenuptial-property-agreement.webp', alt: '婚前财产公证文件' },
          { src: '/works/ai-series/drama/years-in-bloom/props/bank-card.webp', alt: '银行卡道具' },
        ],
      },
    ],
  },
  {
    slug: 'love-and-regret',
    title: 'LOVE AND REGRET',
    cover: { src: '/works/ai-series/drama/love-and-regret/cover/project-cover.webp', alt: 'LOVE AND REGRET 英伦复古家庭戏剧项目封面' },
    episodeLayout: 'portrait',
    episodes: [
      { number: 'EP.06', title: 'Episode Six', bilibiliUrl: 'https://www.bilibili.com/video/BV1si8b6KEVH/', poster: { src: '/works/ai-series/drama/love-and-regret/posters/ep-06.webp', alt: 'LOVE AND REGRET Episode Six 播放封面' } },
      { number: 'EP.07', title: 'Episode Seven', bilibiliUrl: 'https://www.bilibili.com/video/BV1si8b6KEuw/', poster: { src: '/works/ai-series/drama/love-and-regret/posters/ep-07.webp', alt: 'LOVE AND REGRET Episode Seven 播放封面' } },
    ],
    assetGroups: [
      {
        key: 'characters',
        label: 'CHARACTERS / 角色',
        items: [
          { src: '/works/ai-series/drama/love-and-regret/characters/evelyn-hall-look.webp', alt: 'Evelyn 礼堂造型' },
          { src: '/works/ai-series/drama/love-and-regret/characters/evelyn-hall-closeup.webp', alt: 'Evelyn 礼堂造型面部近景' },
          { src: '/works/ai-series/drama/love-and-regret/characters/evelyn-daily-look.webp', alt: 'Evelyn 日常造型' },
          { src: '/works/ai-series/drama/love-and-regret/characters/evelyn-daily-turnaround.webp', alt: 'Evelyn 日常造型三视图' },
          { src: '/works/ai-series/drama/love-and-regret/characters/arthur-character-sheet.webp', alt: 'Arthur 角色设定图' },
          { src: '/works/ai-series/drama/love-and-regret/characters/ella-closeup.webp', alt: 'Ella 面部近景' },
          { src: '/works/ai-series/drama/love-and-regret/characters/ella-holding-composition.webp', alt: 'Ella 手持作文状态' },
          { src: '/works/ai-series/drama/love-and-regret/characters/ella-school-uniform.webp', alt: 'Ella 校服造型' },
          { src: '/works/ai-series/drama/love-and-regret/characters/ella-turnaround.webp', alt: 'Ella 三视图' },
        ],
      },
      {
        key: 'environments',
        label: 'ENVIRONMENTS / 场景',
        items: [
          { src: '/works/ai-series/drama/love-and-regret/environments/evelyn-home.webp', alt: 'Evelyn 家居场景设定' },
          { src: '/works/ai-series/drama/love-and-regret/environments/evelyn-seat-area.webp', alt: 'Evelyn 所在座位区域' },
          { src: '/works/ai-series/drama/love-and-regret/environments/evelyn-bedroom.webp', alt: 'Evelyn 卧室' },
          { src: '/works/ai-series/drama/love-and-regret/environments/city-street-center.webp', alt: '城市街道正面视角' },
          { src: '/works/ai-series/drama/love-and-regret/environments/city-street-right.webp', alt: '城市街道右侧视角' },
          { src: '/works/ai-series/drama/love-and-regret/environments/city-street-left.webp', alt: '城市街道左侧视角' },
          { src: '/works/ai-series/drama/love-and-regret/environments/auditorium-stage-view.webp', alt: '从观众席看舞台' },
          { src: '/works/ai-series/drama/love-and-regret/environments/stage-audience-view.webp', alt: '从舞台看观众席' },
          { src: '/works/ai-series/drama/love-and-regret/environments/auditorium-side-view.webp', alt: '观众席侧面视角' },
          { src: '/works/ai-series/drama/love-and-regret/environments/auditorium-rear-door-view.webp', alt: '礼堂后门视角' },
          { src: '/works/ai-series/drama/love-and-regret/environments/auditorium-front-wide.webp', alt: '礼堂正面大全景' },
          { src: '/works/ai-series/drama/love-and-regret/environments/stage-podium-closeup.webp', alt: '舞台讲台近景' },
        ],
      },
      {
        key: 'props',
        label: 'PROPS / 道具',
        items: [
          { src: '/works/ai-series/drama/love-and-regret/props/handkerchief.webp', alt: 'Evelyn 刺绣手帕' },
          { src: '/works/ai-series/drama/love-and-regret/props/speech-manuscript.webp', alt: 'Ella 的演讲稿《My Mother》' },
          { src: '/works/ai-series/drama/love-and-regret/props/ella-school-notice.webp', alt: 'Ella 学校家长会通知' },
          { src: '/works/ai-series/drama/love-and-regret/props/divorce-petition.webp', alt: '离婚申请文件' },
        ],
      },
    ],
  },
];

export const tvcProjects: TVCProject[] = [
  {
    slug: 'deep-blue',
    title: 'DEEP BLUE',
    cover: { src: '/works/ai-series/tvc/deep-blue/cover/deep-blue-cover.webp', alt: 'DEEP BLUE 男士香水广告播放封面' },
    bilibiliUrl: 'https://www.bilibili.com/video/BV1NThu6EE8f/',
    assetGroups: [
      {
        key: 'product',
        label: 'PRODUCT / 产品',
        items: [
          { src: '/works/ai-series/tvc/deep-blue/product/product-packaging.webp', alt: 'DEEP BLUE 香水产品包装' },
          { src: '/works/ai-series/tvc/deep-blue/product/product-turnaround.webp', alt: 'DEEP BLUE 香水产品三视图' },
        ],
      },
      {
        key: 'character',
        label: 'CHARACTER / 角色',
        items: [
          { src: '/works/ai-series/tvc/deep-blue/character/male-lead.webp', alt: '男主角日常造型' },
          { src: '/works/ai-series/tvc/deep-blue/character/male-lead-formal.webp', alt: '男主角礼服造型' },
          { src: '/works/ai-series/tvc/deep-blue/character/female-lead.webp', alt: '女主角礼服造型' },
        ],
      },
      {
        key: 'environment',
        label: 'ENVIRONMENT / 场景',
        items: [
          { src: '/works/ai-series/tvc/deep-blue/environment/hotel-room.webp', alt: '酒店套房场景' },
          { src: '/works/ai-series/tvc/deep-blue/environment/gallery-opening.webp', alt: '画廊开幕酒会场景' },
          { src: '/works/ai-series/tvc/deep-blue/environment/city-street.webp', alt: '城市夜景街道' },
        ],
      },
      {
        key: 'prop',
        label: 'PROPS / 道具',
        items: [
          { src: '/works/ai-series/tvc/deep-blue/prop/full-length-mirror.webp', alt: '酒店全身镜道具与灯光设定' },
        ],
      },
    ],
  },
  {
    slug: 'kisskids',
    title: 'KISSKIDS',
    cover: { src: '/works/ai-series/tvc/kisskids/cover/kisskids-cover.webp', alt: 'KISSKIDS 婴儿纸尿裤广告主视觉' },
    bilibiliUrl: 'https://www.bilibili.com/video/BV1yThu67EXH/',
    assetGroups: [
      {
        key: 'brand',
        label: 'BRAND / 品牌',
        items: [
          { src: '/works/ai-series/tvc/kisskids/key-visual/kisskids-logo.webp', alt: 'KISSKIDS 品牌 LOGO' },
          { src: '/works/ai-series/tvc/kisskids/key-visual/kisskids-product-poster.webp', alt: 'KISSKIDS 产品海报' },
          { src: '/works/ai-series/tvc/kisskids/product/kisskids-product-sheet.webp', alt: 'KISSKIDS 产品与包装资产' },
        ],
      },
      {
        key: 'character',
        label: 'CHARACTER / 角色',
        items: [
          { src: '/works/ai-series/tvc/kisskids/character/baby-assets.webp', alt: '宝宝角色资产与表情动作设定' },
          { src: '/works/ai-series/tvc/kisskids/character/baby-turnaround.webp', alt: '宝宝角色三视图' },
          { src: '/works/ai-series/tvc/kisskids/character/mother.webp', alt: '妈妈角色造型' },
        ],
      },
      {
        key: 'environment',
        label: 'ENVIRONMENT / 场景',
        items: [
          { src: '/works/ai-series/tvc/kisskids/environment/sun-room.webp', alt: '阳光房场景' },
          { src: '/works/ai-series/tvc/kisskids/environment/nursery.webp', alt: '婴儿房场景' },
        ],
      },
      {
        key: 'prop',
        label: 'PROPS / 道具',
        items: [
          { src: '/works/ai-series/tvc/kisskids/prop/teddy-bear.webp', alt: '小熊玩偶三视图' },
        ],
      },
    ],
  },
];

export const shortVideoProjects: ShortVideoProject[] = [
  {
    slug: 'master-cultivation', title: '师父！你究竟何种修为？', videoSrc: '', bilibiliUrl: 'https://www.bilibili.com/video/BV11i8b6KEnh/', format: 'landscape', expectedPath: '/works/ai-series/short-video/master-cultivation/video.mp4', poster: { src: '/works/ai-series/short-video/master-cultivation/poster.webp', alt: '《师父！你究竟何种修为？》短视频播放封面' },
    assetGroups: [
      { key: 'references', label: 'VISUAL REFERENCES / 视觉参考', items: [
        { src: '/works/ai-series/short-video/master-cultivation/characters/master.webp', alt: '师父角色造型' },
        { src: '/works/ai-series/short-video/master-cultivation/characters/master-turnaround.webp', alt: '师父角色三视图' },
        { src: '/works/ai-series/short-video/master-cultivation/characters/disciple.webp', alt: '徒弟角色造型' },
        { src: '/works/ai-series/short-video/master-cultivation/characters/disciple-turnaround.webp', alt: '徒弟角色三视图' },
        { src: '/works/ai-series/short-video/master-cultivation/environments/forest-village.webp', alt: '林间村落场景' },
        { src: '/works/ai-series/short-video/master-cultivation/props/sword.webp', alt: '古风长剑道具设定' },
        { src: '/works/ai-series/short-video/master-cultivation/visual-references/pepsi-reference.webp', alt: '百事视觉参考' },
        { src: '/works/ai-series/short-video/master-cultivation/visual-references/douyin-reference.webp', alt: '抖音视觉参考' },
        { src: '/works/ai-series/short-video/master-cultivation/visual-references/coca-cola-reference.webp', alt: '可口可乐视觉参考' },
      ] },
    ],
  },
  {
    slug: 'cat-commerce', title: '小猫带货', videoSrc: '', bilibiliUrl: 'https://www.bilibili.com/video/BV12e8b6qEAM/', format: 'portrait', expectedPath: '/works/ai-series/short-video/cat-commerce/video.mp4', poster: { src: '/works/ai-series/short-video/cat-commerce/poster.webp', alt: '小猫鲜奶饼干短视频播放封面' },
    assetGroups: [
      { key: 'product', label: 'PRODUCT / 产品', items: [
        { src: '/works/ai-series/short-video/cat-commerce/product/cookie-packaging-01.webp', alt: '小猫鲜奶饼干产品与独立包装展示一' },
        { src: '/works/ai-series/short-video/cat-commerce/product/cookie-packaging-02.webp', alt: '小猫鲜奶饼干产品与独立包装展示二' },
      ] },
      { key: 'storyboard', label: 'STORYBOARD / 分镜', items: [
        { src: '/works/ai-series/short-video/cat-commerce/storyboard/cookie-display.webp', alt: '分镜：饼干造型展示' },
        { src: '/works/ai-series/short-video/cat-commerce/storyboard/cookie-interior.webp', alt: '分镜：饼干内部口感展示' },
        { src: '/works/ai-series/short-video/cat-commerce/storyboard/serving-pairing.webp', alt: '分镜：饼干与牛奶搭配' },
        { src: '/works/ai-series/short-video/cat-commerce/storyboard/package-display.webp', alt: '分镜：产品外包装展示' },
        { src: '/works/ai-series/short-video/cat-commerce/storyboard/unboxing.webp', alt: '分镜：拆封展示' },
      ] },
    ],
  },
  {
    slug: 'beyond-the-stars', title: '群星彼岸', videoSrc: '', bilibiliUrl: 'https://www.bilibili.com/video/BV1C3hu6yEGM/', format: 'portrait', expectedPath: '/works/ai-series/short-video/beyond-the-stars/video.mp4', poster: { src: '/works/ai-series/short-video/beyond-the-stars/poster.webp', alt: '《群星彼岸》短视频播放封面' },
    assetGroups: [
      { key: 'spacecraft', label: 'SPACECRAFT / 舰船', items: [
        { src: '/works/ai-series/short-video/beyond-the-stars/spacecraft/flagship.webp', alt: '银黑重装主舰' },
        { src: '/works/ai-series/short-video/beyond-the-stars/spacecraft/flagship-charging.webp', alt: '主舰聚能状态参考' },
        { src: '/works/ai-series/short-video/beyond-the-stars/spacecraft/laser-wingman.webp', alt: '小型激光僚机' },
        { src: '/works/ai-series/short-video/beyond-the-stars/spacecraft/medium-fleet.webp', alt: '中型战舰组合' },
        { src: '/works/ai-series/short-video/beyond-the-stars/spacecraft/enemy-formation.webp', alt: '敌方小型战舰方阵' },
        { src: '/works/ai-series/short-video/beyond-the-stars/spacecraft/boss-mothership.webp', alt: 'Boss 巨型母舰深空要塞' },
      ] },
      { key: 'environment', label: 'ENVIRONMENT / 场景', items: [
        { src: '/works/ai-series/short-video/beyond-the-stars/environments/asteroid-battlefield.webp', alt: '危险陨石带战场背景' },
      ] },
    ],
  },
  {
    slug: 'card-master', title: '卡牌大师', videoSrc: '', bilibiliUrl: 'https://www.bilibili.com/video/BV1k3hu6yEzC/', format: 'portrait', expectedPath: '/works/ai-series/short-video/card-master/video.mp4', poster: { src: '/works/ai-series/short-video/card-master/poster.webp', alt: '《卡牌大师》短视频播放封面' },
    assetGroups: [{ key: 'visuals', label: 'VISUAL DEVELOPMENT / 视觉开发', items: [
      { src: '/works/ai-series/short-video/card-master/visuals/opening.webp', alt: '卡牌世界开端画面' },
      { src: '/works/ai-series/short-video/card-master/visuals/background.webp', alt: '卡牌世界背景设定' },
      { src: '/works/ai-series/short-video/card-master/visuals/game-ui.webp', alt: '卡牌游戏 UI 画面' },
      { src: '/works/ai-series/short-video/card-master/visuals/battle-scene.webp', alt: '卡牌战斗画面' },
    ] }],
  },
  {
    slug: 'outfit-change', title: '换装-童装', videoSrc: '', bilibiliUrl: 'https://www.bilibili.com/video/BV1k3hu6yErF/', format: 'portrait', expectedPath: '/works/ai-series/short-video/outfit-change/video.mp4', poster: { src: '/works/ai-series/short-video/outfit-change/poster.webp', alt: '《换装-童装》短视频播放封面' },
    assetGroups: [
      { key: 'outfits', label: 'OUTFIT REFERENCES / 服装参考', items: [
        { src: '/works/ai-series/short-video/outfit-change/outfits/set-b-black-top-white-skirt.webp', alt: '套装 B：黑背心、白裙与银包' },
        { src: '/works/ai-series/short-video/outfit-change/outfits/set-d-sailor-dress.webp', alt: '套装 D：水手连衣裙' },
        { src: '/works/ai-series/short-video/outfit-change/outfits/set-e-kitty-jeans.webp', alt: '套装 E：Hello Kitty 牛仔裤' },
      ] },
      { key: 'environment', label: 'ENVIRONMENT / 场景', items: [
        { src: '/works/ai-series/short-video/outfit-change/environments/bedroom.webp', alt: '换装卧室场景' },
      ] },
    ],
  },
];

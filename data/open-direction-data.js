// ==========================================
// 云岁月对接类目上新指引
// 开款方向数据
// 数据来源：开款参考.pdf
// ==========================================

const OPEN_DIRECTION_DATA = {

  // ==========================================
  // 01. 套装
  // ==========================================

  sets: [

    {
      name: "短袖肌理面料短裤套装",
      en: "Textured T-Shirt & Shorts Set",
      tags: [
        "套装",
        "短袖",
        "肌理面料",
        "短裤",
        "夏季",
        "休闲",
        "简约"
      ],
      image: "assets/styles/sets/肌理短裤短袖.png",
      description: "上衣与短裤采用统一或相近的肌理面料，通过面料纹理提升基础套装的设计感。",
      pdf: "assets/styles/sets/开款参考.pdf#page=6",
      pdfPage: 6
    },


    {
      name: "短袖图案图形短裤套装",
      en: "Graphic T-Shirt & Shorts Set",
      tags: [
        "套装",
        "短袖",
        "图案",
        "图形",
        "印花",
        "短裤",
        "夏季"
      ],
      image: "assets/styles/sets/图案图形 短袖短裤.png",
      description: "以图案、图形或视觉设计作为核心卖点，适合年轻休闲与街头风格开发。",
      pdf: "assets/styles/sets/开款参考.pdf#page=6",
      pdfPage: 6
    },


    {
      name: "特殊工艺T恤套装",
      en: "Special Process T-Shirt Set",
      tags: [
        "套装",
        "T恤",
        "特殊工艺",
        "印花",
        "图案",
        "短裤",
        "街头"
      ],
      description: "基础T恤套装结合特殊工艺、图案设计或局部视觉元素，增加产品差异化。",
      pdf: "assets/styles/sets/开款参考.pdf#page=7",
      pdfPage: 7
    },


    {
      name: "休闲衬衫短裤套装",
      en: "Casual Shirt & Shorts Set",
      tags: [
        "套装",
        "休闲衬衫",
        "短袖衬衫",
        "短裤",
        "度假",
        "夏季",
        "休闲"
      ],
      description: "短袖休闲衬衫搭配同款短裤，适合夏季度假、日常休闲场景。",
      pdf: "assets/styles/sets/开款参考.pdf#page=7",
      pdfPage: 7
    },


    {
      name: "短袖衬衫套装",
      en: "Short Sleeve Shirt Set",
      tags: [
        "衬衫套装",
        "短袖衬衫",
        "短裤",
        "夏季",
        "度假",
        "休闲",
        "两件套"
      ],
      description: "以短袖衬衫与短裤组成的基础两件套，是夏季男装的重要开发方向。",
      pdf: "assets/styles/sets/开款参考.pdf#page=8",
      pdfPage: 8
    },


    {
      name: "肌理面料衬衫短裤套装",
      en: "Textured Shirt & Shorts Set",
      tags: [
        "衬衫套装",
        "肌理面料",
        "短袖",
        "短裤",
        "两件套",
        "夏季"
      ],
      description: "利用竖纹、凹凸肌理或特殊织物增加衬衫套装的层次感。",
      pdf: "assets/styles/sets/开款参考.pdf#page=8",
      pdfPage: 8
    },


    {
      name: "图案图形衬衫短裤套装",
      en: "Graphic Shirt & Shorts Set",
      tags: [
        "衬衫套装",
        "图案",
        "图形",
        "印花",
        "短裤",
        "度假",
        "夏季"
      ],
      description: "通过印花、撞色、图案图形打造视觉记忆点，适合年轻化与度假风方向。",
      pdf: "assets/styles/sets/开款参考.pdf#page=8",
      pdfPage: 8
    },


    {
      name: "短袖棉麻衬衫短裤套装",
      en: "Linen Blend Shirt & Shorts Set",
      tags: [
        "衬衫套装",
        "棉麻",
        "短袖",
        "短裤",
        "透气",
        "夏季",
        "度假"
      ],
      description: "棉麻质感搭配短袖衬衫和短裤，突出夏季透气、轻松和度假感。",
      pdf: "assets/styles/sets/开款参考.pdf#page=9",
      pdfPage: 9
    },


    {
      name: "短袖棉麻衬衫直筒裤套装",
      en: "Short Sleeve Linen Shirt & Straight Pants Set",
      tags: [
        "棉麻",
        "短袖衬衫",
        "直筒裤",
        "套装",
        "轻商务",
        "度假",
        "夏季"
      ],
      description: "短袖棉麻衬衫搭配直筒长裤，适合度假、轻商务和成熟男装风格。",
      pdf: "assets/styles/sets/开款参考.pdf#page=9",
      pdfPage: 9
    },


    {
      name: "长袖棉麻衬衫直筒裤套装",
      en: "Long Sleeve Linen Shirt & Straight Pants Set",
      tags: [
        "棉麻",
        "长袖衬衫",
        "直筒裤",
        "套装",
        "度假",
        "轻商务",
        "简约"
      ],
      description: "长袖棉麻衬衫搭配直筒裤，强调自然面料与成熟简约风格。",
      pdf: "assets/styles/sets/开款参考.pdf#page=9",
      pdfPage: 9
    },


    {
      name: "基础运动短裤套装",
      en: "Basic Activewear Shorts Set",
      tags: [
        "运动套装",
        "基础运动",
        "短裤",
        "速干",
        "健身",
        "运动",
        "夏季"
      ],
      image: "assets/styles/sets/运动速干.png",
      description: "运动上衣搭配运动短裤，可作为健身、跑步及日常运动休闲方向。",
      pdf: "assets/styles/sets/开款参考.pdf#page=10",
      pdfPage: 10
    },


    {
      name: "连帽运动休闲套装",
      en: "Hooded Activewear Set",
      tags: [
        "运动套装",
        "连帽",
        "休闲",
        "短裤",
        "两件套",
        "运动"
      ],
      description: "连帽或拉链元素结合运动短裤，兼顾运动与日常休闲属性。",
      pdf: "assets/styles/sets/开款参考.pdf#page=10",
      pdfPage: 10
    },


    {
      name: "基础简约卫衣束脚裤套装",
      en: "Basic Sweatshirt & Jogger Set",
      tags: [
        "卫衣套装",
        "基础简约",
        "束脚裤",
        "连帽",
        "休闲",
        "秋冬"
      ],
      description: "基础卫衣搭配束脚裤，是秋冬男装休闲套装的重要基础方向。",
      pdf: "assets/styles/sets/开款参考.pdf#page=11",
      pdfPage: 11
    },


    {
      name: "图案图形卫衣束脚裤套装",
      en: "Graphic Sweatshirt & Jogger Set",
      tags: [
        "卫衣套装",
        "图案",
        "图形",
        "印花",
        "束脚裤",
        "街头",
        "秋冬"
      ],
      description: "在卫衣与束脚裤上增加图案、文字或视觉图形，强化街头感。",
      pdf: "assets/styles/sets/开款参考.pdf#page=11",
      pdfPage: 11
    },


    {
      name: "基础简约卫衣直筒裤套装",
      en: "Basic Sweatshirt & Straight Pants Set",
      tags: [
        "卫衣套装",
        "基础简约",
        "直筒裤",
        "宽松",
        "休闲",
        "秋冬"
      ],
      description: "基础卫衣搭配直筒裤，整体轮廓更宽松简约。",
      pdf: "assets/styles/sets/开款参考.pdf#page=12",
      pdfPage: 12
    },


    {
      name: "假两件卫衣套装",
      en: "Layered Look Sweatshirt Set",
      tags: [
        "卫衣套装",
        "假两件",
        "层次感",
        "休闲",
        "街头",
        "秋冬"
      ],
      description: "通过假两件或拼接结构增加卫衣套装的层次与视觉差异。",
      pdf: "assets/styles/sets/开款参考.pdf#page=12",
      pdfPage: 12
    },


    {
      name: "加绒战术夹克套装",
      en: "Fleece Lined Tactical Jacket Set",
      tags: [
        "夹克套装",
        "加绒",
        "战术",
        "工装",
        "保暖",
        "秋冬"
      ],
      image: "assets/styles/sets/战术服套装.png",
      description: "以外套夹克搭配长裤，强调加绒、保暖、工装和战术风格。",
      pdf: "assets/styles/sets/开款参考.pdf#page=13",
      pdfPage: 13
    }

  ],



  // ==========================================
  // 02. 正装
  // ==========================================

  formal: [

    {
      name: "宽松阔腿西裤",
      en: "Wide Leg Dress Pants",
      tags: [
        "正装",
        "西裤",
        "阔腿",
        "宽松",
        "垂感",
        "商务"
      ],
      description: "强调宽松裤腿和垂坠感，可用于现代商务、轻商务和时尚正装方向。",
      pdf: "assets/styles/sets/开款参考.pdf#page=14",
      pdfPage: 14
    },


    {
      name: "褶裥西裤",
      en: "Pleated Dress Pants",
      tags: [
        "正装",
        "西裤",
        "褶裥",
        "高腰",
        "宽松",
        "商务"
      ],
      description: "通过腰部褶裥增加空间感与立体感，是西裤开发的重要结构方向。",
      pdf: "assets/styles/sets/开款参考.pdf#page=15",
      pdfPage: 15
    },


    {
      name: "修身商务西裤",
      en: "Slim Fit Business Trousers",
      tags: [
        "正装",
        "西裤",
        "修身",
        "商务",
        "通勤",
        "简约"
      ],
      description: "裤型相对利落，适合商务通勤与正式场景。",
      pdf: "assets/styles/sets/开款参考.pdf#page=16",
      pdfPage: 16
    },


    {
      name: "格纹西裤",
      en: "Plaid Dress Pants",
      tags: [
        "正装",
        "西裤",
        "格纹",
        "商务",
        "休闲商务",
        "秋冬"
      ],
      description: "在基础西裤上加入格纹元素，增加商务休闲属性。",
      pdf: "assets/styles/sets/开款参考.pdf#page=16",
      pdfPage: 16
    },


    {
      name: "直筒西裤",
      en: "Straight Leg Dress Pants",
      tags: [
        "正装",
        "西裤",
        "直筒",
        "基础款",
        "商务",
        "通勤"
      ],
      description: "经典直筒裤型，适合作为男装商务与通勤基础开发方向。",
      pdf: "assets/styles/sets/开款参考.pdf#page=17",
      pdfPage: 17
    },


    {
      name: "宽松垂感西裤",
      en: "Relaxed Draped Trousers",
      tags: [
        "正装",
        "西裤",
        "宽松",
        "垂感",
        "阔腿",
        "时尚"
      ],
      description: "突出面料垂感和宽松裤腿，适合现代时尚男装。",
      pdf: "assets/styles/sets/开款参考.pdf#page=18",
      pdfPage: 18
    },


    {
      name: "设计感西裤",
      en: "Statement Dress Pants",
      tags: [
        "正装",
        "西裤",
        "设计感",
        "褶裥",
        "宽腿",
        "时尚"
      ],
      description: "通过特殊腰头、褶裥、宽腿或结构变化提升基础西裤的设计感。",
      pdf: "assets/styles/sets/开款参考.pdf#page=19",
      pdfPage: 19
    }

  ],



  // ==========================================
  // 03. 棉羽
  // ==========================================

  padded: [

    {
      name: "棉羽款式参考待补充",
      en: "Padded & Downwear Reference - Coming Soon",
      tags: [
        "棉羽",
        "棉服",
        "羽绒服",
        "保暖",
        "秋冬"
      ],
      description: "当前上传的《开款参考.pdf》中暂无明确棉服或羽绒服款式参考。后续上传棉羽PDF后，可直接在此位置增加对应款式。",
      pdf: "",
      pdfPage: null
    }

  ]

};

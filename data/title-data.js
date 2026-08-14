const TITLE_DATA = {
  "套装": {
    "品类(Category)": [
      {
        "sub": "套装类",
        "zh": "运动套装",
        "en": "Sports Set/Track Set",
        "variants": "sports set, track set, athletic set, activewear set"
      },
      {
        "sub": "套装类",
        "zh": "休闲套装",
        "en": "Casual Set",
        "variants": "casual set, leisure set"
      },
      {
        "sub": "套装类",
        "zh": "西装套装",
        "en": "Suit Set/Formal Suit",
        "variants": "suit set, suit, suits, formal suit, business suit"
      },
      {
        "sub": "套装类",
        "zh": "卫衣套装",
        "en": "Hoodie Set",
        "variants": "hoodie set, sweatshirt set"
      },
      {
        "sub": "套装类",
        "zh": "T恤短裤套装",
        "en": "T-Shirt & Shorts Set",
        "variants": "t-shirt and shorts set, tee shorts set, t-shirt shorts set"
      },
      {
        "sub": "套装类",
        "zh": "两件套",
        "en": "Two-Piece Set",
        "variants": "two-piece, two piece, 2-piece, 2pc, 2pcs"
      },
      {
        "sub": "套装类",
        "zh": "三件套",
        "en": "Three-Piece Set",
        "variants": "three-piece, three piece, 3-piece, 3pc, 3pcs"
      }
    ],
    "套装规格(Pack/Set)": [
      {
        "sub": "件套数",
        "zh": "单件",
        "en": "1pc/Single Piece",
        "variants": "1pc, 1 pc, single piece, 1 piece, one piece, single item"
      },
      {
        "sub": "件套数",
        "zh": "两件套",
        "en": "2pc Set/Two-Piece",
        "variants": "2pc, 2pcs, 2 pcs, 2 piece, two piece, two-piece, 2-pc"
      },
      {
        "sub": "件套数",
        "zh": "三件套",
        "en": "3pc Set/Three-Piece",
        "variants": "3pc, 3pcs, 3 pcs, 3 piece, three piece, three-piece, 3-pc"
      },
      {
        "sub": "件套数",
        "zh": "四件套",
        "en": "4pc Set/Four-Piece",
        "variants": "4pc, 4pcs, 4 pcs, 4 piece, four piece, four-piece, 4-pc"
      },
      {
        "sub": "件套数",
        "zh": "多件套",
        "en": "Multi-Pack",
        "variants": "multi-pack, multi pack, multipack, variety pack, bundle"
      },
      {
        "sub": "搭配套装",
        "zh": "T恤短裤套装",
        "en": "T-Shirt & Shorts Set",
        "variants": "t-shirt and shorts set, tee shorts set, t-shirt shorts set, t-shirt shorts combo"
      },
      {
        "sub": "搭配套装",
        "zh": "卫衣长裤套装",
        "en": "Hoodie & Pants Set",
        "variants": "hoodie and pants set, sweatshirt pants set, hoodie joggers set, hoodie trousers set"
      },
      {
        "sub": "搭配套装",
        "zh": "夹克运动裤套装",
        "en": "Jacket & Joggers Set",
        "variants": "jacket and joggers set, jacket track pants set, jacket sweatpants set"
      },
      {
        "sub": "搭配套装",
        "zh": "衬衫短裤套装",
        "en": "Shirt & Shorts Set",
        "variants": "shirt and shorts set, shirt shorts set, shirt shorts combo"
      },
      {
        "sub": "运动套装",
        "zh": "运动两件套",
        "en": "Sports 2-Piece Set",
        "variants": "sports 2-piece set, athletic two-piece set, sports 2pc set, activewear 2-piece"
      },
      {
        "sub": "运动套装",
        "zh": "健身套装",
        "en": "Fitness Set/Workout Set",
        "variants": "fitness set, workout set, gym set, training set, exercise set"
      },
      {
        "sub": "运动套装",
        "zh": "跑步套装",
        "en": "Running Set",
        "variants": "running set, jogging set, track running set, runner set"
      },
      {
        "sub": "运动套装",
        "zh": "训练套装",
        "en": "Training Set",
        "variants": "training set, training suit, practice set, training outfit"
      },
      {
        "sub": "运动套装",
        "zh": "休闲运动套装",
        "en": "Casual Sports Set",
        "variants": "casual sports set, casual athletic set, leisure sport set, casual activewear set"
      },
      {
        "sub": "正装套装",
        "zh": "西装两件套",
        "en": "Suit 2-Piece Set",
        "variants": "suit 2-piece set, two-piece suit, 2pc suit, suit and trousers set, suit and pants set"
      },
      {
        "sub": "正装套装",
        "zh": "西装三件套",
        "en": "Suit 3-Piece Set",
        "variants": "suit 3-piece set, three-piece suit, 3pc suit, suit vest trousers set"
      },
      {
        "sub": "正装套装",
        "zh": "外套长裤套装",
        "en": "Jacket & Pants Set",
        "variants": "jacket and pants set, jacket trousers set, coat pants set, blazer pants set"
      },
      {
        "sub": "正装套装",
        "zh": "马甲西装套装",
        "en": "Vest & Suit Set",
        "variants": "vest suit set, waistcoat suit set, vest and blazer set, vest and suit set"
      },
      {
        "sub": "家居套装",
        "zh": "睡衣套装",
        "en": "Pajama Set",
        "variants": "pajama set, pyjama set, sleepwear set, sleep set, nightwear set"
      },
      {
        "sub": "家居套装",
        "zh": "家居服套装",
        "en": "Loungewear Set",
        "variants": "loungewear set, home wear set, home wear set, lounge set, house wear set"
      },
      {
        "sub": "家居套装",
        "zh": "睡袍套装",
        "en": "Robe Set",
        "variants": "robe set, bathrobe set, gown set, sleep robe set"
      },
      {
        "sub": "多件装",
        "zh": "2件装T恤",
        "en": "2-Pack T-Shirt",
        "variants": "2-pack t-shirt, 2 pack tee, pack of 2 t-shirt, 2 t-shirts pack, 2pc t-shirt pack"
      },
      {
        "sub": "多件装",
        "zh": "3件装背心",
        "en": "3-Pack Tank/Vest",
        "variants": "3-pack tank, 3 pack vest, pack of 3 tank top, 3pc tank pack, 3 tank tops pack"
      },
      {
        "sub": "多件装",
        "zh": "5双装袜子",
        "en": "5-Pair Socks",
        "variants": "5-pair socks, 5 pair socks, pack of 5 socks, 5 pairs sock pack, 5pack socks"
      },
      {
        "sub": "多件装",
        "zh": "2条装短裤",
        "en": "2-Pack Shorts",
        "variants": "2-pack shorts, 2 pack shorts, pack of 2 shorts, 2pc shorts pack, 2 shorts pack"
      }
    ],
    "版型(Fit)": [
      {
        "sub": "",
        "zh": "宽松版",
        "en": "Loose Fit",
        "variants": "loose fit, loose, loose-fit, relaxed fit, relaxed"
      },
      {
        "sub": "",
        "zh": "修身版",
        "en": "Slim Fit",
        "variants": "slim fit, slim-fit, slim, muscle fit"
      },
      {
        "sub": "",
        "zh": "常规版",
        "en": "Regular Fit",
        "variants": "regular fit, regular-fit, regular, standard fit"
      },
      {
        "sub": "",
        "zh": "合身版",
        "en": "Tailored Fit",
        "variants": "tailored fit, fitted, fitted fit"
      },
      {
        "sub": "",
        "zh": "廓形版",
        "en": "Oversized/Boxy",
        "variants": "oversized, oversize, boxy fit, boxy, baggy, relaxed fit"
      },
      {
        "sub": "",
        "zh": "oversize风",
        "en": "Oversized Style",
        "variants": "oversized, oversize, oversized fit, oversized style"
      }
    ],
    "领型(Neckline)": [
      {
        "sub": "",
        "zh": "圆领",
        "en": "Crew Neck/Round Neck",
        "variants": "crew neck, crewneck, round neck, round-neck"
      },
      {
        "sub": "",
        "zh": "V领",
        "en": "V-Neck",
        "variants": "v-neck, v neck, vneck"
      },
      {
        "sub": "",
        "zh": "翻领",
        "en": "Lapel/Collar",
        "variants": "lapel, collar, turned-down collar, fold-over collar"
      },
      {
        "sub": "",
        "zh": "立领",
        "en": "Stand Collar",
        "variants": "stand collar, stand-collar, stand-up collar, mandarin collar"
      },
      {
        "sub": "",
        "zh": "亨利领",
        "en": "Henley Neck",
        "variants": "henley, henley neck, henley collar, henley shirt"
      },
      {
        "sub": "",
        "zh": "半高领",
        "en": "Mock Neck/Half High Collar",
        "variants": "mock neck, mockneck, half high collar, half-high collar, mock turtleneck"
      },
      {
        "sub": "",
        "zh": "高领",
        "en": "Turtleneck/High Neck",
        "variants": "turtleneck, turtle neck, high neck, high-collar, roll neck"
      },
      {
        "sub": "",
        "zh": "扣领",
        "en": "Button-Down Collar",
        "variants": "button-down collar, button-down, button down"
      },
      {
        "sub": "",
        "zh": "古巴领",
        "en": "Cuban Collar",
        "variants": "cuban collar, cuban, camp collar, cabin collar, revere collar"
      },
      {
        "sub": "",
        "zh": "开领",
        "en": "Open Collar/Notch Lapel",
        "variants": "open collar, open-collar, notch lapel, notched collar"
      },
      {
        "sub": "",
        "zh": "Polo领",
        "en": "Polo Collar",
        "variants": "polo collar, polo, polo shirt collar, knit collar"
      }
    ],
    "闭合方式(Closure)": [
      {
        "sub": "",
        "zh": "套头",
        "en": "Pullover",
        "variants": "pullover, pull-on, pull on, slip-on, slip on, overhead"
      },
      {
        "sub": "",
        "zh": "拉链",
        "en": "Zipper",
        "variants": "zipper, zip, zip-up, zip up, zip closure, zipper closure"
      },
      {
        "sub": "",
        "zh": "半拉链",
        "en": "Half-Zip",
        "variants": "half-zip, half zip, quarter-zip, quarter zip, 1/4 zip, partial zip"
      },
      {
        "sub": "",
        "zh": "纽扣",
        "en": "Button",
        "variants": "button, buttons, button closure"
      },
      {
        "sub": "",
        "zh": "单排扣",
        "en": "Single-Breasted",
        "variants": "single-breasted, single breasted, single row button"
      },
      {
        "sub": "",
        "zh": "双排扣",
        "en": "Double-Breasted",
        "variants": "double-breasted, double breasted, double row button"
      },
      {
        "sub": "",
        "zh": "抽绳",
        "en": "Drawstring",
        "variants": "drawstring, draw string, draw-string"
      },
      {
        "sub": "",
        "zh": "松紧腰",
        "en": "Elastic Waist",
        "variants": "elastic waist, elasticated waist, elastic band, elastane waist"
      },
      {
        "sub": "",
        "zh": "拉链门襟",
        "en": "Zipper Fly/Front",
        "variants": "zipper fly, zip fly, zip-front, zipper front, zipper placket"
      },
      {
        "sub": "",
        "zh": "纽扣门襟",
        "en": "Button Fly/Front",
        "variants": "button fly, button-front, button front, button placket, button-up front"
      }
    ],
    "风格(Style)": [
      {
        "sub": "",
        "zh": "民族风",
        "en": "Ethnic",
        "variants": "ethnic, ethnic style, folk style, tribal"
      },
      {
        "sub": "",
        "zh": "商务风",
        "en": "Business Style",
        "variants": "business, business style, business professional"
      },
      {
        "sub": "",
        "zh": "通勤风",
        "en": "Commuter Style",
        "variants": "commuter, commute, commuting style, work wear style"
      },
      {
        "sub": "",
        "zh": "休闲日常",
        "en": "Casual/Daily",
        "variants": "casual, everyday, daily, leisure, leisurely"
      },
      {
        "sub": "",
        "zh": "y2k",
        "en": "Y2K",
        "variants": "y2k, y2k style, y2k fashion, 2000s style, millennium style"
      },
      {
        "sub": "",
        "zh": "街头",
        "en": "Streetwear",
        "variants": "streetwear, street, street style, street fashion"
      },
      {
        "sub": "",
        "zh": "复古",
        "en": "Vintage/Retro",
        "variants": "vintage, retro, classic style, old school"
      },
      {
        "sub": "",
        "zh": "可爱",
        "en": "Cute",
        "variants": "cute, kawaii, sweet, adorable"
      },
      {
        "sub": "",
        "zh": "潮流",
        "en": "Trendy/Fashion",
        "variants": "trendy, fashion, fashionable, stylish, trend, trendy style"
      }
    ],
    "图案/花色(Pattern)": [
      {
        "sub": "基础花色",
        "zh": "纯色",
        "en": "Solid Color",
        "variants": "solid color, solid, plain"
      },
      {
        "sub": "基础花色",
        "zh": "条纹",
        "en": "Striped",
        "variants": "stripe, striped, stripe pattern, pinstripe"
      },
      {
        "sub": "基础花色",
        "zh": "格纹",
        "en": "Plaid/Checkered",
        "variants": "plaid, checkered, check, checked, tartan, gingham"
      },
      {
        "sub": "基础花色",
        "zh": "撞色",
        "en": "Color-Block/Contrast",
        "variants": "color-block, color block, colorblock, color-blocking, contrast color, contrast"
      },
      {
        "sub": "基础花色",
        "zh": "拼色",
        "en": "Patchwork/Color Patch",
        "variants": "patchwork, color patch, patch, pieced color"
      },
      {
        "sub": "基础花色",
        "zh": "渐变",
        "en": "Gradient/Ombre",
        "variants": "gradient, ombre, faded, fade, ombre effect, color gradient"
      },
      {
        "sub": "基础花色",
        "zh": "豹纹",
        "en": "Leopard Print",
        "variants": "leopard, leopard print, leopard pattern, animal print"
      },
      {
        "sub": "基础花色",
        "zh": "波点",
        "en": "Polka Dot",
        "variants": "polka dot, polka-dot, dotted, dots, dot pattern"
      },
      {
        "sub": "印花类",
        "zh": "字母印花",
        "en": "Letter Print",
        "variants": "letter, letter print, text print, typography, letter graphic"
      },
      {
        "sub": "印花类",
        "zh": "数字印花",
        "en": "Number Print",
        "variants": "number, number print, numeral print, numeric graphic"
      },
      {
        "sub": "印花类",
        "zh": "图形印花",
        "en": "Graphic Print",
        "variants": "graphic, graphic print, graphic pattern, graphic design"
      },
      {
        "sub": "印花类",
        "zh": "几何印花",
        "en": "Geometric Print",
        "variants": "geometric, geometric print, geometric pattern, abstract"
      },
      {
        "sub": "风格图案",
        "zh": "迷彩风",
        "en": "Camouflage",
        "variants": "camouflage, camo, camo print, camo pattern"
      },
      {
        "sub": "风格图案",
        "zh": "复古风图案",
        "en": "Vintage Pattern",
        "variants": "vintage pattern, vintage print, retro pattern, retro print"
      },
      {
        "sub": "风格图案",
        "zh": "街头风图案",
        "en": "Streetwear Pattern",
        "variants": "streetwear pattern, street print, urban print, graffiti"
      },
      {
        "sub": "风格图案",
        "zh": "国潮风图案",
        "en": "Chinese Trend Pattern",
        "variants": "chinese trend, china trend, national trend, c-pop, guochao"
      },
      {
        "sub": "风格图案",
        "zh": "波西米亚风",
        "en": "Bohemian",
        "variants": "bohemian, boho, boho-chic, boho print"
      },
      {
        "sub": "风格图案",
        "zh": "y2k风",
        "en": "Y2K Pattern",
        "variants": "y2k pattern, y2k print, 2000s graphic, millennium graphic"
      },
      {
        "sub": "风格图案",
        "zh": "热带风",
        "en": "Tropical",
        "variants": "tropical, tropical pattern, tropical print, tropical design"
      },
      {
        "sub": "节日图案",
        "zh": "圣诞图案",
        "en": "Christmas Pattern",
        "variants": "christmas, christmas pattern, christmas print, xmas, santa, reindeer, snowflake"
      },
      {
        "sub": "节日图案",
        "zh": "万圣节图案",
        "en": "Halloween Pattern",
        "variants": "halloween, halloween pattern, halloween print, pumpkin, ghost, skull halloween"
      },
      {
        "sub": "节日图案",
        "zh": "独立日",
        "en": "Independence Day",
        "variants": "independence day, 4th of july, july 4th, stars and stripes, patriotic"
      },
      {
        "sub": "节日图案",
        "zh": "亡灵节",
        "en": "Day of the Dead",
        "variants": "day of the dead, dia de los muertos, sugar skull, mexico"
      },
      {
        "sub": "节日图案",
        "zh": "父亲节",
        "en": "Father's Day",
        "variants": "father's day, fathers day, dad, daddy"
      },
      {
        "sub": "元素图案",
        "zh": "动物",
        "en": "Animal",
        "variants": "animal, animal print, animal pattern, creature"
      },
      {
        "sub": "元素图案",
        "zh": "骷髅",
        "en": "Skull",
        "variants": "skull, skull print, skull pattern, skeleton, death head"
      },
      {
        "sub": "元素图案",
        "zh": "火焰",
        "en": "Flame",
        "variants": "flame, flames, fire, fire print, flame pattern"
      },
      {
        "sub": "元素图案",
        "zh": "摩托车",
        "en": "Motorcycle",
        "variants": "motorcycle, motorcycle print, motorbike, harley, biker graphic"
      },
      {
        "sub": "元素图案",
        "zh": "花卉",
        "en": "Floral/Flower",
        "variants": "floral, flower, flowers, botanical, floral print, flower pattern"
      },
      {
        "sub": "元素图案",
        "zh": "棕榈叶",
        "en": "Palm Leaf",
        "variants": "palm, palm leaf, palm print, tropical leaf, monstera, palm tree"
      },
      {
        "sub": "印花位置",
        "zh": "胸前小标",
        "en": "Chest Small Logo",
        "variants": "chest logo, chest small logo, chest badge, chest emblem, front small logo"
      },
      {
        "sub": "印花位置",
        "zh": "背部大印花",
        "en": "Back Large Print",
        "variants": "back print, back large print, back graphic, large back print, full back print"
      },
      {
        "sub": "印花位置",
        "zh": "袖口图案",
        "en": "Sleeve Print",
        "variants": "sleeve print, sleeve graphic, sleeve pattern, cuff print"
      },
      {
        "sub": "印花位置",
        "zh": "满版图案",
        "en": "All-Over Print",
        "variants": "all-over print, all over print, full print, allover, all-over pattern"
      },
      {
        "sub": "印花位置",
        "zh": "局部印花",
        "en": "Partial Print",
        "variants": "partial print, local print, localized print, spot print"
      },
      {
        "sub": "印花位置",
        "zh": "前胸字母",
        "en": "Front Letter Print",
        "variants": "front letter, front text, chest letter, front lettering"
      },
      {
        "sub": "印花位置",
        "zh": "后背字母",
        "en": "Back Letter Print",
        "variants": "back letter, back text, back lettering, rear letter"
      },
      {
        "sub": "印花位置",
        "zh": "侧边印花",
        "en": "Side Print",
        "variants": "side print, side graphic, side pattern, lateral print"
      }
    ],
    "场景(Occasion)": [
      {
        "sub": "日常",
        "zh": "日常",
        "en": "Everyday/Daily",
        "variants": "everyday, daily, day-to-day"
      },
      {
        "sub": "日常",
        "zh": "通勤",
        "en": "Commuting",
        "variants": "commute, commuter, commuting"
      },
      {
        "sub": "日常",
        "zh": "居家",
        "en": "Home/Lounge",
        "variants": "home, lounge, lounging, around the house"
      },
      {
        "sub": "日常",
        "zh": "出街",
        "en": "Going Out/Outing",
        "variants": "outing, outings, going out, out and about, day out"
      },
      {
        "sub": "日常",
        "zh": "休闲",
        "en": "Casual/Leisure",
        "variants": "casual, leisure, leisurely, relaxed"
      },
      {
        "sub": "日常",
        "zh": "约会",
        "en": "Date",
        "variants": "date, dating, date night"
      },
      {
        "sub": "商务",
        "zh": "商务",
        "en": "Business",
        "variants": "business, business occasion"
      },
      {
        "sub": "商务",
        "zh": "办公室",
        "en": "Office",
        "variants": "office, workplace"
      },
      {
        "sub": "商务",
        "zh": "职场",
        "en": "Workplace/Professional",
        "variants": "work, professional, workplace"
      },
      {
        "sub": "商务",
        "zh": "会议",
        "en": "Meeting/Conference",
        "variants": "meeting, conference, convention"
      },
      {
        "sub": "商务",
        "zh": "正装",
        "en": "Formal",
        "variants": "formal, formal occasion, formal wear, formal attire"
      },
      {
        "sub": "商务",
        "zh": "商务休闲",
        "en": "Business Casual",
        "variants": "business casual, smart casual, business-casual"
      },
      {
        "sub": "运动",
        "zh": "健身",
        "en": "Gym/Fitness",
        "variants": "gym, fitness, workout, exercise, training"
      },
      {
        "sub": "运动",
        "zh": "跑步",
        "en": "Running",
        "variants": "running, run, jog, jogging"
      },
      {
        "sub": "运动",
        "zh": "训练",
        "en": "Training",
        "variants": "training, workout, exercise, drill"
      },
      {
        "sub": "运动",
        "zh": "篮球",
        "en": "Basketball",
        "variants": "basketball, bball, hoops"
      },
      {
        "sub": "运动",
        "zh": "足球",
        "en": "Soccer/Football",
        "variants": "soccer, football, futbol"
      },
      {
        "sub": "运动",
        "zh": "骑行",
        "en": "Cycling",
        "variants": "cycling, biking, bike riding"
      },
      {
        "sub": "运动",
        "zh": "瑜伽",
        "en": "Yoga",
        "variants": "yoga, yogi, pilates"
      },
      {
        "sub": "运动",
        "zh": "高尔夫",
        "en": "Golf",
        "variants": "golf, golfing"
      },
      {
        "sub": "户外",
        "zh": "户外",
        "en": "Outdoor",
        "variants": "outdoor, outdoors, outside"
      },
      {
        "sub": "户外",
        "zh": "露营",
        "en": "Camping",
        "variants": "camping, camp, camper"
      },
      {
        "sub": "户外",
        "zh": "徒步",
        "en": "Hiking",
        "variants": "hiking, hike, trekking, trek"
      },
      {
        "sub": "户外",
        "zh": "登山",
        "en": "Mountaineering/Climbing",
        "variants": "mountaineering, climbing, mountain climbing, alpine"
      },
      {
        "sub": "户外",
        "zh": "旅行",
        "en": "Travel",
        "variants": "travel, traveling, trip, journey"
      },
      {
        "sub": "户外",
        "zh": "钓鱼",
        "en": "Fishing",
        "variants": "fishing, fish, angling"
      },
      {
        "sub": "海边",
        "zh": "海边",
        "en": "Seaside/Beach",
        "variants": "seaside, beach, shore, coast"
      },
      {
        "sub": "海边",
        "zh": "沙滩",
        "en": "Beach",
        "variants": "beach, sandy beach, beachside"
      },
      {
        "sub": "海边",
        "zh": "度假",
        "en": "Vacation",
        "variants": "vacation, holiday, getaway, resort"
      },
      {
        "sub": "海边",
        "zh": "游泳",
        "en": "Swimming",
        "variants": "swimming, swim, swimming pool"
      },
      {
        "sub": "海边",
        "zh": "游船",
        "en": "Cruise/Boating",
        "variants": "cruise, cruising, boating, yacht, sailing"
      },
      {
        "sub": "派对节日",
        "zh": "派对",
        "en": "Party",
        "variants": "party, club, nightclub, night out"
      },
      {
        "sub": "派对节日",
        "zh": "节日",
        "en": "Festival/Holiday",
        "variants": "festival, holiday, carnival, celebration"
      },
      {
        "sub": "派对节日",
        "zh": "圣诞",
        "en": "Christmas",
        "variants": "christmas, xmas, christmas day"
      },
      {
        "sub": "派对节日",
        "zh": "万圣节",
        "en": "Halloween",
        "variants": "halloween, halloween night"
      },
      {
        "sub": "派对节日",
        "zh": "新年",
        "en": "New Year",
        "variants": "new year, new year's, new year's eve, nye"
      },
      {
        "sub": "派对节日",
        "zh": "家庭聚会",
        "en": "Family Gathering",
        "variants": "family gathering, family party, family reunion, gathering"
      },
      {
        "sub": "校园街头",
        "zh": "校园",
        "en": "School/Campus",
        "variants": "school, campus, college, university"
      },
      {
        "sub": "校园街头",
        "zh": "街头",
        "en": "Street",
        "variants": "street, street style, urban"
      },
      {
        "sub": "校园街头",
        "zh": "潮流",
        "en": "Trendy/Fashion",
        "variants": "trendy, fashion, stylish, trend"
      },
      {
        "sub": "校园街头",
        "zh": "滑板",
        "en": "Skateboarding",
        "variants": "skate, skateboarding, skater, skateboard"
      },
      {
        "sub": "校园街头",
        "zh": "嘻哈",
        "en": "Hip Hop",
        "variants": "hip hop, hiphop, rap, rap style"
      },
      {
        "sub": "校园街头",
        "zh": "复古穿搭",
        "en": "Vintage Outfit",
        "variants": "vintage outfit, retro outfit, vintage style outfit"
      }
    ],
    "季节(Season)": [
      {
        "sub": "基本季节",
        "zh": "春季",
        "en": "Spring",
        "variants": "spring, spring season"
      },
      {
        "sub": "基本季节",
        "zh": "夏季",
        "en": "Summer",
        "variants": "summer, summer season"
      },
      {
        "sub": "基本季节",
        "zh": "秋季",
        "en": "Autumn/Fall",
        "variants": "autumn, fall, autumn season, fall season"
      },
      {
        "sub": "基本季节",
        "zh": "冬季",
        "en": "Winter",
        "variants": "winter, winter season"
      },
      {
        "sub": "跨季节",
        "zh": "春秋",
        "en": "Spring/Autumn",
        "variants": "spring/autumn, spring and autumn, spring fall, transitional"
      },
      {
        "sub": "跨季节",
        "zh": "秋冬",
        "en": "Autumn/Winter",
        "variants": "autumn/winter, autumn and winter, fall/winter, fall winter"
      },
      {
        "sub": "跨季节",
        "zh": "四季",
        "en": "Four Seasons",
        "variants": "four seasons, all seasons, 4 seasons"
      },
      {
        "sub": "跨季节",
        "zh": "夏日",
        "en": "Summer Day",
        "variants": "summer day, summer time, summertime"
      },
      {
        "sub": "跨季节",
        "zh": "冬季保暖",
        "en": "Winter Warm",
        "variants": "winter warm, winter保暖, warm winter, thermal winter"
      },
      {
        "sub": "跨季节",
        "zh": "四季皆宜",
        "en": "All-Season/Year-Round",
        "variants": "all-season, all season, year-round, all-year, all year round"
      },
      {
        "sub": "体感",
        "zh": "轻薄",
        "en": "Lightweight",
        "variants": "lightweight, light-weight, light weight, light, thin"
      },
      {
        "sub": "体感",
        "zh": "透气",
        "en": "Breathable",
        "variants": "breathable, ventilated, ventilation"
      },
      {
        "sub": "体感",
        "zh": "清凉",
        "en": "Cooling/Refreshing",
        "variants": "cooling, cool, refreshing, cool fabric, ice silk"
      },
      {
        "sub": "体感",
        "zh": "保暖",
        "en": "Warm",
        "variants": "warm, warming, warmth"
      },
      {
        "sub": "体感",
        "zh": "加厚",
        "en": "Thickened/Heavy",
        "variants": "thickened, thick, heavy, heavy-weight, heavyweight"
      },
      {
        "sub": "体感",
        "zh": "防风",
        "en": "Windproof",
        "variants": "windproof, wind-proof, wind resistant, wind-resistant"
      }
    ],
    "袖长(Sleeve)": [
      {
        "sub": "",
        "zh": "短袖",
        "en": "Short Sleeve",
        "variants": "short sleeve, short-sleeve, short-sleeved"
      },
      {
        "sub": "",
        "zh": "长袖",
        "en": "Long Sleeve",
        "variants": "long sleeve, long-sleeve, long-sleeved, full sleeve"
      },
      {
        "sub": "",
        "zh": "无袖",
        "en": "Sleeveless",
        "variants": "sleeveless, no sleeve, sleeve-less"
      },
      {
        "sub": "",
        "zh": "七分袖",
        "en": "3/4 Sleeve",
        "variants": "3/4 sleeve, three-quarter sleeve, 3/4, three-quarter"
      },
      {
        "sub": "",
        "zh": "五分袖",
        "en": "Half Sleeve/Elbow Sleeve",
        "variants": "half sleeve, half-sleeve, elbow sleeve, 1/2 sleeve"
      },
      {
        "sub": "",
        "zh": "落肩袖",
        "en": "Drop Shoulder",
        "variants": "drop shoulder, drop-shoulder, dropped shoulder, drop shoulder sleeve"
      },
      {
        "sub": "",
        "zh": "插肩袖",
        "en": "Raglan Sleeve",
        "variants": "raglan, raglan sleeve, raglan-style, raglan cut"
      },
      {
        "sub": "",
        "zh": "背心款",
        "en": "Tank Style",
        "variants": "tank, tank top, tank style, sleeveless top"
      },
      {
        "sub": "",
        "zh": "无袖款",
        "en": "Sleeveless Style",
        "variants": "sleeveless, sleeveless style, no-sleeve style"
      },
      {
        "sub": "",
        "zh": "宽袖",
        "en": "Wide/Loose Sleeve",
        "variants": "wide sleeve, loose sleeve, bell sleeve, flare sleeve, batwing sleeve"
      },
      {
        "sub": "",
        "zh": "收口袖",
        "en": "Cuffed Sleeve",
        "variants": "cuffed sleeve, ribbed cuff, elastic cuff, fitted cuff, ribbed sleeve cuff"
      }
    ],
    "腰型(Waist)": [
      {
        "sub": "",
        "zh": "收腰",
        "en": "Waist-Cinching/Fitted",
        "variants": "waist-cinching, waist-cinching, fitted waist, slim waist, cinched waist, waist-defining"
      },
      {
        "sub": "",
        "zh": "高腰",
        "en": "High-Waist",
        "variants": "high-waist, high waist, high-waisted, high-rise, high rise"
      },
      {
        "sub": "",
        "zh": "松紧腰",
        "en": "Elastic Waist",
        "variants": "elastic waist, elasticated waist, elastic band, elastane waist"
      },
      {
        "sub": "",
        "zh": "抽绳腰带",
        "en": "Drawstring Waist",
        "variants": "drawstring waist, drawstring belt, drawstring waistband, adjustable drawstring"
      },
      {
        "sub": "",
        "zh": "系腰带",
        "en": "Belted Waist",
        "variants": "belt, belted, belt waist, belted waist, with belt, belt loops"
      }
    ],
    "功能特性(Feature)": [
      {
        "sub": "",
        "zh": "弹力",
        "en": "Stretch/Elastic",
        "variants": "stretch, stretchy, elastic, elastane, spandex"
      },
      {
        "sub": "",
        "zh": "速干",
        "en": "Quick-Dry",
        "variants": "quick-dry, quick dry, fast-dry, fast dry, quick drying"
      },
      {
        "sub": "",
        "zh": "透气",
        "en": "Breathable",
        "variants": "breathable, ventilated, ventilation, air-permeable"
      },
      {
        "sub": "",
        "zh": "吸湿排汗",
        "en": "Moisture-Wicking",
        "variants": "moisture-wicking, moisture wicking, sweat-wicking, sweat absorption, wicking"
      },
      {
        "sub": "",
        "zh": "遇水显色",
        "en": "Water-Reactive Color",
        "variants": "water-reactive, water activated, hydrochromic, color-changing when wet, water reactive print"
      }
    ],
    "面料/材质(Material)": [
      {
        "sub": "常规面料",
        "zh": "棉",
        "en": "Cotton",
        "variants": "cotton"
      },
      {
        "sub": "常规面料",
        "zh": "纯棉",
        "en": "Pure Cotton",
        "variants": "pure cotton, 100% cotton, all cotton"
      },
      {
        "sub": "常规面料",
        "zh": "棉混纺",
        "en": "Cotton Blend",
        "variants": "cotton blend, cotton blended, cotton-mixed"
      },
      {
        "sub": "常规面料",
        "zh": "涤纶",
        "en": "Polyester",
        "variants": "polyester"
      },
      {
        "sub": "常规面料",
        "zh": "聚酯纤维",
        "en": "Polyester Fiber",
        "variants": "polyester fiber, poly fiber, polyester filament"
      },
      {
        "sub": "常规面料",
        "zh": "锦纶",
        "en": "Nylon",
        "variants": "nylon, polyamide, pa"
      },
      {
        "sub": "常规面料",
        "zh": "氨纶",
        "en": "Spandex/Elastane",
        "variants": "spandex, elastane, lycra"
      },
      {
        "sub": "夏季面料",
        "zh": "亚麻",
        "en": "Linen",
        "variants": "linen, flax"
      },
      {
        "sub": "夏季面料",
        "zh": "棉麻",
        "en": "Cotton Linen",
        "variants": "cotton linen, cotton-linen, linen cotton, cotton and linen"
      },
      {
        "sub": "夏季面料",
        "zh": "冰丝",
        "en": "Ice Silk",
        "variants": "ice silk, cooling silk, ice fiber, cool silk"
      },
      {
        "sub": "夏季面料",
        "zh": "速干面料",
        "en": "Quick-Dry Fabric",
        "variants": "quick-dry fabric, quick dry fabric, fast-dry fabric, moisture-wicking fabric"
      },
      {
        "sub": "夏季面料",
        "zh": "轻薄面料",
        "en": "Lightweight Fabric",
        "variants": "lightweight fabric, light fabric, thin fabric, sheer fabric"
      },
      {
        "sub": "夏季面料",
        "zh": "透气面料",
        "en": "Breathable Fabric",
        "variants": "breathable fabric, ventilated fabric, air-permeable fabric"
      },
      {
        "sub": "秋冬面料",
        "zh": "抓绒",
        "en": "Fleece",
        "variants": "fleece, fleece fabric, fleeced"
      },
      {
        "sub": "秋冬面料",
        "zh": "羊羔绒",
        "en": "Sherpa/Lamb Fleece",
        "variants": "sherpa, lamb fleece, sherpa fleece, faux shearling, lamb wool"
      },
      {
        "sub": "秋冬面料",
        "zh": "摇粒绒",
        "en": "Polar Fleece",
        "variants": "polar fleece, microfleece, micro fleece, polarfleece"
      },
      {
        "sub": "秋冬面料",
        "zh": "针织",
        "en": "Knit",
        "variants": "knit, knitted, knitting, knitwear"
      },
      {
        "sub": "秋冬面料",
        "zh": "毛呢",
        "en": "Woolen/Wool Cloth",
        "variants": "woolen, woolen cloth, wool fabric, wool coating, melton"
      },
      {
        "sub": "秋冬面料",
        "zh": "灯芯绒",
        "en": "Corduroy",
        "variants": "corduroy, cord, wale corduroy"
      },
      {
        "sub": "秋冬面料",
        "zh": "加绒",
        "en": "Fleece-Lined",
        "variants": "fleece-lined, fleece lined, lined with fleece, thermal lined, brushed inside"
      },
      {
        "sub": "秋冬面料",
        "zh": "夹棉",
        "en": "Padded/Quilted",
        "variants": "padded, quilted, padded lining, cotton-padded, quilted lining"
      },
      {
        "sub": "牛仔/外套",
        "zh": "牛仔",
        "en": "Denim",
        "variants": "denim, denim fabric, jean fabric"
      },
      {
        "sub": "牛仔/外套",
        "zh": "帆布",
        "en": "Canvas",
        "variants": "canvas, canvas fabric, duck canvas"
      },
      {
        "sub": "牛仔/外套",
        "zh": "皮革",
        "en": "Leather",
        "variants": "leather, genuine leather, real leather"
      },
      {
        "sub": "牛仔/外套",
        "zh": "仿皮",
        "en": "Faux Leather",
        "variants": "faux leather, faux, pu leather, synthetic leather, vegan leather, imitation leather"
      },
      {
        "sub": "牛仔/外套",
        "zh": "麂皮绒",
        "en": "Suede",
        "variants": "suede, suede fabric, faux suede, nubuck"
      },
      {
        "sub": "牛仔/外套",
        "zh": "防风面料",
        "en": "Windproof Fabric",
        "variants": "windproof fabric, wind-resistant fabric, wind shell fabric, windbreaker fabric"
      }
    ],
    "颜色(Color)": [
      {
        "sub": "中性色",
        "zh": "黑色",
        "en": "Black",
        "variants": "black"
      },
      {
        "sub": "中性色",
        "zh": "白色",
        "en": "White",
        "variants": "white"
      },
      {
        "sub": "中性色",
        "zh": "灰色",
        "en": "Gray/Grey",
        "variants": "gray, grey"
      },
      {
        "sub": "中性色",
        "zh": "深灰色",
        "en": "Dark Gray",
        "variants": "dark gray, dark grey, charcoal, charcoal gray, charcoal grey"
      },
      {
        "sub": "中性色",
        "zh": "浅灰色",
        "en": "Light Gray",
        "variants": "light gray, light grey, ash gray, ash grey, heather gray"
      },
      {
        "sub": "中性色",
        "zh": "米色",
        "en": "Beige",
        "variants": "beige, cream, off-white, sand"
      },
      {
        "sub": "中性色",
        "zh": "卡其色",
        "en": "Khaki",
        "variants": "khaki, khaki color, kakhi"
      },
      {
        "sub": "蓝色系",
        "zh": "蓝色",
        "en": "Blue",
        "variants": "blue"
      },
      {
        "sub": "蓝色系",
        "zh": "深蓝色",
        "en": "Dark Blue/Navy",
        "variants": "dark blue, navy, navy blue, deep blue"
      },
      {
        "sub": "蓝色系",
        "zh": "藏青色",
        "en": "Navy Blue",
        "variants": "navy, navy blue, nautical blue, marine blue, midnight blue"
      },
      {
        "sub": "蓝色系",
        "zh": "浅蓝色",
        "en": "Light Blue",
        "variants": "light blue, sky blue, baby blue, powder blue, pale blue"
      },
      {
        "sub": "绿色系",
        "zh": "绿色",
        "en": "Green",
        "variants": "green"
      },
      {
        "sub": "绿色系",
        "zh": "军绿色",
        "en": "Army Green",
        "variants": "army green, olive green, military green, olive, khaki green"
      },
      {
        "sub": "绿色系",
        "zh": "墨绿色",
        "en": "Dark Green/Forest Green",
        "variants": "dark green, forest green, emerald green, deep green, hunter green"
      },
      {
        "sub": "棕色系",
        "zh": "棕色",
        "en": "Brown",
        "variants": "brown"
      },
      {
        "sub": "棕色系",
        "zh": "咖色",
        "en": "Coffee Brown",
        "variants": "coffee, coffee brown, mocha, mocha brown, espresso"
      },
      {
        "sub": "棕色系",
        "zh": "驼色",
        "en": "Camel",
        "variants": "camel, camel color, tan, camel beige"
      },
      {
        "sub": "黄色系",
        "zh": "黄色",
        "en": "Yellow",
        "variants": "yellow"
      },
      {
        "sub": "黄色系",
        "zh": "姜黄色",
        "en": "Ginger Yellow/Mustard",
        "variants": "ginger yellow, ginger, mustard, mustard yellow, turmeric, ochre"
      },
      {
        "sub": "红色系",
        "zh": "红色",
        "en": "Red",
        "variants": "red"
      },
      {
        "sub": "红色系",
        "zh": "酒红色",
        "en": "Wine Red/Burgundy",
        "variants": "wine, wine red, burgundy, maroon, bordeaux, wine"
      },
      {
        "sub": "红色系",
        "zh": "橙色",
        "en": "Orange",
        "variants": "orange"
      },
      {
        "sub": "红色系",
        "zh": "砖红色",
        "en": "Brick Red",
        "variants": "brick red, brick, terracotta, rust red, burnt orange"
      },
      {
        "sub": "紫色系",
        "zh": "紫色",
        "en": "Purple",
        "variants": "purple, violet, lavender, plum, amethyst"
      },
      {
        "sub": "粉色系",
        "zh": "粉色",
        "en": "Pink",
        "variants": "pink, rose, rosy, blush, coral pink"
      },
      {
        "sub": "浅色系",
        "zh": "杏色",
        "en": "Apricot",
        "variants": "apricot, apricot color, peach, peachy"
      },
      {
        "sub": "浅色系",
        "zh": "奶油色",
        "en": "Cream",
        "variants": "cream, cream color, creamy, ivory, vanilla"
      },
      {
        "sub": "亮色系",
        "zh": "荧光色",
        "en": "Fluorescent/Neon",
        "variants": "fluorescent, neon, neon color, fluorescent color, glow, neon bright"
      },
      {
        "sub": "组合色",
        "zh": "撞色",
        "en": "Contrast Color",
        "variants": "contrast color, color contrast, contrasting color, contrast"
      },
      {
        "sub": "组合色",
        "zh": "拼色",
        "en": "Color Patch/Spliced",
        "variants": "color patch, spliced color, pieced color, color block, patchwork color"
      },
      {
        "sub": "组合色",
        "zh": "多色",
        "en": "Multi-Color",
        "variants": "multi-color, multicolor, multi color, colorful, multi-colored"
      },
      {
        "sub": "组合色",
        "zh": "渐变色",
        "en": "Gradient Color",
        "variants": "gradient, gradient color, ombre, ombre color, color gradient, fade color"
      }
    ]
  },
  "正装": {
    "品类(Category)": [
      {
        "sub": "上衣类",
        "zh": "T恤",
        "en": "T-Shirt",
        "variants": "t-shirt, tshirt, tee, tshirts, tees"
      },
      {
        "sub": "上衣类",
        "zh": "衬衫",
        "en": "Shirt",
        "variants": "shirt, shirts"
      },
      {
        "sub": "上衣类",
        "zh": "Polo衫",
        "en": "Polo Shirt",
        "variants": "polo, polo shirt"
      },
      {
        "sub": "上衣类",
        "zh": "背心",
        "en": "Tank/Vest",
        "variants": "tank, tank top, vest, waistcoat, sleeveless top"
      },
      {
        "sub": "上衣类",
        "zh": "卫衣",
        "en": "Hoodie/Sweatshirt",
        "variants": "hoodie, hoodies, sweatshirt, sweatshirts"
      },
      {
        "sub": "外套类",
        "zh": "马甲",
        "en": "Vest/Gilet",
        "variants": "vest, gilet, waistcoat"
      },
      {
        "sub": "外套类",
        "zh": "西装外套",
        "en": "Blazer/Suit Jacket",
        "variants": "blazer, suit jacket, sports coat, sport coat"
      },
      {
        "sub": "裤装类",
        "zh": "休闲裤",
        "en": "Casual Pants",
        "variants": "casual pants"
      },
      {
        "sub": "裤装类",
        "zh": "工装裤",
        "en": "Cargo Pants",
        "variants": "cargo pants, cargo, cargo trousers"
      },
      {
        "sub": "裤装类",
        "zh": "牛仔裤",
        "en": "Jeans",
        "variants": "jeans, denim pants"
      },
      {
        "sub": "裤装类",
        "zh": "运动裤",
        "en": "Sweatpants/Track Pants",
        "variants": "sweatpants, track pants, athletic pants, joggers"
      },
      {
        "sub": "裤装类",
        "zh": "束脚裤",
        "en": "Joggers/Tapered Pants",
        "variants": "joggers, jogger, tapered pants, cuffed pants"
      },
      {
        "sub": "裤装类",
        "zh": "短裤",
        "en": "Shorts",
        "variants": "shorts, short"
      },
      {
        "sub": "裤装类",
        "zh": "沙滩裤",
        "en": "Boardshorts/Beach Shorts",
        "variants": "boardshorts, beach shorts, swim shorts, trunks"
      },
      {
        "sub": "裤装类",
        "zh": "西裤",
        "en": "Dress Pants/Trousers",
        "variants": "dress pants, trousers, suit pants, formal pants"
      },
      {
        "sub": "裤装类",
        "zh": "直筒裤",
        "en": "Straight-Leg Pants",
        "variants": "straight-leg pants, straight pants, straight leg"
      },
      {
        "sub": "裤装类",
        "zh": "阔腿裤",
        "en": "Wide-Leg Pants",
        "variants": "wide-leg pants, wide leg, wide-leg trousers"
      },
      {
        "sub": "裤装类",
        "zh": "五分裤",
        "en": "Knee-Length Shorts/Bermuda",
        "variants": "bermuda shorts, knee-length shorts, 3/4 shorts, half pants"
      },
      {
        "sub": "套装类",
        "zh": "西装套装",
        "en": "Suit Set/Formal Suit",
        "variants": "suit set, suit, suits, formal suit, business suit"
      },
      {
        "sub": "套装类",
        "zh": "T恤短裤套装",
        "en": "T-Shirt & Shorts Set",
        "variants": "t-shirt and shorts set, tee shorts set, t-shirt shorts set"
      },
      {
        "sub": "家居/睡衣类",
        "zh": "睡裤",
        "en": "Sleep Pants/Pyjama Bottoms",
        "variants": "sleep pants, pajama pants, pyjama bottoms, lounge pants"
      },
      {
        "sub": "家居/睡衣类",
        "zh": "家居裤",
        "en": "Home Pants/Lounge Pants",
        "variants": "home pants, lounge pants, house pants"
      },
      {
        "sub": "运动/泳装类",
        "zh": "运动短裤",
        "en": "Athletic Shorts/Sports Shorts",
        "variants": "athletic shorts, sports shorts, gym shorts, workout shorts"
      },
      {
        "sub": "运动/泳装类",
        "zh": "训练裤",
        "en": "Training Pants",
        "variants": "training pants, training trousers, workout pants"
      },
      {
        "sub": "运动/泳装类",
        "zh": "泳裤",
        "en": "Swim Trunks",
        "variants": "swim trunks, swimming trunks, swim shorts, trunks"
      },
      {
        "sub": "运动/泳装类",
        "zh": "沙滩裤",
        "en": "Boardshorts/Beach Shorts",
        "variants": "boardshorts, beach shorts, swim shorts"
      },
      {
        "sub": "运动/泳装类",
        "zh": "速干衣",
        "en": "Quick-Dry Shirt",
        "variants": "quick-dry shirt, quick dry shirt, fast-dry shirt, moisture-wicking shirt"
      }
    ],
    "套装规格(Pack/Set)": [
      {
        "sub": "正装套装",
        "zh": "西装两件套",
        "en": "Suit 2-Piece Set",
        "variants": "suit 2-piece set, two-piece suit, 2pc suit, suit and trousers set, suit and pants set"
      },
      {
        "sub": "正装套装",
        "zh": "西装三件套",
        "en": "Suit 3-Piece Set",
        "variants": "suit 3-piece set, three-piece suit, 3pc suit, suit vest trousers set"
      },
      {
        "sub": "正装套装",
        "zh": "马甲西装套装",
        "en": "Vest & Suit Set",
        "variants": "vest suit set, waistcoat suit set, vest and blazer set, vest and suit set"
      }
    ],
    "版型(Fit)": [
      {
        "sub": "",
        "zh": "宽松版",
        "en": "Loose Fit",
        "variants": "loose fit, loose, loose-fit, relaxed fit, relaxed"
      },
      {
        "sub": "",
        "zh": "修身版",
        "en": "Slim Fit",
        "variants": "slim fit, slim-fit, slim, muscle fit"
      },
      {
        "sub": "",
        "zh": "常规版",
        "en": "Regular Fit",
        "variants": "regular fit, regular-fit, regular, standard fit"
      },
      {
        "sub": "",
        "zh": "合身版",
        "en": "Tailored Fit",
        "variants": "tailored fit, fitted, fitted fit"
      },
      {
        "sub": "",
        "zh": "廓形版",
        "en": "Oversized/Boxy",
        "variants": "oversized, oversize, boxy fit, boxy, baggy, relaxed fit"
      },
      {
        "sub": "",
        "zh": "oversize风",
        "en": "Oversized Style",
        "variants": "oversized, oversize, oversized fit, oversized style"
      }
    ],
    "领型(Neckline)": [
      {
        "sub": "",
        "zh": "圆领",
        "en": "Crew Neck/Round Neck",
        "variants": "crew neck, crewneck, round neck, round-neck"
      },
      {
        "sub": "",
        "zh": "V领",
        "en": "V-Neck",
        "variants": "v-neck, v neck, vneck"
      },
      {
        "sub": "",
        "zh": "翻领",
        "en": "Lapel/Collar",
        "variants": "lapel, collar, turned-down collar, fold-over collar"
      },
      {
        "sub": "",
        "zh": "立领",
        "en": "Stand Collar",
        "variants": "stand collar, stand-collar, stand-up collar, mandarin collar"
      },
      {
        "sub": "",
        "zh": "亨利领",
        "en": "Henley Neck",
        "variants": "henley, henley neck, henley collar, henley shirt"
      },
      {
        "sub": "",
        "zh": "半高领",
        "en": "Mock Neck/Half High Collar",
        "variants": "mock neck, mockneck, half high collar, half-high collar, mock turtleneck"
      },
      {
        "sub": "",
        "zh": "高领",
        "en": "Turtleneck/High Neck",
        "variants": "turtleneck, turtle neck, high neck, high-collar, roll neck"
      },
      {
        "sub": "",
        "zh": "扣领",
        "en": "Button-Down Collar",
        "variants": "button-down collar, button-down, button down"
      },
      {
        "sub": "",
        "zh": "古巴领",
        "en": "Cuban Collar",
        "variants": "cuban collar, cuban, camp collar, cabin collar, revere collar"
      },
      {
        "sub": "",
        "zh": "开领",
        "en": "Open Collar/Notch Lapel",
        "variants": "open collar, open-collar, notch lapel, notched collar"
      },
      {
        "sub": "",
        "zh": "Polo领",
        "en": "Polo Collar",
        "variants": "polo collar, polo, polo shirt collar, knit collar"
      }
    ],
    "闭合方式(Closure)": [
      {
        "sub": "",
        "zh": "套头",
        "en": "Pullover",
        "variants": "pullover, pull-on, pull on, slip-on, slip on, overhead"
      },
      {
        "sub": "",
        "zh": "拉链",
        "en": "Zipper",
        "variants": "zipper, zip, zip-up, zip up, zip closure, zipper closure"
      },
      {
        "sub": "",
        "zh": "半拉链",
        "en": "Half-Zip",
        "variants": "half-zip, half zip, quarter-zip, quarter zip, 1/4 zip, partial zip"
      },
      {
        "sub": "",
        "zh": "纽扣",
        "en": "Button",
        "variants": "button, buttons, button closure"
      },
      {
        "sub": "",
        "zh": "单排扣",
        "en": "Single-Breasted",
        "variants": "single-breasted, single breasted, single row button"
      },
      {
        "sub": "",
        "zh": "双排扣",
        "en": "Double-Breasted",
        "variants": "double-breasted, double breasted, double row button"
      },
      {
        "sub": "",
        "zh": "抽绳",
        "en": "Drawstring",
        "variants": "drawstring, draw string, draw-string"
      },
      {
        "sub": "",
        "zh": "松紧腰",
        "en": "Elastic Waist",
        "variants": "elastic waist, elasticated waist, elastic band, elastane waist"
      },
      {
        "sub": "",
        "zh": "拉链门襟",
        "en": "Zipper Fly/Front",
        "variants": "zipper fly, zip fly, zip-front, zipper front, zipper placket"
      },
      {
        "sub": "",
        "zh": "纽扣门襟",
        "en": "Button Fly/Front",
        "variants": "button fly, button-front, button front, button placket, button-up front"
      }
    ],
    "风格(Style)": [
      {
        "sub": "",
        "zh": "民族风",
        "en": "Ethnic",
        "variants": "ethnic, ethnic style, folk style, tribal"
      },
      {
        "sub": "",
        "zh": "商务风",
        "en": "Business Style",
        "variants": "business, business style, business professional"
      },
      {
        "sub": "",
        "zh": "通勤风",
        "en": "Commuter Style",
        "variants": "commuter, commute, commuting style, work wear style"
      },
      {
        "sub": "",
        "zh": "休闲日常",
        "en": "Casual/Daily",
        "variants": "casual, everyday, daily, leisure, leisurely"
      },
      {
        "sub": "",
        "zh": "y2k",
        "en": "Y2K",
        "variants": "y2k, y2k style, y2k fashion, 2000s style, millennium style"
      },
      {
        "sub": "",
        "zh": "街头",
        "en": "Streetwear",
        "variants": "streetwear, street, street style, street fashion"
      },
      {
        "sub": "",
        "zh": "复古",
        "en": "Vintage/Retro",
        "variants": "vintage, retro, classic style, old school"
      },
      {
        "sub": "",
        "zh": "可爱",
        "en": "Cute",
        "variants": "cute, kawaii, sweet, adorable"
      },
      {
        "sub": "",
        "zh": "潮流",
        "en": "Trendy/Fashion",
        "variants": "trendy, fashion, fashionable, stylish, trend, trendy style"
      }
    ],
    "图案/花色(Pattern)": [
      {
        "sub": "基础花色",
        "zh": "纯色",
        "en": "Solid Color",
        "variants": "solid color, solid, plain"
      },
      {
        "sub": "基础花色",
        "zh": "条纹",
        "en": "Striped",
        "variants": "stripe, striped, stripe pattern, pinstripe"
      },
      {
        "sub": "基础花色",
        "zh": "格纹",
        "en": "Plaid/Checkered",
        "variants": "plaid, checkered, check, checked, tartan, gingham"
      },
      {
        "sub": "基础花色",
        "zh": "撞色",
        "en": "Color-Block/Contrast",
        "variants": "color-block, color block, colorblock, color-blocking, contrast color, contrast"
      },
      {
        "sub": "基础花色",
        "zh": "拼色",
        "en": "Patchwork/Color Patch",
        "variants": "patchwork, color patch, patch, pieced color"
      },
      {
        "sub": "基础花色",
        "zh": "渐变",
        "en": "Gradient/Ombre",
        "variants": "gradient, ombre, faded, fade, ombre effect, color gradient"
      },
      {
        "sub": "基础花色",
        "zh": "豹纹",
        "en": "Leopard Print",
        "variants": "leopard, leopard print, leopard pattern, animal print"
      },
      {
        "sub": "基础花色",
        "zh": "波点",
        "en": "Polka Dot",
        "variants": "polka dot, polka-dot, dotted, dots, dot pattern"
      },
      {
        "sub": "印花类",
        "zh": "字母印花",
        "en": "Letter Print",
        "variants": "letter, letter print, text print, typography, letter graphic"
      },
      {
        "sub": "印花类",
        "zh": "数字印花",
        "en": "Number Print",
        "variants": "number, number print, numeral print, numeric graphic"
      },
      {
        "sub": "印花类",
        "zh": "图形印花",
        "en": "Graphic Print",
        "variants": "graphic, graphic print, graphic pattern, graphic design"
      },
      {
        "sub": "印花类",
        "zh": "几何印花",
        "en": "Geometric Print",
        "variants": "geometric, geometric print, geometric pattern, abstract"
      },
      {
        "sub": "风格图案",
        "zh": "迷彩风",
        "en": "Camouflage",
        "variants": "camouflage, camo, camo print, camo pattern"
      },
      {
        "sub": "风格图案",
        "zh": "复古风图案",
        "en": "Vintage Pattern",
        "variants": "vintage pattern, vintage print, retro pattern, retro print"
      },
      {
        "sub": "风格图案",
        "zh": "街头风图案",
        "en": "Streetwear Pattern",
        "variants": "streetwear pattern, street print, urban print, graffiti"
      },
      {
        "sub": "风格图案",
        "zh": "国潮风图案",
        "en": "Chinese Trend Pattern",
        "variants": "chinese trend, china trend, national trend, c-pop, guochao"
      },
      {
        "sub": "风格图案",
        "zh": "波西米亚风",
        "en": "Bohemian",
        "variants": "bohemian, boho, boho-chic, boho print"
      },
      {
        "sub": "风格图案",
        "zh": "y2k风",
        "en": "Y2K Pattern",
        "variants": "y2k pattern, y2k print, 2000s graphic, millennium graphic"
      },
      {
        "sub": "风格图案",
        "zh": "热带风",
        "en": "Tropical",
        "variants": "tropical, tropical pattern, tropical print, tropical design"
      },
      {
        "sub": "节日图案",
        "zh": "圣诞图案",
        "en": "Christmas Pattern",
        "variants": "christmas, christmas pattern, christmas print, xmas, santa, reindeer, snowflake"
      },
      {
        "sub": "节日图案",
        "zh": "万圣节图案",
        "en": "Halloween Pattern",
        "variants": "halloween, halloween pattern, halloween print, pumpkin, ghost, skull halloween"
      },
      {
        "sub": "节日图案",
        "zh": "独立日",
        "en": "Independence Day",
        "variants": "independence day, 4th of july, july 4th, stars and stripes, patriotic"
      },
      {
        "sub": "节日图案",
        "zh": "亡灵节",
        "en": "Day of the Dead",
        "variants": "day of the dead, dia de los muertos, sugar skull, mexico"
      },
      {
        "sub": "节日图案",
        "zh": "父亲节",
        "en": "Father's Day",
        "variants": "father's day, fathers day, dad, daddy"
      },
      {
        "sub": "元素图案",
        "zh": "动物",
        "en": "Animal",
        "variants": "animal, animal print, animal pattern, creature"
      },
      {
        "sub": "元素图案",
        "zh": "骷髅",
        "en": "Skull",
        "variants": "skull, skull print, skull pattern, skeleton, death head"
      },
      {
        "sub": "元素图案",
        "zh": "火焰",
        "en": "Flame",
        "variants": "flame, flames, fire, fire print, flame pattern"
      },
      {
        "sub": "元素图案",
        "zh": "摩托车",
        "en": "Motorcycle",
        "variants": "motorcycle, motorcycle print, motorbike, harley, biker graphic"
      },
      {
        "sub": "元素图案",
        "zh": "花卉",
        "en": "Floral/Flower",
        "variants": "floral, flower, flowers, botanical, floral print, flower pattern"
      },
      {
        "sub": "元素图案",
        "zh": "棕榈叶",
        "en": "Palm Leaf",
        "variants": "palm, palm leaf, palm print, tropical leaf, monstera, palm tree"
      },
      {
        "sub": "印花位置",
        "zh": "胸前小标",
        "en": "Chest Small Logo",
        "variants": "chest logo, chest small logo, chest badge, chest emblem, front small logo"
      },
      {
        "sub": "印花位置",
        "zh": "背部大印花",
        "en": "Back Large Print",
        "variants": "back print, back large print, back graphic, large back print, full back print"
      },
      {
        "sub": "印花位置",
        "zh": "袖口图案",
        "en": "Sleeve Print",
        "variants": "sleeve print, sleeve graphic, sleeve pattern, cuff print"
      },
      {
        "sub": "印花位置",
        "zh": "满版图案",
        "en": "All-Over Print",
        "variants": "all-over print, all over print, full print, allover, all-over pattern"
      },
      {
        "sub": "印花位置",
        "zh": "局部印花",
        "en": "Partial Print",
        "variants": "partial print, local print, localized print, spot print"
      },
      {
        "sub": "印花位置",
        "zh": "前胸字母",
        "en": "Front Letter Print",
        "variants": "front letter, front text, chest letter, front lettering"
      },
      {
        "sub": "印花位置",
        "zh": "后背字母",
        "en": "Back Letter Print",
        "variants": "back letter, back text, back lettering, rear letter"
      },
      {
        "sub": "印花位置",
        "zh": "侧边印花",
        "en": "Side Print",
        "variants": "side print, side graphic, side pattern, lateral print"
      }
    ],
    "场景(Occasion)": [
      {
        "sub": "日常",
        "zh": "日常",
        "en": "Everyday/Daily",
        "variants": "everyday, daily, day-to-day"
      },
      {
        "sub": "日常",
        "zh": "通勤",
        "en": "Commuting",
        "variants": "commute, commuter, commuting"
      },
      {
        "sub": "日常",
        "zh": "居家",
        "en": "Home/Lounge",
        "variants": "home, lounge, lounging, around the house"
      },
      {
        "sub": "日常",
        "zh": "出街",
        "en": "Going Out/Outing",
        "variants": "outing, outings, going out, out and about, day out"
      },
      {
        "sub": "日常",
        "zh": "休闲",
        "en": "Casual/Leisure",
        "variants": "casual, leisure, leisurely, relaxed"
      },
      {
        "sub": "日常",
        "zh": "约会",
        "en": "Date",
        "variants": "date, dating, date night"
      },
      {
        "sub": "商务",
        "zh": "商务",
        "en": "Business",
        "variants": "business, business occasion"
      },
      {
        "sub": "商务",
        "zh": "办公室",
        "en": "Office",
        "variants": "office, workplace"
      },
      {
        "sub": "商务",
        "zh": "职场",
        "en": "Workplace/Professional",
        "variants": "work, professional, workplace"
      },
      {
        "sub": "商务",
        "zh": "会议",
        "en": "Meeting/Conference",
        "variants": "meeting, conference, convention"
      },
      {
        "sub": "商务",
        "zh": "正装",
        "en": "Formal",
        "variants": "formal, formal occasion, formal wear, formal attire"
      },
      {
        "sub": "商务",
        "zh": "商务休闲",
        "en": "Business Casual",
        "variants": "business casual, smart casual, business-casual"
      },
      {
        "sub": "运动",
        "zh": "健身",
        "en": "Gym/Fitness",
        "variants": "gym, fitness, workout, exercise, training"
      },
      {
        "sub": "运动",
        "zh": "跑步",
        "en": "Running",
        "variants": "running, run, jog, jogging"
      },
      {
        "sub": "运动",
        "zh": "训练",
        "en": "Training",
        "variants": "training, workout, exercise, drill"
      },
      {
        "sub": "运动",
        "zh": "篮球",
        "en": "Basketball",
        "variants": "basketball, bball, hoops"
      },
      {
        "sub": "运动",
        "zh": "足球",
        "en": "Soccer/Football",
        "variants": "soccer, football, futbol"
      },
      {
        "sub": "运动",
        "zh": "骑行",
        "en": "Cycling",
        "variants": "cycling, biking, bike riding"
      },
      {
        "sub": "运动",
        "zh": "瑜伽",
        "en": "Yoga",
        "variants": "yoga, yogi, pilates"
      },
      {
        "sub": "运动",
        "zh": "高尔夫",
        "en": "Golf",
        "variants": "golf, golfing"
      },
      {
        "sub": "户外",
        "zh": "户外",
        "en": "Outdoor",
        "variants": "outdoor, outdoors, outside"
      },
      {
        "sub": "户外",
        "zh": "露营",
        "en": "Camping",
        "variants": "camping, camp, camper"
      },
      {
        "sub": "户外",
        "zh": "徒步",
        "en": "Hiking",
        "variants": "hiking, hike, trekking, trek"
      },
      {
        "sub": "户外",
        "zh": "登山",
        "en": "Mountaineering/Climbing",
        "variants": "mountaineering, climbing, mountain climbing, alpine"
      },
      {
        "sub": "户外",
        "zh": "旅行",
        "en": "Travel",
        "variants": "travel, traveling, trip, journey"
      },
      {
        "sub": "户外",
        "zh": "钓鱼",
        "en": "Fishing",
        "variants": "fishing, fish, angling"
      },
      {
        "sub": "海边",
        "zh": "海边",
        "en": "Seaside/Beach",
        "variants": "seaside, beach, shore, coast"
      },
      {
        "sub": "海边",
        "zh": "沙滩",
        "en": "Beach",
        "variants": "beach, sandy beach, beachside"
      },
      {
        "sub": "海边",
        "zh": "度假",
        "en": "Vacation",
        "variants": "vacation, holiday, getaway, resort"
      },
      {
        "sub": "海边",
        "zh": "游泳",
        "en": "Swimming",
        "variants": "swimming, swim, swimming pool"
      },
      {
        "sub": "海边",
        "zh": "游船",
        "en": "Cruise/Boating",
        "variants": "cruise, cruising, boating, yacht, sailing"
      },
      {
        "sub": "派对节日",
        "zh": "派对",
        "en": "Party",
        "variants": "party, club, nightclub, night out"
      },
      {
        "sub": "派对节日",
        "zh": "节日",
        "en": "Festival/Holiday",
        "variants": "festival, holiday, carnival, celebration"
      },
      {
        "sub": "派对节日",
        "zh": "圣诞",
        "en": "Christmas",
        "variants": "christmas, xmas, christmas day"
      },
      {
        "sub": "派对节日",
        "zh": "万圣节",
        "en": "Halloween",
        "variants": "halloween, halloween night"
      },
      {
        "sub": "派对节日",
        "zh": "新年",
        "en": "New Year",
        "variants": "new year, new year's, new year's eve, nye"
      },
      {
        "sub": "派对节日",
        "zh": "家庭聚会",
        "en": "Family Gathering",
        "variants": "family gathering, family party, family reunion, gathering"
      },
      {
        "sub": "校园街头",
        "zh": "校园",
        "en": "School/Campus",
        "variants": "school, campus, college, university"
      },
      {
        "sub": "校园街头",
        "zh": "街头",
        "en": "Street",
        "variants": "street, street style, urban"
      },
      {
        "sub": "校园街头",
        "zh": "潮流",
        "en": "Trendy/Fashion",
        "variants": "trendy, fashion, stylish, trend"
      },
      {
        "sub": "校园街头",
        "zh": "滑板",
        "en": "Skateboarding",
        "variants": "skate, skateboarding, skater, skateboard"
      },
      {
        "sub": "校园街头",
        "zh": "嘻哈",
        "en": "Hip Hop",
        "variants": "hip hop, hiphop, rap, rap style"
      },
      {
        "sub": "校园街头",
        "zh": "复古穿搭",
        "en": "Vintage Outfit",
        "variants": "vintage outfit, retro outfit, vintage style outfit"
      }
    ],
    "季节(Season)": [
      {
        "sub": "基本季节",
        "zh": "春季",
        "en": "Spring",
        "variants": "spring, spring season"
      },
      {
        "sub": "基本季节",
        "zh": "夏季",
        "en": "Summer",
        "variants": "summer, summer season"
      },
      {
        "sub": "基本季节",
        "zh": "秋季",
        "en": "Autumn/Fall",
        "variants": "autumn, fall, autumn season, fall season"
      },
      {
        "sub": "基本季节",
        "zh": "冬季",
        "en": "Winter",
        "variants": "winter, winter season"
      },
      {
        "sub": "跨季节",
        "zh": "春秋",
        "en": "Spring/Autumn",
        "variants": "spring/autumn, spring and autumn, spring fall, transitional"
      },
      {
        "sub": "跨季节",
        "zh": "秋冬",
        "en": "Autumn/Winter",
        "variants": "autumn/winter, autumn and winter, fall/winter, fall winter"
      },
      {
        "sub": "跨季节",
        "zh": "四季",
        "en": "Four Seasons",
        "variants": "four seasons, all seasons, 4 seasons"
      },
      {
        "sub": "跨季节",
        "zh": "夏日",
        "en": "Summer Day",
        "variants": "summer day, summer time, summertime"
      },
      {
        "sub": "跨季节",
        "zh": "冬季保暖",
        "en": "Winter Warm",
        "variants": "winter warm, winter保暖, warm winter, thermal winter"
      },
      {
        "sub": "跨季节",
        "zh": "四季皆宜",
        "en": "All-Season/Year-Round",
        "variants": "all-season, all season, year-round, all-year, all year round"
      },
      {
        "sub": "体感",
        "zh": "轻薄",
        "en": "Lightweight",
        "variants": "lightweight, light-weight, light weight, light, thin"
      },
      {
        "sub": "体感",
        "zh": "透气",
        "en": "Breathable",
        "variants": "breathable, ventilated, ventilation"
      },
      {
        "sub": "体感",
        "zh": "清凉",
        "en": "Cooling/Refreshing",
        "variants": "cooling, cool, refreshing, cool fabric, ice silk"
      },
      {
        "sub": "体感",
        "zh": "保暖",
        "en": "Warm",
        "variants": "warm, warming, warmth"
      },
      {
        "sub": "体感",
        "zh": "加厚",
        "en": "Thickened/Heavy",
        "variants": "thickened, thick, heavy, heavy-weight, heavyweight"
      },
      {
        "sub": "体感",
        "zh": "防风",
        "en": "Windproof",
        "variants": "windproof, wind-proof, wind resistant, wind-resistant"
      }
    ],
    "细节(Detail)": [
      {
        "sub": "口袋",
        "zh": "多口袋",
        "en": "Multi-Pocket",
        "variants": "multi-pocket, multi pocket, multiple pockets, multi-pocket design"
      },
      {
        "sub": "口袋",
        "zh": "大口袋",
        "en": "Large Pocket",
        "variants": "large pocket, big pocket, oversized pocket"
      },
      {
        "sub": "口袋",
        "zh": "拉链口袋",
        "en": "Zipper Pocket",
        "variants": "zipper pocket, zip pocket, zippered pocket"
      },
      {
        "sub": "口袋",
        "zh": "侧口袋",
        "en": "Side Pocket",
        "variants": "side pocket, side pockets, lateral pocket"
      },
      {
        "sub": "口袋",
        "zh": "胸前口袋",
        "en": "Chest Pocket",
        "variants": "chest pocket, chest pockets, breast pocket"
      },
      {
        "sub": "帽子",
        "zh": "连帽",
        "en": "Hooded",
        "variants": "hooded, hood, hooded design, with hood"
      },
      {
        "sub": "帽子",
        "zh": "可拆卸帽",
        "en": "Detachable Hood",
        "variants": "detachable hood, removable hood, detachable cap"
      },
      {
        "sub": "帽子",
        "zh": "抽绳帽",
        "en": "Drawstring Hood",
        "variants": "drawstring hood, drawstring hooded, adjustable hood"
      },
      {
        "sub": "下摆",
        "zh": "罗纹下摆",
        "en": "Ribbed Hem",
        "variants": "ribbed hem, ribbed bottom, ribbed cuff hem"
      },
      {
        "sub": "下摆",
        "zh": "弹力裤脚",
        "en": "Elastic Cuffs",
        "variants": "elastic cuffs, elastic ankle, elastic hem, cuffed ankle"
      },
      {
        "sub": "下摆",
        "zh": "束脚",
        "en": "Cuffed/Elastic Ankle",
        "variants": "cuffed, cuffed ankle, elastic ankle, banded bottom"
      },
      {
        "sub": "下摆",
        "zh": "开叉下摆",
        "en": "Slit Hem",
        "variants": "slit hem, side slit, vented hem, split hem, side vent"
      },
      {
        "sub": "工艺",
        "zh": "拼接",
        "en": "Splicing/Paneling",
        "variants": "splicing, panel, paneling, color panel, splice, pieced"
      },
      {
        "sub": "工艺",
        "zh": "撞色",
        "en": "Contrast Color",
        "variants": "contrast color, color contrast, contrasting color, contrast"
      },
      {
        "sub": "工艺",
        "zh": "破洞",
        "en": "Ripped/Torn",
        "variants": "ripped, torn, distressed, distress, ripped jeans, hole"
      },
      {
        "sub": "工艺",
        "zh": "做旧",
        "en": "Washed/Distressed",
        "variants": "washed, distressed, vintage wash, faded, stonewashed, acid wash"
      },
      {
        "sub": "工艺",
        "zh": "压褶",
        "en": "Pleated",
        "variants": "pleated, pleat, pressed pleat, creased"
      },
      {
        "sub": "工艺",
        "zh": "抽绳",
        "en": "Drawstring",
        "variants": "drawstring, draw string, draw-string, adjustable cord"
      },
      {
        "sub": "工艺",
        "zh": "刺绣",
        "en": "Embroidery",
        "variants": "embroidery, embroidered, embroidered detail, embroidery pattern"
      },
      {
        "sub": "工艺",
        "zh": "印花",
        "en": "Print",
        "variants": "print, printed, printing, printed detail"
      },
      {
        "sub": "工艺",
        "zh": "贴布",
        "en": "Applique/Patch",
        "variants": "applique, appliqu, patch, patches, patchwork, fabric patch"
      }
    ],
    "长度(Length)": [
      {
        "sub": "",
        "zh": "常规款",
        "en": "Regular Length",
        "variants": "regular length, regular, standard length, normal length"
      },
      {
        "sub": "",
        "zh": "短款",
        "en": "Short/Cropped",
        "variants": "short, short length, cropped, crop, cropped length"
      },
      {
        "sub": "",
        "zh": "中长款",
        "en": "Mid-Length",
        "variants": "mid-length, midi, mid length, knee-length, calf-length"
      },
      {
        "sub": "",
        "zh": "长款",
        "en": "Long",
        "variants": "long, long length, full length"
      },
      {
        "sub": "",
        "zh": "加长款",
        "en": "Extra Long/Extended",
        "variants": "extra long, extended length, extra-long, extra length, x-long"
      }
    ],
    "袖长(Sleeve)": [
      {
        "sub": "",
        "zh": "短袖",
        "en": "Short Sleeve",
        "variants": "short sleeve, short-sleeve, short-sleeved"
      },
      {
        "sub": "",
        "zh": "长袖",
        "en": "Long Sleeve",
        "variants": "long sleeve, long-sleeve, long-sleeved, full sleeve"
      },
      {
        "sub": "",
        "zh": "无袖",
        "en": "Sleeveless",
        "variants": "sleeveless, no sleeve, sleeve-less"
      },
      {
        "sub": "",
        "zh": "七分袖",
        "en": "3/4 Sleeve",
        "variants": "3/4 sleeve, three-quarter sleeve, 3/4, three-quarter"
      },
      {
        "sub": "",
        "zh": "五分袖",
        "en": "Half Sleeve/Elbow Sleeve",
        "variants": "half sleeve, half-sleeve, elbow sleeve, 1/2 sleeve"
      },
      {
        "sub": "",
        "zh": "落肩袖",
        "en": "Drop Shoulder",
        "variants": "drop shoulder, drop-shoulder, dropped shoulder, drop shoulder sleeve"
      },
      {
        "sub": "",
        "zh": "插肩袖",
        "en": "Raglan Sleeve",
        "variants": "raglan, raglan sleeve, raglan-style, raglan cut"
      },
      {
        "sub": "",
        "zh": "背心款",
        "en": "Tank Style",
        "variants": "tank, tank top, tank style, sleeveless top"
      },
      {
        "sub": "",
        "zh": "无袖款",
        "en": "Sleeveless Style",
        "variants": "sleeveless, sleeveless style, no-sleeve style"
      },
      {
        "sub": "",
        "zh": "宽袖",
        "en": "Wide/Loose Sleeve",
        "variants": "wide sleeve, loose sleeve, bell sleeve, flare sleeve, batwing sleeve"
      },
      {
        "sub": "",
        "zh": "收口袖",
        "en": "Cuffed Sleeve",
        "variants": "cuffed sleeve, ribbed cuff, elastic cuff, fitted cuff, ribbed sleeve cuff"
      }
    ],
    "面料/材质(Material)": [
      {
        "sub": "常规面料",
        "zh": "棉",
        "en": "Cotton",
        "variants": "cotton"
      },
      {
        "sub": "常规面料",
        "zh": "纯棉",
        "en": "Pure Cotton",
        "variants": "pure cotton, 100% cotton, all cotton"
      },
      {
        "sub": "常规面料",
        "zh": "棉混纺",
        "en": "Cotton Blend",
        "variants": "cotton blend, cotton blended, cotton-mixed"
      },
      {
        "sub": "常规面料",
        "zh": "涤纶",
        "en": "Polyester",
        "variants": "polyester"
      },
      {
        "sub": "常规面料",
        "zh": "聚酯纤维",
        "en": "Polyester Fiber",
        "variants": "polyester fiber, poly fiber, polyester filament"
      },
      {
        "sub": "常规面料",
        "zh": "锦纶",
        "en": "Nylon",
        "variants": "nylon, polyamide, pa"
      },
      {
        "sub": "常规面料",
        "zh": "氨纶",
        "en": "Spandex/Elastane",
        "variants": "spandex, elastane, lycra"
      },
      {
        "sub": "夏季面料",
        "zh": "亚麻",
        "en": "Linen",
        "variants": "linen, flax"
      },
      {
        "sub": "夏季面料",
        "zh": "棉麻",
        "en": "Cotton Linen",
        "variants": "cotton linen, cotton-linen, linen cotton, cotton and linen"
      },
      {
        "sub": "夏季面料",
        "zh": "冰丝",
        "en": "Ice Silk",
        "variants": "ice silk, cooling silk, ice fiber, cool silk"
      },
      {
        "sub": "夏季面料",
        "zh": "速干面料",
        "en": "Quick-Dry Fabric",
        "variants": "quick-dry fabric, quick dry fabric, fast-dry fabric, moisture-wicking fabric"
      },
      {
        "sub": "夏季面料",
        "zh": "轻薄面料",
        "en": "Lightweight Fabric",
        "variants": "lightweight fabric, light fabric, thin fabric, sheer fabric"
      },
      {
        "sub": "夏季面料",
        "zh": "透气面料",
        "en": "Breathable Fabric",
        "variants": "breathable fabric, ventilated fabric, air-permeable fabric"
      },
      {
        "sub": "秋冬面料",
        "zh": "抓绒",
        "en": "Fleece",
        "variants": "fleece, fleece fabric, fleeced"
      },
      {
        "sub": "秋冬面料",
        "zh": "羊羔绒",
        "en": "Sherpa/Lamb Fleece",
        "variants": "sherpa, lamb fleece, sherpa fleece, faux shearling, lamb wool"
      },
      {
        "sub": "秋冬面料",
        "zh": "摇粒绒",
        "en": "Polar Fleece",
        "variants": "polar fleece, microfleece, micro fleece, polarfleece"
      },
      {
        "sub": "秋冬面料",
        "zh": "针织",
        "en": "Knit",
        "variants": "knit, knitted, knitting, knitwear"
      },
      {
        "sub": "秋冬面料",
        "zh": "毛呢",
        "en": "Woolen/Wool Cloth",
        "variants": "woolen, woolen cloth, wool fabric, wool coating, melton"
      },
      {
        "sub": "秋冬面料",
        "zh": "灯芯绒",
        "en": "Corduroy",
        "variants": "corduroy, cord, wale corduroy"
      },
      {
        "sub": "秋冬面料",
        "zh": "加绒",
        "en": "Fleece-Lined",
        "variants": "fleece-lined, fleece lined, lined with fleece, thermal lined, brushed inside"
      },
      {
        "sub": "秋冬面料",
        "zh": "夹棉",
        "en": "Padded/Quilted",
        "variants": "padded, quilted, padded lining, cotton-padded, quilted lining"
      },
      {
        "sub": "牛仔/外套",
        "zh": "牛仔",
        "en": "Denim",
        "variants": "denim, denim fabric, jean fabric"
      },
      {
        "sub": "牛仔/外套",
        "zh": "帆布",
        "en": "Canvas",
        "variants": "canvas, canvas fabric, duck canvas"
      },
      {
        "sub": "牛仔/外套",
        "zh": "皮革",
        "en": "Leather",
        "variants": "leather, genuine leather, real leather"
      },
      {
        "sub": "牛仔/外套",
        "zh": "仿皮",
        "en": "Faux Leather",
        "variants": "faux leather, faux, pu leather, synthetic leather, vegan leather, imitation leather"
      },
      {
        "sub": "牛仔/外套",
        "zh": "麂皮绒",
        "en": "Suede",
        "variants": "suede, suede fabric, faux suede, nubuck"
      },
      {
        "sub": "牛仔/外套",
        "zh": "防风面料",
        "en": "Windproof Fabric",
        "variants": "windproof fabric, wind-resistant fabric, wind shell fabric, windbreaker fabric"
      }
    ],
    "颜色(Color)": [
      {
        "sub": "中性色",
        "zh": "黑色",
        "en": "Black",
        "variants": "black"
      },
      {
        "sub": "中性色",
        "zh": "白色",
        "en": "White",
        "variants": "white"
      },
      {
        "sub": "中性色",
        "zh": "灰色",
        "en": "Gray/Grey",
        "variants": "gray, grey"
      },
      {
        "sub": "中性色",
        "zh": "深灰色",
        "en": "Dark Gray",
        "variants": "dark gray, dark grey, charcoal, charcoal gray, charcoal grey"
      },
      {
        "sub": "中性色",
        "zh": "浅灰色",
        "en": "Light Gray",
        "variants": "light gray, light grey, ash gray, ash grey, heather gray"
      },
      {
        "sub": "中性色",
        "zh": "米色",
        "en": "Beige",
        "variants": "beige, cream, off-white, sand"
      },
      {
        "sub": "中性色",
        "zh": "卡其色",
        "en": "Khaki",
        "variants": "khaki, khaki color, kakhi"
      },
      {
        "sub": "蓝色系",
        "zh": "蓝色",
        "en": "Blue",
        "variants": "blue"
      },
      {
        "sub": "蓝色系",
        "zh": "深蓝色",
        "en": "Dark Blue/Navy",
        "variants": "dark blue, navy, navy blue, deep blue"
      },
      {
        "sub": "蓝色系",
        "zh": "藏青色",
        "en": "Navy Blue",
        "variants": "navy, navy blue, nautical blue, marine blue, midnight blue"
      },
      {
        "sub": "蓝色系",
        "zh": "浅蓝色",
        "en": "Light Blue",
        "variants": "light blue, sky blue, baby blue, powder blue, pale blue"
      },
      {
        "sub": "绿色系",
        "zh": "绿色",
        "en": "Green",
        "variants": "green"
      },
      {
        "sub": "绿色系",
        "zh": "军绿色",
        "en": "Army Green",
        "variants": "army green, olive green, military green, olive, khaki green"
      },
      {
        "sub": "绿色系",
        "zh": "墨绿色",
        "en": "Dark Green/Forest Green",
        "variants": "dark green, forest green, emerald green, deep green, hunter green"
      },
      {
        "sub": "棕色系",
        "zh": "棕色",
        "en": "Brown",
        "variants": "brown"
      },
      {
        "sub": "棕色系",
        "zh": "咖色",
        "en": "Coffee Brown",
        "variants": "coffee, coffee brown, mocha, mocha brown, espresso"
      },
      {
        "sub": "棕色系",
        "zh": "驼色",
        "en": "Camel",
        "variants": "camel, camel color, tan, camel beige"
      },
      {
        "sub": "黄色系",
        "zh": "黄色",
        "en": "Yellow",
        "variants": "yellow"
      },
      {
        "sub": "黄色系",
        "zh": "姜黄色",
        "en": "Ginger Yellow/Mustard",
        "variants": "ginger yellow, ginger, mustard, mustard yellow, turmeric, ochre"
      },
      {
        "sub": "红色系",
        "zh": "红色",
        "en": "Red",
        "variants": "red"
      },
      {
        "sub": "红色系",
        "zh": "酒红色",
        "en": "Wine Red/Burgundy",
        "variants": "wine, wine red, burgundy, maroon, bordeaux, wine"
      },
      {
        "sub": "红色系",
        "zh": "橙色",
        "en": "Orange",
        "variants": "orange"
      },
      {
        "sub": "红色系",
        "zh": "砖红色",
        "en": "Brick Red",
        "variants": "brick red, brick, terracotta, rust red, burnt orange"
      },
      {
        "sub": "紫色系",
        "zh": "紫色",
        "en": "Purple",
        "variants": "purple, violet, lavender, plum, amethyst"
      },
      {
        "sub": "粉色系",
        "zh": "粉色",
        "en": "Pink",
        "variants": "pink, rose, rosy, blush, coral pink"
      },
      {
        "sub": "浅色系",
        "zh": "杏色",
        "en": "Apricot",
        "variants": "apricot, apricot color, peach, peachy"
      },
      {
        "sub": "浅色系",
        "zh": "奶油色",
        "en": "Cream",
        "variants": "cream, cream color, creamy, ivory, vanilla"
      },
      {
        "sub": "亮色系",
        "zh": "荧光色",
        "en": "Fluorescent/Neon",
        "variants": "fluorescent, neon, neon color, fluorescent color, glow, neon bright"
      },
      {
        "sub": "组合色",
        "zh": "撞色",
        "en": "Contrast Color",
        "variants": "contrast color, color contrast, contrasting color, contrast"
      },
      {
        "sub": "组合色",
        "zh": "拼色",
        "en": "Color Patch/Spliced",
        "variants": "color patch, spliced color, pieced color, color block, patchwork color"
      },
      {
        "sub": "组合色",
        "zh": "多色",
        "en": "Multi-Color",
        "variants": "multi-color, multicolor, multi color, colorful, multi-colored"
      },
      {
        "sub": "组合色",
        "zh": "渐变色",
        "en": "Gradient Color",
        "variants": "gradient, gradient color, ombre, ombre color, color gradient, fade color"
      }
    ]
  },
  "棉羽": {
    "品类(Category)": [
      {
        "sub": "外套类",
        "zh": "夹克",
        "en": "Jacket",
        "variants": "jacket, jackets"
      },
      {
        "sub": "外套类",
        "zh": "风衣",
        "en": "Trench Coat",
        "variants": "trench coat, trench, windbreaker"
      },
      {
        "sub": "外套类",
        "zh": "牛仔外套",
        "en": "Denim Jacket",
        "variants": "denim jacket, jean jacket"
      },
      {
        "sub": "外套类",
        "zh": "棒球服",
        "en": "Baseball Jacket/Varsity",
        "variants": "baseball jacket, varsity jacket, letterman"
      },
      {
        "sub": "外套类",
        "zh": "飞行夹克",
        "en": "Bomber Jacket",
        "variants": "bomber jacket, bomber, flight jacket"
      },
      {
        "sub": "外套类",
        "zh": "皮夹克",
        "en": "Leather Jacket",
        "variants": "leather jacket"
      },
      {
        "sub": "外套类",
        "zh": "棉服",
        "en": "Padded Jacket/Cotton Coat",
        "variants": "padded jacket, cotton coat, quilted jacket, puffer"
      },
      {
        "sub": "外套类",
        "zh": "羽绒服",
        "en": "Down Jacket/Puffer",
        "variants": "down jacket, puffer jacket, puffer, down coat"
      },
      {
        "sub": "外套类",
        "zh": "西装外套",
        "en": "Blazer/Suit Jacket",
        "variants": "blazer, suit jacket, sports coat, sport coat"
      }
    ],
    "版型(Fit)": [
      {
        "sub": "",
        "zh": "宽松版",
        "en": "Loose Fit",
        "variants": "loose fit, loose, loose-fit, relaxed fit, relaxed"
      },
      {
        "sub": "",
        "zh": "修身版",
        "en": "Slim Fit",
        "variants": "slim fit, slim-fit, slim, muscle fit"
      },
      {
        "sub": "",
        "zh": "常规版",
        "en": "Regular Fit",
        "variants": "regular fit, regular-fit, regular, standard fit"
      },
      {
        "sub": "",
        "zh": "合身版",
        "en": "Tailored Fit",
        "variants": "tailored fit, fitted, fitted fit"
      },
      {
        "sub": "",
        "zh": "廓形版",
        "en": "Oversized/Boxy",
        "variants": "oversized, oversize, boxy fit, boxy, baggy, relaxed fit"
      },
      {
        "sub": "",
        "zh": "oversize风",
        "en": "Oversized Style",
        "variants": "oversized, oversize, oversized fit, oversized style"
      }
    ],
    "领型(Neckline)": [
      {
        "sub": "",
        "zh": "圆领",
        "en": "Crew Neck/Round Neck",
        "variants": "crew neck, crewneck, round neck, round-neck"
      },
      {
        "sub": "",
        "zh": "V领",
        "en": "V-Neck",
        "variants": "v-neck, v neck, vneck"
      },
      {
        "sub": "",
        "zh": "翻领",
        "en": "Lapel/Collar",
        "variants": "lapel, collar, turned-down collar, fold-over collar"
      },
      {
        "sub": "",
        "zh": "立领",
        "en": "Stand Collar",
        "variants": "stand collar, stand-collar, stand-up collar, mandarin collar"
      },
      {
        "sub": "",
        "zh": "亨利领",
        "en": "Henley Neck",
        "variants": "henley, henley neck, henley collar, henley shirt"
      },
      {
        "sub": "",
        "zh": "半高领",
        "en": "Mock Neck/Half High Collar",
        "variants": "mock neck, mockneck, half high collar, half-high collar, mock turtleneck"
      },
      {
        "sub": "",
        "zh": "高领",
        "en": "Turtleneck/High Neck",
        "variants": "turtleneck, turtle neck, high neck, high-collar, roll neck"
      },
      {
        "sub": "",
        "zh": "扣领",
        "en": "Button-Down Collar",
        "variants": "button-down collar, button-down, button down"
      },
      {
        "sub": "",
        "zh": "古巴领",
        "en": "Cuban Collar",
        "variants": "cuban collar, cuban, camp collar, cabin collar, revere collar"
      },
      {
        "sub": "",
        "zh": "开领",
        "en": "Open Collar/Notch Lapel",
        "variants": "open collar, open-collar, notch lapel, notched collar"
      },
      {
        "sub": "",
        "zh": "Polo领",
        "en": "Polo Collar",
        "variants": "polo collar, polo, polo shirt collar, knit collar"
      }
    ],
    "闭合方式(Closure)": [
      {
        "sub": "",
        "zh": "套头",
        "en": "Pullover",
        "variants": "pullover, pull-on, pull on, slip-on, slip on, overhead"
      },
      {
        "sub": "",
        "zh": "拉链",
        "en": "Zipper",
        "variants": "zipper, zip, zip-up, zip up, zip closure, zipper closure"
      },
      {
        "sub": "",
        "zh": "半拉链",
        "en": "Half-Zip",
        "variants": "half-zip, half zip, quarter-zip, quarter zip, 1/4 zip, partial zip"
      },
      {
        "sub": "",
        "zh": "纽扣",
        "en": "Button",
        "variants": "button, buttons, button closure"
      },
      {
        "sub": "",
        "zh": "单排扣",
        "en": "Single-Breasted",
        "variants": "single-breasted, single breasted, single row button"
      },
      {
        "sub": "",
        "zh": "双排扣",
        "en": "Double-Breasted",
        "variants": "double-breasted, double breasted, double row button"
      },
      {
        "sub": "",
        "zh": "抽绳",
        "en": "Drawstring",
        "variants": "drawstring, draw string, draw-string"
      },
      {
        "sub": "",
        "zh": "松紧腰",
        "en": "Elastic Waist",
        "variants": "elastic waist, elasticated waist, elastic band, elastane waist"
      },
      {
        "sub": "",
        "zh": "拉链门襟",
        "en": "Zipper Fly/Front",
        "variants": "zipper fly, zip fly, zip-front, zipper front, zipper placket"
      },
      {
        "sub": "",
        "zh": "纽扣门襟",
        "en": "Button Fly/Front",
        "variants": "button fly, button-front, button front, button placket, button-up front"
      }
    ],
    "风格(Style)": [
      {
        "sub": "",
        "zh": "民族风",
        "en": "Ethnic",
        "variants": "ethnic, ethnic style, folk style, tribal"
      },
      {
        "sub": "",
        "zh": "商务风",
        "en": "Business Style",
        "variants": "business, business style, business professional"
      },
      {
        "sub": "",
        "zh": "通勤风",
        "en": "Commuter Style",
        "variants": "commuter, commute, commuting style, work wear style"
      },
      {
        "sub": "",
        "zh": "休闲日常",
        "en": "Casual/Daily",
        "variants": "casual, everyday, daily, leisure, leisurely"
      },
      {
        "sub": "",
        "zh": "y2k",
        "en": "Y2K",
        "variants": "y2k, y2k style, y2k fashion, 2000s style, millennium style"
      },
      {
        "sub": "",
        "zh": "街头",
        "en": "Streetwear",
        "variants": "streetwear, street, street style, street fashion"
      },
      {
        "sub": "",
        "zh": "复古",
        "en": "Vintage/Retro",
        "variants": "vintage, retro, classic style, old school"
      },
      {
        "sub": "",
        "zh": "可爱",
        "en": "Cute",
        "variants": "cute, kawaii, sweet, adorable"
      },
      {
        "sub": "",
        "zh": "潮流",
        "en": "Trendy/Fashion",
        "variants": "trendy, fashion, fashionable, stylish, trend, trendy style"
      }
    ],
    "图案/花色(Pattern)": [
      {
        "sub": "基础花色",
        "zh": "纯色",
        "en": "Solid Color",
        "variants": "solid color, solid, plain"
      },
      {
        "sub": "基础花色",
        "zh": "条纹",
        "en": "Striped",
        "variants": "stripe, striped, stripe pattern, pinstripe"
      },
      {
        "sub": "基础花色",
        "zh": "格纹",
        "en": "Plaid/Checkered",
        "variants": "plaid, checkered, check, checked, tartan, gingham"
      },
      {
        "sub": "基础花色",
        "zh": "撞色",
        "en": "Color-Block/Contrast",
        "variants": "color-block, color block, colorblock, color-blocking, contrast color, contrast"
      },
      {
        "sub": "基础花色",
        "zh": "拼色",
        "en": "Patchwork/Color Patch",
        "variants": "patchwork, color patch, patch, pieced color"
      },
      {
        "sub": "基础花色",
        "zh": "渐变",
        "en": "Gradient/Ombre",
        "variants": "gradient, ombre, faded, fade, ombre effect, color gradient"
      },
      {
        "sub": "基础花色",
        "zh": "豹纹",
        "en": "Leopard Print",
        "variants": "leopard, leopard print, leopard pattern, animal print"
      },
      {
        "sub": "基础花色",
        "zh": "波点",
        "en": "Polka Dot",
        "variants": "polka dot, polka-dot, dotted, dots, dot pattern"
      },
      {
        "sub": "印花类",
        "zh": "字母印花",
        "en": "Letter Print",
        "variants": "letter, letter print, text print, typography, letter graphic"
      },
      {
        "sub": "印花类",
        "zh": "数字印花",
        "en": "Number Print",
        "variants": "number, number print, numeral print, numeric graphic"
      },
      {
        "sub": "印花类",
        "zh": "图形印花",
        "en": "Graphic Print",
        "variants": "graphic, graphic print, graphic pattern, graphic design"
      },
      {
        "sub": "印花类",
        "zh": "几何印花",
        "en": "Geometric Print",
        "variants": "geometric, geometric print, geometric pattern, abstract"
      },
      {
        "sub": "风格图案",
        "zh": "迷彩风",
        "en": "Camouflage",
        "variants": "camouflage, camo, camo print, camo pattern"
      },
      {
        "sub": "风格图案",
        "zh": "复古风图案",
        "en": "Vintage Pattern",
        "variants": "vintage pattern, vintage print, retro pattern, retro print"
      },
      {
        "sub": "风格图案",
        "zh": "街头风图案",
        "en": "Streetwear Pattern",
        "variants": "streetwear pattern, street print, urban print, graffiti"
      },
      {
        "sub": "风格图案",
        "zh": "国潮风图案",
        "en": "Chinese Trend Pattern",
        "variants": "chinese trend, china trend, national trend, c-pop, guochao"
      },
      {
        "sub": "风格图案",
        "zh": "波西米亚风",
        "en": "Bohemian",
        "variants": "bohemian, boho, boho-chic, boho print"
      },
      {
        "sub": "风格图案",
        "zh": "y2k风",
        "en": "Y2K Pattern",
        "variants": "y2k pattern, y2k print, 2000s graphic, millennium graphic"
      },
      {
        "sub": "风格图案",
        "zh": "热带风",
        "en": "Tropical",
        "variants": "tropical, tropical pattern, tropical print, tropical design"
      },
      {
        "sub": "节日图案",
        "zh": "圣诞图案",
        "en": "Christmas Pattern",
        "variants": "christmas, christmas pattern, christmas print, xmas, santa, reindeer, snowflake"
      },
      {
        "sub": "节日图案",
        "zh": "万圣节图案",
        "en": "Halloween Pattern",
        "variants": "halloween, halloween pattern, halloween print, pumpkin, ghost, skull halloween"
      },
      {
        "sub": "节日图案",
        "zh": "独立日",
        "en": "Independence Day",
        "variants": "independence day, 4th of july, july 4th, stars and stripes, patriotic"
      },
      {
        "sub": "节日图案",
        "zh": "亡灵节",
        "en": "Day of the Dead",
        "variants": "day of the dead, dia de los muertos, sugar skull, mexico"
      },
      {
        "sub": "节日图案",
        "zh": "父亲节",
        "en": "Father's Day",
        "variants": "father's day, fathers day, dad, daddy"
      },
      {
        "sub": "元素图案",
        "zh": "动物",
        "en": "Animal",
        "variants": "animal, animal print, animal pattern, creature"
      },
      {
        "sub": "元素图案",
        "zh": "骷髅",
        "en": "Skull",
        "variants": "skull, skull print, skull pattern, skeleton, death head"
      },
      {
        "sub": "元素图案",
        "zh": "火焰",
        "en": "Flame",
        "variants": "flame, flames, fire, fire print, flame pattern"
      },
      {
        "sub": "元素图案",
        "zh": "摩托车",
        "en": "Motorcycle",
        "variants": "motorcycle, motorcycle print, motorbike, harley, biker graphic"
      },
      {
        "sub": "元素图案",
        "zh": "花卉",
        "en": "Floral/Flower",
        "variants": "floral, flower, flowers, botanical, floral print, flower pattern"
      },
      {
        "sub": "元素图案",
        "zh": "棕榈叶",
        "en": "Palm Leaf",
        "variants": "palm, palm leaf, palm print, tropical leaf, monstera, palm tree"
      },
      {
        "sub": "印花位置",
        "zh": "胸前小标",
        "en": "Chest Small Logo",
        "variants": "chest logo, chest small logo, chest badge, chest emblem, front small logo"
      },
      {
        "sub": "印花位置",
        "zh": "背部大印花",
        "en": "Back Large Print",
        "variants": "back print, back large print, back graphic, large back print, full back print"
      },
      {
        "sub": "印花位置",
        "zh": "袖口图案",
        "en": "Sleeve Print",
        "variants": "sleeve print, sleeve graphic, sleeve pattern, cuff print"
      },
      {
        "sub": "印花位置",
        "zh": "满版图案",
        "en": "All-Over Print",
        "variants": "all-over print, all over print, full print, allover, all-over pattern"
      },
      {
        "sub": "印花位置",
        "zh": "局部印花",
        "en": "Partial Print",
        "variants": "partial print, local print, localized print, spot print"
      },
      {
        "sub": "印花位置",
        "zh": "前胸字母",
        "en": "Front Letter Print",
        "variants": "front letter, front text, chest letter, front lettering"
      },
      {
        "sub": "印花位置",
        "zh": "后背字母",
        "en": "Back Letter Print",
        "variants": "back letter, back text, back lettering, rear letter"
      },
      {
        "sub": "印花位置",
        "zh": "侧边印花",
        "en": "Side Print",
        "variants": "side print, side graphic, side pattern, lateral print"
      }
    ],
    "场景(Occasion)": [
      {
        "sub": "日常",
        "zh": "日常",
        "en": "Everyday/Daily",
        "variants": "everyday, daily, day-to-day"
      },
      {
        "sub": "日常",
        "zh": "通勤",
        "en": "Commuting",
        "variants": "commute, commuter, commuting"
      },
      {
        "sub": "日常",
        "zh": "居家",
        "en": "Home/Lounge",
        "variants": "home, lounge, lounging, around the house"
      },
      {
        "sub": "日常",
        "zh": "出街",
        "en": "Going Out/Outing",
        "variants": "outing, outings, going out, out and about, day out"
      },
      {
        "sub": "日常",
        "zh": "休闲",
        "en": "Casual/Leisure",
        "variants": "casual, leisure, leisurely, relaxed"
      },
      {
        "sub": "日常",
        "zh": "约会",
        "en": "Date",
        "variants": "date, dating, date night"
      },
      {
        "sub": "商务",
        "zh": "商务",
        "en": "Business",
        "variants": "business, business occasion"
      },
      {
        "sub": "商务",
        "zh": "办公室",
        "en": "Office",
        "variants": "office, workplace"
      },
      {
        "sub": "商务",
        "zh": "职场",
        "en": "Workplace/Professional",
        "variants": "work, professional, workplace"
      },
      {
        "sub": "商务",
        "zh": "会议",
        "en": "Meeting/Conference",
        "variants": "meeting, conference, convention"
      },
      {
        "sub": "商务",
        "zh": "正装",
        "en": "Formal",
        "variants": "formal, formal occasion, formal wear, formal attire"
      },
      {
        "sub": "商务",
        "zh": "商务休闲",
        "en": "Business Casual",
        "variants": "business casual, smart casual, business-casual"
      },
      {
        "sub": "运动",
        "zh": "健身",
        "en": "Gym/Fitness",
        "variants": "gym, fitness, workout, exercise, training"
      },
      {
        "sub": "运动",
        "zh": "跑步",
        "en": "Running",
        "variants": "running, run, jog, jogging"
      },
      {
        "sub": "运动",
        "zh": "训练",
        "en": "Training",
        "variants": "training, workout, exercise, drill"
      },
      {
        "sub": "运动",
        "zh": "篮球",
        "en": "Basketball",
        "variants": "basketball, bball, hoops"
      },
      {
        "sub": "运动",
        "zh": "足球",
        "en": "Soccer/Football",
        "variants": "soccer, football, futbol"
      },
      {
        "sub": "运动",
        "zh": "骑行",
        "en": "Cycling",
        "variants": "cycling, biking, bike riding"
      },
      {
        "sub": "运动",
        "zh": "瑜伽",
        "en": "Yoga",
        "variants": "yoga, yogi, pilates"
      },
      {
        "sub": "运动",
        "zh": "高尔夫",
        "en": "Golf",
        "variants": "golf, golfing"
      },
      {
        "sub": "户外",
        "zh": "户外",
        "en": "Outdoor",
        "variants": "outdoor, outdoors, outside"
      },
      {
        "sub": "户外",
        "zh": "露营",
        "en": "Camping",
        "variants": "camping, camp, camper"
      },
      {
        "sub": "户外",
        "zh": "徒步",
        "en": "Hiking",
        "variants": "hiking, hike, trekking, trek"
      },
      {
        "sub": "户外",
        "zh": "登山",
        "en": "Mountaineering/Climbing",
        "variants": "mountaineering, climbing, mountain climbing, alpine"
      },
      {
        "sub": "户外",
        "zh": "旅行",
        "en": "Travel",
        "variants": "travel, traveling, trip, journey"
      },
      {
        "sub": "户外",
        "zh": "钓鱼",
        "en": "Fishing",
        "variants": "fishing, fish, angling"
      },
      {
        "sub": "海边",
        "zh": "海边",
        "en": "Seaside/Beach",
        "variants": "seaside, beach, shore, coast"
      },
      {
        "sub": "海边",
        "zh": "沙滩",
        "en": "Beach",
        "variants": "beach, sandy beach, beachside"
      },
      {
        "sub": "海边",
        "zh": "度假",
        "en": "Vacation",
        "variants": "vacation, holiday, getaway, resort"
      },
      {
        "sub": "海边",
        "zh": "游泳",
        "en": "Swimming",
        "variants": "swimming, swim, swimming pool"
      },
      {
        "sub": "海边",
        "zh": "游船",
        "en": "Cruise/Boating",
        "variants": "cruise, cruising, boating, yacht, sailing"
      },
      {
        "sub": "派对节日",
        "zh": "派对",
        "en": "Party",
        "variants": "party, club, nightclub, night out"
      },
      {
        "sub": "派对节日",
        "zh": "节日",
        "en": "Festival/Holiday",
        "variants": "festival, holiday, carnival, celebration"
      },
      {
        "sub": "派对节日",
        "zh": "圣诞",
        "en": "Christmas",
        "variants": "christmas, xmas, christmas day"
      },
      {
        "sub": "派对节日",
        "zh": "万圣节",
        "en": "Halloween",
        "variants": "halloween, halloween night"
      },
      {
        "sub": "派对节日",
        "zh": "新年",
        "en": "New Year",
        "variants": "new year, new year's, new year's eve, nye"
      },
      {
        "sub": "派对节日",
        "zh": "家庭聚会",
        "en": "Family Gathering",
        "variants": "family gathering, family party, family reunion, gathering"
      },
      {
        "sub": "校园街头",
        "zh": "校园",
        "en": "School/Campus",
        "variants": "school, campus, college, university"
      },
      {
        "sub": "校园街头",
        "zh": "街头",
        "en": "Street",
        "variants": "street, street style, urban"
      },
      {
        "sub": "校园街头",
        "zh": "潮流",
        "en": "Trendy/Fashion",
        "variants": "trendy, fashion, stylish, trend"
      },
      {
        "sub": "校园街头",
        "zh": "滑板",
        "en": "Skateboarding",
        "variants": "skate, skateboarding, skater, skateboard"
      },
      {
        "sub": "校园街头",
        "zh": "嘻哈",
        "en": "Hip Hop",
        "variants": "hip hop, hiphop, rap, rap style"
      },
      {
        "sub": "校园街头",
        "zh": "复古穿搭",
        "en": "Vintage Outfit",
        "variants": "vintage outfit, retro outfit, vintage style outfit"
      }
    ],
    "季节(Season)": [
      {
        "sub": "基本季节",
        "zh": "春季",
        "en": "Spring",
        "variants": "spring, spring season"
      },
      {
        "sub": "基本季节",
        "zh": "夏季",
        "en": "Summer",
        "variants": "summer, summer season"
      },
      {
        "sub": "基本季节",
        "zh": "秋季",
        "en": "Autumn/Fall",
        "variants": "autumn, fall, autumn season, fall season"
      },
      {
        "sub": "基本季节",
        "zh": "冬季",
        "en": "Winter",
        "variants": "winter, winter season"
      },
      {
        "sub": "跨季节",
        "zh": "春秋",
        "en": "Spring/Autumn",
        "variants": "spring/autumn, spring and autumn, spring fall, transitional"
      },
      {
        "sub": "跨季节",
        "zh": "秋冬",
        "en": "Autumn/Winter",
        "variants": "autumn/winter, autumn and winter, fall/winter, fall winter"
      },
      {
        "sub": "跨季节",
        "zh": "四季",
        "en": "Four Seasons",
        "variants": "four seasons, all seasons, 4 seasons"
      },
      {
        "sub": "跨季节",
        "zh": "夏日",
        "en": "Summer Day",
        "variants": "summer day, summer time, summertime"
      },
      {
        "sub": "跨季节",
        "zh": "冬季保暖",
        "en": "Winter Warm",
        "variants": "winter warm, winter保暖, warm winter, thermal winter"
      },
      {
        "sub": "跨季节",
        "zh": "四季皆宜",
        "en": "All-Season/Year-Round",
        "variants": "all-season, all season, year-round, all-year, all year round"
      },
      {
        "sub": "体感",
        "zh": "轻薄",
        "en": "Lightweight",
        "variants": "lightweight, light-weight, light weight, light, thin"
      },
      {
        "sub": "体感",
        "zh": "透气",
        "en": "Breathable",
        "variants": "breathable, ventilated, ventilation"
      },
      {
        "sub": "体感",
        "zh": "清凉",
        "en": "Cooling/Refreshing",
        "variants": "cooling, cool, refreshing, cool fabric, ice silk"
      },
      {
        "sub": "体感",
        "zh": "保暖",
        "en": "Warm",
        "variants": "warm, warming, warmth"
      },
      {
        "sub": "体感",
        "zh": "加厚",
        "en": "Thickened/Heavy",
        "variants": "thickened, thick, heavy, heavy-weight, heavyweight"
      },
      {
        "sub": "体感",
        "zh": "防风",
        "en": "Windproof",
        "variants": "windproof, wind-proof, wind resistant, wind-resistant"
      }
    ],
    "细节(Detail)": [
      {
        "sub": "口袋",
        "zh": "多口袋",
        "en": "Multi-Pocket",
        "variants": "multi-pocket, multi pocket, multiple pockets, multi-pocket design"
      },
      {
        "sub": "口袋",
        "zh": "大口袋",
        "en": "Large Pocket",
        "variants": "large pocket, big pocket, oversized pocket"
      },
      {
        "sub": "口袋",
        "zh": "拉链口袋",
        "en": "Zipper Pocket",
        "variants": "zipper pocket, zip pocket, zippered pocket"
      },
      {
        "sub": "口袋",
        "zh": "侧口袋",
        "en": "Side Pocket",
        "variants": "side pocket, side pockets, lateral pocket"
      },
      {
        "sub": "口袋",
        "zh": "胸前口袋",
        "en": "Chest Pocket",
        "variants": "chest pocket, chest pockets, breast pocket"
      },
      {
        "sub": "帽子",
        "zh": "连帽",
        "en": "Hooded",
        "variants": "hooded, hood, hooded design, with hood"
      },
      {
        "sub": "帽子",
        "zh": "可拆卸帽",
        "en": "Detachable Hood",
        "variants": "detachable hood, removable hood, detachable cap"
      },
      {
        "sub": "帽子",
        "zh": "抽绳帽",
        "en": "Drawstring Hood",
        "variants": "drawstring hood, drawstring hooded, adjustable hood"
      },
      {
        "sub": "下摆",
        "zh": "罗纹下摆",
        "en": "Ribbed Hem",
        "variants": "ribbed hem, ribbed bottom, ribbed cuff hem"
      },
      {
        "sub": "下摆",
        "zh": "弹力裤脚",
        "en": "Elastic Cuffs",
        "variants": "elastic cuffs, elastic ankle, elastic hem, cuffed ankle"
      },
      {
        "sub": "下摆",
        "zh": "束脚",
        "en": "Cuffed/Elastic Ankle",
        "variants": "cuffed, cuffed ankle, elastic ankle, banded bottom"
      },
      {
        "sub": "下摆",
        "zh": "开叉下摆",
        "en": "Slit Hem",
        "variants": "slit hem, side slit, vented hem, split hem, side vent"
      },
      {
        "sub": "工艺",
        "zh": "拼接",
        "en": "Splicing/Paneling",
        "variants": "splicing, panel, paneling, color panel, splice, pieced"
      },
      {
        "sub": "工艺",
        "zh": "撞色",
        "en": "Contrast Color",
        "variants": "contrast color, color contrast, contrasting color, contrast"
      },
      {
        "sub": "工艺",
        "zh": "破洞",
        "en": "Ripped/Torn",
        "variants": "ripped, torn, distressed, distress, ripped jeans, hole"
      },
      {
        "sub": "工艺",
        "zh": "做旧",
        "en": "Washed/Distressed",
        "variants": "washed, distressed, vintage wash, faded, stonewashed, acid wash"
      },
      {
        "sub": "工艺",
        "zh": "压褶",
        "en": "Pleated",
        "variants": "pleated, pleat, pressed pleat, creased"
      },
      {
        "sub": "工艺",
        "zh": "抽绳",
        "en": "Drawstring",
        "variants": "drawstring, draw string, draw-string, adjustable cord"
      },
      {
        "sub": "工艺",
        "zh": "刺绣",
        "en": "Embroidery",
        "variants": "embroidery, embroidered, embroidered detail, embroidery pattern"
      },
      {
        "sub": "工艺",
        "zh": "印花",
        "en": "Print",
        "variants": "print, printed, printing, printed detail"
      },
      {
        "sub": "工艺",
        "zh": "贴布",
        "en": "Applique/Patch",
        "variants": "applique, appliqu, patch, patches, patchwork, fabric patch"
      }
    ],
    "长度(Length)": [
      {
        "sub": "",
        "zh": "常规款",
        "en": "Regular Length",
        "variants": "regular length, regular, standard length, normal length"
      },
      {
        "sub": "",
        "zh": "短款",
        "en": "Short/Cropped",
        "variants": "short, short length, cropped, crop, cropped length"
      },
      {
        "sub": "",
        "zh": "中长款",
        "en": "Mid-Length",
        "variants": "mid-length, midi, mid length, knee-length, calf-length"
      },
      {
        "sub": "",
        "zh": "长款",
        "en": "Long",
        "variants": "long, long length, full length"
      },
      {
        "sub": "",
        "zh": "加长款",
        "en": "Extra Long/Extended",
        "variants": "extra long, extended length, extra-long, extra length, x-long"
      }
    ],
    "袖长(Sleeve)": [
      {
        "sub": "",
        "zh": "短袖",
        "en": "Short Sleeve",
        "variants": "short sleeve, short-sleeve, short-sleeved"
      },
      {
        "sub": "",
        "zh": "长袖",
        "en": "Long Sleeve",
        "variants": "long sleeve, long-sleeve, long-sleeved, full sleeve"
      },
      {
        "sub": "",
        "zh": "无袖",
        "en": "Sleeveless",
        "variants": "sleeveless, no sleeve, sleeve-less"
      },
      {
        "sub": "",
        "zh": "七分袖",
        "en": "3/4 Sleeve",
        "variants": "3/4 sleeve, three-quarter sleeve, 3/4, three-quarter"
      },
      {
        "sub": "",
        "zh": "五分袖",
        "en": "Half Sleeve/Elbow Sleeve",
        "variants": "half sleeve, half-sleeve, elbow sleeve, 1/2 sleeve"
      },
      {
        "sub": "",
        "zh": "落肩袖",
        "en": "Drop Shoulder",
        "variants": "drop shoulder, drop-shoulder, dropped shoulder, drop shoulder sleeve"
      },
      {
        "sub": "",
        "zh": "插肩袖",
        "en": "Raglan Sleeve",
        "variants": "raglan, raglan sleeve, raglan-style, raglan cut"
      },
      {
        "sub": "",
        "zh": "背心款",
        "en": "Tank Style",
        "variants": "tank, tank top, tank style, sleeveless top"
      },
      {
        "sub": "",
        "zh": "无袖款",
        "en": "Sleeveless Style",
        "variants": "sleeveless, sleeveless style, no-sleeve style"
      },
      {
        "sub": "",
        "zh": "宽袖",
        "en": "Wide/Loose Sleeve",
        "variants": "wide sleeve, loose sleeve, bell sleeve, flare sleeve, batwing sleeve"
      },
      {
        "sub": "",
        "zh": "收口袖",
        "en": "Cuffed Sleeve",
        "variants": "cuffed sleeve, ribbed cuff, elastic cuff, fitted cuff, ribbed sleeve cuff"
      }
    ],
    "功能特性(Feature)": [
      {
        "sub": "",
        "zh": "弹力",
        "en": "Stretch/Elastic",
        "variants": "stretch, stretchy, elastic, elastane, spandex"
      },
      {
        "sub": "",
        "zh": "速干",
        "en": "Quick-Dry",
        "variants": "quick-dry, quick dry, fast-dry, fast dry, quick drying"
      },
      {
        "sub": "",
        "zh": "透气",
        "en": "Breathable",
        "variants": "breathable, ventilated, ventilation, air-permeable"
      },
      {
        "sub": "",
        "zh": "吸湿排汗",
        "en": "Moisture-Wicking",
        "variants": "moisture-wicking, moisture wicking, sweat-wicking, sweat absorption, wicking"
      },
      {
        "sub": "",
        "zh": "遇水显色",
        "en": "Water-Reactive Color",
        "variants": "water-reactive, water activated, hydrochromic, color-changing when wet, water reactive print"
      }
    ],
    "面料/材质(Material)": [
      {
        "sub": "常规面料",
        "zh": "棉",
        "en": "Cotton",
        "variants": "cotton"
      },
      {
        "sub": "常规面料",
        "zh": "纯棉",
        "en": "Pure Cotton",
        "variants": "pure cotton, 100% cotton, all cotton"
      },
      {
        "sub": "常规面料",
        "zh": "棉混纺",
        "en": "Cotton Blend",
        "variants": "cotton blend, cotton blended, cotton-mixed"
      },
      {
        "sub": "常规面料",
        "zh": "涤纶",
        "en": "Polyester",
        "variants": "polyester"
      },
      {
        "sub": "常规面料",
        "zh": "聚酯纤维",
        "en": "Polyester Fiber",
        "variants": "polyester fiber, poly fiber, polyester filament"
      },
      {
        "sub": "常规面料",
        "zh": "锦纶",
        "en": "Nylon",
        "variants": "nylon, polyamide, pa"
      },
      {
        "sub": "常规面料",
        "zh": "氨纶",
        "en": "Spandex/Elastane",
        "variants": "spandex, elastane, lycra"
      },
      {
        "sub": "夏季面料",
        "zh": "亚麻",
        "en": "Linen",
        "variants": "linen, flax"
      },
      {
        "sub": "夏季面料",
        "zh": "棉麻",
        "en": "Cotton Linen",
        "variants": "cotton linen, cotton-linen, linen cotton, cotton and linen"
      },
      {
        "sub": "夏季面料",
        "zh": "冰丝",
        "en": "Ice Silk",
        "variants": "ice silk, cooling silk, ice fiber, cool silk"
      },
      {
        "sub": "夏季面料",
        "zh": "速干面料",
        "en": "Quick-Dry Fabric",
        "variants": "quick-dry fabric, quick dry fabric, fast-dry fabric, moisture-wicking fabric"
      },
      {
        "sub": "夏季面料",
        "zh": "轻薄面料",
        "en": "Lightweight Fabric",
        "variants": "lightweight fabric, light fabric, thin fabric, sheer fabric"
      },
      {
        "sub": "夏季面料",
        "zh": "透气面料",
        "en": "Breathable Fabric",
        "variants": "breathable fabric, ventilated fabric, air-permeable fabric"
      },
      {
        "sub": "秋冬面料",
        "zh": "抓绒",
        "en": "Fleece",
        "variants": "fleece, fleece fabric, fleeced"
      },
      {
        "sub": "秋冬面料",
        "zh": "羊羔绒",
        "en": "Sherpa/Lamb Fleece",
        "variants": "sherpa, lamb fleece, sherpa fleece, faux shearling, lamb wool"
      },
      {
        "sub": "秋冬面料",
        "zh": "摇粒绒",
        "en": "Polar Fleece",
        "variants": "polar fleece, microfleece, micro fleece, polarfleece"
      },
      {
        "sub": "秋冬面料",
        "zh": "针织",
        "en": "Knit",
        "variants": "knit, knitted, knitting, knitwear"
      },
      {
        "sub": "秋冬面料",
        "zh": "毛呢",
        "en": "Woolen/Wool Cloth",
        "variants": "woolen, woolen cloth, wool fabric, wool coating, melton"
      },
      {
        "sub": "秋冬面料",
        "zh": "灯芯绒",
        "en": "Corduroy",
        "variants": "corduroy, cord, wale corduroy"
      },
      {
        "sub": "秋冬面料",
        "zh": "加绒",
        "en": "Fleece-Lined",
        "variants": "fleece-lined, fleece lined, lined with fleece, thermal lined, brushed inside"
      },
      {
        "sub": "秋冬面料",
        "zh": "夹棉",
        "en": "Padded/Quilted",
        "variants": "padded, quilted, padded lining, cotton-padded, quilted lining"
      },
      {
        "sub": "牛仔/外套",
        "zh": "牛仔",
        "en": "Denim",
        "variants": "denim, denim fabric, jean fabric"
      },
      {
        "sub": "牛仔/外套",
        "zh": "帆布",
        "en": "Canvas",
        "variants": "canvas, canvas fabric, duck canvas"
      },
      {
        "sub": "牛仔/外套",
        "zh": "皮革",
        "en": "Leather",
        "variants": "leather, genuine leather, real leather"
      },
      {
        "sub": "牛仔/外套",
        "zh": "仿皮",
        "en": "Faux Leather",
        "variants": "faux leather, faux, pu leather, synthetic leather, vegan leather, imitation leather"
      },
      {
        "sub": "牛仔/外套",
        "zh": "麂皮绒",
        "en": "Suede",
        "variants": "suede, suede fabric, faux suede, nubuck"
      },
      {
        "sub": "牛仔/外套",
        "zh": "防风面料",
        "en": "Windproof Fabric",
        "variants": "windproof fabric, wind-resistant fabric, wind shell fabric, windbreaker fabric"
      }
    ],
    "颜色(Color)": [
      {
        "sub": "中性色",
        "zh": "黑色",
        "en": "Black",
        "variants": "black"
      },
      {
        "sub": "中性色",
        "zh": "白色",
        "en": "White",
        "variants": "white"
      },
      {
        "sub": "中性色",
        "zh": "灰色",
        "en": "Gray/Grey",
        "variants": "gray, grey"
      },
      {
        "sub": "中性色",
        "zh": "深灰色",
        "en": "Dark Gray",
        "variants": "dark gray, dark grey, charcoal, charcoal gray, charcoal grey"
      },
      {
        "sub": "中性色",
        "zh": "浅灰色",
        "en": "Light Gray",
        "variants": "light gray, light grey, ash gray, ash grey, heather gray"
      },
      {
        "sub": "中性色",
        "zh": "米色",
        "en": "Beige",
        "variants": "beige, cream, off-white, sand"
      },
      {
        "sub": "中性色",
        "zh": "卡其色",
        "en": "Khaki",
        "variants": "khaki, khaki color, kakhi"
      },
      {
        "sub": "蓝色系",
        "zh": "蓝色",
        "en": "Blue",
        "variants": "blue"
      },
      {
        "sub": "蓝色系",
        "zh": "深蓝色",
        "en": "Dark Blue/Navy",
        "variants": "dark blue, navy, navy blue, deep blue"
      },
      {
        "sub": "蓝色系",
        "zh": "藏青色",
        "en": "Navy Blue",
        "variants": "navy, navy blue, nautical blue, marine blue, midnight blue"
      },
      {
        "sub": "蓝色系",
        "zh": "浅蓝色",
        "en": "Light Blue",
        "variants": "light blue, sky blue, baby blue, powder blue, pale blue"
      },
      {
        "sub": "绿色系",
        "zh": "绿色",
        "en": "Green",
        "variants": "green"
      },
      {
        "sub": "绿色系",
        "zh": "军绿色",
        "en": "Army Green",
        "variants": "army green, olive green, military green, olive, khaki green"
      },
      {
        "sub": "绿色系",
        "zh": "墨绿色",
        "en": "Dark Green/Forest Green",
        "variants": "dark green, forest green, emerald green, deep green, hunter green"
      },
      {
        "sub": "棕色系",
        "zh": "棕色",
        "en": "Brown",
        "variants": "brown"
      },
      {
        "sub": "棕色系",
        "zh": "咖色",
        "en": "Coffee Brown",
        "variants": "coffee, coffee brown, mocha, mocha brown, espresso"
      },
      {
        "sub": "棕色系",
        "zh": "驼色",
        "en": "Camel",
        "variants": "camel, camel color, tan, camel beige"
      },
      {
        "sub": "黄色系",
        "zh": "黄色",
        "en": "Yellow",
        "variants": "yellow"
      },
      {
        "sub": "黄色系",
        "zh": "姜黄色",
        "en": "Ginger Yellow/Mustard",
        "variants": "ginger yellow, ginger, mustard, mustard yellow, turmeric, ochre"
      },
      {
        "sub": "红色系",
        "zh": "红色",
        "en": "Red",
        "variants": "red"
      },
      {
        "sub": "红色系",
        "zh": "酒红色",
        "en": "Wine Red/Burgundy",
        "variants": "wine, wine red, burgundy, maroon, bordeaux, wine"
      },
      {
        "sub": "红色系",
        "zh": "橙色",
        "en": "Orange",
        "variants": "orange"
      },
      {
        "sub": "红色系",
        "zh": "砖红色",
        "en": "Brick Red",
        "variants": "brick red, brick, terracotta, rust red, burnt orange"
      },
      {
        "sub": "紫色系",
        "zh": "紫色",
        "en": "Purple",
        "variants": "purple, violet, lavender, plum, amethyst"
      },
      {
        "sub": "粉色系",
        "zh": "粉色",
        "en": "Pink",
        "variants": "pink, rose, rosy, blush, coral pink"
      },
      {
        "sub": "浅色系",
        "zh": "杏色",
        "en": "Apricot",
        "variants": "apricot, apricot color, peach, peachy"
      },
      {
        "sub": "浅色系",
        "zh": "奶油色",
        "en": "Cream",
        "variants": "cream, cream color, creamy, ivory, vanilla"
      },
      {
        "sub": "亮色系",
        "zh": "荧光色",
        "en": "Fluorescent/Neon",
        "variants": "fluorescent, neon, neon color, fluorescent color, glow, neon bright"
      },
      {
        "sub": "组合色",
        "zh": "撞色",
        "en": "Contrast Color",
        "variants": "contrast color, color contrast, contrasting color, contrast"
      },
      {
        "sub": "组合色",
        "zh": "拼色",
        "en": "Color Patch/Spliced",
        "variants": "color patch, spliced color, pieced color, color block, patchwork color"
      },
      {
        "sub": "组合色",
        "zh": "多色",
        "en": "Multi-Color",
        "variants": "multi-color, multicolor, multi color, colorful, multi-colored"
      },
      {
        "sub": "组合色",
        "zh": "渐变色",
        "en": "Gradient Color",
        "variants": "gradient, gradient color, ombre, ombre color, color gradient, fade color"
      }
    ]
  }
};
const TITLE_ALL_DIMENSIONS = {
  "品类(Category)": [
    {
      "sub": "上衣类",
      "zh": "T恤",
      "en": "T-Shirt",
      "variants": "t-shirt, tshirt, tee, tshirts, tees"
    },
    {
      "sub": "上衣类",
      "zh": "衬衫",
      "en": "Shirt",
      "variants": "shirt, shirts"
    },
    {
      "sub": "上衣类",
      "zh": "Polo衫",
      "en": "Polo Shirt",
      "variants": "polo, polo shirt"
    },
    {
      "sub": "上衣类",
      "zh": "背心",
      "en": "Tank/Vest",
      "variants": "tank, tank top, vest, waistcoat, sleeveless top"
    },
    {
      "sub": "上衣类",
      "zh": "针织衫",
      "en": "Knitwear",
      "variants": "knitwear, knit, knitted"
    },
    {
      "sub": "上衣类",
      "zh": "毛衣",
      "en": "Sweater",
      "variants": "sweater, sweaters, pullover"
    },
    {
      "sub": "上衣类",
      "zh": "卫衣",
      "en": "Hoodie/Sweatshirt",
      "variants": "hoodie, hoodies, sweatshirt, sweatshirts"
    },
    {
      "sub": "外套类",
      "zh": "夹克",
      "en": "Jacket",
      "variants": "jacket, jackets"
    },
    {
      "sub": "外套类",
      "zh": "风衣",
      "en": "Trench Coat",
      "variants": "trench coat, trench, windbreaker"
    },
    {
      "sub": "外套类",
      "zh": "冲锋衣",
      "en": "Hard Shell/Windbreaker",
      "variants": "windbreaker, hard shell, outdoor jacket"
    },
    {
      "sub": "外套类",
      "zh": "牛仔外套",
      "en": "Denim Jacket",
      "variants": "denim jacket, jean jacket"
    },
    {
      "sub": "外套类",
      "zh": "棒球服",
      "en": "Baseball Jacket/Varsity",
      "variants": "baseball jacket, varsity jacket, letterman"
    },
    {
      "sub": "外套类",
      "zh": "飞行夹克",
      "en": "Bomber Jacket",
      "variants": "bomber jacket, bomber, flight jacket"
    },
    {
      "sub": "外套类",
      "zh": "皮夹克",
      "en": "Leather Jacket",
      "variants": "leather jacket"
    },
    {
      "sub": "外套类",
      "zh": "棉服",
      "en": "Padded Jacket/Cotton Coat",
      "variants": "padded jacket, cotton coat, quilted jacket, puffer"
    },
    {
      "sub": "外套类",
      "zh": "羽绒服",
      "en": "Down Jacket/Puffer",
      "variants": "down jacket, puffer jacket, puffer, down coat"
    },
    {
      "sub": "外套类",
      "zh": "马甲",
      "en": "Vest/Gilet",
      "variants": "vest, gilet, waistcoat"
    },
    {
      "sub": "外套类",
      "zh": "西装外套",
      "en": "Blazer/Suit Jacket",
      "variants": "blazer, suit jacket, sports coat, sport coat"
    },
    {
      "sub": "裤装类",
      "zh": "休闲裤",
      "en": "Casual Pants",
      "variants": "casual pants"
    },
    {
      "sub": "裤装类",
      "zh": "工装裤",
      "en": "Cargo Pants",
      "variants": "cargo pants, cargo, cargo trousers"
    },
    {
      "sub": "裤装类",
      "zh": "牛仔裤",
      "en": "Jeans",
      "variants": "jeans, denim pants"
    },
    {
      "sub": "裤装类",
      "zh": "运动裤",
      "en": "Sweatpants/Track Pants",
      "variants": "sweatpants, track pants, athletic pants, joggers"
    },
    {
      "sub": "裤装类",
      "zh": "束脚裤",
      "en": "Joggers/Tapered Pants",
      "variants": "joggers, jogger, tapered pants, cuffed pants"
    },
    {
      "sub": "裤装类",
      "zh": "短裤",
      "en": "Shorts",
      "variants": "shorts, short"
    },
    {
      "sub": "裤装类",
      "zh": "沙滩裤",
      "en": "Boardshorts/Beach Shorts",
      "variants": "boardshorts, beach shorts, swim shorts, trunks"
    },
    {
      "sub": "裤装类",
      "zh": "西裤",
      "en": "Dress Pants/Trousers",
      "variants": "dress pants, trousers, suit pants, formal pants"
    },
    {
      "sub": "裤装类",
      "zh": "直筒裤",
      "en": "Straight-Leg Pants",
      "variants": "straight-leg pants, straight pants, straight leg"
    },
    {
      "sub": "裤装类",
      "zh": "阔腿裤",
      "en": "Wide-Leg Pants",
      "variants": "wide-leg pants, wide leg, wide-leg trousers"
    },
    {
      "sub": "裤装类",
      "zh": "五分裤",
      "en": "Knee-Length Shorts/Bermuda",
      "variants": "bermuda shorts, knee-length shorts, 3/4 shorts, half pants"
    },
    {
      "sub": "套装类",
      "zh": "运动套装",
      "en": "Sports Set/Track Set",
      "variants": "sports set, track set, athletic set, activewear set"
    },
    {
      "sub": "套装类",
      "zh": "休闲套装",
      "en": "Casual Set",
      "variants": "casual set, leisure set"
    },
    {
      "sub": "套装类",
      "zh": "西装套装",
      "en": "Suit Set/Formal Suit",
      "variants": "suit set, suit, suits, formal suit, business suit"
    },
    {
      "sub": "套装类",
      "zh": "卫衣套装",
      "en": "Hoodie Set",
      "variants": "hoodie set, sweatshirt set"
    },
    {
      "sub": "套装类",
      "zh": "T恤短裤套装",
      "en": "T-Shirt & Shorts Set",
      "variants": "t-shirt and shorts set, tee shorts set, t-shirt shorts set"
    },
    {
      "sub": "套装类",
      "zh": "两件套",
      "en": "Two-Piece Set",
      "variants": "two-piece, two piece, 2-piece, 2pc, 2pcs"
    },
    {
      "sub": "套装类",
      "zh": "三件套",
      "en": "Three-Piece Set",
      "variants": "three-piece, three piece, 3-piece, 3pc, 3pcs"
    },
    {
      "sub": "家居/睡衣类",
      "zh": "睡衣",
      "en": "Pajamas/Sleepwear",
      "variants": "pajamas, pyjamas, sleepwear, sleep wear, sleep shirt"
    },
    {
      "sub": "家居/睡衣类",
      "zh": "家居服",
      "en": "Loungewear/Home Wear",
      "variants": "loungewear, home wear, home clothes, house wear"
    },
    {
      "sub": "家居/睡衣类",
      "zh": "睡袍",
      "en": "Nightgown/Sleep Robe",
      "variants": "nightgown, night gown, sleep robe, sleeprobe"
    },
    {
      "sub": "家居/睡衣类",
      "zh": "浴袍",
      "en": "Bathrobe",
      "variants": "bathrobe, bath robe, robe"
    },
    {
      "sub": "家居/睡衣类",
      "zh": "睡裤",
      "en": "Sleep Pants/Pyjama Bottoms",
      "variants": "sleep pants, pajama pants, pyjama bottoms, lounge pants"
    },
    {
      "sub": "家居/睡衣类",
      "zh": "家居裤",
      "en": "Home Pants/Lounge Pants",
      "variants": "home pants, lounge pants, house pants"
    },
    {
      "sub": "运动/泳装类",
      "zh": "健身背心",
      "en": "Gym Tank/Workout Tank",
      "variants": "gym tank, workout tank, fitness tank, training tank"
    },
    {
      "sub": "运动/泳装类",
      "zh": "运动短裤",
      "en": "Athletic Shorts/Sports Shorts",
      "variants": "athletic shorts, sports shorts, gym shorts, workout shorts"
    },
    {
      "sub": "运动/泳装类",
      "zh": "训练裤",
      "en": "Training Pants",
      "variants": "training pants, training trousers, workout pants"
    },
    {
      "sub": "运动/泳装类",
      "zh": "泳裤",
      "en": "Swim Trunks",
      "variants": "swim trunks, swimming trunks, swim shorts, trunks"
    },
    {
      "sub": "运动/泳装类",
      "zh": "沙滩裤",
      "en": "Boardshorts/Beach Shorts",
      "variants": "boardshorts, beach shorts, swim shorts"
    },
    {
      "sub": "运动/泳装类",
      "zh": "速干衣",
      "en": "Quick-Dry Shirt",
      "variants": "quick-dry shirt, quick dry shirt, fast-dry shirt, moisture-wicking shirt"
    },
    {
      "sub": "运动/泳装类",
      "zh": "骑行服",
      "en": "Cycling Wear",
      "variants": "cycling wear, cycling jersey, biking wear, bike shirt"
    }
  ],
  "版型(Fit)": [
    {
      "sub": "",
      "zh": "宽松版",
      "en": "Loose Fit",
      "variants": "loose fit, loose, loose-fit, relaxed fit, relaxed"
    },
    {
      "sub": "",
      "zh": "修身版",
      "en": "Slim Fit",
      "variants": "slim fit, slim-fit, slim, muscle fit"
    },
    {
      "sub": "",
      "zh": "常规版",
      "en": "Regular Fit",
      "variants": "regular fit, regular-fit, regular, standard fit"
    },
    {
      "sub": "",
      "zh": "合身版",
      "en": "Tailored Fit",
      "variants": "tailored fit, fitted, fitted fit"
    },
    {
      "sub": "",
      "zh": "廓形版",
      "en": "Oversized/Boxy",
      "variants": "oversized, oversize, boxy fit, boxy, baggy, relaxed fit"
    },
    {
      "sub": "",
      "zh": "oversize风",
      "en": "Oversized Style",
      "variants": "oversized, oversize, oversized fit, oversized style"
    }
  ],
  "领型(Neckline)": [
    {
      "sub": "",
      "zh": "圆领",
      "en": "Crew Neck/Round Neck",
      "variants": "crew neck, crewneck, round neck, round-neck"
    },
    {
      "sub": "",
      "zh": "V领",
      "en": "V-Neck",
      "variants": "v-neck, v neck, vneck"
    },
    {
      "sub": "",
      "zh": "翻领",
      "en": "Lapel/Collar",
      "variants": "lapel, collar, turned-down collar, fold-over collar"
    },
    {
      "sub": "",
      "zh": "立领",
      "en": "Stand Collar",
      "variants": "stand collar, stand-collar, stand-up collar, mandarin collar"
    },
    {
      "sub": "",
      "zh": "亨利领",
      "en": "Henley Neck",
      "variants": "henley, henley neck, henley collar, henley shirt"
    },
    {
      "sub": "",
      "zh": "半高领",
      "en": "Mock Neck/Half High Collar",
      "variants": "mock neck, mockneck, half high collar, half-high collar, mock turtleneck"
    },
    {
      "sub": "",
      "zh": "高领",
      "en": "Turtleneck/High Neck",
      "variants": "turtleneck, turtle neck, high neck, high-collar, roll neck"
    },
    {
      "sub": "",
      "zh": "扣领",
      "en": "Button-Down Collar",
      "variants": "button-down collar, button-down, button down"
    },
    {
      "sub": "",
      "zh": "古巴领",
      "en": "Cuban Collar",
      "variants": "cuban collar, cuban, camp collar, cabin collar, revere collar"
    },
    {
      "sub": "",
      "zh": "开领",
      "en": "Open Collar/Notch Lapel",
      "variants": "open collar, open-collar, notch lapel, notched collar"
    },
    {
      "sub": "",
      "zh": "Polo领",
      "en": "Polo Collar",
      "variants": "polo collar, polo, polo shirt collar, knit collar"
    }
  ],
  "闭合方式(Closure)": [
    {
      "sub": "",
      "zh": "套头",
      "en": "Pullover",
      "variants": "pullover, pull-on, pull on, slip-on, slip on, overhead"
    },
    {
      "sub": "",
      "zh": "拉链",
      "en": "Zipper",
      "variants": "zipper, zip, zip-up, zip up, zip closure, zipper closure"
    },
    {
      "sub": "",
      "zh": "半拉链",
      "en": "Half-Zip",
      "variants": "half-zip, half zip, quarter-zip, quarter zip, 1/4 zip, partial zip"
    },
    {
      "sub": "",
      "zh": "纽扣",
      "en": "Button",
      "variants": "button, buttons, button closure"
    },
    {
      "sub": "",
      "zh": "单排扣",
      "en": "Single-Breasted",
      "variants": "single-breasted, single breasted, single row button"
    },
    {
      "sub": "",
      "zh": "双排扣",
      "en": "Double-Breasted",
      "variants": "double-breasted, double breasted, double row button"
    },
    {
      "sub": "",
      "zh": "抽绳",
      "en": "Drawstring",
      "variants": "drawstring, draw string, draw-string"
    },
    {
      "sub": "",
      "zh": "松紧腰",
      "en": "Elastic Waist",
      "variants": "elastic waist, elasticated waist, elastic band, elastane waist"
    },
    {
      "sub": "",
      "zh": "拉链门襟",
      "en": "Zipper Fly/Front",
      "variants": "zipper fly, zip fly, zip-front, zipper front, zipper placket"
    },
    {
      "sub": "",
      "zh": "纽扣门襟",
      "en": "Button Fly/Front",
      "variants": "button fly, button-front, button front, button placket, button-up front"
    }
  ],
  "目标人群(Target)": [
    {
      "sub": "",
      "zh": "男士",
      "en": "Men's",
      "variants": "men's, mens, men, man's, man, male"
    },
    {
      "sub": "",
      "zh": "儿童",
      "en": "Kids/Children",
      "variants": "kids, kids', children, childrens, child"
    },
    {
      "sub": "",
      "zh": "大码男士",
      "en": "Plus Size Men's",
      "variants": "plus size men, big and tall, oversized men, plus-size men"
    },
    {
      "sub": "",
      "zh": "女童",
      "en": "Girls",
      "variants": "girls, girl's, girl"
    },
    {
      "sub": "",
      "zh": "男童",
      "en": "Boys",
      "variants": "boys, boy's, boy"
    },
    {
      "sub": "",
      "zh": "中性",
      "en": "Unisex",
      "variants": "unisex, gender neutral, neutral, couple, matching"
    }
  ],
  "风格(Style)": [
    {
      "sub": "",
      "zh": "民族风",
      "en": "Ethnic",
      "variants": "ethnic, ethnic style, folk style, tribal"
    },
    {
      "sub": "",
      "zh": "商务风",
      "en": "Business Style",
      "variants": "business, business style, business professional"
    },
    {
      "sub": "",
      "zh": "通勤风",
      "en": "Commuter Style",
      "variants": "commuter, commute, commuting style, work wear style"
    },
    {
      "sub": "",
      "zh": "休闲日常",
      "en": "Casual/Daily",
      "variants": "casual, everyday, daily, leisure, leisurely"
    },
    {
      "sub": "",
      "zh": "y2k",
      "en": "Y2K",
      "variants": "y2k, y2k style, y2k fashion, 2000s style, millennium style"
    },
    {
      "sub": "",
      "zh": "街头",
      "en": "Streetwear",
      "variants": "streetwear, street, street style, street fashion"
    },
    {
      "sub": "",
      "zh": "复古",
      "en": "Vintage/Retro",
      "variants": "vintage, retro, classic style, old school"
    },
    {
      "sub": "",
      "zh": "可爱",
      "en": "Cute",
      "variants": "cute, kawaii, sweet, adorable"
    },
    {
      "sub": "",
      "zh": "潮流",
      "en": "Trendy/Fashion",
      "variants": "trendy, fashion, fashionable, stylish, trend, trendy style"
    }
  ],
  "图案/花色(Pattern)": [
    {
      "sub": "基础花色",
      "zh": "纯色",
      "en": "Solid Color",
      "variants": "solid color, solid, plain"
    },
    {
      "sub": "基础花色",
      "zh": "条纹",
      "en": "Striped",
      "variants": "stripe, striped, stripe pattern, pinstripe"
    },
    {
      "sub": "基础花色",
      "zh": "格纹",
      "en": "Plaid/Checkered",
      "variants": "plaid, checkered, check, checked, tartan, gingham"
    },
    {
      "sub": "基础花色",
      "zh": "撞色",
      "en": "Color-Block/Contrast",
      "variants": "color-block, color block, colorblock, color-blocking, contrast color, contrast"
    },
    {
      "sub": "基础花色",
      "zh": "拼色",
      "en": "Patchwork/Color Patch",
      "variants": "patchwork, color patch, patch, pieced color"
    },
    {
      "sub": "基础花色",
      "zh": "渐变",
      "en": "Gradient/Ombre",
      "variants": "gradient, ombre, faded, fade, ombre effect, color gradient"
    },
    {
      "sub": "基础花色",
      "zh": "豹纹",
      "en": "Leopard Print",
      "variants": "leopard, leopard print, leopard pattern, animal print"
    },
    {
      "sub": "基础花色",
      "zh": "波点",
      "en": "Polka Dot",
      "variants": "polka dot, polka-dot, dotted, dots, dot pattern"
    },
    {
      "sub": "印花类",
      "zh": "字母印花",
      "en": "Letter Print",
      "variants": "letter, letter print, text print, typography, letter graphic"
    },
    {
      "sub": "印花类",
      "zh": "数字印花",
      "en": "Number Print",
      "variants": "number, number print, numeral print, numeric graphic"
    },
    {
      "sub": "印花类",
      "zh": "图形印花",
      "en": "Graphic Print",
      "variants": "graphic, graphic print, graphic pattern, graphic design"
    },
    {
      "sub": "印花类",
      "zh": "几何印花",
      "en": "Geometric Print",
      "variants": "geometric, geometric print, geometric pattern, abstract"
    },
    {
      "sub": "风格图案",
      "zh": "迷彩风",
      "en": "Camouflage",
      "variants": "camouflage, camo, camo print, camo pattern"
    },
    {
      "sub": "风格图案",
      "zh": "复古风图案",
      "en": "Vintage Pattern",
      "variants": "vintage pattern, vintage print, retro pattern, retro print"
    },
    {
      "sub": "风格图案",
      "zh": "街头风图案",
      "en": "Streetwear Pattern",
      "variants": "streetwear pattern, street print, urban print, graffiti"
    },
    {
      "sub": "风格图案",
      "zh": "国潮风图案",
      "en": "Chinese Trend Pattern",
      "variants": "chinese trend, china trend, national trend, c-pop, guochao"
    },
    {
      "sub": "风格图案",
      "zh": "波西米亚风",
      "en": "Bohemian",
      "variants": "bohemian, boho, boho-chic, boho print"
    },
    {
      "sub": "风格图案",
      "zh": "y2k风",
      "en": "Y2K Pattern",
      "variants": "y2k pattern, y2k print, 2000s graphic, millennium graphic"
    },
    {
      "sub": "风格图案",
      "zh": "热带风",
      "en": "Tropical",
      "variants": "tropical, tropical pattern, tropical print, tropical design"
    },
    {
      "sub": "节日图案",
      "zh": "圣诞图案",
      "en": "Christmas Pattern",
      "variants": "christmas, christmas pattern, christmas print, xmas, santa, reindeer, snowflake"
    },
    {
      "sub": "节日图案",
      "zh": "万圣节图案",
      "en": "Halloween Pattern",
      "variants": "halloween, halloween pattern, halloween print, pumpkin, ghost, skull halloween"
    },
    {
      "sub": "节日图案",
      "zh": "独立日",
      "en": "Independence Day",
      "variants": "independence day, 4th of july, july 4th, stars and stripes, patriotic"
    },
    {
      "sub": "节日图案",
      "zh": "亡灵节",
      "en": "Day of the Dead",
      "variants": "day of the dead, dia de los muertos, sugar skull, mexico"
    },
    {
      "sub": "节日图案",
      "zh": "父亲节",
      "en": "Father's Day",
      "variants": "father's day, fathers day, dad, daddy"
    },
    {
      "sub": "元素图案",
      "zh": "动物",
      "en": "Animal",
      "variants": "animal, animal print, animal pattern, creature"
    },
    {
      "sub": "元素图案",
      "zh": "骷髅",
      "en": "Skull",
      "variants": "skull, skull print, skull pattern, skeleton, death head"
    },
    {
      "sub": "元素图案",
      "zh": "火焰",
      "en": "Flame",
      "variants": "flame, flames, fire, fire print, flame pattern"
    },
    {
      "sub": "元素图案",
      "zh": "摩托车",
      "en": "Motorcycle",
      "variants": "motorcycle, motorcycle print, motorbike, harley, biker graphic"
    },
    {
      "sub": "元素图案",
      "zh": "花卉",
      "en": "Floral/Flower",
      "variants": "floral, flower, flowers, botanical, floral print, flower pattern"
    },
    {
      "sub": "元素图案",
      "zh": "棕榈叶",
      "en": "Palm Leaf",
      "variants": "palm, palm leaf, palm print, tropical leaf, monstera, palm tree"
    },
    {
      "sub": "印花位置",
      "zh": "胸前小标",
      "en": "Chest Small Logo",
      "variants": "chest logo, chest small logo, chest badge, chest emblem, front small logo"
    },
    {
      "sub": "印花位置",
      "zh": "背部大印花",
      "en": "Back Large Print",
      "variants": "back print, back large print, back graphic, large back print, full back print"
    },
    {
      "sub": "印花位置",
      "zh": "袖口图案",
      "en": "Sleeve Print",
      "variants": "sleeve print, sleeve graphic, sleeve pattern, cuff print"
    },
    {
      "sub": "印花位置",
      "zh": "满版图案",
      "en": "All-Over Print",
      "variants": "all-over print, all over print, full print, allover, all-over pattern"
    },
    {
      "sub": "印花位置",
      "zh": "局部印花",
      "en": "Partial Print",
      "variants": "partial print, local print, localized print, spot print"
    },
    {
      "sub": "印花位置",
      "zh": "前胸字母",
      "en": "Front Letter Print",
      "variants": "front letter, front text, chest letter, front lettering"
    },
    {
      "sub": "印花位置",
      "zh": "后背字母",
      "en": "Back Letter Print",
      "variants": "back letter, back text, back lettering, rear letter"
    },
    {
      "sub": "印花位置",
      "zh": "侧边印花",
      "en": "Side Print",
      "variants": "side print, side graphic, side pattern, lateral print"
    }
  ],
  "场景(Occasion)": [
    {
      "sub": "日常",
      "zh": "日常",
      "en": "Everyday/Daily",
      "variants": "everyday, daily, day-to-day"
    },
    {
      "sub": "日常",
      "zh": "通勤",
      "en": "Commuting",
      "variants": "commute, commuter, commuting"
    },
    {
      "sub": "日常",
      "zh": "居家",
      "en": "Home/Lounge",
      "variants": "home, lounge, lounging, around the house"
    },
    {
      "sub": "日常",
      "zh": "出街",
      "en": "Going Out/Outing",
      "variants": "outing, outings, going out, out and about, day out"
    },
    {
      "sub": "日常",
      "zh": "休闲",
      "en": "Casual/Leisure",
      "variants": "casual, leisure, leisurely, relaxed"
    },
    {
      "sub": "日常",
      "zh": "约会",
      "en": "Date",
      "variants": "date, dating, date night"
    },
    {
      "sub": "商务",
      "zh": "商务",
      "en": "Business",
      "variants": "business, business occasion"
    },
    {
      "sub": "商务",
      "zh": "办公室",
      "en": "Office",
      "variants": "office, workplace"
    },
    {
      "sub": "商务",
      "zh": "职场",
      "en": "Workplace/Professional",
      "variants": "work, professional, workplace"
    },
    {
      "sub": "商务",
      "zh": "会议",
      "en": "Meeting/Conference",
      "variants": "meeting, conference, convention"
    },
    {
      "sub": "商务",
      "zh": "正装",
      "en": "Formal",
      "variants": "formal, formal occasion, formal wear, formal attire"
    },
    {
      "sub": "商务",
      "zh": "商务休闲",
      "en": "Business Casual",
      "variants": "business casual, smart casual, business-casual"
    },
    {
      "sub": "运动",
      "zh": "健身",
      "en": "Gym/Fitness",
      "variants": "gym, fitness, workout, exercise, training"
    },
    {
      "sub": "运动",
      "zh": "跑步",
      "en": "Running",
      "variants": "running, run, jog, jogging"
    },
    {
      "sub": "运动",
      "zh": "训练",
      "en": "Training",
      "variants": "training, workout, exercise, drill"
    },
    {
      "sub": "运动",
      "zh": "篮球",
      "en": "Basketball",
      "variants": "basketball, bball, hoops"
    },
    {
      "sub": "运动",
      "zh": "足球",
      "en": "Soccer/Football",
      "variants": "soccer, football, futbol"
    },
    {
      "sub": "运动",
      "zh": "骑行",
      "en": "Cycling",
      "variants": "cycling, biking, bike riding"
    },
    {
      "sub": "运动",
      "zh": "瑜伽",
      "en": "Yoga",
      "variants": "yoga, yogi, pilates"
    },
    {
      "sub": "运动",
      "zh": "高尔夫",
      "en": "Golf",
      "variants": "golf, golfing"
    },
    {
      "sub": "户外",
      "zh": "户外",
      "en": "Outdoor",
      "variants": "outdoor, outdoors, outside"
    },
    {
      "sub": "户外",
      "zh": "露营",
      "en": "Camping",
      "variants": "camping, camp, camper"
    },
    {
      "sub": "户外",
      "zh": "徒步",
      "en": "Hiking",
      "variants": "hiking, hike, trekking, trek"
    },
    {
      "sub": "户外",
      "zh": "登山",
      "en": "Mountaineering/Climbing",
      "variants": "mountaineering, climbing, mountain climbing, alpine"
    },
    {
      "sub": "户外",
      "zh": "旅行",
      "en": "Travel",
      "variants": "travel, traveling, trip, journey"
    },
    {
      "sub": "户外",
      "zh": "钓鱼",
      "en": "Fishing",
      "variants": "fishing, fish, angling"
    },
    {
      "sub": "海边",
      "zh": "海边",
      "en": "Seaside/Beach",
      "variants": "seaside, beach, shore, coast"
    },
    {
      "sub": "海边",
      "zh": "沙滩",
      "en": "Beach",
      "variants": "beach, sandy beach, beachside"
    },
    {
      "sub": "海边",
      "zh": "度假",
      "en": "Vacation",
      "variants": "vacation, holiday, getaway, resort"
    },
    {
      "sub": "海边",
      "zh": "游泳",
      "en": "Swimming",
      "variants": "swimming, swim, swimming pool"
    },
    {
      "sub": "海边",
      "zh": "游船",
      "en": "Cruise/Boating",
      "variants": "cruise, cruising, boating, yacht, sailing"
    },
    {
      "sub": "派对节日",
      "zh": "派对",
      "en": "Party",
      "variants": "party, club, nightclub, night out"
    },
    {
      "sub": "派对节日",
      "zh": "节日",
      "en": "Festival/Holiday",
      "variants": "festival, holiday, carnival, celebration"
    },
    {
      "sub": "派对节日",
      "zh": "圣诞",
      "en": "Christmas",
      "variants": "christmas, xmas, christmas day"
    },
    {
      "sub": "派对节日",
      "zh": "万圣节",
      "en": "Halloween",
      "variants": "halloween, halloween night"
    },
    {
      "sub": "派对节日",
      "zh": "新年",
      "en": "New Year",
      "variants": "new year, new year's, new year's eve, nye"
    },
    {
      "sub": "派对节日",
      "zh": "家庭聚会",
      "en": "Family Gathering",
      "variants": "family gathering, family party, family reunion, gathering"
    },
    {
      "sub": "校园街头",
      "zh": "校园",
      "en": "School/Campus",
      "variants": "school, campus, college, university"
    },
    {
      "sub": "校园街头",
      "zh": "街头",
      "en": "Street",
      "variants": "street, street style, urban"
    },
    {
      "sub": "校园街头",
      "zh": "潮流",
      "en": "Trendy/Fashion",
      "variants": "trendy, fashion, stylish, trend"
    },
    {
      "sub": "校园街头",
      "zh": "滑板",
      "en": "Skateboarding",
      "variants": "skate, skateboarding, skater, skateboard"
    },
    {
      "sub": "校园街头",
      "zh": "嘻哈",
      "en": "Hip Hop",
      "variants": "hip hop, hiphop, rap, rap style"
    },
    {
      "sub": "校园街头",
      "zh": "复古穿搭",
      "en": "Vintage Outfit",
      "variants": "vintage outfit, retro outfit, vintage style outfit"
    }
  ],
  "季节(Season)": [
    {
      "sub": "基本季节",
      "zh": "春季",
      "en": "Spring",
      "variants": "spring, spring season"
    },
    {
      "sub": "基本季节",
      "zh": "夏季",
      "en": "Summer",
      "variants": "summer, summer season"
    },
    {
      "sub": "基本季节",
      "zh": "秋季",
      "en": "Autumn/Fall",
      "variants": "autumn, fall, autumn season, fall season"
    },
    {
      "sub": "基本季节",
      "zh": "冬季",
      "en": "Winter",
      "variants": "winter, winter season"
    },
    {
      "sub": "跨季节",
      "zh": "春秋",
      "en": "Spring/Autumn",
      "variants": "spring/autumn, spring and autumn, spring fall, transitional"
    },
    {
      "sub": "跨季节",
      "zh": "秋冬",
      "en": "Autumn/Winter",
      "variants": "autumn/winter, autumn and winter, fall/winter, fall winter"
    },
    {
      "sub": "跨季节",
      "zh": "四季",
      "en": "Four Seasons",
      "variants": "four seasons, all seasons, 4 seasons"
    },
    {
      "sub": "跨季节",
      "zh": "夏日",
      "en": "Summer Day",
      "variants": "summer day, summer time, summertime"
    },
    {
      "sub": "跨季节",
      "zh": "冬季保暖",
      "en": "Winter Warm",
      "variants": "winter warm, winter保暖, warm winter, thermal winter"
    },
    {
      "sub": "跨季节",
      "zh": "四季皆宜",
      "en": "All-Season/Year-Round",
      "variants": "all-season, all season, year-round, all-year, all year round"
    },
    {
      "sub": "体感",
      "zh": "轻薄",
      "en": "Lightweight",
      "variants": "lightweight, light-weight, light weight, light, thin"
    },
    {
      "sub": "体感",
      "zh": "透气",
      "en": "Breathable",
      "variants": "breathable, ventilated, ventilation"
    },
    {
      "sub": "体感",
      "zh": "清凉",
      "en": "Cooling/Refreshing",
      "variants": "cooling, cool, refreshing, cool fabric, ice silk"
    },
    {
      "sub": "体感",
      "zh": "保暖",
      "en": "Warm",
      "variants": "warm, warming, warmth"
    },
    {
      "sub": "体感",
      "zh": "加厚",
      "en": "Thickened/Heavy",
      "variants": "thickened, thick, heavy, heavy-weight, heavyweight"
    },
    {
      "sub": "体感",
      "zh": "防风",
      "en": "Windproof",
      "variants": "windproof, wind-proof, wind resistant, wind-resistant"
    }
  ],
  "细节(Detail)": [
    {
      "sub": "口袋",
      "zh": "多口袋",
      "en": "Multi-Pocket",
      "variants": "multi-pocket, multi pocket, multiple pockets, multi-pocket design"
    },
    {
      "sub": "口袋",
      "zh": "大口袋",
      "en": "Large Pocket",
      "variants": "large pocket, big pocket, oversized pocket"
    },
    {
      "sub": "口袋",
      "zh": "拉链口袋",
      "en": "Zipper Pocket",
      "variants": "zipper pocket, zip pocket, zippered pocket"
    },
    {
      "sub": "口袋",
      "zh": "侧口袋",
      "en": "Side Pocket",
      "variants": "side pocket, side pockets, lateral pocket"
    },
    {
      "sub": "口袋",
      "zh": "胸前口袋",
      "en": "Chest Pocket",
      "variants": "chest pocket, chest pockets, breast pocket"
    },
    {
      "sub": "帽子",
      "zh": "连帽",
      "en": "Hooded",
      "variants": "hooded, hood, hooded design, with hood"
    },
    {
      "sub": "帽子",
      "zh": "可拆卸帽",
      "en": "Detachable Hood",
      "variants": "detachable hood, removable hood, detachable cap"
    },
    {
      "sub": "帽子",
      "zh": "抽绳帽",
      "en": "Drawstring Hood",
      "variants": "drawstring hood, drawstring hooded, adjustable hood"
    },
    {
      "sub": "下摆",
      "zh": "罗纹下摆",
      "en": "Ribbed Hem",
      "variants": "ribbed hem, ribbed bottom, ribbed cuff hem"
    },
    {
      "sub": "下摆",
      "zh": "弹力裤脚",
      "en": "Elastic Cuffs",
      "variants": "elastic cuffs, elastic ankle, elastic hem, cuffed ankle"
    },
    {
      "sub": "下摆",
      "zh": "束脚",
      "en": "Cuffed/Elastic Ankle",
      "variants": "cuffed, cuffed ankle, elastic ankle, banded bottom"
    },
    {
      "sub": "下摆",
      "zh": "开叉下摆",
      "en": "Slit Hem",
      "variants": "slit hem, side slit, vented hem, split hem, side vent"
    },
    {
      "sub": "工艺",
      "zh": "拼接",
      "en": "Splicing/Paneling",
      "variants": "splicing, panel, paneling, color panel, splice, pieced"
    },
    {
      "sub": "工艺",
      "zh": "撞色",
      "en": "Contrast Color",
      "variants": "contrast color, color contrast, contrasting color, contrast"
    },
    {
      "sub": "工艺",
      "zh": "破洞",
      "en": "Ripped/Torn",
      "variants": "ripped, torn, distressed, distress, ripped jeans, hole"
    },
    {
      "sub": "工艺",
      "zh": "做旧",
      "en": "Washed/Distressed",
      "variants": "washed, distressed, vintage wash, faded, stonewashed, acid wash"
    },
    {
      "sub": "工艺",
      "zh": "压褶",
      "en": "Pleated",
      "variants": "pleated, pleat, pressed pleat, creased"
    },
    {
      "sub": "工艺",
      "zh": "抽绳",
      "en": "Drawstring",
      "variants": "drawstring, draw string, draw-string, adjustable cord"
    },
    {
      "sub": "工艺",
      "zh": "刺绣",
      "en": "Embroidery",
      "variants": "embroidery, embroidered, embroidered detail, embroidery pattern"
    },
    {
      "sub": "工艺",
      "zh": "印花",
      "en": "Print",
      "variants": "print, printed, printing, printed detail"
    },
    {
      "sub": "工艺",
      "zh": "贴布",
      "en": "Applique/Patch",
      "variants": "applique, appliqu, patch, patches, patchwork, fabric patch"
    }
  ],
  "长度(Length)": [
    {
      "sub": "",
      "zh": "常规款",
      "en": "Regular Length",
      "variants": "regular length, regular, standard length, normal length"
    },
    {
      "sub": "",
      "zh": "短款",
      "en": "Short/Cropped",
      "variants": "short, short length, cropped, crop, cropped length"
    },
    {
      "sub": "",
      "zh": "中长款",
      "en": "Mid-Length",
      "variants": "mid-length, midi, mid length, knee-length, calf-length"
    },
    {
      "sub": "",
      "zh": "长款",
      "en": "Long",
      "variants": "long, long length, full length"
    },
    {
      "sub": "",
      "zh": "加长款",
      "en": "Extra Long/Extended",
      "variants": "extra long, extended length, extra-long, extra length, x-long"
    }
  ],
  "袖长(Sleeve)": [
    {
      "sub": "",
      "zh": "短袖",
      "en": "Short Sleeve",
      "variants": "short sleeve, short-sleeve, short-sleeved"
    },
    {
      "sub": "",
      "zh": "长袖",
      "en": "Long Sleeve",
      "variants": "long sleeve, long-sleeve, long-sleeved, full sleeve"
    },
    {
      "sub": "",
      "zh": "无袖",
      "en": "Sleeveless",
      "variants": "sleeveless, no sleeve, sleeve-less"
    },
    {
      "sub": "",
      "zh": "七分袖",
      "en": "3/4 Sleeve",
      "variants": "3/4 sleeve, three-quarter sleeve, 3/4, three-quarter"
    },
    {
      "sub": "",
      "zh": "五分袖",
      "en": "Half Sleeve/Elbow Sleeve",
      "variants": "half sleeve, half-sleeve, elbow sleeve, 1/2 sleeve"
    },
    {
      "sub": "",
      "zh": "落肩袖",
      "en": "Drop Shoulder",
      "variants": "drop shoulder, drop-shoulder, dropped shoulder, drop shoulder sleeve"
    },
    {
      "sub": "",
      "zh": "插肩袖",
      "en": "Raglan Sleeve",
      "variants": "raglan, raglan sleeve, raglan-style, raglan cut"
    },
    {
      "sub": "",
      "zh": "背心款",
      "en": "Tank Style",
      "variants": "tank, tank top, tank style, sleeveless top"
    },
    {
      "sub": "",
      "zh": "无袖款",
      "en": "Sleeveless Style",
      "variants": "sleeveless, sleeveless style, no-sleeve style"
    },
    {
      "sub": "",
      "zh": "宽袖",
      "en": "Wide/Loose Sleeve",
      "variants": "wide sleeve, loose sleeve, bell sleeve, flare sleeve, batwing sleeve"
    },
    {
      "sub": "",
      "zh": "收口袖",
      "en": "Cuffed Sleeve",
      "variants": "cuffed sleeve, ribbed cuff, elastic cuff, fitted cuff, ribbed sleeve cuff"
    }
  ],
  "腰型(Waist)": [
    {
      "sub": "",
      "zh": "收腰",
      "en": "Waist-Cinching/Fitted",
      "variants": "waist-cinching, waist-cinching, fitted waist, slim waist, cinched waist, waist-defining"
    },
    {
      "sub": "",
      "zh": "高腰",
      "en": "High-Waist",
      "variants": "high-waist, high waist, high-waisted, high-rise, high rise"
    },
    {
      "sub": "",
      "zh": "松紧腰",
      "en": "Elastic Waist",
      "variants": "elastic waist, elasticated waist, elastic band, elastane waist"
    },
    {
      "sub": "",
      "zh": "抽绳腰带",
      "en": "Drawstring Waist",
      "variants": "drawstring waist, drawstring belt, drawstring waistband, adjustable drawstring"
    },
    {
      "sub": "",
      "zh": "系腰带",
      "en": "Belted Waist",
      "variants": "belt, belted, belt waist, belted waist, with belt, belt loops"
    }
  ],
  "功能特性(Feature)": [
    {
      "sub": "",
      "zh": "弹力",
      "en": "Stretch/Elastic",
      "variants": "stretch, stretchy, elastic, elastane, spandex"
    },
    {
      "sub": "",
      "zh": "速干",
      "en": "Quick-Dry",
      "variants": "quick-dry, quick dry, fast-dry, fast dry, quick drying"
    },
    {
      "sub": "",
      "zh": "透气",
      "en": "Breathable",
      "variants": "breathable, ventilated, ventilation, air-permeable"
    },
    {
      "sub": "",
      "zh": "吸湿排汗",
      "en": "Moisture-Wicking",
      "variants": "moisture-wicking, moisture wicking, sweat-wicking, sweat absorption, wicking"
    },
    {
      "sub": "",
      "zh": "遇水显色",
      "en": "Water-Reactive Color",
      "variants": "water-reactive, water activated, hydrochromic, color-changing when wet, water reactive print"
    }
  ],
  "面料/材质(Material)": [
    {
      "sub": "常规面料",
      "zh": "棉",
      "en": "Cotton",
      "variants": "cotton"
    },
    {
      "sub": "常规面料",
      "zh": "纯棉",
      "en": "Pure Cotton",
      "variants": "pure cotton, 100% cotton, all cotton"
    },
    {
      "sub": "常规面料",
      "zh": "棉混纺",
      "en": "Cotton Blend",
      "variants": "cotton blend, cotton blended, cotton-mixed"
    },
    {
      "sub": "常规面料",
      "zh": "涤纶",
      "en": "Polyester",
      "variants": "polyester"
    },
    {
      "sub": "常规面料",
      "zh": "聚酯纤维",
      "en": "Polyester Fiber",
      "variants": "polyester fiber, poly fiber, polyester filament"
    },
    {
      "sub": "常规面料",
      "zh": "锦纶",
      "en": "Nylon",
      "variants": "nylon, polyamide, pa"
    },
    {
      "sub": "常规面料",
      "zh": "氨纶",
      "en": "Spandex/Elastane",
      "variants": "spandex, elastane, lycra"
    },
    {
      "sub": "夏季面料",
      "zh": "亚麻",
      "en": "Linen",
      "variants": "linen, flax"
    },
    {
      "sub": "夏季面料",
      "zh": "棉麻",
      "en": "Cotton Linen",
      "variants": "cotton linen, cotton-linen, linen cotton, cotton and linen"
    },
    {
      "sub": "夏季面料",
      "zh": "冰丝",
      "en": "Ice Silk",
      "variants": "ice silk, cooling silk, ice fiber, cool silk"
    },
    {
      "sub": "夏季面料",
      "zh": "速干面料",
      "en": "Quick-Dry Fabric",
      "variants": "quick-dry fabric, quick dry fabric, fast-dry fabric, moisture-wicking fabric"
    },
    {
      "sub": "夏季面料",
      "zh": "轻薄面料",
      "en": "Lightweight Fabric",
      "variants": "lightweight fabric, light fabric, thin fabric, sheer fabric"
    },
    {
      "sub": "夏季面料",
      "zh": "透气面料",
      "en": "Breathable Fabric",
      "variants": "breathable fabric, ventilated fabric, air-permeable fabric"
    },
    {
      "sub": "秋冬面料",
      "zh": "抓绒",
      "en": "Fleece",
      "variants": "fleece, fleece fabric, fleeced"
    },
    {
      "sub": "秋冬面料",
      "zh": "羊羔绒",
      "en": "Sherpa/Lamb Fleece",
      "variants": "sherpa, lamb fleece, sherpa fleece, faux shearling, lamb wool"
    },
    {
      "sub": "秋冬面料",
      "zh": "摇粒绒",
      "en": "Polar Fleece",
      "variants": "polar fleece, microfleece, micro fleece, polarfleece"
    },
    {
      "sub": "秋冬面料",
      "zh": "针织",
      "en": "Knit",
      "variants": "knit, knitted, knitting, knitwear"
    },
    {
      "sub": "秋冬面料",
      "zh": "毛呢",
      "en": "Woolen/Wool Cloth",
      "variants": "woolen, woolen cloth, wool fabric, wool coating, melton"
    },
    {
      "sub": "秋冬面料",
      "zh": "灯芯绒",
      "en": "Corduroy",
      "variants": "corduroy, cord, wale corduroy"
    },
    {
      "sub": "秋冬面料",
      "zh": "加绒",
      "en": "Fleece-Lined",
      "variants": "fleece-lined, fleece lined, lined with fleece, thermal lined, brushed inside"
    },
    {
      "sub": "秋冬面料",
      "zh": "夹棉",
      "en": "Padded/Quilted",
      "variants": "padded, quilted, padded lining, cotton-padded, quilted lining"
    },
    {
      "sub": "牛仔/外套",
      "zh": "牛仔",
      "en": "Denim",
      "variants": "denim, denim fabric, jean fabric"
    },
    {
      "sub": "牛仔/外套",
      "zh": "帆布",
      "en": "Canvas",
      "variants": "canvas, canvas fabric, duck canvas"
    },
    {
      "sub": "牛仔/外套",
      "zh": "皮革",
      "en": "Leather",
      "variants": "leather, genuine leather, real leather"
    },
    {
      "sub": "牛仔/外套",
      "zh": "仿皮",
      "en": "Faux Leather",
      "variants": "faux leather, faux, pu leather, synthetic leather, vegan leather, imitation leather"
    },
    {
      "sub": "牛仔/外套",
      "zh": "麂皮绒",
      "en": "Suede",
      "variants": "suede, suede fabric, faux suede, nubuck"
    },
    {
      "sub": "牛仔/外套",
      "zh": "防风面料",
      "en": "Windproof Fabric",
      "variants": "windproof fabric, wind-resistant fabric, wind shell fabric, windbreaker fabric"
    }
  ],
  "套装规格(Pack/Set)": [
    {
      "sub": "件套数",
      "zh": "单件",
      "en": "1pc/Single Piece",
      "variants": "1pc, 1 pc, single piece, 1 piece, one piece, single item"
    },
    {
      "sub": "件套数",
      "zh": "两件套",
      "en": "2pc Set/Two-Piece",
      "variants": "2pc, 2pcs, 2 pcs, 2 piece, two piece, two-piece, 2-pc"
    },
    {
      "sub": "件套数",
      "zh": "三件套",
      "en": "3pc Set/Three-Piece",
      "variants": "3pc, 3pcs, 3 pcs, 3 piece, three piece, three-piece, 3-pc"
    },
    {
      "sub": "件套数",
      "zh": "四件套",
      "en": "4pc Set/Four-Piece",
      "variants": "4pc, 4pcs, 4 pcs, 4 piece, four piece, four-piece, 4-pc"
    },
    {
      "sub": "件套数",
      "zh": "多件套",
      "en": "Multi-Pack",
      "variants": "multi-pack, multi pack, multipack, variety pack, bundle"
    },
    {
      "sub": "搭配套装",
      "zh": "T恤短裤套装",
      "en": "T-Shirt & Shorts Set",
      "variants": "t-shirt and shorts set, tee shorts set, t-shirt shorts set, t-shirt shorts combo"
    },
    {
      "sub": "搭配套装",
      "zh": "卫衣长裤套装",
      "en": "Hoodie & Pants Set",
      "variants": "hoodie and pants set, sweatshirt pants set, hoodie joggers set, hoodie trousers set"
    },
    {
      "sub": "搭配套装",
      "zh": "夹克运动裤套装",
      "en": "Jacket & Joggers Set",
      "variants": "jacket and joggers set, jacket track pants set, jacket sweatpants set"
    },
    {
      "sub": "搭配套装",
      "zh": "衬衫短裤套装",
      "en": "Shirt & Shorts Set",
      "variants": "shirt and shorts set, shirt shorts set, shirt shorts combo"
    },
    {
      "sub": "运动套装",
      "zh": "运动两件套",
      "en": "Sports 2-Piece Set",
      "variants": "sports 2-piece set, athletic two-piece set, sports 2pc set, activewear 2-piece"
    },
    {
      "sub": "运动套装",
      "zh": "健身套装",
      "en": "Fitness Set/Workout Set",
      "variants": "fitness set, workout set, gym set, training set, exercise set"
    },
    {
      "sub": "运动套装",
      "zh": "跑步套装",
      "en": "Running Set",
      "variants": "running set, jogging set, track running set, runner set"
    },
    {
      "sub": "运动套装",
      "zh": "训练套装",
      "en": "Training Set",
      "variants": "training set, training suit, practice set, training outfit"
    },
    {
      "sub": "运动套装",
      "zh": "休闲运动套装",
      "en": "Casual Sports Set",
      "variants": "casual sports set, casual athletic set, leisure sport set, casual activewear set"
    },
    {
      "sub": "正装套装",
      "zh": "西装两件套",
      "en": "Suit 2-Piece Set",
      "variants": "suit 2-piece set, two-piece suit, 2pc suit, suit and trousers set, suit and pants set"
    },
    {
      "sub": "正装套装",
      "zh": "西装三件套",
      "en": "Suit 3-Piece Set",
      "variants": "suit 3-piece set, three-piece suit, 3pc suit, suit vest trousers set"
    },
    {
      "sub": "正装套装",
      "zh": "外套长裤套装",
      "en": "Jacket & Pants Set",
      "variants": "jacket and pants set, jacket trousers set, coat pants set, blazer pants set"
    },
    {
      "sub": "正装套装",
      "zh": "马甲西装套装",
      "en": "Vest & Suit Set",
      "variants": "vest suit set, waistcoat suit set, vest and blazer set, vest and suit set"
    },
    {
      "sub": "家居套装",
      "zh": "睡衣套装",
      "en": "Pajama Set",
      "variants": "pajama set, pyjama set, sleepwear set, sleep set, nightwear set"
    },
    {
      "sub": "家居套装",
      "zh": "家居服套装",
      "en": "Loungewear Set",
      "variants": "loungewear set, home wear set, home wear set, lounge set, house wear set"
    },
    {
      "sub": "家居套装",
      "zh": "睡袍套装",
      "en": "Robe Set",
      "variants": "robe set, bathrobe set, gown set, sleep robe set"
    },
    {
      "sub": "多件装",
      "zh": "2件装T恤",
      "en": "2-Pack T-Shirt",
      "variants": "2-pack t-shirt, 2 pack tee, pack of 2 t-shirt, 2 t-shirts pack, 2pc t-shirt pack"
    },
    {
      "sub": "多件装",
      "zh": "3件装背心",
      "en": "3-Pack Tank/Vest",
      "variants": "3-pack tank, 3 pack vest, pack of 3 tank top, 3pc tank pack, 3 tank tops pack"
    },
    {
      "sub": "多件装",
      "zh": "5双装袜子",
      "en": "5-Pair Socks",
      "variants": "5-pair socks, 5 pair socks, pack of 5 socks, 5 pairs sock pack, 5pack socks"
    },
    {
      "sub": "多件装",
      "zh": "2条装短裤",
      "en": "2-Pack Shorts",
      "variants": "2-pack shorts, 2 pack shorts, pack of 2 shorts, 2pc shorts pack, 2 shorts pack"
    }
  ],
  "颜色(Color)": [
    {
      "sub": "中性色",
      "zh": "黑色",
      "en": "Black",
      "variants": "black"
    },
    {
      "sub": "中性色",
      "zh": "白色",
      "en": "White",
      "variants": "white"
    },
    {
      "sub": "中性色",
      "zh": "灰色",
      "en": "Gray/Grey",
      "variants": "gray, grey"
    },
    {
      "sub": "中性色",
      "zh": "深灰色",
      "en": "Dark Gray",
      "variants": "dark gray, dark grey, charcoal, charcoal gray, charcoal grey"
    },
    {
      "sub": "中性色",
      "zh": "浅灰色",
      "en": "Light Gray",
      "variants": "light gray, light grey, ash gray, ash grey, heather gray"
    },
    {
      "sub": "中性色",
      "zh": "米色",
      "en": "Beige",
      "variants": "beige, cream, off-white, sand"
    },
    {
      "sub": "中性色",
      "zh": "卡其色",
      "en": "Khaki",
      "variants": "khaki, khaki color, kakhi"
    },
    {
      "sub": "蓝色系",
      "zh": "蓝色",
      "en": "Blue",
      "variants": "blue"
    },
    {
      "sub": "蓝色系",
      "zh": "深蓝色",
      "en": "Dark Blue/Navy",
      "variants": "dark blue, navy, navy blue, deep blue"
    },
    {
      "sub": "蓝色系",
      "zh": "藏青色",
      "en": "Navy Blue",
      "variants": "navy, navy blue, nautical blue, marine blue, midnight blue"
    },
    {
      "sub": "蓝色系",
      "zh": "浅蓝色",
      "en": "Light Blue",
      "variants": "light blue, sky blue, baby blue, powder blue, pale blue"
    },
    {
      "sub": "绿色系",
      "zh": "绿色",
      "en": "Green",
      "variants": "green"
    },
    {
      "sub": "绿色系",
      "zh": "军绿色",
      "en": "Army Green",
      "variants": "army green, olive green, military green, olive, khaki green"
    },
    {
      "sub": "绿色系",
      "zh": "墨绿色",
      "en": "Dark Green/Forest Green",
      "variants": "dark green, forest green, emerald green, deep green, hunter green"
    },
    {
      "sub": "棕色系",
      "zh": "棕色",
      "en": "Brown",
      "variants": "brown"
    },
    {
      "sub": "棕色系",
      "zh": "咖色",
      "en": "Coffee Brown",
      "variants": "coffee, coffee brown, mocha, mocha brown, espresso"
    },
    {
      "sub": "棕色系",
      "zh": "驼色",
      "en": "Camel",
      "variants": "camel, camel color, tan, camel beige"
    },
    {
      "sub": "黄色系",
      "zh": "黄色",
      "en": "Yellow",
      "variants": "yellow"
    },
    {
      "sub": "黄色系",
      "zh": "姜黄色",
      "en": "Ginger Yellow/Mustard",
      "variants": "ginger yellow, ginger, mustard, mustard yellow, turmeric, ochre"
    },
    {
      "sub": "红色系",
      "zh": "红色",
      "en": "Red",
      "variants": "red"
    },
    {
      "sub": "红色系",
      "zh": "酒红色",
      "en": "Wine Red/Burgundy",
      "variants": "wine, wine red, burgundy, maroon, bordeaux, wine"
    },
    {
      "sub": "红色系",
      "zh": "橙色",
      "en": "Orange",
      "variants": "orange"
    },
    {
      "sub": "红色系",
      "zh": "砖红色",
      "en": "Brick Red",
      "variants": "brick red, brick, terracotta, rust red, burnt orange"
    },
    {
      "sub": "紫色系",
      "zh": "紫色",
      "en": "Purple",
      "variants": "purple, violet, lavender, plum, amethyst"
    },
    {
      "sub": "粉色系",
      "zh": "粉色",
      "en": "Pink",
      "variants": "pink, rose, rosy, blush, coral pink"
    },
    {
      "sub": "浅色系",
      "zh": "杏色",
      "en": "Apricot",
      "variants": "apricot, apricot color, peach, peachy"
    },
    {
      "sub": "浅色系",
      "zh": "奶油色",
      "en": "Cream",
      "variants": "cream, cream color, creamy, ivory, vanilla"
    },
    {
      "sub": "亮色系",
      "zh": "荧光色",
      "en": "Fluorescent/Neon",
      "variants": "fluorescent, neon, neon color, fluorescent color, glow, neon bright"
    },
    {
      "sub": "组合色",
      "zh": "撞色",
      "en": "Contrast Color",
      "variants": "contrast color, color contrast, contrasting color, contrast"
    },
    {
      "sub": "组合色",
      "zh": "拼色",
      "en": "Color Patch/Spliced",
      "variants": "color patch, spliced color, pieced color, color block, patchwork color"
    },
    {
      "sub": "组合色",
      "zh": "多色",
      "en": "Multi-Color",
      "variants": "multi-color, multicolor, multi color, colorful, multi-colored"
    },
    {
      "sub": "组合色",
      "zh": "渐变色",
      "en": "Gradient Color",
      "variants": "gradient, gradient color, ombre, ombre color, color gradient, fade color"
    }
  ]
};

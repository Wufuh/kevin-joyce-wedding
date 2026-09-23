export const languages = {
  en: 'EN',
  zh: '中文',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const routes = [
  '',
  'our-story',
  'details',
  'travel',
  'rsvp',
  'registry',
  'faq',
] as const;

export type RouteSlug = (typeof routes)[number];

export const ui = {
  en: {
    'meta.siteName': 'Kevin & Joyce',
    'meta.defaultDescription':
      'Kevin and Joyce are getting married on January 2, 2027 at the Mandarin Oriental, Taipei.',
    'a11y.skip': 'Skip to content',
    'a11y.menu': 'Menu',
    'a11y.primaryNav': 'Primary',
    'a11y.langSwitch': 'Language',
    'nav.home': 'Home',
    'nav.ourStory': 'Our Story',
    'nav.details': 'Details',
    'nav.travel': 'Travel & Stay',
    'nav.rsvp': 'RSVP',
    'nav.registry': 'Registry',
    'nav.faq': 'FAQ',
    'footer.dateVenue': 'January 2, 2027 · Mandarin Oriental, Taipei',
    'home.metaTitle': 'Home',
    'home.metaDescription':
      'Kevin and Joyce invite you to celebrate their wedding on January 2, 2027 at the Mandarin Oriental, Taipei.',
    'home.eyebrow': "We're getting married",
    'home.date': 'January 2, 2027',
    'home.venue': 'Mandarin Oriental, Taipei',
    'home.lede':
      "A warm celebration with the people we love most. We can't wait to share this day with you in Taipei.",
    'home.ctaRsvp': 'RSVP',
    'home.ctaDetails': 'Wedding details',
    'home.heroAlt': 'Kevin and Joyce, engagement portrait',
    'splash.eyebrow': "You're invited",
    'splash.names': 'Kevin & Joyce',
    'splash.date': 'January 2, 2027',
    'splash.enter': 'Enter',
    'splash.alt': 'Kevin and Joyce',
    'home.storyEyebrow': 'Our story',
    'home.storyTitle': 'How we got here',
    'home.storyBody':
      'From matching online to a Tokyo yes — and welcoming Kobe along the way. Next stop: Taipei, January 2, 2027.',
    'home.storyLink': 'Read our story',
    'home.travelEyebrow': 'Visiting Taipei',
    'home.travelTitle': 'Travel & stay',
    'home.travelBody':
      'Notes on getting to Taipei and staying near the Mandarin Oriental so the weekend feels easy.',
    'home.travelLink': 'Plan your trip',
    'details.metaTitle': 'Details',
    'details.metaDescription':
      'Wedding details for Kevin and Joyce on January 2, 2027 at the Mandarin Oriental, Taipei — cocktail hour at 5:00 PM, reception only, cocktail attire.',
    'details.eyebrow': 'The celebration',
    'details.title': 'Wedding details',
    'details.lede':
      'Everything you need for the day — a reception-only celebration with cocktail hour to begin.',
    'details.dateTitle': 'Date',
    'details.dateValue': 'January 2, 2027',
    'details.dateNote': 'Reception only — there will be no ceremony.',
    'details.venueTitle': 'Venue',
    'details.venueName': 'Mandarin Oriental, Taipei',
    'details.venueAddress':
      '158 Dunhua North Road\nSongshan District, Taipei, Taiwan',
    'details.scheduleTitle': 'Schedule',
    'details.scheduleValue': 'Cocktail hour · 5:00 PM',
    'details.scheduleNote':
      'Join us for cocktails at 5:00 PM. Dinner and celebration to follow.',
    'details.dressTitle': 'Dress code',
    'details.dressValue': 'Cocktail',
    'details.dressNote':
      'Cocktail attire — think polished and celebratory. Suits, dresses, or similarly elegant looks are all welcome.',
    'travel.metaTitle': 'Travel & Stay',
    'travel.metaDescription':
      "Getting to Taipei, wedding room block notes, and directions to the Mandarin Oriental for Kevin and Joyce's January 2, 2027 reception.",
    'travel.eyebrow': 'Taipei',
    'travel.title': 'Travel & stay',
    'travel.lede':
      'Warm welcomes and practical notes for reaching Taipei and settling near the Mandarin Oriental for our January 2, 2027 reception.',
    'travel.roomEyebrow': 'Wedding hotel',
    'travel.roomTitle': 'Room block at Mandarin Oriental, Taipei',
    'travel.roomIntro':
      'Our celebration is at the Mandarin Oriental, Taipei — 158 Dunhua North Road, Songshan District. Guests who would like a room in the wedding block are warmly invited to reach out.',
    'travel.roomDeadlineLabel': 'Deadline:',
    'travel.roomDeadline':
      'please contact the couple by October 31, 2026 if you would like a room in the block.',
    'travel.roomRateLabel': 'Group rates:',
    'travel.roomRateJan2': 'January 2 — NT$17,600 + tax',
    'travel.roomRateJan3': 'January 3 — NT$9,600 + tax',
    'travel.roomPending':
      'Rates are per night, plus tax. Availability is limited.',
    'travel.roomCtaStrong': 'Contact the couple',
    'travel.roomCtaRest':
      ' by October 31, 2026 if you would like a room in the wedding block.',
    'travel.directionsEyebrow': 'Directions',
    'travel.directionsTitle': 'Getting to the hotel',
    'travel.directionsLede':
      'Maps from popular departure points to Mandarin Oriental, Taipei (158 Dunhua North Road, Songshan District, Taipei). Travel times below are approximate ballparks — traffic and transfers can shift them.',
    'travel.mapOpen': 'Open directions in Google Maps',
    'travel.mapFromTpeTitle': 'From Taiwan Taoyuan International Airport (TPE)',
    'travel.mapFromTpeTip':
      'Most international flights arrive here. By taxi or private transfer, plan roughly 40–60 minutes to the hotel, depending on traffic. The Airport MRT into Taipei is also reliable; from there, a short taxi or MRT connection reaches Songshan / Dunhua.',
    'travel.mapFromTsaTitle': 'From Taipei Songshan Airport (TSA)',
    'travel.mapFromTsaTip':
      'Songshan is the closer city airport. A taxi to the Mandarin Oriental is typically about 15–25 minutes, traffic permitting — a convenient option for many regional flights.',
    'travel.mapFromMainTitle': 'From Taipei Main Station',
    'travel.mapFromMainTip':
      'From Taipei Main Station, expect roughly 20–30 minutes by taxi, or a straightforward MRT ride plus a short walk or hop to Dunhua North Road. Exact timing varies with transfers and traffic.',
    'travel.gettingTitle': 'Getting to Taipei',
    'travel.gettingBody1':
      'Most international guests arrive at Taiwan Taoyuan International Airport (TPE). From there, the Airport MRT, taxis, and private transfers make it straightforward to reach central Taipei and the hotel.',
    'travel.gettingBody2':
      'Taipei Songshan Airport (TSA) sits closer to the venue and can be a convenient option for some regional flights.',
    'travel.aroundTitle': 'Getting around',
    'travel.aroundBody':
      "Taipei's MRT is clean, frequent, and easy to navigate in English. Taxis and ride-hailing apps are widely available. The Mandarin Oriental sits near major roads and MRT connections in eastern Taipei, along Dunhua North Road.",
    'travel.neighborhoodTitle': 'Neighborhood notes',
    'travel.neighborhoodBody':
      'Songshan and nearby Zhongshan / Dazhi offer restaurants, cafés, and shopping within easy reach of the hotel. The Dunhua / Nanjing corridor also has many lodging options a short taxi or MRT ride from the venue if you prefer to stay elsewhere.',
    'travel.stayTitle': 'Staying near the venue',
    'travel.stayBody':
      'Guests who prefer to stay on-site can join the wedding block at the Mandarin Oriental (see above). Nearby hotels along Dunhua and Nanjing are also within a short ride if the block is full or you would rather book independently.',
    'rsvp.metaTitle': 'RSVP',
    'rsvp.metaDescription':
      "RSVP for Kevin and Joyce's wedding on January 2, 2027 at the Mandarin Oriental, Taipei.",
    'rsvp.eyebrow': 'Kindly reply',
    'rsvp.title': 'RSVP',
    'rsvp.lede':
      'Let us know if you can celebrate with us, and share a mailing address for your invitation. One response per household is perfect.',
    'rsvp.subject': 'Wedding RSVP — Kevin & Joyce',
    'rsvp.names': 'Name(s)',
    'rsvp.namesHint': 'Include everyone in your party',
    'rsvp.namesPlaceholder': 'Alex Chen, Jordan Lee',
    'rsvp.email': 'Email',
    'rsvp.emailPlaceholder': 'you@example.com',
    'rsvp.address': 'Mailing address',
    'rsvp.addressHint': 'Where should we send your invitation?',
    'rsvp.addressPlaceholder': 'Street, city, state/province, postal code, country',
    'rsvp.attending': 'Will you be attending?',
    'rsvp.attendingSelect': 'Select one',
    'rsvp.attendingYes': 'Yes, gladly',
    'rsvp.attendingNo': 'Sadly no',
    'rsvp.attendingMaybe': 'Maybe / not sure yet',
    'rsvp.guestCount': 'Guest count',
    'rsvp.guestCountHint':
      'Total number of people in your party, including you',
    'rsvp.guestCountPlaceholder': '2',
    'rsvp.dietary': 'Dietary notes',
    'rsvp.dietaryHint': 'Allergies, vegetarian, etc.',
    'rsvp.dietaryPlaceholder': 'Optional',
    'rsvp.message': 'Message',
    'rsvp.messagePlaceholder': 'A note for Kevin & Joyce (optional)',
    'rsvp.submit': 'Send RSVP',
    'rsvp.confirmNote': "We'll confirm once we receive your response.",
    'rsvp.notConfiguredTitle': 'Form not configured yet',
    'rsvp.notConfiguredBody':
      'Set PUBLIC_FORMSPREE_ID in your environment (see README) to enable the on-site RSVP form. Create a free form at formspree.io, then restart the dev server or rebuild.',
    'story.metaTitle': 'Our Story',
    'story.metaDescription':
      'The story of Kevin and Joyce — from matching online to saying yes in Tokyo, and celebrating in Taipei on January 2, 2027.',
    'story.eyebrow': 'Our story',
    'story.title': 'How we found each other',
    'story.lede':
      'A few favorite chapters from our journey — told as a little comic strip.',
    'story.photoSoon': 'Photo coming soon',
    'story.kobeAlt': 'Kobe, our black cocker spaniel',
    'story.proposalAlt':
      'Kevin and Joyce celebrating their engagement',
    'story.panel1Alt':
      'Kevin and Joyce smiling together on a couch',
    'story.panel2Alt':
      'Kevin and Joyce smiling together on their first date at an outdoor dinner table',
    'story.panel3Alt':
      'Illustrated anime-style scene of Kevin and Joyce becoming an official couple',
    'story.panel4Alt':
      'Illustrated anime-style scene of the Tokyo proposal',
    'story.panel6Alt':
      'Kevin and Joyce walking together in wedding attire',
    'story.panel1Title': 'Met online',
    'story.panel1Caption':
      "We matched online and talked like we'd known each other forever.",
    'story.panel2Title': 'First date',
    'story.panel2Caption':
      'A Japanese dinner that turned into instant chemistry.',
    'story.panel3Title': 'Official',
    'story.panel3Caption':
      'A few months (and many dates) later, we made it official.',
    'story.panel4Title': 'Tokyo proposal',
    'story.panel4Caption': 'He proposed in Tokyo — yes forever.',
    'story.panel5Title': 'Kobe',
    'story.panel5Caption':
      'A year in, we got Kobe, our adorable cocker spaniel.',
    'story.panel6Title': 'Next chapter',
    'story.panel6Caption':
      'Next stop: celebrating with you in Taipei, January 2, 2027.',
    'registry.metaTitle': 'Registry',
    'registry.metaDescription':
      'Registry links for Kevin and Joyce — coming soon.',
    'registry.eyebrow': 'Gifts',
    'registry.title': 'Registry',
    'registry.lede':
      "Your presence is the gift we're most looking forward to. If you'd like to give something as well, registry links will appear here soon.",
    'registry.comingTitle': 'Links coming soon',
    'registry.comingBody':
      "We'll add store or experience registries here when they're ready. Placeholder for future links — nothing to click just yet.",
    'faq.metaTitle': 'FAQ',
    'faq.metaDescription':
      "Frequently asked questions about Kevin and Joyce's wedding on January 2, 2027 in Taipei.",
    'faq.eyebrow': 'Questions',
    'faq.title': 'FAQ',
    'faq.lede': 'Quick answers for the celebration.',
    'faq.q1': 'When is the wedding?',
    'faq.a1':
      'January 2, 2027 at the Mandarin Oriental, Taipei. Cocktail hour begins at 5:00 PM, with dinner and celebration to follow. This is a reception-only celebration — there will be no ceremony.',
    'faq.q2': 'Where should we stay?',
    'faq.a2':
      'Staying at or near the Mandarin Oriental, Taipei is most convenient. See Travel & Stay for neighborhood guidance.',
    'faq.q3': 'How do I RSVP?',
    'faq.a3':
      'Use the on-site form on the RSVP page. One response per household is ideal.',
    'faq.q4': 'Is there a dress code?',
    'faq.a4':
      'Cocktail attire. Think polished and celebratory — suits, dresses, or similarly elegant looks are all welcome. See Details for more.',
    'faq.q5': 'Can I bring a plus-one?',
    'faq.a5':
      "Please follow what your invitation indicates. If you're unsure, note it in your RSVP message and we'll follow up.",
  },
  zh: {
    'meta.siteName': 'Kevin & Joyce',
    'meta.defaultDescription':
      'Kevin 與 Joyce 將於 2027 年 1 月 2 日在台北文華東方酒店舉行婚禮宴客。',
    'a11y.skip': '跳至主要內容',
    'a11y.menu': '選單',
    'a11y.primaryNav': '主要導覽',
    'a11y.langSwitch': '語言',
    'nav.home': '首頁',
    'nav.ourStory': '我們的故事',
    'nav.details': '婚禮資訊',
    'nav.travel': '交通與住宿',
    'nav.rsvp': '回函',
    'nav.registry': '禮物清單',
    'nav.faq': '常見問題',
    'footer.dateVenue': '2027 年 1 月 2 日 · 台北文華東方酒店',
    'home.metaTitle': '首頁',
    'home.metaDescription':
      '誠摯邀請您參加 Kevin 與 Joyce 的婚禮宴客，2027 年 1 月 2 日於台北文華東方酒店。',
    'home.eyebrow': '我們要結婚了',
    'home.date': '2027 年 1 月 2 日',
    'home.venue': '台北文華東方酒店',
    'home.lede':
      '一場溫暖的宴客，與我們最親愛的人一起慶祝。期待在台北與您相聚。',
    'home.ctaRsvp': '回函 RSVP',
    'home.ctaDetails': '婚禮資訊',
    'home.heroAlt': 'Kevin 與 Joyce 的訂婚照',
    'splash.eyebrow': '誠摯邀請',
    'splash.names': 'Kevin & Joyce',
    'splash.date': '2027 年 1 月 2 日',
    'splash.enter': '進入',
    'splash.alt': 'Kevin 與 Joyce',
    'home.storyEyebrow': '我們的故事',
    'home.storyTitle': '一路走到這裡',
    'home.storyBody':
      '從線上相遇、東京的「我願意」，到迎來 Kobe。下一站：2027 年 1 月 2 日，台北見。',
    'home.storyLink': '閱讀我們的故事',
    'home.travelEyebrow': '造訪台北',
    'home.travelTitle': '交通與住宿',
    'home.travelBody':
      '前往台北與下榻文華東方附近的實用資訊，讓這個週末更輕鬆自在。',
    'home.travelLink': '規劃行程',
    'details.metaTitle': '婚禮資訊',
    'details.metaDescription':
      'Kevin 與 Joyce 婚禮資訊：2027 年 1 月 2 日於台北文華東方酒店，雞尾酒會 下午 5:00 開始，僅宴客無儀式，服裝為雞尾酒會裝束。',
    'details.eyebrow': '慶祝時刻',
    'details.title': '婚禮資訊',
    'details.lede':
      '當天所需資訊一次看完——僅宴客（無儀式），以雞尾酒會揭開序幕。',
    'details.dateTitle': '日期',
    'details.dateValue': '2027 年 1 月 2 日',
    'details.dateNote': '僅宴客——當日沒有舉行儀式。',
    'details.venueTitle': '地點',
    'details.venueName': '台北文華東方酒店',
    'details.venueAddress': '台灣台北市松山區\n敦化北路 158 號',
    'details.scheduleTitle': '時程',
    'details.scheduleValue': '雞尾酒會 · 下午 5:00',
    'details.scheduleNote':
      '請於下午 5:00 與我們共進雞尾酒會，接著是晚宴與慶祝。',
    'details.dressTitle': '服裝',
    'details.dressValue': 'Cocktail（雞尾酒會裝束）',
    'details.dressNote':
      '雞尾酒會裝束——優雅、適合慶祝的打扮即可。西裝、洋裝或其他同樣精緻的造型都很歡迎。',
    'travel.metaTitle': '交通與住宿',
    'travel.metaDescription':
      '前往台北、婚禮住房優惠說明，以及抵達台北文華東方酒店的路線——Kevin 與 Joyce 2027 年 1 月 2 日宴客。',
    'travel.eyebrow': '台北',
    'travel.title': '交通與住宿',
    'travel.lede':
      '溫暖歡迎您來到台北。以下是前往文華東方、參加我們 2027 年 1 月 2 日宴客的實用資訊。',
    'travel.roomEyebrow': '婚禮飯店',
    'travel.roomTitle': '台北文華東方酒店住房優惠',
    'travel.roomIntro':
      '我們的宴客將於台北文華東方酒店舉行——地址為松山區敦化北路 158 號。若您希望預訂婚禮住房優惠，歡迎與我們聯絡。',
    'travel.roomDeadlineLabel': '截止時間：',
    'travel.roomDeadline':
      '若希望加入住房優惠，請於 2026 年 10 月 31 日前聯繫新人。',
    'travel.roomRateLabel': '團體房價：',
    'travel.roomRateJan2': '1月2日 — NT$17,600＋稅',
    'travel.roomRateJan3': '1月3日 — NT$9,600＋稅',
    'travel.roomPending':
      '房價為每晚費用，另加稅金。名額有限。',
    'travel.roomCtaStrong': '請聯繫新人',
    'travel.roomCtaRest':
      '：若希望加入婚禮住房優惠，請於 2026 年 10 月 31 日前與我們聯絡。',
    'travel.directionsEyebrow': '路線',
    'travel.directionsTitle': '前往飯店',
    'travel.directionsLede':
      '以下為常見出發點至台北文華東方酒店（台北市松山區敦化北路 158 號）的地圖。所列時間僅供參考，實際會因路況與轉乘而有所不同。',
    'travel.mapOpen': '在 Google 地圖開啟路線',
    'travel.mapFromTpeTitle': '從台灣桃園國際機場（TPE）',
    'travel.mapFromTpeTip':
      '多數國際航班在此抵達。搭計程車或私人接送，視路況約需 40–60 分鐘抵達飯店。機場捷運也很方便；抵達台北市區後，再轉計程車或捷運即可到松山／敦化一帶。',
    'travel.mapFromTsaTitle': '從台北松山機場（TSA）',
    'travel.mapFromTsaTip':
      '松山機場距離市區更近。路況許可時，搭計程車至文華東方通常約 15–25 分鐘，適合許多區域航班旅客。',
    'travel.mapFromMainTitle': '從台北車站',
    'travel.mapFromMainTip':
      '從台北車站搭計程車約需 20–30 分鐘；也可搭捷運再步行或短程轉乘至敦化北路。實際時間視轉乘與路況而定。',
    'travel.gettingTitle': '抵達台北',
    'travel.gettingBody1':
      '多數國際賓客會從台灣桃園國際機場（TPE）入境。之後可搭機場捷運、計程車或私人接送，輕鬆前往台北市區與飯店。',
    'travel.gettingBody2':
      '台北松山機場（TSA）離會場更近，部分區域航班旅客可考慮由此入境。',
    'travel.aroundTitle': '市區交通',
    'travel.aroundBody':
      '台北捷運乾淨、班次密集，也有英文標示，很好上手。計程車與叫車 App 也很普及。文華東方位於台北東區敦化北路，鄰近主要幹道與捷運轉乘點。',
    'travel.neighborhoodTitle': '周邊環境',
    'travel.neighborhoodBody':
      '松山與鄰近的中山／大直一帶，餐廳、咖啡廳與購物都很方便。若您想另覓住宿，敦化／南京商圈也有許多選擇，搭計程車或捷運即可抵達會場。',
    'travel.stayTitle': '會場附近住宿',
    'travel.stayBody':
      '若希望住在會場，可加入文華東方的婚禮住房優惠（見上方說明）。敦化與南京路沿線也有其他飯店，若住房已滿或您想自行訂房，車程都很短。',
    'rsvp.metaTitle': '回函',
    'rsvp.metaDescription':
      '回覆是否參加 Kevin 與 Joyce 於 2027 年 1 月 2 日在台北文華東方酒店的婚禮宴客。',
    'rsvp.eyebrow': '懇請回覆',
    'rsvp.title': '回函 RSVP',
    'rsvp.lede': '請告訴我們您是否能與我們一同慶祝，並留下通訊地址以便寄送邀請卡。每個家庭回覆一次即可。',
    'rsvp.subject': '婚禮回函 — Kevin & Joyce',
    'rsvp.names': '姓名',
    'rsvp.namesHint': '請列出同行所有賓客',
    'rsvp.namesPlaceholder': '陳小明、李雅婷',
    'rsvp.email': '電子郵件',
    'rsvp.emailPlaceholder': 'you@example.com',
    'rsvp.address': '通訊地址',
    'rsvp.addressHint': '我們應將邀請卡寄至何處？',
    'rsvp.addressPlaceholder': '街道、城市、州／省、郵遞區號、國家',
    'rsvp.attending': '是否出席？',
    'rsvp.attendingSelect': '請選擇',
    'rsvp.attendingYes': '會出席，很開心',
    'rsvp.attendingNo': '很遺憾無法參加',
    'rsvp.attendingMaybe': '尚不確定',
    'rsvp.guestCount': '人數',
    'rsvp.guestCountHint': '包含您在內的總人數',
    'rsvp.guestCountPlaceholder': '2',
    'rsvp.dietary': '飲食備註',
    'rsvp.dietaryHint': '過敏、素食等',
    'rsvp.dietaryPlaceholder': '選填',
    'rsvp.message': '留言',
    'rsvp.messagePlaceholder': '給 Kevin & Joyce 的話（選填）',
    'rsvp.submit': '送出回函',
    'rsvp.confirmNote': '我們收到後會再向您確認。',
    'rsvp.notConfiguredTitle': '表單尚未設定',
    'rsvp.notConfiguredBody':
      '請在環境變數中設定 PUBLIC_FORMSPREE_ID（詳見 README）以啟用回函表單。可至 formspree.io 免費建立表單，再重新啟動開發伺服器或重新建置。',
    'story.metaTitle': '我們的故事',
    'story.metaDescription':
      'Kevin 與 Joyce 的故事——從線上相遇、東京求婚，到 2027 年 1 月 2 日在台北慶祝。',
    'story.eyebrow': '我們的故事',
    'story.title': '我們如何相遇',
    'story.lede': '幾個我們最愛的篇章——用溫暖的漫畫格說給你們聽。',
    'story.photoSoon': '照片即將補上',
    'story.kobeAlt': '我們的黑色可卡犬 Kobe',
    'story.proposalAlt':
      'Kevin 與 Joyce 慶祝訂婚的一刻',
    'story.panel1Alt':
      'Kevin 與 Joyce 在沙發上一起微笑的自拍',
    'story.panel2Alt':
      'Kevin 與 Joyce 第一次約會時在戶外餐桌前微笑的合照',
    'story.panel3Alt':
      '動漫風格插畫：Kevin 與 Joyce 正式交往',
    'story.panel4Alt':
      '動漫風格插畫：東京求婚場景',
    'story.panel6Alt':
      'Kevin 與 Joyce 身著婚禮服裝一同漫步',
    'story.panel1Title': '線上相遇',
    'story.panel1Caption':
      '我們在線上配對，聊起天來像認識了很久一樣。',
    'story.panel2Title': '第一次約會',
    'story.panel2Caption': '一頓日式晚餐，當場就擦出火花。',
    'story.panel3Title': '正式交往',
    'story.panel3Caption':
      '幾個月（還有無數次約會）之後，我們正式在一起了。',
    'story.panel4Title': '東京求婚',
    'story.panel4Caption': '他在東京求婚——永遠的「我願意」。',
    'story.panel5Title': 'Kobe',
    'story.panel5Caption':
      '交往滿一年，我們迎來了可愛的可卡犬 Kobe。',
    'story.panel6Title': '下一章',
    'story.panel6Caption':
      '下一站：2027 年 1 月 2 日，在台北與你們一同慶祝。',
    'registry.metaTitle': '禮物清單',
    'registry.metaDescription': 'Kevin 與 Joyce 的禮物清單連結——即將推出。',
    'registry.eyebrow': '禮物',
    'registry.title': '禮物清單',
    'registry.lede':
      '您的出席就是我們最期待的禮物。若也想致贈心意，禮物清單連結將很快公布於此。',
    'registry.comingTitle': '連結即將推出',
    'registry.comingBody':
      '準備好後，我們會在此新增商店或體驗類禮物清單。目前僅為佔位，尚無可點選的連結。',
    'faq.metaTitle': '常見問題',
    'faq.metaDescription':
      '關於 Kevin 與 Joyce 2027 年 1 月 2 日台北婚禮宴客的常見問題。',
    'faq.eyebrow': '問題',
    'faq.title': '常見問題',
    'faq.lede': '關於這場慶祝的快速解答。',
    'faq.q1': '婚禮是什麼時候？',
    'faq.a1':
      '2027 年 1 月 2 日於台北文華東方酒店。雞尾酒會於下午 5:00 開始，接著是晚宴與慶祝。本次僅宴客——當日沒有舉行儀式。',
    'faq.q2': '建議住哪裡？',
    'faq.a2':
      '住在台北文華東方酒店或附近最方便。更多周邊資訊請見「交通與住宿」。',
    'faq.q3': '如何回函？',
    'faq.a3': '請使用網站「回函」頁面的表單。每個家庭回覆一次即可。',
    'faq.q4': '有服裝規定嗎？',
    'faq.a4':
      'Cocktail（雞尾酒會裝束）。優雅、適合慶祝即可——西裝、洋裝或其他同樣精緻的造型都很歡迎。詳見「婚禮資訊」。',
    'faq.q5': '可以帶一位同行賓客嗎？',
    'faq.a5':
      '請依邀請卡上的說明為準。若不確定，可在回函留言中註明，我們會再與您確認。',
  },
} as const;

export type UiKey = keyof (typeof ui)['en'];

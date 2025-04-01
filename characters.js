document.addEventListener("DOMContentLoaded", function() {
// 1) キャラクター情報の管理
  const characters = {
    "char01": {
      name: "スティーブ・H・ロジャース",
      player: "わえ/天",
      img: "img/steve.jpg",
      description: "原初のPL。意外とノリがヤベー男。胸板が厚い。銃とマーシャルくらいしかとっていないので最強の脳筋。ニャルラトホテプ見たってSAN値は１しか減らないメンタルを持ってるぜ。",
      campaign: "CoC"
    },
    "char02": {
      name: "硬延 祖亜（ガタノ　ゾア）",
      player: "ダーマッ/幻想卿",
      img: "img/gatano.png",
      description: "記念すべき一人目のキャラ、全ては此処から始まった。闇医者サルトマン、ムーンビーストだって投げちゃうぜ。既に大半のキャラ設定と背景を忘れられた悲しきキャラ。元からなかったかもしれない。帰る所のない幼女（名前：ロリエ）を引き取って助手にしている。",
      campaign: "CoC"
    },
    "char03": {
      name: "五十嵐　真",
      player: "ねこ助",
      img: "img/igarashi.png",
      description: "好奇心と知識欲が高く、猫かぶりで人の弱みを握ることがもはや趣味。自分の利益になりそうにない人物には冷たく嫌味たらしい。道徳を理解したうえであえて弁えないスタイル。スティーブの所為でSANが少し低め。",
      campaign: "CoC"
    },
    "char04": {
      name: "檀　黎　斗",
      player: "わえ/天",
      img: "img/kuroto.png",
      description: "ニャルラトホテプ万歳を革命させた男、自称神・檀黎斗その人。　わ　た　し　こ　そ　神　だ　ぁ　！　……うるさい。うざい。だるい。でかい。つよい。仮面ライダーである。今現在に至るまで、古今東西全ての我らのTRPGがヤバくなる原因は「こいつのせい説」は割とある。邪神と仲良くするな。凄くうるさいが面倒見は意外といい。デンジャラスゾンビになると手が止められない。オマケにゴッドマキシマムマイティXまで手に入れた。やめろボケ。お気に入りの一人。",
      campaign: "CoC"
    },
    "char05": {
      name: "織斑一夏",
      player: "ダーマッ/幻想卿",
      img: "img/ichika.jpg",
      description: "ニャルラトホテプの細胞を喰らい適合し、ネクロノミコンの正気喪失に耐えて魔術を操るやべーやつ。",
      campaign: "CoC"
    },
    "char06": {
      name: "やる夫",
      player: "いろ+",
      img: "img/yaruo.jpg",
      description: "行動派ニート。何の命運なのかニャルラトホテプの所有するロンゴミニアドを手にし、所持している間はアルトリアっぽくなる愉快な白饅頭。",
      campaign: "CoC"
    },
    "char07": {
      name: "オルガ・イツカ",
      player: "ダーマッ/幻想卿",
      img: "img/oruga.jpg",
      description: "ほぼすべての世界で存在し出番がある十八番キャラ。こいつが居る世界は基本的に鉄華団は確実に存在する。CoC世界では独り身だが恋慕されてたり、ウマ娘世界では結婚すらしてる勝ち組。アリアンロッド世界は独り身のまま、平和である。世界によって肉体が強かったり弱かったりするが、メンタルはほぼカンストレベルで強い。ウマ娘世界はホントの一般人だったが、結婚を経てメンタルが成長した。お気に入りの一人。魂のメインキャラその１。",
      campaign: "CoC"
    },
    "char08": {
      name: "清水 梓",
      player: "ねこ助",
      img: "img/azusa.png",
      description: "医者の家系に生まれ若くして精神科医として働いている。世話焼きでしっかり者だが融通が利かないタイプ。丸め込めば案外ちょろいのでなんとか誤魔化せ。患者用にスタンガンを持ち歩き、物理でどうにかしようとする節がある。オリムラ、ダンと面識があるようだ。",
      campaign: "CoC"
    },
    "char09": {
      name: "千翼",
      player: "わえ/天",
      img: "img/chihiro.png",
      description: "誕生罪、判決：死刑。コイツが居ると彩度が下がる。ものすごく下がる。悪い子ではないし、むしろ良い子だし……でもちょっと出生がね……？油断すると暴走してアマゾン化して全員ぶっころしそうな子。５歳で結婚した。嫁のAPPが２３というあまりに勝ち組。死ね。お気に入りの一人。",
      campaign: "CoC"
    },
    "char10": {
      name: "中島 ユキ(幸雄)",
      player: "ねこ助",
      img: "img/yuki.png",
      description: "美人なオネエ、髭は生えるし首は太い。体力はないはずだがイイ男を見つけると俊敏。気が強いがビビリなので愛せ。オネエの人脈は広い。なぜかおじいさんに対して過剰なまでに嫌悪感を抱き逃亡癖が再発する。（不定の狂気発症中：逃亡癖4ヶ月、異常な執着1ヶ月）",
      campaign: "CoC"
    },
    "char11": {
      name: "ヒイロ・ユイ",
      player: "ダーマッ/幻想卿",
      img: "img/hiiro.png",
      description: "キャラクタ爆弾魔のテロリスト、ビームサーベル持ってたヤベー奴。最終的にSCPに首へし折られて死んだのにヴァースの中でちゃっかり出番があった為生き返ったかもしれない。ウマ娘世界で他者所有のNPCとして登場している。ーの説明",
      campaign: "CoC"
    },
    "char12": {
      name: "ハリー・サウンドクラック",
      player: "わえ/天",
      img: "img/harry.png",
      description: "ティンダロスを音割れで魅了した兄弟の片割れ。体格がバキの花山薫のソレ。ニューヨークに居そう。",
      campaign: "CoC"
    },
    "char13": {
      name: "ポッター・サウンドクラック",
      player: "ダーマッ/幻想卿",
      img: "img/potter.png",
      description: "ティンダロスを音割れで魅了した兄弟の片割れ。SCPの終末卓？でも小傘と出番があった、続きはまだですか？陽気なアメリカ人のノリ。",
      campaign: "CoC"
    },
    "char14": {
      name: "江戸川小川",
      player: "家電",
      img: "img/ogawa.png",
      description: "Maybe初めてにゃる万で作ったキャラ。よくわかんない流れでコナンのBGMを垂れ流しながらキャラクリしてたから江戸川という苗字になり、リアル苗字が小川だから名前は小川になった。当時COCのリプレイ動画全盛期の時代に触発されてマジキチガンプレイしたかったっていう記憶しかない。",
      campaign: "CoC"
    },
    "char15": {
      name: "ヒロインX",
      player: "わえ/天",
      img: "img/x.png",
      description: "謎のヒロインX、邪神の双子の片割れ。えっちゃんが八幡とかいうクソボケ野郎に奪われて毎日キレてる。お気に入りの一人。",
      campaign: "CoC"
    },
    "char16": {
      name: "えっちゃん",
      player: "ダーマッ/幻想卿",
      img: "img/xchan.png",
      description: "謎のヒロインXオルタ、邪神の双子の片割れ。八幡に心奪われた乙女、食べる事大好き。親を考えたら割と常識的な子、また出番があることを信じて……。",
      campaign: "CoC"
    },
    "char17": {
      name: "あるとりあ",
      player: "わえ/天　、いろ+",
      img: "img/altria.png",
      description: "ニャルラトホテプから剥がれちゃった系女神様。良い人ですよ？ほんとだよ？面白い事は、まぁ、好きだけど。とりあえずお替りください。意外と苦労人。",
      campaign: "CoC、キングアーサー"
    },
    "char18": {
      name: "藤原竜也",
      player: "家電",
      img: "img/tatuya.avif",
      description: "いつぞや開催したCoC卓に登場しました。影響とかなかったと思います。ただ漠然と藤原竜也を作りたくなったのが切っ掛けだったような。とにかく声がうるせえし、くそガキ感満載のキャラだった気がします。ジャンヌにかまってちゃんしまくってたり、一夏君とは仲が良い、そんな普通の男子学生だった気がします。辺鄙な村で事件に巻き込まれた気がします。思い出せるのはこの辺りまでです。",
      campaign: "CoC"
    },
    "char19": {
      name: "衛宮士郎",
      player: "いろ+",
      img: "img/shiro.png",
      description: "キャラクターの説明",
      campaign: "CoC"
    },
    "char20": {
      name: "ジャンヌ・オルタ・ダルク",
      player: "わえ/天",
      img: "img/jannealter.png",
      description: "不憫枠。もの凄いひねくれてそうな見た目から放たれる圧倒的ヒロイン力（笑）にひれ伏せ。料理があまりできないのになぜか料理部にいる。士郎君がいないと多分３回くらい死んでる。割と気に入ってるキャラである。",
      campaign: "CoC"
    },
    "char21": {
      name: "ジャンヌ・ダルク",
      player: "わえ/天",
      img: "img/janne.png",
      description: "　姉　な　る　も　の。逃げろ、こいつはヤバい。マジでヤバい。サイコだ。オマケにシュブ・ニグラスを従えている。本当にヤバい、多分黎斗でも止められない。しれっとシュブ・ニグラスことシューちゃんと一緒にアリアンロッドに来てやがった。「オルタは何処ですか？」ヒエッ……。",
      campaign: "CoC"
    },
    "char22": {
      name: "沖田総司",
      player: "わえ/天",
      img: "img/okita.png",
      description: "大正シナリオで活躍した眼帯の美少女。別に喀血とかしないし病弱とかでもない。有り余るSIZ１７を乳がデカいという解釈をされたため、巨乳オブ・ザ・巨乳にされた子。今ステ見たけど意外と万能で草。",
      campaign: "CoC"
    },
    "char23": {
      name: "星見信長（ホシミ　ノブナガ）",
      player: "ダーマッ/幻想卿",
      img: "img/nob.png",
      description: "大正卓出身、重要な弓のダイスに勝つ女。某バーサーカーの子に安珍認定されたが如くマッチポンプで好意を勝ち取った。キャラ演じが好きだったのでいつかまた動かしたい。お気に入りの一人。",
      campaign: "CoC"
    },
    "char24": {
      name: "アルトリア・オルタ・ペンドラゴン",
      player: "わえ/天",
      img: "img/altriaalter.png",
      description: "おるたそ。最強の実力に、最高に暗い過去に、実はよわよわメンタルという曇りまくり展開待ったなしだった子。妹のリリィが大切。とても大切。姉のヒストリアも大切。とても大切。兄のアルトリウスも大切。とても大切。仲間も大好き。お母さんも大好き。ウーサーはもう一回死ね。全部終わったらゆっくり過ごしててほしい子。ロールしててメンタルがやられる。お気に入りの一人。",
      campaign: "キングアーサー"
    },
    "char25": {
      name: "アルトリア・リリィ",
      player: "いろ+",
      img: "img/lily.png",
      description: "可愛いぽわぽわ系炎魔法使い。その実力はガチ。日頃は炎魔法にストイックですぐ迷子になってしまうような天使。おいしいお饅頭を貰うと天使のような笑顔でオルたそを昇天させる。神殿ではその才能を見いだされ戦力として酷使され━━はじめたころ、オルたそがリリィを救い出し神殿から奪い取る。最終的にクトゥグアの炎を継承していよいよアリアンロッドキャラ最高峰へと辿り着く。超級炎魔法・メテオは彼女の代名詞。━━「燃やしますか！」",
      campaign: "キングアーサー"
    },
    "char26": {
      name: "オルガ・イツカ",
      player: "ダーマッ/幻想卿",
      img: "img/oruga.jpg",
      description: "キングーアーサー卓オルガの説明",
      campaign: "キングアーサー"
    },
    "char27": {
      name: "スネーク",
      player: "Caris",
      img: "img/snake.png",
      description: "キャラクターの説明",
      campaign: "キングアーサー"
    },
    "char28": {
      name: "江戸川小川",
      player: "家電",
      img: "img/ogawa.png",
      description: "2代目江戸川小川。名前だけCoCから流用した。他のプレイヤーはキャラのロールプレイをしていた中、ほぼ素の自分のロールプレイ(?)していた。某TRPGリプレイ動画でウラガンキン警官というキャラが出てきて自分もボルボロスでキャラクリしようとしたが断念されたキャラであり、今まで作ったキャラも大体ボルボロスになれなかったキャラ。アコライトにしたのはジョブ被りを嫌がったため。エルダナーンにしたのはなんとなく。シナリオ内ではタンブルウィード(西部劇の映画によく出てくる転がる草)の如く転がり続ける呪いを掛けられてしまったところをアルトリア・オルタに止めて貰ったのが出会いという設定。リリィは可愛いし、オルタそはママやし、オルガとスネークはダチ。浴場でゾロが出てきた瞬間射●したり、小傘ちゃんに泣きついてこがパイを堪能してたらしい。化け物だし下衆すぎて草。シナリオの大切な箇所は朧気ながら覚えてるけどあとは殆ど覚えて無い。これ以上語れないし語りたくもない忌子。",
      campaign: "キングアーサー"
    },
    "char29": {
      name: "エドモン・ダンテス",
      player: "わえ/天",
      img: "img/edomon.png",
      description: "レベル1卓出身、復讐者ことアヴェンジャー。後にエドモン・ペンドラゴンに名が変わる男。ありえないくらい重い過去から繰り出される恩讐の炎には参ったね。ヒストリア女王と結婚した。精神力カンストしてんのかオメーって位メンタルが強い。別名グランドアヴェンジャー。ロールしててメンタルがやられる。が、復讐が終われば只のクソかっこいいイケメン。面倒見も良いし、強いし、叩き上げだし、なんだコイツ。お気に入りの一人。",
      campaign: "Lv1"
    },
    "char30": {
      name: "佐々木　小次郎（ササキ　コジロウ）",
      player: "ダーマッ/幻想卿",
      img: "img/sasaki.PNG",
      description: "レベル1卓出身、サー佐々木。シーフサムライのヤベー奴、視界が通ってて複数敵が居れば大抵殺し切る。アリアンロッドのジャック・ザ・リッパーと結婚した業の者、二回りぐらいの歳の差。過程はどうあれロリコンザムライの称号は揺るがない。でもなんだかんだ言ってキャラクターと曇り具合が好き。いつかこいつが復讐を果たしたときの話を書くかやりたい、時系列は水の都の魔以降、グランフェルデンの際。お気に入りの一人。",
      campaign: "Lv1"
    },
    "char31": {
      name: "ジャック・ザ・リッパー",
      player: "いろ+",
      img: "img/jack.png",
      description: "キャラクターの説明",
      campaign: "Lv1"
    },
    "char32": {
      name: "岸井夢人",
      player: "家電",
      img: "img/yumeto.png",
      description: "普通にLv1から地道にやってこうぜをテーマに始まったLv1卓で作ったキャラです。好青年なイメージのキャラを作りたかったから立ち絵はデスノートのライト君を使用させていただきました。名前の由来は東方の古明地こいしが好きだったんで『無意識』を逆読みさせました。人が入ってるのは夢だけだと女の子っぽかったからです。自分の飽き性が災いしてほぼ序盤までの登場でした（ごめんなエドモン）。なので語れることがほぼないです。でも振り返ってみればいいキャラだったかなと思います。",
      campaign: "Lv1"
    },
    "char33": {
      name: "古明地こいし",
      player: "家電",
      img: "img/koishi.png",
      description: "Lv1卓でリタイアしたライト君の代わりを務めていただいたこいしちゃんです。自由気ままなお姉ちゃん大好きっ子という設定です。ただやればやるほど自分の中のこいしのイメージとかけ離れたロールプレイになってしまうことに大変苦しみました。こいしちゃんは好きですが、なんとも複雑な気持ちになるキャラです。",
      campaign: "Lv1"
    },
    "char34": {
      name: "アルトリウス・ペンドラゴン",
      player: "わえ/天",
      img: "img/altrius.png",
      description: "インチキおじさん。何処にでも出てくるごっつ迷惑なオーマ＆邪神系鬼いちゃん。アーサー顔乱立はこいつから始まった。とんでもねぇ変態でとんでもねぇ曇り過去を持つ男。妹の為なら多重世界だって敵にまわしちゃうもんに。結果：別の自分に殴られた。ウマ娘世界で起きるヤバい事件。大体この男が関わってる説。「大体アルトリウスのせい」←これ便利",
      campaign: "CoC、Lv1、此処同好会、FGO/DSO"
    },
    "char35": {
      name: "加藤段蔵",
      player: "こーつー",
      img: "img/danzo.png",
      description: "キャラクターの説明",
      campaign: "Lv1"
    },
    "char36": {
      name: "クラピカ",
      player: "いろ+",
      img: "img/kurapika.jpg",
      description: "プランD",
      campaign: "Lv1"
    },
    "char37": {
      name: "ダディクール",
      player: "家電",
      img: "img/daddy.jpg",
      description: "Lunatic_1stに登場しました。TRPGリプレイ動画を見漁っていた時期に、2ちゃんねるキャラが多く出演していたことに影響を受けて作ったキャラです。タンヤオのAAにちなんで博徒キャラ設定です。iro+氏から『最強のキャラを持ってこい』と言われ特に思いつかなかったんで最強のスーパーラッキーマンにしました。スーパーラッキーなので当然、幸運ロールは基本的に成功します。現代から幻想郷へという舞台設定があったため、極力現代人っぽいキャラにしました。スーパーラッキーなので当然幻想郷での初期リスは冥界、白玉楼です。妖夢かわいいよ妖夢スーパーラッキーなので当然こいしちゃんと行動することにもなりました。ﾔｯﾀｰいい意味で今よりこの頃の方がロールプレイに躊躇が無いなと見返してて思いました。今より過去の自分のが参考になるという。好きか嫌いかで言えば好きなキャラです。ただ、幸運だけで解決できちゃうっていうのが玉に瑕だなと感じてます。そのせいかLunatic_1stが終わる当たりで愛は消えました。元々なかったのかもしれません。Daddy,Cool!!",
      campaign: "Lunatic_1st"
    },
    "char38": {
      name: "ゴジータ",
      player: "わえ/天",
      img: "img/gozita.png",
      description: "幻想郷卓出身、まちがいなく最強。アルトリウスやあるとりあより絶対に強い。１７歳という年齢でクソみたいな地獄を味合わされ続けた結果、メンタルがちょっと壊れたけど、スーパーヒロイン椛によって救済された。結果、幻月ぶっ飛ばした。マジかよ。フラン、レミリア、萃香、アリス、椛……誰が一番好きなんですか？そう聞けば、あの男は笑ってどっか飛んで行った。年相応以下に、色恋沙汰には雑魚なのだ。ゴジータの明日は多分アッチ（地獄）だ。最近、光太郎と同じくウマ娘のアリアンロッド世界で存在していたことが確約された。何してんのアイツ。まぁ、大体アルトリウスのせいでしょ。",
      campaign: "Lunatic_1st Lunatic_2nd 此処同好会 UnderWorld"
    },
    "char39": {
      name: "南　光太郎（ミナミ　コウタロウ）",
      player: "ダーマッ/幻想卿",
      img: "img/kotaro.png",
      description: "幻想郷卓出身、私用キャラの最強。産まれた段階で人外だった、暫定太陽のアルテミット・ワン。曇る姿も輝くが、こいつが前を向いて覚悟したときに心強さが異常。最も輝くのは相棒と背中合わせで共闘しているとき。様々なキャラに恋慕される中、本人はぬえが好きという業の者。光太郎の明日はどっちだ。最近、ウマ娘のアリアンロッド世界で存在していたことが確約された。魂のメインキャラその２。",
      campaign: "Lunatic_2nd 此処同好会 UnderWorld"
    },
    "char40": {
      name: "アーサー・ペンドラゴン",
      player: "わえ/天",
      img: "img/arther.png",
      description: "アルトリウスの被害者Ｎｏ.１あのボケナスのせいで数回死んだし、ノアと戦う羽目になったしで本当に迷惑被った人。精神性はマトモ。……なんてマトモなアーサーなんだ……（驚愕）。この男、トレーナーでトラブルシューターで仮面ライダー！余りにも根性と魂のレベルが上がりすぎて最近アルトリウス（副王）がコイツこわ……ってなった。メンタル強者の一人。たぶんアルトリウスシリーズで一番強い。序盤はバンバン曇っていたが、今じゃあんまり曇らない……と言うより、ちゃんとガス抜き出来るようになった。まぁソレはソレとして、世界がやたらとこの子に厳しいので、個人的には一度がっつり闇落ちしても良いのよ？って思ってる。が、全然闇落ちしない。マジでしない。何なんだこいつ。自分に出来ることをするだけと言いながらどこまでする気だコイツ。もういいだろォ！！凄まじき戦士が待ってるぞぉ！！お気に入りの一人。",
      campaign: "ウマ娘、プロトコンプレックス、Underworld"
    },
    "char41": {
      name: "オルガ・イツカ",
      player: "ダーマッ/幻想卿",
      img: "img/oruga.jpg",
      description: "ウマ娘オルガの説明",
      campaign: "ウマ娘、プロトコンプレックス、Underworld"
    },
    "char42": {
      name: "幻月",
      player: "いろ+",
      img: "img/gengetuchan.png",
      description: "幻月の説明",
      campaign: "Lunatic_2nd、此処同好会、ウマ娘、プロトコンプレックス、Underworld"
    },
    "char43": {
      name: "UV",
      player: "いろ+",
      img: "img/UV.png",
      description: "泣く子も黙るUV様なのだよ",
      campaign: "ウマ娘、プロトコンプレックス、Underworld"
    },
    "char44": {
      name: "アルトリア・リリィ",
      player: "いろ+",
      img: "img/lilyalter.png",
      description: "a",
      campaign: "Underworld"
    },
    "char45": {
      name: "魔人さん",
      player: "わえ/天",
      img: "img/majin.jpg",
      description: "Underworldに突然ポップした記憶喪失系強者美少女。魔人さんは魔人さんだぞ。凄いんだぞ。余りにも自由人なキャラ。最近男キャラばっか使ってたし、女キャラも使ってみるかぁ、と作成した思い出。元々自由人なやばい性格って好きだったし、弾けるか。って感じにやってみたら思った以上に自由人過ぎてほぼ無敵の人。やたら強くて、設定もカチ盛られている。でも記憶喪失なのでそこでバランスをとる感じ。サーサササ（佐々木小次郎）と徐福がコンバットフュージョンすることになった原因。意外と下世話な話題もこなせる。面白いから。面白い事は大好きだぞ、って感じかな。リリィには大きな恩があるので、その恩を返し切らないとな、って思ってる。サーサササにはおでん分の礼は返すぞ、殺し合いでもすればいいか？",
      campaign: "Underworld"
    },
    "char46": {
      name: "やらない夫",
      player: "家電",
      img: "img/yaranaio.jpg",
      description: "ガチでこのキャラに関しての記憶がないので書くことないです。ボンちゃんズがくそ優秀だったのとナナチが癒しだったくらいですかね。確か自分が続けることが苦痛になってこのキャラの登場しているCoCが止まってしまっていると記憶しています。。自分が深海好きと言ったきっかけで深海が題材の卓を用意してくれたiro+氏、ごめんよ。。。いつか続きやりましょう。",
      campaign: "CoC"
    },
    "char47": {
      name: "ボンドルド",
      player: "わえ/天",
      img: "img/bondold.jpg",
      description: "水星卓出身、表記ゆれじゃない方。もう一人の自分と仲が良い、ボ卿が楽しそうで何よりです。死んでくれ。",
      campaign: "CoC"
    },
    "char48": {
      name: "ボンボルド",
      player: "ダーマッ/幻想卿",
      img: "img/bonbold.jpg",
      description: "水星卓出身、表記ゆれの方。もう一人の自分と仲が良い、ボ卿が楽しそうで何よりです。",
      campaign: "CoC"
    },
    "char49": {
      name: "碇シンジ",
      player: "わえ/天",
      img: "img/shinji.png",
      description: "UFC、IMMAFアマチュア総合格闘技世界選手権王者。なんとなく碇シンジ使いたいなぁで作成したキャラ。シンジを使うにしても、ウジウジウジウジされるとうっとしいからね、筋肉で解決するようにしようね。トラやクマと戦ったり、山にこもったりして自分を鍛えているそう。「破ァッ！！」で大体なんとかなる。",
      campaign: "CoC"
    },
    "char50": {
      name: "ゴンさん",
      player: "ダーマッ/幻想卿",
      img: "img/gonsan.jpg",
      description: "筋肉卓出身、声だけ普通のゴンの化け物。途中参加の卓だったが、その能力は戦闘技能（跳躍を含む）特化であり探索できない。CoCで探索しないキャラとは？でもこいつ大体何とかできそうだな。筋肉卓って言うぐらいだし、多分何とかなるよ。",
      campaign: "CoC"
    },
    "char51": {
      name: "ロムスカ・パロ・ウル・ラピュタ",
      player: "家電",
      img: "img/musuka.jpg",
      description: "キャラ説明のはずなのに余りにも記憶が朧気…の内の一人です。異界化した渋谷が舞台のCoC卓に登場しました。かなり善寄りの大人キャラという設定です。下着にはシータの顔が印刷されてます。異質な部屋でおかしな力を得た彼は、両腕が肥大化してしまいます。全世界なんとかかんとかチャンピオンであるシンジ君と異界化した渋谷で出会い、なんやかんやムンビと戦うことになり、生き残ったムスカは「力」こそが正義という理念を植え付けられました。その後、米津玄師（CoCバージョン）やゴンさんと出会い、4人で異界化した渋谷から脱出しようと協力して行きます。実は結構好きなキャラです。どうせネタキャラやしネタっぽくしたろｗと思ったら結構善人っぽくなっちゃって自分の気性にマッチしちゃってました。勿論ボルボロス候補でした。",
      campaign: "CoC"
    },
    "char52": {
      name: "米津玄師",
      player: "いろ+",
      img: "img/komedumukimuki.jpg",
      description: "筋肉卓出身　サポートNPCの米津玄師。",
      campaign: "CoC"
    },
    "char53": {
      name: "クラウド・ストライキ",
      player: "わえ/天",
      img: "img/cloud.png",
      description: "class 「俺の名はクラウド」久々に1からアリアンロッドをやろう、カジュアルな感じに適当にやるべ。じゃあ今から初めっか、キャラ作るべーで作成したキャラ。まずキャラの家名がストライフではなくストライキ、出身の村はミットン。ミットガルではない。ストライキ名に関しては当時色々な作品を見ていたらクラウド・ストライキ（活動家）みたいなキャラを作っている人が居たのでパクった。理由は名前が面白過ぎるから。世の中に出さなきゃセーフと思ってる。いろいろと危ない。シナリオ開始と同時に故郷が焼けて友達がほぼ死ぬ苛烈なスタートを切らされた。クソ笑った。当初は自分の事を赤枝の騎士だと思い込んでる精神異常者として猪みたいなロールプレイをしていたなぁ。楽しかった。気が付いたらなんか凄い立場になって凄い強くなってた。精神も完治しちゃってあらまぁ。これを書いてる時点で2年と半年ほど使っているキャラだけど、もうお気に入りで魂のキャラだよね。最近はキャラに中の人がついていけない事態が発生しがちだけど頑張ります。",
      campaign: "Lv1_2nd"
    },
    "char54": {
      name: "フリーレン",
      player: "家電",
      img: "img/freelen.png",
      description: "Lv1_2ndに登場しました。くっそ久々に卓をやろうということになり、当時愛読していた葬送のフリーレンから持ってきました。年齢150歳で150年ニートしている英雄の娘という設定のキャラです。よくにゃる万で『魂のメインキャラ』と呼ばれる、自身の使用しているキャラで特に愛が強い者に使われる言葉があります。多分それに当たるキャラになるかなと思います。ニートシナジーですかね（笑）現時点で2年ほどLv1_2ndをやらせてもらってますが、今までの卓でこれ程同じキャラで続いたのは過去になかったので、自分でも驚いてます。卓って難しいねんな…っていうのを一緒に学ばせてもらってるキャラなのもあり、TRPG自キャラ愛否定派だった自分でも感じるものがありますね。フリーレンの心情だったり、世界の情勢だったり、相手との対話だったり、難しい選択だったり、主に7章だったり………………？（卓が難しいのってリアルベース至上主義の人のせいなのでは？）などと思ったこともありますん。そんな喜怒哀楽を2年間、共に味わい続けたキャラです。Lv1_2ndキャンペーンはまだ終わっていないので、これからも共に頑張っていけたらと思っています。ちなみにフリーレンの前はハイターを使おうと思ってました。なんならハイターの前はボルボロスが候補でした。",
      campaign: "Lv1_2nd"
    },
    "char55": {
      name: "ケオベ",
      player: "ダーマッ/幻想卿",
      img: "img/ceobe.png",
      description: "Lv1_2nd卓出身、闇深系弓使いアサシン。キャラクター生誕時点で既に住んでいた場所を焼かれ、それに留まらず関わった心優しいNPCたちが次々と死んでいく（ケオベ視点）ので不幸が止まらない。佐々木小次郎の曇りがなんだと昔言っていたが、この子の方が比じゃないレベルで曇ってる。小次郎、お前船降りろ。直近で出生が憎んでいた妖魔の血を引いており、怨敵たちと同じ存在の可能性が高くなった。しかもメインメンバーから離脱して単独行動を開始した。更に記憶喪失属性有り、ハザードが止まらない。生まれる世界を間違えた子。お気に入りの一人。魂のメインキャラその３。",
      campaign: "Lv1_2nd"
    },
    "char56": {
      name: "モードレッド",
      player: "こーつー",
      img: "img/modred.jpg",
      description: "ログレス王家第三王女にしてソルジャークラスフォース。偽名はレッド・ジョー。12歳の時に神のお告げを聞き、母モルガンの助力を得ながらログレスを出奔し3年間世界を旅してきた。ソルジャーの中では外交と人事担当である。能力も万能型で神官職であることから探索から支援と幅広く活躍する。最近は火力も防御力も上がってきてますます万能になってきた歴戦の冒険者らしい性格のレッド・ジョーと15歳の少女らしいモードレッドの二つの人格があるが最近混ざりがち。頭が良くなったり悪くなったり差が激しすぎる。でっけぇなぁ。",
      campaign: "Lv1_2nd"
    },
    "char57": {
      name: "米津玄師（こめづ　げんすい）",
      player: "家電",
      img: "img/komedu.jpg",
      description: "Lv1_2nd卓の外伝に登場しました。リアル米津玄師の名曲『KickBack』のPVに影響を受け作ったキャラです。元気いっぱいで明るく、歌が上手い好青年という設定です。何となく想像つくと思いますが、戦闘時はKickBackのようにムキムキになります。燃え盛る孤児院、近くで倒れているアリア、たまたま居合わせたコヤンスカヤと共に旅をしていくことになります。若干お人好しというかおバカなキャラなので、よくコヤンに良いように扱われてます。このキャラもボルボロス候補でした。",
      campaign: "Lv1_2nd"
    },
    "char58": {
      name: "ヒカリ",
      player: "わえ/天",
      img: "img/hikari.png",
      description: "本名は「ヒカリ・レーヴェンシュタイン・ヴェルトハイム」。クソ長い。最初はクラウドの事を「師匠！師匠！」って言いながらついてくる弟子キャラが欲しい、居ないなら俺が作る、俺が師匠で弟子だ。と一人で需要と供給を満たそうと思い作ったキャラ。何で見た目がヒカリかというと、その時に丁度スマブラにはまってホムヒカ使い始めたからですね。悪夢を見続けて、常人の数千倍くらいの経験値を積んでる子。10日で100レベルアップ。いかれてらー。その悪夢の経験値、私のスマブラの段位に関係してるんですよ……。最初はワーキャーししょー！！ししょー！！みたいなキャラにするつもりだったのに、なんかやたらと覚悟完了みたいな顔をする子になった。7章でも出てきたけど、主人公たちが居るシーンなのに主人公たちより前に出ていこうとして出番を奪いかねなかったので、割とＧＭや他ＰＣに嫌われてないかな……？ってちょっと心配してる。でも手加減は出来ないです、ごめんね。お気に入りのキャラ。",
      campaign: "Lv1_2nd"
    },
    "char59": {
      name: "ゴリラ",
      player: "いろ+",
      img: "img/DK.png",
      description: "ヒカリとゴリラと題して始まった外伝の主人公の一人。こいつ主人公だったんか……。",
      campaign: "Lv1_2nd"
    },
    "char60": {
      name: "ギルガメッシュ",
      player: "わえ/天",
      img: "img/giru.png",
      description: "クラウドが頭良くなりつつあって、バカキャラを使いたいたくなって作ったキャラ。テラバカす。ワロタ。精神性がマジで子供、ギルのガワをかぶったクソガキ。グランフェルデン出身で、アーミヤと一緒に旅をしてた。なんか凄いアーミヤに懐いてて、まぁアーミヤがそう言うなら……みたいなのが多い。あと油断するとマジでどうでもいいものを買ってくる。しかも直ぐに騙されて買ってくる。面白そうならすぐ買っちゃう。そんなんだから何時も怒られるんだよお前。",
      campaign: "Lv1_2nd"
    },
    "char61": {
      name: "アーミヤ",
      player: "ダーマッ/幻想卿",
      img: "img/amiya.png",
      description: "Lv1_2nd卓外伝_ステイナイト卓出身、クール系闇魔法使い。キャラクター生誕時点で過去に住んでいた場所が焼かれ、商人をやっていたはずがなんか着いてきた人と二人で旅をしていた。言葉が強く辛辣な時もあるが、別に本気で嫌っているわけでもない。ちょくちょくテキストに上がらない程度の諦観的な事を思ったりもするが、本質は芯がしっかりしており、諦観自体も深刻には思ってない。ケオベとは違いメンタルが強い子。直近で魔王の血を引いている可能性があることになり、この子も記憶喪失属性。割と孤児院が焼けたのは当然だったのかもしれない、異常個体の密集率的に。お気に入りの一人。",
      campaign: "Lv1_2nd"
    },
    "char62": {
      name: "衛宮切嗣",
      player: "いろ+",
      img: "img/kiritugu.jpg",
      description: "aaaa",
      campaign: "Lv1_2nd"
    },
    "char63": {
      name: "キュウべぇ",
      player: "こーつー",
      img: "img/qbe.png",
      description: "闇の組織の実験によって生み出されたキメラ。少なくとも5種類以上の種族から作られている。実験と称して様々な酷い目に遭った挙句失敗作として捨てられて以来盗みをして何とか生きてきた。自分がさんざん苦労してきた関係で何事にも懐疑的であまり人を信用しない。割と他のメンバーがマイペースなので振り回されがち。staynightではメイン火力とツッコミ担当。訳が分からないよ。",
      campaign: "Lv1_2nd"
    },
    "char64": {
      name: "脹相",
      player: "ダーマッ/幻想卿",
      img: "img/choso.png",
      description: "Lv1_2nd卓外伝_ダイワ卓出身、どけ！！俺はお兄ちゃんだぞ！！！出番が少ないが故にステータス的にはただの水属性魔法使いだが、いずれ赤血操術が内定しているので普通に強い、現在時空でダイワの特級呪術師の一人。前述の二人より軽いのでやりやすさがある。種族がレムレス（肉体のない幽霊のようなもの）の為、お兄ちゃんは自称……の筈。お気に入りの一人。",
      campaign: "Lv1_2nd"
    },
    "char65": {
      name: "イエロー・デ・トキワグローブ",
      player: "いろ+",
      img: "img/yellow.png",
      description: "Lv1_2nd卓外伝_ダイワ卓出身 アーシアン",
      campaign: "Lv1_2nd"
    },
    "char66": {
      name: "藤原竜也",
      player: "家電",
      img: "img/tatuya.avif",
      description: "Lv1_2nd卓外伝_ダイワ卓出身",
      campaign: "Lv1_2nd"
    },
    "char67": {
      name: "風間　仁",
      player: "わえ/天",
      img: "img/jin.png",
      description: "Lv1_2nd卓外伝_デビル同盟卓出身、最初ボスエネミーだったのに外伝主人公に昇格した人。最速風神拳がスマブラ仕様なので即死コンボができる。ドリャドリャダイヤモンド。ヒナや優月と共にデビル同盟として世界を旅し始めた。自分の中に住まうデビルと向き合いながら、母の仇である三島一八を追っている。でも優しいデビル二人と共にいる事で恩讐がちょっと緩和。主人公は変化していくものですからね。チェーストッ！",
      campaign: "Lv1_2nd"
    },
    "char68": {
      name: "ヒナ・イズリエル",
      player: "ダーマッ/幻想卿",
      img: "img/hina.png",
      description: "Lv1_2nd卓外伝_デビル同盟卓出身、学名：イズリエルシロモップ。試験的にハウスルールで作成された新スキル運用を行っているが、作成時点から現在に至るまでどんどんキャラが盛られていく為、純粋に強い子となった。出生から色々と苦労もしているが、家を焼かれた二人に比べたら充分恵まれた環境の為、面倒臭がりだが面倒見の良い王族の子となっている。優月をからかったり、仁と真剣な会話したりと、何故か姉気質が出ているような感じがする。お気に入りの一人。",
      campaign: "Lv1_2nd"
    },
    "char69": {
      name: "優月・W・ペンドラゴン",
      player: "いろ+",
      img: "img/yuugetu.png",
      description: "ウマ娘卓出身 Lv1_2nd卓外伝_デビル同盟卓で活動中",
      campaign: "Lv1_2nd"
    },
    "char70": {
      name: "セブルス・スナイプ",
      player: "ダーマッ/幻想卿",
      img: "img/snipe.png",
      description: "Lv1_2nd卓外伝_ハイカラ卓出身、諸君、火薬を混ぜたまえ。ハイカラ卓唯一のPL教師キャラにして存在を生み出して満足してしまった人。魔術学校なのに錬金術師でレールガンを持ち込んでるヤベー奴。しかも魔術よりレールガンが強い、魔術学校の教師か、これが……？それはそれとして、割と良い空気を吸っているかもしれない。現在時空で生き残れていない場合、高確率でレールガンを生徒に譲り渡している。",
      campaign: "ハイカラ卓"
    },
    "char71": {
      name: "鳴上悠",
      player: "わえ/天",
      img: "img/narukami.jpg",
      description: "＞ハイカラですね。＞そっとしておこう。ハイカラ卓を開始する切っ掛けになったキャラ。アルカナ以外にでも、色々案を出してもらって、どんなキャンペーンしたい？で「魔法学校の劣等生」を選択した結果爆誕した。魔法は使えないけど、それ以外は大体できそう。王侯貴族なので、なんか凄い出身なんだけど魔法が使えないので家からは忌み子扱いされてるのかな？まぁでも全然気にしてなさそう。とにかく優しい、ほんとに優しい。原作よろしくもう聖人だろこの番長。ちなみにこちらでは妹に「鳴上白野」がいる。妹がいるという事は当然鋼のシスコン番長になるのが鳴上悠。世界で一番妹を愛している。これマジな？",
      campaign: "ハイカラ卓"
    },
    "char72": {
      name: "雨宮蓮",
      player: "いろ+",
      img: "img/amamiya.jpg",
      description: "キャラクターの説明",
      campaign: "ハイカラ卓"
    },
    "char73": {
      name: "結城理",
      player: "いろ+",
      img: "img/yuuki.png",
      description: "キャラクターの説明",
      campaign: "ハイカラ卓"
    },
    "char74": {
      name: "シトナイ",
      player: "家電",
      img: "img/sitonai.png",
      description: "Lv1_2nd卓の外伝に登場しました。オリキャラを作るか悩んだ果てに行きついた、現時点で一番最近に作ったキャラです。わえ/天氏がプレイしていた.hack//G.U.に影響され、鎌を振り回せれば何でもいいという暴論で作成したので設定などは特になかったのですが、iro+氏に設定付けしてもらいました。アルカナ学園の劣等生であり、孤高の喧嘩番長。通称『万死先輩』という設定のキャラです。名家、アインツベルンの末っ子であり、姉妹の中で唯一魔法が扱えない忌み子。劣等生という立場から学園での居場所はなく、嫌がらせやイジメなど日常茶飯事…しかし彼女は弾けました。学園内で降りかかる火の粉を鎌で振り払い、寄ってたかる悪党も鎌で振り払うようになり、次第に周囲は彼女を恐れるようになりました。愛用している鎌、『万死ヲ刻ム影』にちなんでついぞ付けられたその名は『万死先輩』。学園内では彼女に手を出す輩は少なくなり、今の居場所を手に入れることができました。今では頼もしく可愛い後輩たちもでき、今後彼女の物語はどうなっていくのか。このキャラもボルボロス候補でした。",
      campaign: "ハイカラ卓"
    },
    "char75": {
      name: "小鳥遊ホシノ",
      player: "こーつー",
      img: "img/hosino.png",
      description: "アルカナ学園1年生、ハイカラ部所属。イズリエル帝国の軍人の家系で生まれ、自身も軍人になるべくキヴォトス学園に進学したがそこでの怪我が原因で魔法が使えなくなる。父の転勤に合わせてアルカナへ来て父のコネでアルカナ学園に入学した。キヴォトス学園での経験から軍人らしい固い性格であったが、ハイカラ部の先輩たちの影響でかなり丸くなった。マリーの事は友人と思いつつ厄介だと思っている。仲間を思いやる優しさを持っているが、同時に敵には一切の容赦のない残酷さも持っている。彼女がうへうへおじさんになるか修羅になるかはいまだ不明。うへ～……邪魔だよ。",
      campaign: "ハイカラ卓"
    },
    "char": {
      name: "キャラ名X",
      player: "プレイヤー名X",
      img: "img/char0X.png",
      description: "キャラクターの説明",
      campaign: "所属キャンペーン名"
    },
    "char": {
      name: "キャラ名X",
      player: "プレイヤー名X",
      img: "img/char0X.png",
      description: "キャラクターの説明",
      campaign: "所属キャンペーン名"
    },
    "char": {
      name: "キャラ名X",
      player: "プレイヤー名X",
      img: "img/char0X.png",
      description: "キャラクターの説明",
      campaign: "所属キャンペーン名"
    },
  };

  // 2) カードを自動生成するための親要素を取得
  const charGrid = document.getElementById('character-grid');

  // 3) charactersオブジェクトをループし、カードを自動生成
  for (const [charId, data] of Object.entries(characters)) {
    // カードの包み
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('character-card');
    cardDiv.dataset.char = charId;

    // 画像
    const imgEl = document.createElement('img');
    imgEl.src = data.img;
    imgEl.alt = data.name;

    // キャラ名
    const nameEl = document.createElement('h3');
    nameEl.textContent = data.name;

    // カードに要素を挿入
    cardDiv.appendChild(imgEl);
    cardDiv.appendChild(nameEl);

    // カードをグリッドに追加
    charGrid.appendChild(cardDiv);
  }

  // 4) ポップアップ要素を取得
  const popup      = document.getElementById('char-popup');
  const popupImg   = document.getElementById('popup-img');
  const popupName  = document.getElementById('popup-name');
  const popupDesc  = document.getElementById('popup-description');
  const popupCamp  = document.getElementById('popup-campaign');
  const popupPlayer = document.getElementById('popup-player');
  const closeBtn   = document.getElementById('close-popup');

  // 5) クリック時の挙動(カードごと)
  document.querySelectorAll('.character-card').forEach(card => {
    card.addEventListener('click', function() {
      const cId = card.dataset.char;
      const cData = characters[cId];
      popupImg.src          = cData.img;
      popupName.textContent = cData.name;
      popupDesc.textContent = cData.description;
      popupCamp.textContent = "キャンペーン：" + cData.campaign;
      popupPlayer.textContent = (cData.player) ? "PL：" + cData.player : "PL：不明";
      popup.classList.add('visible');  // CSSでフェードイン
    });
  });

  // 6) ポップアップを閉じる処理
  const closeFunc = () => popup.classList.remove('visible');

  closeBtn.addEventListener('click', closeFunc);
  // モーダル背景クリックで閉じる
  popup.addEventListener('click', function(e) {
    if (e.target === popup) {
      closeFunc();
    }
  });
});

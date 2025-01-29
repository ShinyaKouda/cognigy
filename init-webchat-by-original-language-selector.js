// オリジナル言語選択ボタンが押されたとき
// 前田様へ：以下のイベントリスナーを適宜変更してください。
document.getElementById("language-selector").addEventListener("click", function () {
    
    // 言語が何なのかを取得し、言語コードを設定
    // 前田様へ：選択された各言語の条件...xxx...を、適切に変更し、コメントアウトを外してください。
    //          使わない言語は削除していただいて構いません。
    /*if (...xxx...){
        lang = 'ja' //日本語
    } else if (...xxx...){
        lang = 'zh' //中国語（簡体字）
    } else if (...xxx...){
        lang = 'zhTW' //中国語（繁体字）
    } else if (...xxx...){
        lang = 'id' //インドネシア語
    } else if (...xxx...){
        lang = 'vi' //ベトナム語
    } else if (...xxx...){
        lang = 'en' //英語
    }
    */

    // その言語の「チャット開始文言」を添えてwebchatを初期化することで、
    // その言語用のチャットウィンドウが初期化されて開く
    const getStartedTexts = {
        ja: "チャットを開始する",
        zh: "开始聊天",
        zhTW: "開始聊天",
        id: "Mulai Obrolan",
        vi: "Bắt đầu trò chuyện",
        en: "Start Chat"
    };

    // DeepL
    // 開発：https://cognigy-v4-ep.scorobo.ai/3300c767e15303576ac6bbd6ac4cde50fb2346cd58178eb78ec2990027d282a6
    // 検証：https://cognigy-v4-ep.scorobo.ai/f4045a80f165a896bc602d60c429b3cc6599a4c5063c2fd3426cf1b59005802a
    // 本番：https://cognigy-v4-ep.scorobo.ai/29615deaf132eec41f90b0feb4d04c7aff0024abf4d18ad8cc449a7495820de3
    // Google
    // 開発：https://cognigy-v4-ep.scorobo.ai/0cd5681a09a95c7b15e25b03e84e683557fdf27344a7f859404ad7fcea71010f
    // 検証：https://cognigy-v4-ep.scorobo.ai/17e585e99b5b84c3fcf4d1bd5e0bef8c4981a0ae7197317298451edf767a9fbf
    // 本番：https://cognigy-v4-ep.scorobo.ai/555ecd8479443a740e06b2415d290ac56b3090297486c1052ad20af279852de2
    const deeplURL = "https://cognigy-v4-ep.scorobo.ai/29615deaf132eec41f90b0feb4d04c7aff0024abf4d18ad8cc449a7495820de3"
    const googleURL = "https://cognigy-v4-ep.scorobo.ai/555ecd8479443a740e06b2415d290ac56b3090297486c1052ad20af279852de2"

    // 各言語で使う翻訳エンドポイントの設定
    // 前田様へ：使わない言語は削除していただいて構いません。
    const endpoints = {
        ja: deeplURL, // 使わないのでダミーです
        zh: deeplURL,
        zhTW: deeplURL,
        id: deeplURL,
        vi: googleURL,
        en: deeplURL
    };
    
    // 選択された言語のWebchatエンドポイントと「チャット開始文言」を取得
    const endpoint = endpoints[lang];
    const payload = getStartedTexts[lang];

    // チャットを初期化する
    initWebchat(endpoint, {
        settings: {
            getStartedText: '',
            getStartedPayload: payload, // チャット開始文言を渡すことで言語が設定される
            startBehavior: 'injection',
            disablePersistentHistory: true,
            disableBranding: true
        }
    }).then(webchat => {
        window.webchat = webchat;
        webchat.open();
    });
    
});


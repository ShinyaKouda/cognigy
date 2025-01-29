// Webchatを初期化する関数
function initMyWebchat(url, payload) {
    initWebchat(url, {
        settings: {
            getStartedText: '',
            getStartedPayload: payload, // 選択言語の翻訳をセット
            startBehavior: 'injection',
            disablePersistentHistory: true,
            disableBranding: true
        }
    }).then(webchat => {
        window.webchat = webchat;
        webchat.open();
    });
}

// 言語が選択されたときに呼ばれる関数
function selectLanguage(lang) {
    // 選択された言語の「チャット開始文言」を取得
    const endpoint = endpoints[lang];
    const payload = getStartedTexts[lang];

    // チャットを初期化する
    initMyWebchat(endpoint, payload);

    // 言語選択ボタンを非表示にする
    document.getElementById('language-selector').style.display = 'none';
}

// エンドポイントを取得する関数
function getDeepLURL(mode) {
    // DeepL
    // 開発：https://cognigy-v4-ep.scorobo.ai/3300c767e15303576ac6bbd6ac4cde50fb2346cd58178eb78ec2990027d282a6
    // 検証：https://cognigy-v4-ep.scorobo.ai/f4045a80f165a896bc602d60c429b3cc6599a4c5063c2fd3426cf1b59005802a
    // 本番：https://cognigy-v4-ep.scorobo.ai/29615deaf132eec41f90b0feb4d04c7aff0024abf4d18ad8cc449a7495820de3

    if(mode === "開発"){
        url = "https://cognigy-v4-ep.scorobo.ai/3300c767e15303576ac6bbd6ac4cde50fb2346cd58178eb78ec2990027d282a6";
    } else if(mode === "検証"){
        url = "https://cognigy-v4-ep.scorobo.ai/f4045a80f165a896bc602d60c429b3cc6599a4c5063c2fd3426cf1b59005802a";
    } else if(mode === "本番"){
        url = "https://cognigy-v4-ep.scorobo.ai/29615deaf132eec41f90b0feb4d04c7aff0024abf4d18ad8cc449a7495820de3";
    };

    return url
};
function getGoogleURL(mode) {
    // Google
    // 開発：https://cognigy-v4-ep.scorobo.ai/0cd5681a09a95c7b15e25b03e84e683557fdf27344a7f859404ad7fcea71010f
    // 検証：https://cognigy-v4-ep.scorobo.ai/17e585e99b5b84c3fcf4d1bd5e0bef8c4981a0ae7197317298451edf767a9fbf
    // 本番：https://cognigy-v4-ep.scorobo.ai/555ecd8479443a740e06b2415d290ac56b3090297486c1052ad20af279852de2

    if(mode === "開発"){
        url = "https://cognigy-v4-ep.scorobo.ai/0cd5681a09a95c7b15e25b03e84e683557fdf27344a7f859404ad7fcea71010f";
    } else if(mode === "検証"){
        url = "https://cognigy-v4-ep.scorobo.ai/17e585e99b5b84c3fcf4d1bd5e0bef8c4981a0ae7197317298451edf767a9fbf";
    } else if(mode === "本番"){
        url = "https://cognigy-v4-ep.scorobo.ai/555ecd8479443a740e06b2415d290ac56b3090297486c1052ad20af279852de2";
    };

    return url
};

// オリジナル言語選択ボタンが押されたとき
document.getElementById("chatbot-trigger").addEventListener("click", function () {
    // 言語が何なのかを取得

    // その言語の「チャット開始文言」を添えてwebchatを初期化することで、
    // その言語用のチャットウィンドウが初期化されて開く
    
});


// Webchatを初期化する関数
function initMyWebchat(url, payload, title) {
    initWebchat(url, {
        settings: {
            getStartedText: '',
            getStartedPayload: payload, // 選択言語の翻訳をセット
            startBehavior: 'injection',
            disablePersistentHistory: true,
            disableBranding: true,
            title: title
        }
    }).then(webchat => {
        window.webchat = webchat;
        webchat.open();
    });
}

// 言語が選択されたときに呼ばれる関数
function selectLanguage(lang) {
    // 選択された言語の「チャット開始文言」を取得
    const payload = getStartedTexts[lang];
    const title = titleTexts[lang];
    const endpoint = endpoints[lang];

    // チャットを初期化する
    initMyWebchat(endpoint, payload, title);

    // 言語選択ボタンを非表示にする
    document.getElementById('language-selector').style.display = 'none';
}

// トリガー画像をクリックしたときの処理
document.getElementById("chatbot-trigger").addEventListener("click", function () {
    // 言語選択ボタンを表示
    document.getElementById("language-selector").style.display = "block";
    // トリガー画像を非表示
    this.style.display = "none";
});

document.addEventListener('DOMContentLoaded', function () {
    // ページ内の要素やCSSの読み込みが完了したタイミングで表示
    document.getElementById("chatbot-trigger").style.display = "block";
});

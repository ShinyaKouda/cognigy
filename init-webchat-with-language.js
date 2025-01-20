// 言語コードと「チャットを開始する」の翻訳をマッピング
const getStartedTexts = {
  ja: "チャットを開始する",
  zh: "开始聊天",
  id: "Mulai Obrolan",
  vi: "Bắt đầu trò chuyện",
  en: "Start Chat"
};

// 言語が選択されたときに呼ばれる関数
function selectLanguage(lang) {
  // 選択された言語の「チャット開始文言」を取得
  const translatedPayload = getStartedTexts[lang];

  // チャットを初期化する
  initMyWebchat("YOUR_COGNIGY_ENDPOINT_URL", translatedPayload);

  // 言語選択ボタンを非表示にする
  document.getElementById('lang-buttons').style.display = 'none';
}

// Webchatを初期化する関数
function initMyWebchat(url, payloadText) {
  initWebchat(url, {
    settings: {
      getStartedText: '',
      getStartedPayload: payloadText, // 選択言語の翻訳をセット
      startBehavior: 'injection',
      disablePersistentHistory: true,
      disableBranding: true,
      title: "チャットボットで質問する"
    }
  }).then(webchat => {
    window.webchat = webchat;
    // 必要に応じて自動でオープンさせる場合は以下をコメントアウト解除
    // webchat.open();
  });
}

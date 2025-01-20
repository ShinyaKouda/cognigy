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
    webchat.open();
  });
}

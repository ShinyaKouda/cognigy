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

function initMyWebchat(url){
    // URLはCognigyチャットボットのエンドポイント
    initWebchat(url, {
        settings: {
            getStartedText: '',
            getStartedPayload: 'チャットを開始する',
            startBehavior: 'injection',
            disablePersistentHistory: true,
            disableBranding: true,
            title: "チャットボットで質問する"
        }
    }).then(webchat => {
        window.webchat = webchat;
        // webchat.open();
    });
}

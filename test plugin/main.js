const { app } = require("photoshop");

async function createTenLayers() {
  const statusElement = document.getElementById("status");
  statusElement.textContent = "レイヤーを作成中...";

  try {
    if (!app.activeDocument) {
      statusElement.textContent = "エラー: ドキュメントが開かれていません。";
      return;
    }

    for (let i = 1; i <= 10; i++) {
      const newLayer = app.activeDocument.artLayers.add();
      newLayer.name = `レイヤー ${i}`;
      statusElement.textContent = `レイヤー ${i}/10 を作成しました...`;
    }

    statusElement.textContent = "完了：10個のレイヤーを作成しました！";
  } catch (e) {
    console.error("レイヤーの作成中にエラーが発生しました:", e);
    statusElement.textContent = `エラー: ${e.message}`;
  }
}

window.onload = () => {
  document
    .getElementById("createLayerBtn")
    .addEventListener("click", createTenLayers);
};

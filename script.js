window.onload = function () {
  generateBarcode();
  updateTime();

  const floatingText = document.getElementById("floating-text");
  const diskImage = document.getElementById("disk-image");
  const downloadButton = document.getElementById("download-button");
  const diskDrive = document.getElementById("disk-drive");

  // 點擊磁碟機的事件
  diskDrive.addEventListener("click", () => {
    console.log("磁碟機被點擊");

    // 1. 浮動文字淡出
    floatingText.classList.add("fade-out");

    // 2. 延遲 1 秒後顯示磁碟動畫
    setTimeout(() => {
      diskImage.classList.add("show");

      // 3. 再延遲 1 秒顯示下載按鈕
      setTimeout(() => {
        downloadButton.classList.add("show");
        console.log("下載按鈕已顯示");
      }, 1000);
    }, 1000);
  });
};

// 動態條碼生成
function generateBarcode() {
  const barcodeElement = document.querySelector(".barcode");
  const barcodeTextElement = document.querySelector(".barcode-text");
  const visits = parseInt(localStorage.getItem("visitCount") || "0", 10) + 1;
  localStorage.setItem("visitCount", visits);
  barcodeTextElement.textContent = `Vis. ${visits.toString().padStart(6, "0")}`;
  barcodeElement.innerHTML = "";
  for (let i = 0; i < 60; i++) {
    const bar = document.createElement("div");
    bar.style.width = `${Math.random() * 3 + 1}px`;
    bar.style.height = "100px";
    bar.style.backgroundColor = "black";
    bar.style.margin = "0 1px";
    barcodeElement.appendChild(bar);
  }
}

// 動態時間更新
function updateTime() {
  setInterval(() => {
    const now = new Date();
    document.getElementById("time-display").textContent = now
      .toTimeString()
      .split(" ")[0];
  }, 1000);
}

// 下載磁碟圖片
function downloadDiskImage() {
  const diskNumber =
    new URLSearchParams(window.location.search).get("disk") || "1";
  const link = document.createElement("a");
  link.href = `./images/qr${diskNumber}.svg`;
  link.download = `qr${diskNumber}.svg`;
  link.click();
}
// 點擊 3D Viewer 後觸發邏輯
const viewer = document.querySelector("spline-viewer");
const diskImage = document.getElementById("disk-image");
const downloadButton = document.getElementById("download-button");

// 偵測點擊 3D 模型
viewer.addEventListener("pointerdown", () => {
  console.log("3D 模型被點擊");

  // 2.5 秒後顯示圖片和按鈕
  setTimeout(() => {
    showImages();
  }, 2300); // 延遲 2.5 秒
});

// 顯示圖片和按鈕
function showImages() {
  // 取得磁片編號
  const diskNumber =
    new URLSearchParams(window.location.search).get("disk") || "1";

  // 顯示對應的磁片圖片
  diskImage.style.backgroundImage = `url('./images/qr${diskNumber}.svg')`;
  diskImage.classList.add("show");

  // 顯示下載按鈕
  downloadButton.classList.add("show");
}

// 下載圖片邏輯
function downloadDiskImage() {
  const diskNumber =
    new URLSearchParams(window.location.search).get("disk") || "1";
  const link = document.createElement("a");
  link.href = `./images/qr${diskNumber}.svg`;
  link.download = `qr${diskNumber}.svg`;
  link.click();
}
const floatingText = document.getElementById("floating-text");
const diskDrive = document.getElementById("disk-drive");

// 點擊磁碟機的事件
diskDrive.addEventListener("click", () => {
  console.log("磁碟機被點擊");

  if (floatingText) {
    // 停止動畫，淡出浮動文字
    floatingText.style.animation = "none"; // 停止動畫
    floatingText.style.transition = "opacity 0.5s ease"; // 平滑淡出效果
    floatingText.style.opacity = "0"; // 設定透明度

    // 完全隱藏
    setTimeout(() => {
      floatingText.style.display = "none"; // 移除文字
      console.log("浮動文字已隱藏");
    }, 500); // 延遲 0.5 秒後執行
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const playerItems = document.querySelectorAll(".player-item");

  let activeIndex = 0; // 預設第一個圖片索引 (player1)

  // 初始化播放器位置
  updatePlayerPositions(activeIndex);

  // Hover 事件：放大並切換 active 狀態
  playerItems.forEach((item, index) => {
    item.addEventListener("mouseenter", () => {
      updatePlayerPositions(index);
    });

    item.addEventListener("mouseleave", () => {
      // 滑鼠離開時，將最後放大的項目保持為 active
      activeIndex = index;
      updatePlayerPositions(activeIndex);
    });

    // 點擊事件：跳轉到指定頁面
    item.addEventListener("click", () => {
      const pageUrl = item.getAttribute("data-href");
      if (pageUrl) {
        window.location.href = pageUrl;
      }
    });
  });

  // 更新播放器位置並放大 active 項目
  function updatePlayerPositions(activeIndex) {
    playerItems.forEach((item, index) => {
      const offset = index - activeIndex; // 計算偏移量

      // 設置樣式: 平移、放大、透明度等
      item.style.transition = "transform 0.5s ease, opacity 0.3s ease";
      item.style.transform = `translateX(${offset * 160}px) scale(${
        index === activeIndex ? 1.5 : 1
      })`;
      item.style.zIndex = index === activeIndex ? 10 : 1;
      item.style.opacity = index === activeIndex ? 1 : 0.6;
    });
  }
});

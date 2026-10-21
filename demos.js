// User-initiated playback only. Native controls and the written steps remain available.
(() => {
  const english = document.documentElement.lang.startsWith('en');
  const copy = english ? {
    play: 'Play example', pause: 'Pause example', replay: 'Replay example',
    ready: 'Static cover. Play once when you choose.', playing: 'Playing. You can pause or use the video timeline.',
    paused: 'Paused. Continue when you choose.', ended: 'Finished. The result stays on screen.',
    error: 'Video could not play. Read the written steps or download the MP4.', retry: 'Retry playback'
  } : {
    play: '播放操作示例', pause: '暂停演示', replay: '重播操作示例',
    ready: '静态封面，点击后播放一次。', playing: '正在播放，可暂停或使用视频进度条。',
    paused: '已暂停，准备好后再继续。', ended: '演示结束，保留结果画面。',
    error: '演示暂时无法播放，可以阅读文字步骤或下载 MP4。', retry: '重试播放'
  };
  const videos = [...document.querySelectorAll('[data-operation-demo]')];
  videos.forEach(video => {
    const parent = video.closest('.operation-demo');
    const button = parent.querySelector('[data-demo-play]');
    const status = parent.querySelector('[data-demo-status]');
    if (!video.canPlayType('video/mp4')) return;
    button.hidden = false;
    const failed = () => { button.textContent = copy.retry; status.textContent = copy.error; };
    button.addEventListener('click', () => {
      if (!video.paused && !video.ended) { video.pause(); return; }
      if (video.error) video.load();
      if (video.ended) video.currentTime = 0;
      const playing = video.play();
      if (playing) playing.catch(failed);
    });
    video.addEventListener('play', () => {
      videos.forEach(other => { if (other !== video) other.pause(); });
      button.textContent = copy.pause; status.textContent = copy.playing;
    });
    video.addEventListener('pause', () => {
      if (!video.ended) { button.textContent = copy.play; status.textContent = copy.paused; }
    });
    video.addEventListener('ended', () => { button.textContent = copy.replay; status.textContent = copy.ended; });
    video.addEventListener('error', failed);
    const article = video.closest('details');
    article?.addEventListener('toggle', () => { if (!article.open) video.pause(); });
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) videos.forEach(video => video.pause());
  });
})();

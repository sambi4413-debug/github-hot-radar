# RADARLAB 科研热点追踪

双击 `start-local.ps1` 后访问 `http://127.0.0.1:4173/`。

## 当前关键词

纳米材料、光学探针、水凝胶、药物递送、干细胞。

## 信息来源

- Nature：工程化 tRNA 抑制无义突变，LNP 在体内恢复 CFTR 功能
- Nature Materials：无需额外配体，纳米颗粒在体内激活 T 细胞并生成 CAR-T
- Nature Materials：可转移的“肠道菌群—胆汁酸”通路影响纳米药物药代与疗效
- Anthropic：Model Hardware Standard（MHS）研究预览
- Reuters：NVIDIA 据报拟以 129 亿美元收购 Hugging Face

“水凝胶”和“干细胞”已加入监测词，但当前 5 条简报暂未命中；它们会继续显示在关键词索引中。

新闻卡片和“信息来源”索引都可以点击进入原文。卡片右侧优先使用原文图/截图；Reuters 页面当前触发验证保护，因此保留摘要图和直达链接，并在页面中标注。

页面会在本地时间每天 09:00 重新读取 `./api/research-news.json`。运行 `install-news-schedule.ps1` 后，Windows 会注册 `RADARLAB Daily News Refresh` 计划任务，任务执行 `refresh-news.ps1`，生成自动快照并写入 `logs/news-refresh.log`。如果设置 `RADARLAB_NEWS_API_URL`，脚本会优先读取该 JSON 接口；接口不可用时保留上一版本地内容，不伪造更新。

需要真正增加当天的新条目时，由每日自动化任务先更新 `news-feed.json`（保持中文摘要、关键词和原文 URL），再运行 `refresh-news.ps1` 发布到页面读取的自动快照。只刷新浏览器不会改变数据文件。

## GitHub Pages 部署

仓库内的 `.github/workflows/site.yml` 会在 `main` 推送后发布 GitHub Pages，并在每天 09:00（Asia/Singapore）运行一次快照更新。首次部署时，如果 GitHub 提示选择发布源，请在仓库 `Settings → Pages` 中选择 `GitHub Actions`。

如果设置仓库 Secret `RADARLAB_NEWS_API_URL`，每日任务会优先读取该 HTTPS JSON 接口并更新中文简报；未设置时会保留仓库内的中文简报，同时更新每日快照时间，不伪造新闻内容。

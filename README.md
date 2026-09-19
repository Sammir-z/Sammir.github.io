# Sammir | AI Engineering Portfolio

> AI Agent Developer · Multimodal Learning Researcher

这是 Sammir 的个人作品集网站，主要记录 AI Agent、多模态学习、RAG 和 LLM 应用工程相关的研究与项目实践。

This is Sammir's personal portfolio website, focused on AI agents, multimodal learning, retrieval-augmented generation, and LLM application engineering.

## Featured projects

### DeepSearch-Agent

面向复杂行业调研与资料分析的 Deep Research 多智能体系统，支持任务拆解、多源信息检索、会话状态管理、流式输出和 Markdown / PDF 报告生成。

- Repository: [Sammir-z/DeepSearch-Agent](https://github.com/Sammir-z/DeepSearch-Agent)
- Stack: DeepAgents, LangGraph, FastAPI, WebSocket, RAGFlow, MySQL, Docker

### NL2SQL

面向业务人员的自然语言到 SQL 查询 Agent，围绕元数据理解、SQL 生成、校验、修复、执行和流式返回构建完整闭环。

- Repository: [Sammir-z/NL2SQL](https://github.com/Sammir-z/NL2SQL)
- Stack: LangGraph, LangChain, FastAPI, MySQL, Qdrant, Elasticsearch, Embedding

## Tech stack

`HTML` · `CSS` · `JavaScript` · `Markdown` · `YAML` · `Bootstrap` · `Python` · `LangChain` · `LangGraph` · `RAG` · `MCP`

## Run locally

这是一个无需构建工具的静态网站。建议使用本地 HTTP 服务运行，因为页面会通过 `fetch()` 加载 Markdown 和 YAML 内容。

```powershell
git clone https://github.com/Sammir-z/Sammir.github.io.git
cd Sammir.github.io
python -m http.server 4173
```

然后访问：<http://127.0.0.1:4173/>

停止服务时，在终端按 `Ctrl + C`。

## Reuse this website

其他人可以把本项目 Fork 后改造成自己的个人主页：

### 1. Fork 仓库

点击 GitHub 页面右上角的 **Fork**，将仓库复制到自己的账号下。

### 2. 设置仓库名称

如果希望使用 GitHub Pages 的根域名，将仓库重命名为：

```text
<你的用户名>.github.io
```

例如用户名是 `alice`，仓库名应为 `alice.github.io`，访问地址就是：

```text
https://alice.github.io/
```

如果保留其他仓库名，则使用项目站点地址：

```text
https://<你的用户名>.github.io/<仓库名>/
```

### 3. 替换个人内容

主要内容都放在 `contents/` 目录中：

| 文件 | 用途 |
| --- | --- |
| `config.yml` | 页面标题、Hero 文案、页脚版权信息 |
| `home.md` | 个人简介、研究方向、教育背景 |
| `projects.md` | GitHub 项目卡片 |
| `experience.md` | 研究与工程经历 |
| `publications.md` | 论文或研究成果 |
| `awards.md` | 奖项和荣誉 |

### 4. 替换图片

将自己的头像和背景图放入：

```text
static/assets/img/
```

然后在 `index.html` 或 `static/css/main.css` 中替换对应图片路径。请确认图片拥有合法使用权，并避免上传身份证、联系方式等隐私材料。

### 5. 开启 GitHub Pages

在自己的 GitHub 仓库中打开：

`Settings` → `Pages` → `Deploy from a branch`

选择：

- Branch: `main`
- Folder: `/ (root)`

点击 **Save**，等待 GitHub Pages 完成部署即可访问网站。

### 6. 提交更新

```powershell
git add .
git commit -m "update personal portfolio"
git push origin main
```

## Project structure

```text
.
├── contents                  # YAML / Markdown 内容
├── index.html                # 页面结构
├── static
│   ├── assets/img             # 头像、背景和图标
│   ├── css                    # Bootstrap 与主题样式
│   └── js                     # 内容加载与第三方前端资源
└── tests                     # 内容与隐私回归检查
```

## Privacy and deployment notes

- 本项目是纯静态网站，不需要用户登录、注册或后台服务。
- 网站不会调用 GitHub API，也不会自动读取仓库数据。
- 不要在公开内容中提交邮箱、手机号、密码、API Key 或其他敏感信息。
- 修改内容后可以运行 `node tests/site-content-check.mjs`，检查项目链接和隐私字段。

## License

本项目使用 MIT License。详情请查看 [LICENSE](LICENSE)。

<div class="project-grid">
  <article class="project-card project-card--featured">
    <div class="project-card__top">
      <div>
        <span class="project-index">01 / DEEP RESEARCH</span>
        <h3>DeepSearch-Agent</h3>
      </div>
      <span class="project-status">Open source</span>
    </div>
    <p class="project-summary">面向复杂行业调研与资料分析的 Deep Research 多智能体系统，通过任务拆解、动态调度和多源信息检索完成结构化研究。</p>
    <ul class="project-points">
      <li>基于 DeepAgents + LangGraph 构建 Supervisor-Agent 协同架构。</li>
      <li>组合 Tavily、MySQL 与 RAGFlow，统一处理公开网络、结构化数据和私有知识。</li>
      <li>使用 Redis 管理会话状态，支持 FastAPI + WebSocket 流式输出和 Markdown / PDF 报告生成。</li>
    </ul>
    <div class="project-stack" aria-label="DeepSearch-Agent tech stack">
      <span class="tech-pill">DeepAgents</span>
      <span class="tech-pill">LangGraph</span>
      <span class="tech-pill">FastAPI</span>
      <span class="tech-pill">WebSocket</span>
      <span class="tech-pill">RAGFlow</span>
      <span class="tech-pill">MySQL</span>
      <span class="tech-pill">Docker</span>
    </div>
    <a class="project-link" href="https://github.com/Sammir-z/DeepSearch-Agent" target="_blank" rel="noreferrer">View repository <span aria-hidden="true">↗</span></a>
  </article>

  <article class="project-card">
    <div class="project-card__top">
      <div>
        <span class="project-index">02 / DATA AGENT</span>
        <h3>NL2SQL</h3>
      </div>
      <span class="project-status">Open source</span>
    </div>
    <p class="project-summary">面向业务人员的自然语言到 SQL 查询 Agent，围绕元数据理解、SQL 校验、错误修复与流式返回构建完整闭环。</p>
    <ul class="project-points">
      <li>融合 MySQL、Qdrant 与 Elasticsearch，为 SQL 生成提供结构化上下文。</li>
      <li>用 LangGraph 编排问题理解、元数据召回、SQL 生成、校验、修复和执行节点。</li>
      <li>通过 EXPLAIN 校验与 Generate → Validate → Repair → Execute 闭环降低 SQL 幻觉风险。</li>
    </ul>
    <div class="project-stack" aria-label="NL2SQL tech stack">
      <span class="tech-pill">LangGraph</span>
      <span class="tech-pill">LangChain</span>
      <span class="tech-pill">FastAPI</span>
      <span class="tech-pill">MySQL</span>
      <span class="tech-pill">Qdrant</span>
      <span class="tech-pill">Elasticsearch</span>
      <span class="tech-pill">Embedding</span>
    </div>
    <a class="project-link" href="https://github.com/Sammir-z/NL2SQL" target="_blank" rel="noreferrer">View repository <span aria-hidden="true">↗</span></a>
  </article>
</div>

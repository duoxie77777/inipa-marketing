'use client';

interface Recommendation {
  name: string;
  region: string;
  industry: string;
  score: number;
  reasons: string[];
}

const AIRecommend = () => {
  const recommendations: Recommendation[] = [
    {
      name: '曼谷知识产权事务所',
      region: '🇹🇭 泰国',
      industry: '知识产权代理',
      score: 85,
      reasons: ['近期浏览 PCT 服务页面 3 次', '打开邮件并点击链接', '行业匹配度高'],
    },
    {
      name: '深圳跨境科技',
      region: '🇨🇳 中国',
      industry: '跨境电商',
      score: 78,
      reasons: ['专利即将到期需续费', '历史成交客户', '预算充足'],
    },
    {
      name: '新加坡生物科技',
      region: '🇸🇬 新加坡',
      industry: '医药生物',
      score: 72,
      reasons: ['新注册用户，信息完整', '下载了服务手册', '同行业成交率高'],
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white">
          <i className="fa-solid fa-star text-[var(--primary)] mr-2"></i>
          今日重点推荐
        </h2>
        <div className="text-xs text-[var(--text-muted)]">
          AI 分析了 12,450 条线索，为您推荐以下高价值客户
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {recommendations.map((item, idx) => (
          <div
            key={idx}
            className="bg-[var(--bg-panel)] border border-[var(--border-color)] rounded-lg p-4 cursor-pointer hover:border-[var(--primary)] transition-all"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <div className="font-bold text-sm text-white mb-1">{item.name}</div>
                <div className="text-xs text-[var(--text-muted)]">
                  {item.region} · {item.industry}
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-[var(--primary)] font-mono">{item.score}</div>
                <div className="text-xs text-[var(--text-muted)]">综合分数</div>
              </div>
            </div>
            <div className="mb-3">
              <div className="text-xs text-[var(--text-muted)] mb-2">推荐理由</div>
              {item.reasons.map((reason, i) => (
                <div key={i} className="text-xs text-white mb-1">• {reason}</div>
              ))}
            </div>
            <div className="flex gap-2">
              <span className="badge badge-ai">AI 推荐</span>
              <span className="badge badge-red">🔥 热线索</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIRecommend;

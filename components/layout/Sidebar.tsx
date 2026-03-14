'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface MenuItem {
  // icon
  icon: string;
  // 文本
  label: string;
  // 路径
  href: string;
  // 消息数量
  badge?: number;
}

interface MenuGroup {
  // 分组标题
  title: string;
  // 菜单项
  items: MenuItem[];
}

const menuData: MenuGroup[] = [
  {
    title: '📊 数据中心',
    items: [
      { icon: 'fa-chart-line', label: '营销数据看板', href: '/dashboard' },
      { icon: 'fa-wand-magic-sparkles', label: 'AI 智能推荐', href: '/ai-recommend' },
    ],
  },
  {
    title: '👥 客户管理',
    items: [
      { icon: 'fa-database', label: '数据采集', href: '/data-source' },
      { icon: 'fa-filter', label: '数据清洗', href: '/data-clean' },
      { icon: 'fa-users', label: '客户分组管理', href: '/audience' },
    ],
  },
  {
    title: '✍️ 内容中心',
    items: [
      { icon: 'fa-brain', label: 'AI 内容生成', href: '/ai-lab' },
      { icon: 'fa-layer-group', label: '内容模板库', href: '/templates' },
      { icon: 'fa-calendar-days', label: '内容日历', href: '/content-calendar' },
    ],
  },
  {
    title: '🏭 Dify 蓝图工厂',
    items: [
      { icon: 'fa-cubes', label: '应用中心', href: '/app-center' },
      { icon: 'fa-chart-line', label: '调用日志', href: '/app-logs' },
    ],
  },
  {
    title: '📢 营销渠道',
    items: [
      { icon: 'fa-envelope', label: '邮件营销', href: '/email-channel' },
      { icon: 'fa-linkedin', label: '社交媒体营销', href: '/social-channel' },
      { icon: 'fa-rocket', label: '营销活动管理', href: '/campaigns' },
    ],
  },
  {
    title: '💬 客户转化',
    items: [
      { icon: 'fa-inbox', label: '客户消息中心', href: '/inbox', badge: 12 },
      { icon: 'fa-handshake', label: '销售协作', href: '/sales-collab' },
    ],
  },
  {
    title: '⚙️ 系统管理',
    items: [
      { icon: 'fa-gear', label: '系统配置', href: '/settings' },
    ],
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-[260px] bg-[var(--bg-panel)] border-r border-[var(--border-color)] overflow-y-auto flex-shrink-0">
      {menuData.map((group, idx) => (
        <div key={idx} className="mb-2 border-b border-[rgba(42,35,23,0.3)] pb-2">
          <div className="text-[11px] text-[var(--text-muted)] px-6 pt-3 pb-1.5 font-bold opacity-90">
            {group.title}
          </div>
          {group.items.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-6 py-2 cursor-pointer text-[13px] border-l-[3px] transition-all ${
                  isActive
                    ? 'text-[var(--primary)] bg-[var(--bg-hover)] border-l-[var(--primary)] font-bold'
                    : 'text-[var(--text-muted)] border-l-transparent hover:text-[var(--text-main)] hover:bg-[var(--bg-hover)]'
                }`}
              >
                <i className={`fa-solid ${item.icon} w-4`}></i>
                <span className="flex-1">{item.label}</span>
                {item.badge && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-[rgba(239,68,68,0.15)] text-[var(--accent-red)] border border-[rgba(239,68,68,0.3)] font-bold">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;

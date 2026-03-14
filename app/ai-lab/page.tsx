'use client';

import { useState } from 'react';
import { Button, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import styles from '../styles/ai-lab.module.css';
import '../styles/shared.css';

interface Category {
  id: string;
  icon: string;
  label: string;
  desc: string;
  color: string;
}

interface GenerationRecord {
  key: string;
  time: string;
  scene: string;
  target: string;
  preview: string;
  status: string;
}

const AILab: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('cold-email');

  const categories: Category[] = [
    { id: 'cold-email', icon: 'fa-envelope', label: '冷启动邮件', desc: '首次接触破冰', color: 'accent-blue' },
    { id: 'follow-up', icon: 'fa-reply', label: '跟进邮件', desc: '后续跟进', color: 'accent-green' },
    { id: 'linkedin', icon: 'fa-linkedin', label: 'LinkedIn 帖子', desc: '专业内容', color: 'linkedin' },
    { id: 'alert', icon: 'fa-bell', label: '预警通知', desc: '年费预警', color: 'accent-red' },
  ];

  const columns: ColumnsType<GenerationRecord> = [
    {
      title: '时间',
      dataIndex: 'time',
      key: 'time',
      render: (time: string) => <span className="text-xs text-[var(--text-muted)]">{time}</span>,
    },
    {
      title: '场景',
      dataIndex: 'scene',
      key: 'scene',
      render: (scene: string) => <Tag className="badge badge-blue">{scene}</Tag>,
    },
    {
      title: '目标',
      dataIndex: 'target',
      key: 'target',
      render: (target: string) => <span className="text-xs">{target}</span>,
    },
    {
      title: '内容预览',
      dataIndex: 'preview',
      key: 'preview',
      render: (preview: string) => (
        <span className="text-xs text-[var(--text-muted)] truncate max-w-[200px]">{preview}</span>
      ),
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => <Tag className="badge badge-green">{status}</Tag>,
    },
    {
      title: '操作',
      key: 'action',
      render: () => <button className="quick-btn text-[10px]">存为模板</button>,
    },
  ];

  const dataSource: GenerationRecord[] = [
    {
      key: '1',
      time: '14:30',
      scene: '冷启动',
      target: '曼谷事务所',
      preview: '尊敬的 S. Chaimongkol...',
      status: '已使用',
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white">
          <i className="fa-solid fa-brain mr-2"></i>
          AI 内容生成
        </h2>
        <Button type="primary" icon={<i className="fa-solid fa-wand-magic-sparkles"></i>}>
          开始生成
        </Button>
      </div>

      <h3 className="text-sm font-bold text-white mb-3">选择生成场景</h3>
      <div className="grid grid-cols-4 gap-3 mb-6">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className={`${styles.categoryCard} ${activeCategory === cat.id ? styles.active : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            <div className="flex items-center gap-2 mb-2">
              <i className={`fa-solid ${cat.icon} `}></i>
              <span className="text-xs font-bold text-white">{cat.label}</span>
            </div>
            <div className="text-[9px] text-[var(--text-muted)]">{cat.desc}</div>
          </div>
        ))}
      </div>

      <div className="bg-[var(--bg-panel)] border border-[var(--border-color)] rounded-lg p-4">
        <h3 className="font-bold text-sm text-white mb-4">最近生成</h3>
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          className="data-table"
        />
      </div>
    </div>
  );
};

export default AILab;

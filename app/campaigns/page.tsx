'use client';

import { Button, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import '../styles/shared.css';

interface KPIData {
  label: string;
  value: string;
}

interface CampaignData {
  key: string;
  name: string;
  channel: string;
  reach: number;
  conversions: number;
  status: string;
}

const Campaigns: React.FC = () => {
  const kpiData: KPIData[] = [
    { label: '进行中', value: '8' },
    { label: '已完成', value: '42' },
    { label: '总触达', value: '28.4K' },
    { label: '平均ROI', value: '4.2x' },
  ];
  const columns: ColumnsType<CampaignData> = [
    {
      title: '活动名称',
      dataIndex: 'name',
      key: 'name',
      render: (name: string) => <span className="font-bold text-xs text-white">{name}</span>,
    },
    {
      title: '渠道',
      dataIndex: 'channel',
      key: 'channel',
      render: (channel: string) => <Tag className="badge badge-blue">{channel}</Tag>,
    },
    {
      title: '触达数',
      dataIndex: 'reach',
      key: 'reach',
      render: (reach: number) => <span className="text-xs font-mono">{reach.toLocaleString()}</span>,
    },
    {
      title: '转化数',
      dataIndex: 'conversions',
      key: 'conversions',
      render: (conversions: number) => <span className="text-xs text-[var(--accent-green)] font-mono">{conversions}</span>,
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
      render: () => <button className="quick-btn text-[10px]">查看</button>,
    },
  ];

  const dataSource: CampaignData[] = [
    {
      key: '1',
      name: 'PCT落地推介',
      channel: '邮件',
      reach: 8420,
      conversions: 28,
      status: '进行中',
    },
    {
      key: '2',
      name: 'LinkedIn内容营销',
      channel: 'LinkedIn',
      reach: 12840,
      conversions: 42,
      status: '进行中',
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white">营销活动管理</h2>
        <Button type="primary" icon={<i className="fa-solid fa-rocket"></i>}>
          创建活动
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        {kpiData.map((kpi, idx) => (
          <div key={idx} className="bg-[var(--bg-card)] border border-[var(--border-color)] p-5 rounded-lg relative overflow-hidden cursor-pointer transition-all hover:transform hover:-translate-y-0.5 hover:shadow-lg after:content-[''] after:absolute after:top-0 after:left-0 after:w-[3px] after:h-full after:bg-[var(--border-color)] after:transition-all hover:after:bg-[var(--primary)]">
            <div className="text-[10px] text-[var(--text-muted)] mb-1">{kpi.label}</div>
            <div className="text-[26px] font-extrabold my-1.5 tracking-tight font-mono">{kpi.value}</div>
          </div>
        ))}
      </div>

      <div className="bg-[var(--bg-panel)] border border-[var(--border-color)] rounded-lg p-5">
        <h3 className="font-bold text-sm text-white mb-4">活动列表</h3>
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

export default Campaigns;

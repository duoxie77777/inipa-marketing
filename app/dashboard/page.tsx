'use client';

import React from 'react';
import { Select, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import styles from '../styles/dashboard.module.css';
import '../styles/shared.css';

interface KPICardData {
  label: string;
  value: string;
  trend: string;
  onClick?: string;
}

interface ChannelData {
  key: string;
  channel: string;
  sent: number;
  openRate: string;
  clickRate: string;
  conversions: number;
}

interface FunnelStage {
  label: string;
  value: string;
  onClick?: string;
}

interface TrendData {
  label: string;
  percentage: number;
  change: string;
}

interface ChannelROI {
  name: string;
  roi: string;
}

const Dashboard: React.FC = () => {
  const kpiData: KPICardData[] = [
    { label: '采集线索总数', value: '12,450', trend: '↑ +8.5%', onClick: 'data-source' },
    { label: '触达客户数', value: '8,920', trend: '邮件 70%', onClick: 'campaigns' },
    {
      label: '高质量商机',
      value: '34',
      trend: '转化率 0.38%',
      onClick: 'ai-recommend'
    },
    { label: '销售跟进中', value: '21', trend: '接受率 61.8%', onClick: 'sales-collab' },
    {
      label: 'AI 节省工时',
      value: '22.5 h',
      trend: '本周累计',
      onClick: 'ai-lab'
    },
    { label: '获客成本', value: '¥ 15.8', trend: '↓ 13%', },
  ];

  const funnelStages: FunnelStage[] = [
    { label: '线索池', value: '12,450', onClick: 'data-source' },
    { label: '高质量商机', value: '34', onClick: 'ai-recommend' },
    { label: '销售跟进', value: '21', onClick: 'sales-collab' },
    { label: '成交客户', value: '8' },
  ];

  const channelROI: ChannelROI[] = [
    { name: '📧 邮件', roi: 'ROI 3.2x' },
    { name: '💼 LinkedIn', roi: 'ROI 4.1x' },
    { name: '💬 WhatsApp', roi: 'ROI 5.8x' },
    { name: '🟢 企业微信', roi: 'ROI 6.5x' },
  ];

  const trendData: TrendData[] = [
    { label: '线索采集', percentage: 85, change: '+18%' },
    { label: '邮件发送', percentage: 72, change: '+12%' },
    { label: '商机转化', percentage: 45, change: '+8%' },
    { label: 'AI 调用', percentage: 92, change: '+24%' },
  ];

  const channelColumns: ColumnsType<ChannelData> = [
    {
      title: '渠道',
      dataIndex: 'channel',
      key: 'channel',
      render: (channel: string) => <span className="text-xs">{channel}</span>,
    },
    {
      title: '发送',
      dataIndex: 'sent',
      key: 'sent',
      render: (sent: number) => <span className="text-xs font-mono">{sent.toLocaleString()}</span>,
    },
    {
      title: '打开率',
      dataIndex: 'openRate',
      key: 'openRate',
      render: (rate: string) => <span className="text-xs font-mono">{rate}</span>,
    },
    {
      title: '点击率',
      dataIndex: 'clickRate',
      key: 'clickRate',
      render: (rate: string) => <span className="text-xs font-mono">{rate}</span>,
    },
    {
      title: '转化',
      dataIndex: 'conversions',
      key: 'conversions',
      render: (conv: number) => <span className="text-xs font-mono">{conv}</span>,
    },
  ];

  const channelData: ChannelData[] = [
    { key: '1', channel: '📧 邮件', sent: 8920, openRate: '28.5%', clickRate: '8.2%', conversions: 18 },
    { key: '2', channel: '💼 LinkedIn', sent: 2840, openRate: '42.1%', clickRate: '12.8%', conversions: 8 },
    { key: '3', channel: '💬 WhatsApp', sent: 1420, openRate: '68.5%', clickRate: '24.3%', conversions: 6 },
    { key: '4', channel: '🟢 企业微信', sent: 980, openRate: '72.8%', clickRate: '28.5%', conversions: 2 },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white">营销数据看板</h2>
        <Select
          defaultValue="today"
          style={{ width: 120 }}
          options={[
            { value: 'today', label: '今日实时' },
            { value: '7days', label: '近 7 天' },
            { value: '30days', label: '近 30 天' },
          ]}
        />
      </div>

      <div className="grid grid-cols-6 gap-4 mb-6">
        {kpiData.map((kpi, idx) => (
          <div key={idx} className={`${styles.kpiCard} `}>
            <div className={`text-[10px] mb-1}`}>
              {kpi.label}
            </div>
            <div className={`${styles.kpiVal} font-mono `}>
              {kpi.value}
            </div>
            <div className={`text-[10px]`}>
              {kpi.trend}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="col-span-2 bg-[var(--bg-panel)] border border-[var(--border-color)] rounded-lg p-5">
          <h3 className="font-bold text-sm text-white mb-4">客户转化漏斗</h3>
          <div className="flex items-center gap-4">
            {funnelStages.map((stage, idx) => (
              <React.Fragment key={stage.label}>
                <div
                  className={`flex-1 bg-[var(--bg-deep)] rounded-lg p-4 border-l-4 cursor-pointer hover:bg-[var(--bg-hover)] transition-all`}
                >
                  <div className="text-xs mb-1">{stage.label}</div>
                  <div className={`text-2xl font-bold mono`}>{stage.value}</div>
                </div>
                {idx < funnelStages.length - 1 && (
                  <i className="fa-solid fa-arrow-right"></i>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="col-span-1 bg-[var(--bg-panel)] border border-[var(--border-color)] rounded-lg p-5">
          <h3 className="font-bold text-sm text-white mb-4">渠道效果</h3>
          <div className="flex flex-col gap-3">
            {channelROI.map((channel) => (
              <div
                key={channel.name}
                className="flex justify-between items-center cursor-pointer hover:bg-[var(--bg-hover)] p-2 rounded transition-all"
              >
                <span className="text-xs ">{channel.name}</span>
                <span className={`text-xs font-bold`}>{channel.roi}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-[var(--bg-panel)] border border-[var(--border-color)] rounded-lg p-5">
          <h3 className="font-bold text-sm text-white mb-4">渠道详细数据</h3>
          <Table
            columns={channelColumns}
            dataSource={channelData}
            pagination={false}
            className="data-table"
          />
        </div>

        <div className="bg-[var(--bg-panel)] border border-[var(--border-color)] rounded-lg p-5">
          <h3 className="font-bold text-sm text-white mb-4">近7天趋势</h3>
          <div className="space-y-3">
            {trendData.map((trend) => (
              <div key={trend.label}>
                <div className="text-xs  mb-1">{trend.label}</div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-[var(--bg-deep)] rounded-full h-2">
                    <div
                      className={`rounded-full h-2`}
                      style={{ width: `${trend.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-xs mono text-white">{trend.change}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

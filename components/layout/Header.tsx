'use client'

import { Button, Badge, Space, Flex } from 'antd'
import { useRouter } from 'next/navigation'
import { useTheme } from '@/hooks/useTheme'
import { useI18n } from '@/hooks/useI18n'

interface HeaderProps {
    onViewChange?: (view: string) => void
    onModalOpen?: (modal: string) => void
}

// 顶部导航栏
type BUttonType = 'view' | 'modal'; // view切换页面 modal弹窗

interface ActionButton {
    icon: string; // icon
    label: string; // 按钮文本
    type: BUttonType; // 按钮类型
    value: string; // 路径
    isPrimary?: boolean; // 是否激活
}

const ACTION_BUTTONS: ActionButton[] = [
    { icon: 'fa-rocket', label: 'header.launchCampaign', type: 'view' as const, value: 'campaigns', isPrimary: true },
    { icon: 'fa-wand-magic-sparkles', label: 'header.aiGenerate', type: 'view' as const, value: 'ai-lab' },
    { icon: 'fa-star', label: 'header.todayRecommend', type: 'view' as const, value: 'ai-recommend' },
    { icon: 'fa-chart-simple', label: 'header.generateReport', type: 'modal' as const, value: 'report' },
];

const Header: React.FC<HeaderProps> = ({ onViewChange, onModalOpen }) => {
    const router = useRouter()
    const { changeTheme } = useTheme()
    const { t, locale, setLocale } = useI18n()
    return (
        <header className="h-14 bg-[var(--bg-panel)] border-b border-[var(--border-color)] flex items-center justify-between px-6 flex-shrink-0">
            <Flex align="center" gap={16}>
                <i className="fa-brands fa-hive text-2xl"></i>
                <div className="leading-tight font-sans">
                    <div className="text-base font-black tracking-tight text-white">
                        {t('app.title')}
                    </div>
                    <div className="font-mono text-[9px] tracking-[0.1em] ">
                        {t('app.subtitle')}
                    </div>
                </div>
            </Flex>

            <Space size={12}>
                {ACTION_BUTTONS.map(btn => (
                    <Button
                        key={btn.value}
                        type={btn.isPrimary ? 'primary' : 'default'}
                        icon={<i className={`fa-solid ${btn.icon}`}></i>}
                        className={btn.isPrimary ? 'quick-btn primary' : 'quick-btn'}
                        onClick={() => {
                            if (btn.type === 'view') {
                                router.push(`/${btn.value}`)
                            } else if (btn.type === 'modal') {
                                onModalOpen?.(btn.value)
                            }
                        }}
                    >
                        {t(btn.label)}
                    </Button>
                ))}
            </Space>

            <Flex align="center" gap={24} className="text-xs font-mono">
                <Space size={8}>
                    <i className="fa-solid fa-brain"></i>
                    <span>{t('header.aiCost')}: <b className="text-white">¥ 128.40</b></span>
                </Space>
                <Space size={8} className="text-[var(--text-muted)] border-l border-[var(--border-color)] pl-6">
                    <Badge status="success" />
                    <span>{t('header.systemStatus')}</span>
                </Space>
                <Space size={8} className="border-l border-[var(--border-color)] pl-6">
                    <div className="w-6 h-6 rounded bg-[var(--primary)] border-2 border-[var(--primary)] cursor-pointer"
                        onClick={() => changeTheme('gold')}></div>
                    <div className="w-6 h-6 rounded bg-blue-600 border-2 border-transparent cursor-pointer hover:border-blue-400"
                        onClick={() => changeTheme('blue')}></div>
                    <div className="w-6 h-6 rounded bg-gray-100 border-2 border-transparent cursor-pointer hover:border-gray-400"
                        onClick={() => changeTheme('light')}></div>
                </Space>
                <Button
                    type="primary"
                    onClick={() => setLocale(locale === 'zh' ? 'en' : 'zh')}
                >
                    {locale === 'zh' ? 'EN' : '中文'}
                </Button>
                <Button onClick={() => router.push('/settings')}>
                    设置
                </Button>
            </Flex>
        </header >
    );
};

export default Header;
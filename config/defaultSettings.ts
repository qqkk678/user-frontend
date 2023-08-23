import { Settings as LayoutSettings } from '@ant-design/pro-components';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: 'TX 用户管理系统',
  pwa: false,
  logo: 'https://pro.upload.logomaker.com.cn/23/08/20/b09420f515c171a523779eb6f9166994.jpeg?x-oss-process=image/resize,m_lfit,w_0,h_170',
  iconfontUrl: '',
};

export default Settings;

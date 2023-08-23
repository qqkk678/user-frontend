import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { GITHUB_LINK} from "@/constant";
const Footer: React.FC = () => {
  const defaultMessage = 'QQKK出品';
  const currentYear = new Date().getFullYear();
  const beianUrl = 'https://beian.miit.gov.cn';
  return (
    <DefaultFooter
      // @ts-ignore
      copyright={
        <>
          {currentYear} {defaultMessage} {' '}
          <a href={beianUrl} target="_blank" rel="noreferrer">
          </a>
        </>
      }
      links={[
        {
          key: 'github',
          title: <><GithubOutlined />&nbsp;QQKK Github</>,
          href: GITHUB_LINK,
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;

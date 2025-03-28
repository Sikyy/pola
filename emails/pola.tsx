import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
  } from '@react-email/components';
  import * as React from 'react';
  
  interface WelcomeSubscriptionProps {
    username?: string;
    subscriptionDate?: string;
  }
  
  const baseUrl = 'https://cdn.example.com';
  
  export const WelcomeSubscription = ({
    username = '亲爱的用户',
    subscriptionDate = new Date().toLocaleDateString('zh-CN'),
  }: WelcomeSubscriptionProps) => (
    <Html>
      <Head />
      <Preview>感谢您订阅 Pola 电子报 - 您的时尚灵感来源</Preview>
      <Body style={main}>
        <Container style={container}>
        <Img
        src="https://i.miji.bid/2025/03/28/b75e8ac700825735e06717fb31895c0f.png"
        width="264"
        alt="Pola"
        className="m_-692846720901706468fluidimage CToWUd"
        style={ logo }
        />
          
          <Heading style={h1}>欢迎加入 POLA </Heading>
          <Text style={paragraph}>{username}，您好！</Text>
          <Text style={paragraph}>
            感谢您于 {subscriptionDate} 订阅 POLA 。
            <br />
            <br />
            我们非常高兴能与您分享最新的时尚趋势、设计灵感和独家优惠。
          </Text>
          <Section style={highlightSection}>
            <Text style={highlightText}>
              作为新订阅者，您将获得：
            </Text>
            <Text style={benefitText}>
              • 每周精选时尚趋势和穿搭墨镜
            </Text>
            <Text style={benefitText}>
              • 独家会员优惠和限时折扣
            </Text>
            <Text style={benefitText}>
              • 新品发布抢先知
            </Text>
            <Text style={benefitText}>
              • 专业时尚指南和实用小贴士
            </Text>
          </Section>
          <Section style={buttonContainer}>
            <Button style={button} href="https://pola.online">
              探索 Pola 网站
            </Button>
          </Section>
          <Hr style={hr} />
          <Section style={socialSection}>
            <Text style={socialText}>关注我们的社交媒体</Text>
            <Section style={socialIconsContainer}>
              <Link href="https://facebook.com/pola" style={socialIconLink}>
                <Img
                  src="https://ci3.googleusercontent.com/meips/ADKq_NbqAiw9UgJOaNRl1P2vnHZpVDO0APCQMiCu9KJJmHyQ8nMnm44ob3vQqszXH10PVwOyWRQtJwLYynYEpBTCrgFZ7-qXraoMyWwqTH1HtaXzCN4GmdKrHmK_xdVjJr8vF2F8MiZ-iOHM1-GrJNfojtP9uXhHk28ZPZJO=s0-d-e1-ft#https://image.mail.coach.com/lib/fe3d15707564077d7d1171/m/1/805fc1c4-e3f8-4049-b5c0-b04c5b4944bb.png"
                  width="36"
                  height="36"
                  alt="Social Media"
                  style={socialIcon}
                />
              </Link>
              <Link href="https://instagram.com/pola" style={socialIconLink}>
                <Img
                  src="https://ci3.googleusercontent.com/meips/ADKq_NZeNIRqmZcWmLbeuprOUPPrmTK_iM2PKWdWZ865NKScL4liB6sKSLz_FZLkn1_tEWXd9am66PDd1ffXtxKGrVZaa57qBssnSn6JV5CHv2cnwF5a2zB1nlSQ4lVsFUB6i2KdahQWPZ549QF8mFGSumLnbEYGrQr_T_py=s0-d-e1-ft#https://image.mail.coach.com/lib/fe3d15707564077d7d1171/m/1/2c49340f-b4ca-4d6f-b16f-8a8894a31df8.png"
                  width="36"
                  height="36"
                  alt="Social Media"
                  style={socialIcon}
                />
              </Link>
              <Link href="https://youtube.com/pola" style={socialIconLink}>
                <Img
                  src="https://ci3.googleusercontent.com/meips/ADKq_Na_4HlQD30pCGG6amF2coRlskbFtY7Vkewuty4QH1vLI82azz2L0FKqQF8FsA7o1R1DPW-YOOEN1kSMtsPsmGOWgBPAmx8XLJuOD_ChoFj3TP8K7Sw4u5T916bAkOJOhX6sQ1eULoU4VqPYC9B5QbgC-IbuHMf401c1=s0-d-e1-ft#https://image.mail.coach.com/lib/fe3d15707564077d7d1171/m/1/eaaf44df-9623-4b46-97a6-70a80c617211.png"
                  width="36"
                  height="36"
                  alt="Social Media"
                  style={socialIcon}
                />
              </Link>
              <Link href="https://tiktok.com/pola" style={socialIconLink}>
                <Img
                  src="https://ci3.googleusercontent.com/meips/ADKq_NarSAxvhF8n_Y9U5fsYJsqDrSQ33s3LBR1j-oYg44O2dk8_qLiO32eRjg7s8imlSF5xGLF629Ypa1jYAymJ0OQ9znm5olxqoUXxGPATFi1o1zc4iBwXlLN0K1l-Fop5SRO_xrHAjXW3bsiAhLmf8j9wdrX4N3Ss1428=s0-d-e1-ft#https://image.mail.coach.com/lib/fe3d15707564077d7d1171/m/1/67e9c410-e1f0-4de1-bbc2-4b764e414dbe.png"
                  width="36"
                  height="36"
                  alt="Social Media"
                  style={socialIcon}
                />
              </Link>
              <Link href="https://twitter.com/pola" style={socialIconLink}>
                <Img
                  src="https://ci3.googleusercontent.com/meips/ADKq_NY11naXNk8M8J9c7RfNKSTU5ZxOBJWzXMH5-KWjtaTrSkpLDcsJI5K4WOlKtO2dTDdy6GoM5irWRHWlMotTF_EzNhXxwPHw94iIG4uV5u72cokAdhGJcGdtA8PQR0i_2aV9_Io2QPdvvhWXSLDur-LfIQGZRQwOC7Lv=s0-d-e1-ft#https://image.mail.coach.com/lib/fe3d15707564077d7d1171/m/1/76a2ecde-9da0-4a57-ac86-546bfe798d20.png"
                  width="36"
                  height="36"
                  alt="Social Media"
                  style={socialIcon}
                />
              </Link>
            </Section>
          </Section>
          <Text style={paragraph}>
            我们期待能为您带来愉悦的阅读体验和优质的时尚资讯
          </Text>
          {/* <Text style={paragraph}>时尚问候，</Text> */}
          <Text style={paragraph}>POLA 团队</Text>
          <Hr style={hr} />
          <Text style={footer}>
            © {new Date().getFullYear()} POLA  保留所有权利
            <br />
            此邮件是发送给订阅了 POLA 品牌的用户
            <br />
            如果您想取消订阅，请
            <Link href="https://pola.online/unsubscribe" style={link}>
              点击这里
            </Link>
            
          </Text>
        </Container>
      </Body>
    </Html>
  );
  
  export default WelcomeSubscription;
  
  const main = {
    backgroundColor: '#ffffff',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  };
  
  const container = {
    margin: '0 auto',
    padding: '20px 0 48px',
    maxWidth: '580px',
    backgroundColor: '#ffffff',
  };
  
  const logo = {
    margin: '0 auto',
    display: 'block',
    padding: '30px 0',
  };
  
  const h1 = {
    color: '#000000',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: '26px',
    fontWeight: 'bold',
    textAlign: 'center' as const,
    margin: '30px 0',
    letterSpacing: '0.5px',
  };
  
  const paragraph = {
    color: '#333333',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: '16px',
    lineHeight: '1.5',
    margin: '16px 0',
  };
  
  const highlightSection = {
    backgroundColor: '#f8f8f8',
    padding: '20px',
    borderRadius: '6px',
    margin: '24px 0',
  };
  
  const highlightText = {
    color: '#000000',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '0 0 16px 0',
  };
  
  const benefitText = {
    color: '#333333',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: '16px',
    lineHeight: '1.6',
    margin: '8px 0',
  };
  
  const buttonContainer = {
    textAlign: 'center' as const,
    margin: '30px 0',
  };
  
  const button = {
    backgroundColor: '#000000',
    borderRadius: '4px',
    color: '#ffffff',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: '16px',
    fontWeight: 'bold',
    textDecoration: 'none',
    textAlign: 'center' as const,
    display: 'block',
    width: '220px',
    padding: '14px 7px',
  };
  
  const hr = {
    borderColor: '#e6e6e6',
    margin: '20px 0',
  };
  
  const socialSection = {
    textAlign: 'center' as const,
    margin: '24px 0',
  };
  
  const socialText = {
    color: '#000000',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '0 0 16px 0',
  };
  
  const socialIconsContainer = {
    display: 'flex',
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
    margin: '12px auto',
    maxWidth: '360px',
    flexDirection: 'row' as const,
    flexWrap: 'nowrap' as const,
  };
  
  const socialIconLink = {
    textDecoration: 'none',
    margin: '0 12px',
    display: 'inline-block',
  };
  
  const socialIcon = {
    borderRadius: '4px',
    display: 'block',
  };
  
  const footer = {
    color: '#8c8c8c',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: '12px',
    lineHeight: '1.5',
    textAlign: 'center' as const,
    padding: '0 20px',
  };
  
  const link = {
    color: '#000000',
    textDecoration: 'underline',
  }; 
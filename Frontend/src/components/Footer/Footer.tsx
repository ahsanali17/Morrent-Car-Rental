import { FC } from "react";

import { Box, Container, FooterBottom, FooterBottomLinkDiv, FooterContent, FooterLink, FooterLinkItems, FooterListTtem, FooterLogoDiv, FooterNav, FooterTitle, FooterWrapper, LogoContainer, NavIcon, SpanBlock } from "./styles";

const footerLinks = [
  {
    title: "About",
    sublinks: [
      {
        name: "How it works",
        link: "/#Howitworks",
      },
      {
        name: "Featured",
        link: "/#Featured",
      },
      {
        name: "Partnership",
        link: "/#Partnership",
      },
      {
        name: "Bussiness Relation",
        link: "/#BussinessRelation",
      },
    ],
  },
  {
    title: "Community",
    sublinks: [
      {
        name: "Events",
        link: "/#Events",
      },
      {
        name: "Blog",
        link: "/#Blog",
      },
      {
        name: "Podcast",
        link: "/#Podcast",
      },
      {
        name: "Invite a friend",
        link: "/#Inviteafriend",
      },
    ],
  },
  {
    title: "Socials",
    sublinks: [
      {
        name: "Discord",
        link: "/#Discord",
      },
      {
        name: "Instagram",
        link: "/#Instagram",
      },
      {
        name: "Twitter",
        link: "/#Twitter",
      },
      {
        name: "Facebook",
        link: "/#Facebook",
      },
    ],
  }
]

const Footer: FC = () => {
  return (
    <FooterWrapper>
      <Container>
        <Box>
          <FooterLogoDiv>
            <FooterContent>
              <LogoContainer>
                <NavIcon
                  width="141"
                  height="26"
                  viewBox="0 0 141 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.304 25V1.16H4.464L13.392 13.288H11.408L20.144 1.16H24.304V25H19.92V6.12L21.616 6.536L12.56 18.6H12.048L3.216 6.536L4.656 6.12V25H0.304ZM41.6105 25.384C39.8612 25.384 38.2292 25.0747 36.7145 24.456C35.1998 23.8373 33.8772 22.9733 32.7465 21.864C31.6158 20.7547 30.7305 19.4533 30.0905 17.96C29.4718 16.4453 29.1625 14.8133 29.1625 13.064C29.1625 11.2933 29.4718 9.66133 30.0905 8.168C30.7092 6.67467 31.5838 5.37333 32.7145 4.264C33.8452 3.15467 35.1678 2.30133 36.6825 1.704C38.1972 1.08533 39.8398 0.775999 41.6105 0.775999C43.3812 0.775999 45.0238 1.08533 46.5385 1.704C48.0532 2.32266 49.3758 3.18667 50.5065 4.296C51.6372 5.384 52.5118 6.67467 53.1305 8.168C53.7705 9.66133 54.0905 11.2933 54.0905 13.064C54.0905 14.8133 53.7705 16.4453 53.1305 17.96C52.4905 19.4533 51.6052 20.7547 50.4745 21.864C49.3438 22.9733 48.0212 23.8373 46.5065 24.456C45.0132 25.0747 43.3812 25.384 41.6105 25.384ZM41.6105 21.416C42.7838 21.416 43.8612 21.2133 44.8425 20.808C45.8238 20.3813 46.6772 19.7947 47.4025 19.048C48.1492 18.3013 48.7145 17.416 49.0985 16.392C49.5038 15.368 49.7065 14.2587 49.7065 13.064C49.7065 11.8693 49.5038 10.7707 49.0985 9.768C48.7145 8.744 48.1492 7.85867 47.4025 7.112C46.6772 6.344 45.8238 5.75733 44.8425 5.352C43.8612 4.94667 42.7838 4.744 41.6105 4.744C40.4585 4.744 39.3918 4.94667 38.4105 5.352C37.4292 5.75733 36.5652 6.344 35.8185 7.112C35.0932 7.85867 34.5278 8.744 34.1225 9.768C33.7172 10.7707 33.5145 11.8693 33.5145 13.064C33.5145 14.2587 33.7172 15.368 34.1225 16.392C34.5278 17.416 35.0932 18.3013 35.8185 19.048C36.5652 19.7947 37.4292 20.3813 38.4105 20.808C39.3918 21.2133 40.4585 21.416 41.6105 21.416ZM58.9603 25V1.16H67.8243C69.4456 1.16 70.8749 1.45867 72.1123 2.056C73.3709 2.632 74.3523 3.48533 75.0563 4.616C75.7603 5.72533 76.1123 7.08 76.1123 8.68C76.1123 10.3227 75.7176 11.72 74.9283 12.872C74.1603 14.024 73.1149 14.8773 71.7923 15.432L77.2643 25H72.3363L66.4803 14.536L69.2963 16.2H63.3123V25H58.9603ZM63.3123 12.36H67.8883C68.6776 12.36 69.3603 12.2107 69.9363 11.912C70.5123 11.592 70.9603 11.1547 71.2803 10.6C71.6003 10.0453 71.7603 9.40533 71.7603 8.68C71.7603 7.93333 71.6003 7.29333 71.2803 6.76C70.9603 6.20533 70.5123 5.77867 69.9363 5.48C69.3603 5.16 68.6776 5 67.8883 5H63.3123V12.36ZM81.1165 25V1.16H96.9565V5H85.4685V11.112H96.3165V14.952H85.4685V21.16H96.9565V25H81.1165ZM101.148 25V1.16H104.54L117.66 18.824L115.9 19.176V1.16H120.252V25H116.828L103.9 7.208L105.5 6.856V25H101.148ZM130.091 25V5H123.915V1.16H140.555V5H134.475V25H130.091Z"
                    fill="#3563E9"
                  />
                </NavIcon>
              </LogoContainer>
              <FooterContent>
                Our vision is to provide convenience and help increase your sales business.
              </FooterContent>
            </FooterContent>
          </FooterLogoDiv>
          <FooterLinkItems>
            {
              footerLinks.map((link) => (
                <FooterListTtem key={link.title}>
                  <FooterTitle>{link.title}</FooterTitle>
                  <FooterNav aria-label="Footer Nav">
                    {link.sublinks.map((item) => (<FooterLink key={item.name} href={item.link}> {item.name} </FooterLink>))}
                  </FooterNav>
                </FooterListTtem>
              ))
            }
          </FooterLinkItems>
        </Box>
        <hr />
        <FooterBottom>
          <div>©2022 MORENT. All rights reserved</div>
          <FooterBottomLinkDiv>
            <div>Privacy & Policy</div>
            <div>Terms & Condition</div>
          </FooterBottomLinkDiv>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  )
}

export default Footer;
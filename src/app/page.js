/**
 * @author Loren Huang <LorenHu3718@gmail.com>
 */
"use client"
import Link from "next/link";
import Image from "next/image";
import CustomCard from "./components/Card";
import { useState , useEffect } from "react";
import { 
  Navbar, 
  NavbarBrand, 
  NavbarCollapse, 
  NavbarLink, 
  NavbarToggle, 
  Footer,
  FooterBrand, 
  FooterCopyright,
  FooterDivider, 
  FooterLink, 
  FooterLinkGroup,
  Carousel,
  Card,
  Button,
  DarkThemeToggle,
} from "flowbite-react";

export default function Component() {

  const [items, setItems] = useState([])
  const tokenURL = 'https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token' ;
  const apiURL = 'https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/YunlinCounty'
  useEffect(() => {
    const getToken = async () => {
      const clientid = process.env.TDX_CLIENT_ID;
      const clientsecret = process.env.TDX_CLIENT_SECRET;

      const tokenParams = new URLSearchParams();
      tokenParams.append('grant_type', 'client_credentials');
      tokenParams.append('client_id', clientid);
      tokenParams.append('client_secret', clientsecret);

      const tokenRespose = await fetch(tokenURL,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: tokenParams.toString(),
      })
    }
  }
  ,[]);
  
  return (
    <>
    <div className="bg-teal-50">
      <div className="container , mx-auto ">
        <Navbar fluid className="bg-teal-50" >
          <NavbarBrand as={Link} href="https://flowbite-react.com">
            <img src="https://www.secretariat.ntust.edu.tw/app/index.php?Action=downloadfile&file=WVhSMFlXTm9Mekl3TDNCMFlWOHpPRE14T1Y4ek56Y3lOemd3WHpNMU16YzRMbkJ1Wnc9PQ==&fname=LOGGYSOKRKDCOOYXEDLKIG24FC30TWLK50FGXSMKGG25WWRKDCMK24TWUSOOROA0NOWWUT0520FGNK24KOOKQL00" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
          </NavbarBrand>
          <NavbarToggle />
          <NavbarCollapse className="text-blue-400 hover:text-red-500" >
            <NavbarLink href="https://www.yuntech.edu.tw/">
              <span className="px-4 py-2 hover:text-yellow-500 
              hover:border-yellow-500
              hover:border-b-2
              "></span>
              首頁
            </NavbarLink>
            <NavbarLink as={Link} href="#" className = "hover:underline" >
              關於我們
            </NavbarLink>
            <NavbarLink href="#" className = "hover:underline">服務內容</NavbarLink>
            <NavbarLink href="#" className = "hover:underline">旅遊安排</NavbarLink>
            <NavbarLink href="#" className = "hover:underline">聯絡我們</NavbarLink>
          </NavbarCollapse>
          <DarkThemeToggle></DarkThemeToggle>
        </Navbar>
      </div>
    </div>

    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src="/Banner/bee.jpg" alt="圖片來源：sufen Chang，於 2022 年 7 月 1 日拍攝，圖片所有權為原作者所有，地點:古坑蜜蜂故事館" />
        <img src="/Banner/five.jpg" alt="由 Pbdragonwang - 自己的作品, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=82418849" />
        <img src="/Banner/temple.png" alt="圖片來源 : 寧濟御庭園山水文化園區" />
        <img src="/Banner/" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
    </div>
    <div className="bg-white py-16">
    <div className="container mx-auto grid grid-cols-4  gap-4 ">
    {items.map(item =>
    <Card
      className="max-w-sm"
      imgAlt={item.name}
      imgSrc={item.Picture.PictureUrl1}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {item.ScenicSpotName}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {item.Description}
      </p>
      <Button>
        Here to Read more
        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    </Card>
    )}
    </div>
    </div>
    <Footer container>
    <div className="w-full text-center">
      <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
        <FooterBrand
          href="https://flowbite.com"
          src="https://flowbite.com/docs/images/logo.svg"
          alt="Flowbite Logo"
          name="Flowbite"
        />
        <FooterLinkGroup>
          <FooterLink href="#">About</FooterLink>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Licensing</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
        </FooterLinkGroup>
      </div>
      <FooterDivider />
      <FooterCopyright href="#" by="Flowbite™" year={2022} />
    </div>
  </Footer>
</>
  );
  <div>
    {items.map(item => <CustomCard item={item} />
    
    )}
  </div>
}
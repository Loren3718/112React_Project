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
  DarkThemeToggle,
} from "flowbite-react";

export default function Component() {

  const [items, setItems] = useState([]);
  
  useEffect(() => {
    async function fetchdata()
    {
      const response = await fetch('api/items');
      const data = await response.json();
      //console.log(data);
      console.log("Page Get Data Success");
      setItems(data);
    }
    fetchdata();
    
  },[]);
  
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
      </Carousel>
    </div>

    <div className="bg-white py-16">
    <div className="container mx-auto grid grid-cols-4  gap-4 ">
    {items.map((item, index) => (
            <CustomCard item={item} key={index} />
          ))}
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
}
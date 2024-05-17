
  import Link from "next/link";
  import Image from "next/image";
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
          <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
        </Carousel>
      </div>

      <Card
        className="max-w-sm"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="/vercel.svg"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
        <Button>
          Read more
          <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </Card>

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

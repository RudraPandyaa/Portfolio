import { UiWrapper } from "@/components/shared";
import DownloadResumeBtn from "@/components/shared/DownloadResumeBtn";
import Link from "next/link";

const Footer = () => {
  return (
    <UiWrapper>
      <footer className="relative md:px-8 md:py-4 pb-4 text-zinc-500">
        <div className="container relative flex items-center justify-start mb-10 md:mb-0">
          
          {/* Left Section — Download Resume */}
          <div className="w-auto">
            <DownloadResumeBtn />
          </div>

          {/* Center Section — Absolutely centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
            <div className="text-sm flex flex-col md:flex-row justify-center items-center px-4">
              &copy; {new Date().getFullYear()} Made with ❤️‍🔥{" "}
              <div className="hover:text-white ml-1">by Rudra Pandya</div>
            </div>

            <div className="mt-3 text-zinc-400 flex justify-center">
              <Link
                href="https://github.com/RudraPandyaa"
                className="mx-2 text-sm hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/rudra-pandyaa/"
                className="mx-2 text-sm hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Link>
              <Link
                href="https://mail.google.com/mail/?view=cm&fs=1&to=viralpandya079@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 text-sm hover:text-white"
              >
                Gmail
              </Link>
            </div>
          </div>

        </div>
      </footer>
    </UiWrapper>
  );
};

export default Footer;
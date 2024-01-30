import { UiWrapper } from "@/components/shared";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const Footer = () => {
  return (
    <UiWrapper>
      <Card>
        <footer className=" px-5 py-4 text-center text-zinc-500">
          <div className="container mx-auto">
            {/* <div className="flex flex-wrap justify-center">
              <div className="w-full md:w-1/3 p-5">
                <h3 className="text-lg">Section 1</h3>
                <p className="mt-4 text-sm">Content for section 1</p>
              </div>
              <div className="w-full md:w-1/3 p-5">
                <h3 className="text-lg">Section 2</h3>
                <p className="mt-4 text-sm">Content for section 2</p>
              </div>
              <div className="w-full md:w-1/3 p-5">
                <h3 className="text-lg">Section 3</h3>
                <p className="mt-4 text-sm">Content for section 3</p>
              </div>
            </div> */}

            {/* <hr className="mt-8 mb-8" /> */}
            {/* Testing new branch
             */}
            {/* Test */}
            <div className="text-sm px-16 md:px-4 flex justify-center items-center text-center">
              &copy; {new Date().getFullYear()} Made with ❤️‍🔥{" "}
              <Link href={"https://www.faizanahmed.in"}>
                <div className="hover:text-white">by Faizanahmed Saiyed</div>
              </Link>
            </div>
            <div className="mt-4 text-zinc-400">
              <Link
                href="https://github.com/Faizanahmedsy"
                className="mx-2 text-sm  hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/faizanahmed-saiyed/"
                className="mx-2 text-sm  hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Link>
              <Link
                href="mailto:saiyed.faizanahmed1@gmail.com"
                className="mx-2 text-sm  hover:text-white"
              >
                Gmail
              </Link>
            </div>
          </div>
        </footer>
      </Card>
    </UiWrapper>
  );
};

export default Footer;

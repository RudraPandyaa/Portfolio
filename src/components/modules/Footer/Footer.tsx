import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-inherit p-5 text-center text-white">
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
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent my-8"></div>
        {/* <hr className="mt-8 mb-8" /> */}
        {/* Testing new branch
         */}
        {/* Test */}
        <div className="text-sm px-16 md:px-4">
          &copy; {new Date().getFullYear()} Made with ❤️‍🔥{" "}
          <Link href={"https://www.faizanahmed.in"}>by Faizanahmed Saiyed</Link>
        </div>
        <div className="mt-4">
          <Link
            href="https://github.com/Faizanahmedsy"
            className="mx-2 text-sm text-gray-300 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/faizanahmed-saiyed/"
            className="mx-2 text-sm text-gray-300 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:saiyed.faizanahmed1@gmail.com"
            className="mx-2 text-sm text-gray-300 hover:text-white"
          >
            Gmail
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

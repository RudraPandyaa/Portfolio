import Link from "next/link";
import { buttonVariants } from "../ui/button";

type Props = {};

export default function DownloadResumeBtn({}: Props) {
  return (
    <Link
      href={
        "https://drive.google.com/file/d/1VotjfbCNIxXsql4BuNGd8fe4NYA4z1gT/view?usp=sharing"
      }
      target="_blank"
      className={buttonVariants({
        variant: "outline",
      })}
    >
      Download Resume
    </Link>
  );
}
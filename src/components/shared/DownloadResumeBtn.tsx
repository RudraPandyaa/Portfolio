import Link from "next/link";
import { buttonVariants } from "../ui/button";

type Props = {};

export default function DownloadResumeBtn({}: Props) {
  return (
    <Link
      href={
        "https://drive.google.com/file/d/13MLaKCAGCF949tyIj_pyQv81d3J9U5wg/view?usp=sharing"
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
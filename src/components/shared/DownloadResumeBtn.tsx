import Link from "next/link";
import { buttonVariants } from "../ui/button";

type Props = {};

export default function DownloadResumeBtn({}: Props) {
  return (
    <Link
      href={
        "https://drive.google.com/file/d/17aafsx6-H8QBM28O_amb_fhL19lKUU6f/view?usp=sharing"
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
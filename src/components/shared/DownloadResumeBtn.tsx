import Link from "next/link";
import { buttonVariants } from "../ui/button";

type Props = {};

export default function DownloadResumeBtn({}: Props) {
  return (
    <Link
      href={
        "https://drive.google.com/file/d/1dKFUxpnZ1_cuLlM2_Tj5ME9MKXqq8VgH/view?usp=sharing/view?usp=sharing"
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
import Image from "next/image";
import Link from "next/link";
import Para from "./Para";

export default function Social({ color }) {
  return (
    <div className="flex flex-col justify-center items-start gap-4">
      <Link
        href="https://wa.me/+201279237596"
        target="_blank"
        className="flex justify-start items-start gap-4 break-all"
      >
        <Image
          src="/social/whatsapp.png"
          alt="social media whatsapp"
          width={30}
          height={30}
        />
        <Para color={color ? color : "color-primary-blue"}>
          <span className="text-base">(+20)</span> <span>1279237596</span>
        </Para>
      </Link>
      <Link
        href="mailto:yousiefhamed1@gmail.com"
        target="_blank"
        className="flex justify-start items-start gap-4 break-all"
      >
        <Image
          src="/social/gmail.png"
          alt="social media gmail"
          width={30}
          height={30}
        />
        <Para color={color ? color : "color-primary-blue"}>
          yousiefhamed1@gmail.com
        </Para>
      </Link>
      <Link
        href="https://www.linkedin.com/in/youssef-hamed-helmy/"
        target="_blank"
        className="flex justify-start items-start gap-4 break-all"
      >
        <Image
          src="/social/linkedin.png"
          alt="social media linkedin"
          width={30}
          height={30}
        />
        <Para color={color ? color : "color-primary-blue"}>
          https://linkedin.com/in/youssef-hamed-helmy/
        </Para>
      </Link>
      <Link
        href="https://github.com/yousiefhamed"
        target="_blank"
        className="flex justify-start items-start gap-4 break-all"
      >
        <Image
          src="/social/github.png"
          alt="social media github"
          width={30}
          height={30}
        />
        <Para color={color ? color : "color-primary-blue"}>
          https://github.com/yousiefhamed
        </Para>
      </Link>
    </div>
  );
}

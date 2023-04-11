import SEO from "@/components/SEO";
import Image from "next/image";
import img from "../public/vercel.svg";

export default function about() {
  return (
    <div>
      <SEO title={"about"} />
      <Image src={img} alt="d" width={100} />
      <h1>about</h1>
    </div>
  );
}

// import { motion } from "framer-motion";
import Image from "next/image"
import { type ContentBody } from "../../types";
import { Car } from "./svg/Car";

type Props = {
  content?: ContentBody
}

export function Content({ content }: Props) {

  if (!content) return <p className="max-w-xl mx-auto">There doesn&apos;t seem to be any content for this planet.</p>;

  return (
    <section className="max-w-xl mx-auto px-6 md:px-0">
        {content.map((item) => {
          if (typeof item !== "string") {
            if (item.type === "image") {
              return <Image key={JSON.stringify(item.alt)} alt={item.alt} src={item.src} width={item.width ?? 300} height={item.height ?? 500} />
            }

            if (item.type === "car") {
              return (
                <div key="car" className="min-h-min stroke-space-white">
                  <Car />
                </div>
              )
            }
          }


          if (typeof item === "string") {
            return <p key={JSON.stringify(item)} className="pb-4 text-indigo-100">{item}</p>
          }

          return;
        })}
    </section>
  )
}
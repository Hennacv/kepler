import Image from "next/image"
import { type ContentBody } from "../../../types"

type Props = {
  content: ContentBody
}

export function NeptuneContent({ content }: Props) {
  return (
      <div>
        {content.map((item) => {
          if (typeof item !== "string") {
            if (item.type === "image") {
              return <Image key={JSON.stringify(item.alt)} alt={item.alt} src={item.src} width={300} height={500} />
            }
          }

          if (typeof item === "string") {
            return <p key={JSON.stringify(item)}>{item}</p>
          }

          return;
        })}
      </div>
    )
  }
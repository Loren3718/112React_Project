/**
 * @author Loren Huang <LorenHu3718@gmail.com>
 */
import Image from "next/image";
import Link from "next/link";

export default function CustomCard({ item }) {
    return (
      <div className="border text-black p-4">
        <img 
          src={item.Picture.PictureUrl1} 
          className="object-fill h-96 w-full mb-4" 
          alt={item.Picture.PictureDescription1} 
        />
        <div className="text-xl font-semibold mb-2">{item.ScenicSpotName}</div>
        <div className="text-sm">{item.Description}</div>
        <Link href={item.MapUrl}>
              <span className="text-sm"></span>
              Map to Go
            </Link>
      </div>
    );
  }

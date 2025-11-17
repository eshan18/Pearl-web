import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import { HiPlay } from "react-icons/hi";

interface VideoCardProps {
  videoThumbnailUrl: string;
  title: string;
  videoUrl: string;
}

const VideoCard: FC<VideoCardProps> = ({ videoThumbnailUrl, title, videoUrl }) => {
  return (
    <article className="cursor-pointer group">
      <Link href={videoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Watch video: ${title}`}>
        <div className="relative w-full h-48 rounded-lg overflow-hidden shadow-md">
          <Image
            src={videoThumbnailUrl}
            alt={`Video thumbnail for ${title}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover group-hover:opacity-90 transition-opacity"
            priority={false}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-brandAqua bg-opacity-80 rounded-full p-3">
              <HiPlay size={28} className="text-white" />
            </div>
          </div>
        </div>
        <h4 className="mt-3 text-brandText font-semibold">{title}</h4>
      </Link>
    </article>
  );
};

export default VideoCard;

import Image from "next/image";
import { FC } from "react";

interface EventCardProps {
  eventName: string;
  date: string;
  location: string;
  imageUrl: string;
}

const EventCard: FC<EventCardProps> = ({ eventName, date, location, imageUrl }) => {
  return (
    <article
      className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
      tabIndex={0}
      aria-label={`Event: ${eventName} on ${date} at ${location}`}
    >
      <div className="relative w-full h-40 sm:h-36 md:h-28">
        <Image
          src={imageUrl}
          alt={`${eventName} event image`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={false}
        />
      </div>
      <div className="p-4">
        <h3 className="text-brandBlueDark font-semibold text-lg">{eventName}</h3>
        <p className="text-brandGold font-medium">{date}</p>
        <p className="text-brandMuted text-sm">{location}</p>
      </div>
    </article>
  );
};

export default EventCard;

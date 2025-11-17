import { FC, KeyboardEvent } from "react";
import clsx from "clsx";

interface TierCardProps {
  tierName: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}

const TierCard: FC<TierCardProps> = ({ tierName, description, isActive, onClick }) => {
  function handleKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className={clsx(
        "cursor-pointer p-4 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-brandBlue",
        isActive
          ? "border-b-4 border-brandGold text-brandBlue font-heading font-bold underline"
          : "text-brandMuted"
      )}
      aria-pressed={isActive}
      aria-label={`Select ${tierName} tier`}
    >
      <h3 className="text-lg mb-2">{tierName}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default TierCard;

import { FC } from "react";
import { HiCheckCircle } from "react-icons/hi";
import clsx from "clsx";

interface OrderTimelineProps {
  currentStep: number; // from 1 to 4
}

const steps = ["Ordered", "Processed", "Shipped", "Delivered"];

const OrderTimeline: FC<OrderTimelineProps> = ({ currentStep }) => {
  return (
    <nav
      aria-label="Order progress"
      role="progressbar"
      aria-valuemin={1}
      aria-valuemax={4}
      aria-valuenow={currentStep}
      className="flex justify-between items-center w-full max-w-4xl mx-auto"
    >
      {steps.map((step, index) => {
        const stepNum = index + 1;
        const isCompleted = stepNum < currentStep;
        const isCurrent = stepNum === currentStep;

        return (
          <div key={step} className="flex-1 flex flex-col items-center relative">
            {/* Line connector */}
            {index !== 0 && (
              <span
                aria-hidden="true"
                className={clsx(
                  "absolute top-1/2 left-0 w-full h-0.5 -translate-y-1/2",
                  isCompleted ? "bg-brandGreen" : "bg-gray-300"
                )}
                style={{ zIndex: 0 }}
              />
            )}
            {/* Circle */}
            <span
              className={clsx(
                "relative z-10 flex items-center justify-center rounded-full w-10 h-10",
                isCompleted
                  ? "bg-brandGreen text-white"
                  : isCurrent
                  ? "bg-brandBlue text-white"
                  : "bg-gray-300 text-gray-500"
              )}
              aria-current={isCurrent ? "step" : undefined}
            >
              {isCompleted ? (
                <HiCheckCircle size={24} aria-hidden="true" />
              ) : (
                <span className="text-lg font-semibold">{stepNum}</span>
              )}
            </span>
            {/* Label */}
            <span className="mt-2 text-center text-sm font-medium">
              {step}
            </span>
          </div>
        );
      })}
    </nav>
  );
};

export default OrderTimeline;

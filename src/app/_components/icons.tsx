import { cn } from "@/lib/utils";

export async function MenutreeWithNoBackground({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      width="176"
      height="176"
      viewBox="0 0 176 176"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <g clipPath="url(#clip0_120_12)">
        <path
          d="M38.7812 0.5C20.6578 0.5 5.96875 17.6391 5.96875 38.7812C5.96875 56.8828 16.7422 72.0531 31.2125 76.0344L25.7766 164.584C25.4047 170.589 30.0312 175.5 36.0469 175.5H41.5156C47.5312 175.5 52.1469 170.589 51.7859 164.584L46.35 76.0344C60.8203 72.0422 71.5937 56.8828 71.5937 38.7812C71.5937 17.6391 56.9047 0.5 38.7812 0.5ZM149.064 0.5L139.953 55.1875H133.117L128.556 0.5H123.995L119.434 55.1875H112.598L103.487 0.5H98.9265V71.5938C98.9265 74.6125 101.377 77.0625 104.395 77.0625H118.636L113.266 164.584C112.894 170.589 117.52 175.5 123.536 175.5H129.005C135.02 175.5 139.636 170.589 139.275 164.584L133.905 77.0625H148.145C151.164 77.0625 153.614 74.6125 153.614 71.5938V0.5H149.053H149.064Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_120_12">
          <rect
            width="175"
            height="175"
            fill="white"
            transform="translate(0.5 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

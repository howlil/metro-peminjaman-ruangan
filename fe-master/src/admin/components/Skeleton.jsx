import { Typography } from "@material-tailwind/react";
 
export function Skeleton() {
  return (
    <div className="max-w-full animate-pulse">
        {[...Array(3)].map((_, index) => (
            <Typography
            key={index}
            as="div"
            variant="paragraph"
            className="mb-2 h-3 w-full rounded-full bg-gray-300"
            >
            &nbsp;
            </Typography>
        ))}
    </div>
  );
}
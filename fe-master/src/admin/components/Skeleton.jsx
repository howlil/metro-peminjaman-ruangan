import { Typography } from "@material-tailwind/react";
import PropTypes from "prop-types";

export function Skeleton({ count = 3 }) {
  return (
    <div className="max-w-full min-w-12 animate-pulse">
        {[...Array(count)].map((_, index) => (
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

Skeleton.propTypes = {
  count: PropTypes.number 
};

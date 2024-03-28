import React from "react";
import {
  Checkbox,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";

export default function CheckboxList({label, data }) {
  return (
    <Card>
      <List>
      <label htmlFor="building" className="block mt-5 text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
        {data.map((item) => (
          <ListItem key={item.id} className="p-0">
            <label
              htmlFor={`vertical-list-${item.id}`}
              className="flex w-full cursor-pointer items-center px-3 py-2"
            >
              <ListItemPrefix className="mr-3">
                <Checkbox
                  id={`vertical-list-${item.id}`}
                  ripple={false}
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: "p-0",
                  }}
                />
              </ListItemPrefix>
              <Typography color="text-gray-900" className="text-gray-900">
                {item.label}
              </Typography>
            </label>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}

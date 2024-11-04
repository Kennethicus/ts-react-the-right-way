// export type personProps = {
//   name: {
//     firstName: string;
//     lastName: string };
// };

import { ReactNode } from "react";

export type Name = {
  firstName: string;
  lastName: string;
  [key: string | number]: ReactNode;
};

//? Resing types
export type personProps = {
  name: Name;
};

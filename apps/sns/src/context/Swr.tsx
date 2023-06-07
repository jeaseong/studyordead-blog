"use client";

import { SWRConfig } from "swr";

type Props = {
  children: React.ReactNode;
};
const Swr = ({ children }: Props) => {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      {children}
    </SWRConfig>
  );
};

export default Swr;

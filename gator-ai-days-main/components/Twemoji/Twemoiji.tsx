import React, { memo } from "react";

const isRequired = () => {
  throw new Error("You need to specify an emoji for the Twemoji component");
};

const Twemoji = ({ emoji = isRequired() }: any) => {
  const cp1 = emoji.codePointAt(0).toString(16);
  const cp2 = emoji.codePointAt(2).toString(16);
  const flagCode = cp1 + "-" + cp2;

  return (
    <img
      src={`https://twemoji.maxcdn.com/v/latest/svg/${flagCode}.svg`}
      height="72"
      width="72"
      alt={emoji}
    />
  );
};

export default memo(Twemoji);

import React from "react";

interface NftItemProps {
  name: string;
}

const NftItem = ({ name }: NftItemProps) => {
  return (
    <div className="shadow-md">
      <h2 className="text-2xl">{name}</h2>
    </div>
  );
};

export default NftItem;

import React from "react";

export type MessageProp = {
  oneMessage: string;
};

export default function OneMessagePage({ oneMessage }: MessageProp) {
  return (
    <div>
      <p>{oneMessage}</p>
    </div>
  );
}

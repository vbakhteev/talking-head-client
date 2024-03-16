"use client";

import { useEffect, useRef, useState } from "react";
import { useAccessKey } from "@/hooks/auth"
import TalkingHead from "@/lib/talkinghead.mjs"
import useModelMode from "@/hooks/useModelMode";

export const modelModes = [
  "base",
  "football",
];

export const Avatar = ({ text, cameraView }: { text?: string, cameraView: string }) => {
  const mode = useModelMode(state => state.get)();
  const avatarRef = useRef(null)
  const auth = useAccessKey("salut_key")
  useEffect(() => {
    const head = new TalkingHead(avatarRef.current!, {
      ttsEndpoint: `${process.env.NEXT_PUBLIC_SALUT_API_ENDPOINT}/rest/v1/text:synthesize`,
      cameraView: cameraView,
      jwtGet: auth,
      lipsyncLang: "ru",
    })
    head.showAvatar({
      url: `/avatars/tatar_${mode}.glb`,
      body: 'M',
      avatarMood: 'neutral',
      lipsyncLang: 'ru'
    }).then(() => {
      if (text !== undefined) {
        head.speakText(text);
      }
    }).catch((error) => {
      console.log(error);
    });
  });

  return (
    <>
      <div ref={avatarRef} className="h-full w-full">
      </div>
    </>
  )

}

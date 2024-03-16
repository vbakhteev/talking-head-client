"use client";

import { useEffect, useRef, useState } from "react";
import { useAccessKey } from "@/hooks/auth"
import TalkingHead from "@/lib/talkinghead.mjs"

export const Avatar = ({ text, cameraView, mode }: { text: string, cameraView: string, mode: string }) => {
  const avatarRef = useRef(null)
  const auth = useAccessKey("salut_key")
  console.log(process.env)
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
      head.speakText(text, { lipsyncLang: 'ru' });
      console.log("showed");
    }).catch((error) => {
      console.log(error);
    });
  });

  return (
    <>
      <div ref={avatarRef} className="h-20 w-20">
      </div>
    </>
  )

}

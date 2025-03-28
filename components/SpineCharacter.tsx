"use client";
import { useEffect, useRef } from "react";
import { SpinePlayer } from "@esotericsoftware/spine-player";

export default function SpineCharacter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<SpinePlayer | null>(null);

  useEffect(() => {
    if (containerRef.current && !playerRef.current) {
      playerRef.current = new SpinePlayer(containerRef.current, {
        jsonUrl: "/spine/aigirl/AIGIRL.json",
        atlasUrl: "/spine/aigirl/AIGIRL.atlas",
        animation: "animation",
        premultipliedAlpha: true,
        preserveDrawingBuffer: true,
        backgroundColor: "#00000000",
        showLoading: false,
        alpha: true,
        viewport: {
          width: 300,
          height: 150,
          padBottom: "0%",
          padLeft: "0%",
          padRight: "0%",
          padTop: "0%",
        },
        showControls: false,
      });
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  return <div ref={containerRef} className="w-[100vw]" />;
}

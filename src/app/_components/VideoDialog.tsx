"use client";
import React from "react";
import useGlobalStore from "../store";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { models } from "../data";
import Video from "./Video";

export default function VideoDialog() {
  const { selectedModel, setSelectedModel } = useGlobalStore();
  const model = models.find((model) => model.id === selectedModel)!;
  const [error, setError] = React.useState<string | null>(null);

  if (!model) return null;
  const { videoUrl, name } = model;

  return (
    <Dialog
      open={selectedModel !== null}
      onOpenChange={(open) => {
        if (!open) {
          setSelectedModel(null);
          setError(null);
        }
      }}
    >
      <DialogContent className=" backdrop-blur-sm bg-[#000e18]/50 max-w-screen-lg max-h-[90vh] aspect-video flex flex-col">
        <DialogTitle className="text-lg font-semibold">{name}</DialogTitle>
        <DialogDescription className={"hidden"}>{error}</DialogDescription>
        {videoUrl ? (
          <Video
            videoUrl={videoUrl}
            className="h-1 flex-1 rounded-xl overflow-hidden"
          />
        ) : (
          <p className="aspect-video grid place-content-center text-xl text-gray-700">
            No video available for this model.
          </p>
        )}
      </DialogContent>
    </Dialog>
  );
}

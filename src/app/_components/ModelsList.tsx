/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";

import { cn } from "@/lib/utils";
import useGlobalStore from "../store";
import { models, uploadsUrl } from "../data";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ModelsListProps extends React.HTMLAttributes<HTMLDivElement> {}

function ModelsList({ className, ...props }: ModelsListProps) {
  const { setSelectedModel, search } = useGlobalStore();
  const filterdList = models.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      {...props}
      className={cn(
        "hide-scrollbar grid auto-rows-[14rem] gap-6 text-card-foreground overflow-auto grid-cols-[repeat(auto-fill,minmax(16rem,1fr))]",
        className
      )}
    >
      {filterdList.map((model) => (
        <div
          className="select-none border-white/20 hover:-rotate-2 hover:scale-105 transition-transform border rounded-lg bg-card/25 backdrop-blur p-6 flex flex-col font-semibold gap-4 active:rotate-2 active:scale-95 hover:duration-300 hover:shadow-lg active:duration-150"
          role="button"
          key={model.id}
          onClick={() => {
            setTimeout(() => {
              setSelectedModel(model.id);
            }, 150);
          }}
        >
          <h3 className="text-center truncate first-letter:uppercase  ">
            {model.name}
          </h3>
          <div className="h-1 flex-1 relative aspect-square ">
            <img
              src={uploadsUrl + model.icon}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ModelsList;

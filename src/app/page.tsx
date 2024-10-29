import Filters from "./_components/Filters";
import ModelsList from "./_components/ModelsList";
import VideoDialog from "./_components/VideoDialog";
import { title } from "./data";

export default function Home() {
  return (
    <main className="flex flex-col  py-6 [&>*]:max-w-screen-2xl [&>*]:w-full [&>*]:mx-auto [&>*]:px-6">
      <h3 className="text-xl font-semibold mt-6 capitalize">{title}</h3>
      <Filters className="mt-6 " />
      <ModelsList className="flex-1 pt-6" />
      <VideoDialog />
    </main>
  );
}

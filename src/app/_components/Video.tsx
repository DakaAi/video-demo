interface VideoProps extends React.HTMLAttributes<HTMLVideoElement> {
  videoUrl: string;
}

export default function Video({ videoUrl, ...props }: VideoProps) {
  return <video src={videoUrl} controls {...props} autoPlay></video>;
}

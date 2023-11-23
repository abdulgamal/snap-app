function ImageCard({ url }: { url: string }) {
  return (
    <div className="my-3 h-[250px]">
      <img alt="" className="rounded-md object-cover h-full w-full" src={url} />
    </div>
  );
}

export default ImageCard;

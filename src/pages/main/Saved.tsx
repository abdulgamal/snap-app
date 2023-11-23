import ImageCard from "@/components/general/ImageCard";

function Saved() {
  return (
    <div className="px-4">
      <div className="mb-5 flex items-center gap-3">
        <img
          src="assets/icons/save.svg"
          alt=""
          className="h-5 w-5 text-white"
        />
        <p className="text-white text-xl font-bold">Saved Posts</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-black/80 px-4 py-2 rounded-lg">
            <img
              src="assets/icons/gallery-add.svg"
              alt=""
              className="h-5 w-5"
            />
            <p className="text-gray-400 text-sm">Posts</p>
          </div>
          <div className="flex items-center gap-2 bg-black/80 px-4 py-2 rounded-lg">
            <img
              src="assets/icons/gallery-add.svg"
              alt=""
              className="h-5 w-5"
            />
            <p className="text-gray-400 text-sm">Reels</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-black/80 px-2 py-1 rounded-lg">
          <p className="text-gray-400 text-sm">All</p>
          <img src="assets/icons/filter.svg" alt="" className="h-5 w-5" />
        </div>
      </div>
      <div className="grid my-8 md:grid-cols-3 gap-3">
        <ImageCard url="https://images.unsplash.com/photo-1700422301302-c0f83f89fb79?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D" />
        <ImageCard url="https://images.unsplash.com/photo-1700402214532-914b944d9e38?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D" />
        <ImageCard url="https://images.unsplash.com/photo-1699954074200-b4c4bd64bd79?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D" />
        <ImageCard url="https://images.unsplash.com/photo-1700061238300-47d5107d4860?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D" />
        <ImageCard url="https://images.unsplash.com/photo-1690205073996-7fde74f5fd56?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D" />
        <ImageCard url="https://images.unsplash.com/photo-1699154702570-d776b3132807?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM5fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D" />
        <ImageCard url="https://images.unsplash.com/photo-1699870287721-55ed034b7c7e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU3fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D" />
      </div>
    </div>
  );
}

export default Saved;

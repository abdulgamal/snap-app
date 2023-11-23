import ImageCard from "./ImageCard";

function Card() {
  return (
    <div className="bg-black/80 p-3 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 my-3">
          <img src="assets/images/profile.png" alt="" className="h-10 w-10" />
          <div>
            <p className="text-gray-400 text-sm">Tamacti Jun</p>
            <p className="text-gray-500 text-xs">19 april at 09:04 PM</p>
          </div>
        </div>
        <img src="assets/icons/edit.svg" alt="" className="h-4 w-4" />
      </div>
      <div>
        <p className="text-gray-400 text-sm">
          In the midst of life we are in death
        </p>
      </div>
      <ImageCard url="https://images.unsplash.com/photo-1700585832202-43c7d0377690?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D" />
      <div className="flex items-center justify-between my-1">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <img src="assets/icons/liked.svg" alt="" className="h-4 w-4" />
            <p className="text-gray-300 text-xs">20</p>
          </div>
          <div className="flex items-center gap-1">
            <img src="assets/icons/chat.svg" alt="" className="h-4 w-4" />
            <p className="text-gray-300 text-xs">10</p>
          </div>
        </div>
        <img src="assets/icons/save.svg" alt="" className="h-4 w-4" />
      </div>
      <div className="my-4 flex items-center gap-2">
        <img src="assets/images/profile.png" alt="" className="h-10 w-10" />
        <div className="flex items-center flex-1 bg-[#1F1F22] p-1 rounded-full">
          <input
            type="text"
            placeholder="Write your comment..."
            className="flex-1 bg-transparent placeholder:text-xs px-1 outline-none text-gray-400"
          />
          <img src="assets/icons/share.svg" alt="" className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}

export default Card;

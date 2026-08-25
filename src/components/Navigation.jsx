const items = [
  { id: "room", label: "Room", icon: "🏠" },
  { id: "games", label: "Games", icon: "🎮" },
  { id: "canvas", label: "Canvas", icon: "🎨" },
  { id: "letters", label: "Letters", icon: "💌" },
];

function Navigation({ activeSection, onNavigate, onOpenLetter }) {
  return (
    <nav
      aria-label="Zesto sections"
      className="fixed inset-x-0 bottom-0 z-40 px-3 pt-2 pb-[max(0.65rem,env(safe-area-inset-bottom))] md:inset-x-auto md:top-5 md:bottom-auto md:left-1/2 md:w-max md:-translate-x-1/2 md:p-0"
    >
      <div className="mx-auto flex w-full max-w-md items-center justify-between gap-1 rounded-[1.4rem] border border-white/15 bg-[#3d2b24]/55 p-1.5 shadow-[0_8px_24px_rgba(57,35,26,0.2)] backdrop-blur-md md:w-max md:gap-1.5">
        {items.map((item) => {
          const isLetter = item.id === "letters";
          const isActive = !isLetter && activeSection === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                if (isLetter) {
                  onOpenLetter();
                  return;
                }

                if ((item.id === "canvas" || item.id === "games") && isActive) {
                  onNavigate("room");
                  return;
                }

                onNavigate(item.id);
              }}
              aria-current={isActive ? "page" : undefined}
              className={`flex min-h-12 min-w-0 flex-1 flex-col items-center justify-center rounded-[1rem] px-1 py-1 text-[10px] font-semibold tracking-wide transition duration-200 active:scale-95 md:min-w-[4.25rem] md:px-3 md:text-xs ${
                isActive
                  ? "bg-[#f6ddae]/80 text-[#5b3527] shadow-[0_3px_10px_rgba(0,0,0,0.12)]"
                  : "bg-white/5 text-[#fff5e5]/80"
              }`}
            >
              <span aria-hidden="true" className="text-base leading-none">
                {item.icon}
              </span>
              <span className="mt-1">{item.label}</span>
            </button>
          );
        })}
        <MusicPlayer />
      </div>
    </nav>
  );
}

export default Navigation;
import MusicPlayer from "./MusicPlayer";

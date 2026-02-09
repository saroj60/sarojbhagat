const HUDOverlay = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-40 select-none overflow-hidden">
            {/* Corner Brackets */}
            <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-accent rounded-tl-lg opacity-80" />
            <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-accent rounded-tr-lg opacity-80" />
            <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-accent rounded-bl-lg opacity-80" />
            <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-accent rounded-br-lg opacity-80" />

            {/* Top Center Data Line */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-60">
                <div className="w-20 h-[1px] bg-accent" />
                <span className="text-[10px] font-space tracking-[0.2em] text-accent uppercase">System Online</span>
                <div className="w-20 h-[1px] bg-accent" />
            </div>

            {/* Scanlines Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-50 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20" />

            {/* Side Decor */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-accent to-transparent opacity-50" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-neon-purple to-transparent opacity-50" />
        </div>
    );
};

export default HUDOverlay;

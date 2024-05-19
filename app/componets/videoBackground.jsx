export default function VideoBackground(props) {
    return (
        <>
        <video
        autoPlay
        loop
        muted
        className="absolute z-0 w-full h-full object-cover"
        >
        <source src={props.source} type="video/mp4" />
        </video>
        <div className="absolute z-10 w-full h-full bg-surface opacity-90"></div>
        </>
    );
}
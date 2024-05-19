export default function MusicPlayer(props) {
    return (
        <audio autoPlay={true} loop>
            <source src={props.source}/>
        </audio>
    )
}
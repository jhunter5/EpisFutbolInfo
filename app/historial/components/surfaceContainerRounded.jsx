export default function SurfaceContainerRounded({ children }) {
    return (
        <div className="bg-surface-container flex flex-row flex-nowrap justify-between items-center w-3/4 p-8 rounded-2xl ">
            {children}
        </div>
    )
}
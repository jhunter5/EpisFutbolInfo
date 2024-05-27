export default function SurfaceContainerRounded({ children, className }) {
    return (
        <div className={`bg-surface-container flex-nowrap justify-between items-center w-3/4 p-8 rounded-2xl ${className}`}>
            {children}
        </div>
    )
}
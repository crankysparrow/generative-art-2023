export default function loop(cb: FrameRequestCallback): { stop: () => void } {
    let id: number
    function animation(t: DOMHighResTimeStamp) {
        id = requestAnimationFrame(animation)
        cb(t)
    }
    id = requestAnimationFrame(animation)

    return {
        stop: () => cancelAnimationFrame(id),
    }
}

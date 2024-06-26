import { PatternCellQuarterCircle } from '../cells/pattern-cell'

let palettes = [
    // https://coolors.co/dc5132-a46589-7a82b8-8ad0a6-c4f0a8-a0bb07-ffcf33-ec9f05
    ['#533a71', '#454a96', '#6184d8', '#50c5b7', '#9cec5b', '#f0f465', '#ff4a1c', '#ed254e'],
    ['#dc5132', '#a46589', '#7a82b8', '#8ad0a6', '#c4f0a8', '#a0bb07', '#ffcf33', '#ec9f05'],
    // https://coolors.co/533a71-454a96-6184d8-50c5b7-9cec5b-f0f465-ff4a1c-ed254e
    // https://coolors.co/874286-856596-f9c8ce-a8d7a8-b6cccc-8aadbc-7a7eb8-fc814a
    ['#874286', '#856596', '#f9c8ce', '#a8d7a8', '#b6cccc', '#8aadbc', '#7a7eb8', '#fc814a'],
    // https://coolors.co/87425d-3c2e6b-0081af-a7d6c3-285943-8a8fbd-9a79b8-fcee49
    ['#87425d', '#3c2e6b', '#0081af', '#a7d6c3', '#285943', '#8a8fbd', '#9a79b8', '#fcee49'],
]

export const cells = [
    {
        title: 'tl w > h',
        cell: new PatternCellQuarterCircle({
            nx: 1.25,
            ny: 0,
            w: 2,
            h: 1,
            corner: 'tl',
            color: palettes[0][0],
        }),
    },
    {
        title: 'tl h > w',
        cell: new PatternCellQuarterCircle({
            nx: 0,
            ny: 0,
            w: 1,
            h: 2,
            corner: 'tl',
            color: palettes[0][0],
        }),
    },
    {
        title: 'tl same',
        cell: new PatternCellQuarterCircle({
            nx: 1.5,
            ny: 1.2,
            w: 1,
            h: 1,
            corner: 'tl',
            color: palettes[0][1],
        }),
    },
    {
        title: 'tr w > h',
        cell: new PatternCellQuarterCircle({
            nx: 3.5,
            ny: 2.25,
            w: 2,
            h: 1,
            corner: 'tr',
            color: palettes[0][2],
        }),
    },
    {
        title: 'tr same',
        cell: new PatternCellQuarterCircle({
            nx: 3.4,
            ny: 1,
            w: 1,
            h: 1,
            corner: 'tr',
            color: palettes[0][2],
        }),
    },
    {
        title: 'tr h > w',
        cell: new PatternCellQuarterCircle({
            nx: 4.5,
            ny: 0,
            w: 1,
            h: 2,
            corner: 'tr',
            color: palettes[0][2],
        }),
    },
    {
        title: 'bl  w > h',
        cell: new PatternCellQuarterCircle({
            nx: 0,
            ny: 2.25,
            w: 2,
            h: 1,
            corner: 'bl',
            color: palettes[0][4],
        }),
    },
    {
        title: 'bl h > w',
        cell: new PatternCellQuarterCircle({
            nx: 0,
            ny: 3.5,
            w: 1,
            h: 2,
            corner: 'bl',
            color: palettes[0][5],
        }),
    },
    {
        title: 'bl same',
        cell: new PatternCellQuarterCircle({
            nx: 1.125,
            ny: 4,
            w: 1,
            h: 1,
            corner: 'bl',
            color: palettes[0][5],
        }),
    },
    {
        title: 'br same',
        cell: new PatternCellQuarterCircle({
            nx: 3.5,
            ny: 3.4,
            w: 1,
            h: 1,
            corner: 'br',
            color: palettes[0][6],
        }),
    },
    {
        title: 'br w > h',
        cell: new PatternCellQuarterCircle({
            nx: 3.5,
            ny: 4.5,
            w: 2,
            h: 1,
            corner: 'br',
            color: palettes[0][6],
        }),
    },
    {
        title: 'br h > w',
        cell: new PatternCellQuarterCircle({
            nx: 2.25,
            ny: 3.5,
            w: 1,
            h: 2,
            corner: 'br',
            color: palettes[0][7],
        }),
    },
]

export const testDraw = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    t: number
) => {
    let size = Math.min(width, height) * 0.75
    ctx.save()
    ctx.clearRect(0, 0, width, height)
    ctx.translate((width - size) / 2, (height - size) / 2)
    cells.forEach(({ cell, title }) => {
        ctx.fillStyle = '#fff'
        ctx.font = '20px sans-serif'
        ctx.fillText(title, cell.nx * (size / 5), cell.ny * (size / 5))
        ctx.closePath()
        cell.tick(t)
        cell.draw(ctx, size / 5)
    })

    ctx.restore()
}

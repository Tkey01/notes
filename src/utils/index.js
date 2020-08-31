export const recognizeSide = (square, mouse) => {
  const isLeftSide =
    mouse.x >= square.x - 10 &&
    mouse.x < square.x + 15 &&
    mouse.y > square.y &&
    mouse.y < square.h + square.y
  const isRightSide =
    mouse.x > square.x + square.w - 15 &&
    mouse.x <= square.x + square.w + 10 &&
    mouse.y > square.y &&
    mouse.y < square.h + square.y
  const isTopSide =
    mouse.x > square.x &&
    mouse.x < square.x + square.w &&
    mouse.y < square.y + 15 &&
    mouse.y >= square.y - 10
  const isBottomSide =
    mouse.x > square.x &&
    mouse.x < square.x + square.w &&
    mouse.y > square.y + square.h - 15 &&
    mouse.y <= square.y + square.h + 10

  if (isLeftSide) {
    return 'left'
  } else if (isRightSide) {
    return 'right'
  } else if (isTopSide) {
    return 'top'
  } else if (isBottomSide) {
    return 'bottom'
  }
}

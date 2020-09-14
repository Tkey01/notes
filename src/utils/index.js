import MobileDetect from 'mobile-detect'

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

export const isWithinBorders = (rectangle1, rectangle2) => {
  let count = 0

  if (rectangle1.leftBorder <= rectangle2.rightBorder) {
    count++
  }
  if (rectangle1.rightBorder >= rectangle2.leftBorder) {
    count++
  }
  if (rectangle1.topBorder <= rectangle2.bottomBorder) {
    count++
  }
  if (rectangle1.bottomBorder >= rectangle2.topBorder) {
    count++
  }

  if (count === 4) {
    console.log(rectangle1, rectangle2)
    return true
  }

  return false
}

export const removeNonCanvasElements = () => {
  document.querySelectorAll('.rect-input').forEach((item) => item.remove())
  document.querySelectorAll('.delete-btn').forEach((item) => item.remove())
}

export const displayCaveatsOnMobileDevices = () => {
  let md = new MobileDetect(window.navigator.userAgent)

  if (md.mobile()) {
    removeNonCanvasElements()

    document.querySelector('.content').style.display = 'none'
    document.querySelector('.caveats').style.display = 'flex'
  }
}

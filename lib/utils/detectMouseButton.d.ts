import { MouseEvent } from 'react'
declare type TDetectMouseButtonOptions = {
  allowAltClick?: Boolean
  allowCtrlClick?: Boolean
  allowMetaClick?: Boolean
  allowShiftClick?: Boolean
}
export declare function detectMouseButton(
  evt: MouseEvent<HTMLElement>,
  buttonNumber?: number,
  options?: TDetectMouseButtonOptions
): boolean
export {}

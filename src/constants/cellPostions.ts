import { CellPosition } from '@/types';

interface ICellPositions {
  [name: string]: CellPosition;
}

export const CELL_POSITIONS: ICellPositions = {
  UPPERMOST: 'UPPERMOST',
  UPPERMOST_RIGHT: 'UPPERMOST_RIGHT',
  UPPERMOST_LEFT: 'UPPERMOST_LEFT',
  LOWERMOST: 'LOWERMOST',
  LOWERMOST_LEFT: 'LOWERMOST_LEFT',
  LOWERMOST_RIGHT: 'LOWERMOST_RIGHT',
  LEFTMOST: 'LEFTMOST',
  RIGHTMOST: 'RIGHTMOST',
  MIDDLE: 'MIDDLE',
};

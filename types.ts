export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface JollyRecommendation {
  snackCombo: string;
  tagline: string;
  partyTip: string;
}

// Icon component props
export interface IconProps {
  className?: string;
  size?: number;
  color?: string;
}

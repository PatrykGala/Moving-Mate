export * from './LoginState';
export * from './Signup';
export * from './MovingState';
export * from './MoverState';
export * from './Notifications';
export * from './ProgressBar.d';
export * from './GlobalState.d';
export * from './GoogleMaps.d';
export * from './AlertState.d';


export interface IResponse<T> {
  success?: boolean,
  message?: string,
  type: 'error'|'warning'
  data: T,
}
export interface InternalProps {
  onDismiss?: () => void;
}

export interface ModalProps extends InternalProps {
  open?: boolean;
  minWidth?: string;
  maxWidth?: string;
  title?: string;
  zIndex?: string | number;
}

export interface ModalTheme {
  background: string;
}

export type Handler = () => void;

export interface InjectedProps {
  handleClose?: Handler;
}

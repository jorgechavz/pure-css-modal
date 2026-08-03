import {
  useEffect,
  useId,
  type ChangeEvent,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactElement,
  type ReactNode,
} from 'react';

export type ModalDirection = 'top' | 'bottom' | 'left' | 'right';
export type ModalSize = 'small' | 'full';

export interface ModalProps {
  /** Modal content. */
  children: ReactNode;
  /**
   * Controlled open state. When provided, the modal is driven by this prop and
   * `onClose` (no internal checkbox). When omitted, the modal is uncontrolled
   * and works as a pure-CSS checkbox-hack modal (zero JavaScript).
   */
  isOpen?: boolean;
  /** Initial open state for uncontrolled usage. Ignored when `isOpen` is set. */
  defaultOpen?: boolean;
  /** Called when the modal requests to close (close button, backdrop, or Escape). */
  onClose?: () => void;
  /** Entrance animation direction. Maps to the `from-*` classes. */
  direction?: ModalDirection;
  /** Vertically center the modal. Maps to the `a-center` class. */
  center?: boolean;
  /** Modal size. Maps to the `small` / `full` classes. */
  size?: ModalSize;
  /** Render the built-in ✖ close button. Defaults to `true`. */
  showClose?: boolean;
  /** Close when the dark backdrop is clicked. Defaults to `true`. */
  closeOnBackdropClick?: boolean;
  /** Close when the Escape key is pressed (controlled mode). Defaults to `true`. */
  closeOnEsc?: boolean;
  /**
   * Uncontrolled only: an element rendered inside a `<label>` that opens the modal
   * when clicked (e.g. `trigger={<button>Open</button>}`).
   */
  trigger?: ReactNode;
  /** Optional explicit id, used to link the trigger/labels to the checkbox. */
  id?: string;
  /** Extra class names applied to the `.pure-modal-wrap` element. */
  className?: string;
  /** Accessible label for the dialog. */
  'aria-label'?: string;
}

const DIRECTION_CLASS: Record<ModalDirection, string> = {
  top: 'from-top',
  bottom: 'from-bottom',
  left: 'from-left',
  right: 'from-right',
};

function classNames(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(' ');
}

/**
 * A modal built on top of the pure-css-modal styles.
 *
 * - Controlled: pass `isOpen` and `onClose`.
 * - Uncontrolled: omit `isOpen`; the modal uses the CSS checkbox hack and (optionally)
 *   a `trigger`. Remember to import the stylesheet once: `import 'pure-css-modal/modal.css'`.
 */
export function Modal(props: ModalProps): ReactElement {
  const {
    children,
    isOpen,
    defaultOpen = false,
    onClose,
    direction,
    center = false,
    size,
    showClose = true,
    closeOnBackdropClick = true,
    closeOnEsc = true,
    trigger,
    id: idProp,
    className,
    'aria-label': ariaLabel,
  } = props;

  const generatedId = useId();
  const id = idProp ?? `pure-modal-${generatedId}`;
  const controlled = isOpen !== undefined;

  // Escape-to-close for controlled mode (the checkbox hack handles this natively
  // for uncontrolled modals, so no listener is needed there).
  useEffect(() => {
    if (!controlled || !closeOnEsc || !isOpen || !onClose) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [controlled, closeOnEsc, isOpen, onClose]);

  const wrapClassName = classNames(
    'pure-modal-wrap',
    center && 'a-center',
    size,
    direction && DIRECTION_CLASS[direction],
    className,
  );

  if (controlled) {
    // The backdrop button and the panel are siblings; a click on the panel does not
    // reach the backdrop, so no stopPropagation is required.
    return (
      <div className={classNames('pure-modal', isOpen && 'is-open')}>
        <div className="pure-modal-overlay" aria-hidden={!isOpen}>
          <button
            type="button"
            className="o-close"
            aria-label="Close"
            tabIndex={-1}
            onClick={() => {
              if (closeOnBackdropClick) onClose?.();
            }}
          />
          <div
            className={wrapClassName}
            role="dialog"
            aria-modal="true"
            aria-label={ariaLabel}
          >
            {showClose && (
              <button
                type="button"
                className="close"
                aria-label="Close"
                onClick={() => onClose?.()}
              >
                {'✖'}
              </button>
            )}
            {children}
          </div>
        </div>
      </div>
    );
  }

  // Uncontrolled: pure-CSS checkbox hack (no JS needed to open/close).
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.currentTarget.checked) onClose?.();
  };

  const handleTriggerKey = (event: ReactKeyboardEvent<HTMLLabelElement>) => {
    // Labels aren't natively keyboard-activatable; support Enter/Space for a11y.
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      (event.currentTarget.control as HTMLInputElement | null)?.click();
    }
  };

  return (
    <>
      {trigger != null && (
        <label
          htmlFor={id}
          className="pure-modal-trigger"
          role="button"
          tabIndex={0}
          onKeyDown={handleTriggerKey}
        >
          {trigger}
        </label>
      )}
      <div className="pure-modal">
        <input
          id={id}
          className="checkbox"
          type="checkbox"
          defaultChecked={defaultOpen}
          onChange={handleChange}
        />
        <div className="pure-modal-overlay">
          <label htmlFor={id} className="o-close" aria-label="Close" />
          <div className={wrapClassName} role="dialog" aria-modal="true" aria-label={ariaLabel}>
            {showClose && (
              <label htmlFor={id} className="close" aria-label="Close">
                {'✖'}
              </label>
            )}
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

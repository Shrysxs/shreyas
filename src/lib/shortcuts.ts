export const OPEN_COMMAND_MENU_EVENT = "shrysxs:open-command-menu";
export const OPEN_TERMINAL_EVENT = "shrysxs:open-terminal";

export function openCommandMenu() {
  window.dispatchEvent(new Event(OPEN_COMMAND_MENU_EVENT));
}

export function openTerminal() {
  window.dispatchEvent(new Event(OPEN_TERMINAL_EVENT));
}

export function isTypingTarget(target: EventTarget | null) {
  return (
    (target instanceof HTMLElement && target.isContentEditable) ||
    target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement ||
    target instanceof HTMLSelectElement
  );
}

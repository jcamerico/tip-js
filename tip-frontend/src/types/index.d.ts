export {};

declare global {
    interface Window {
        captchaCallback: (captcha: string) => void;
    }
}
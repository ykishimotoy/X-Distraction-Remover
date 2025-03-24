const profileUrl = 'https://x.com/ykishimotoy';

// リダイレクト関数
function redirectIfHome() {
    const currentPath = window.location.pathname;

    if (currentPath === '/home') {
        window.location.replace(profileUrl);
    }
}

// 初回ロード時にリダイレクト実行
redirectIfHome();

// URLが変更された際にも再実行する（SPA対応）
const observer = new MutationObserver(redirectIfHome);
observer.observe(document.body, { childList: true, subtree: true });

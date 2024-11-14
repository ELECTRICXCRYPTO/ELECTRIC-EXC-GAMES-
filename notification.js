// رسالة الإشعار
const notificationMessage = `Don't forget to participate in communication tasks to increase your profits 💡💡💡💡
Click on the daily task on the home page to 💲win a dollar.
Clicking a lot will help you increase your balance 🎲
YOUR EXC COMMUNITY SUBSCRIPTION SUPPORTS THE COMMUNITY
https://t.me/ELECTRIC_XCRYPTO_ECX

For assistance, visit our bot: http://t.me/ELECTRICXEXC_bot`;

// دالة لإظهار الإشعار
function showNotification() {
    if (Notification.permission === "granted") {
        new Notification(notificationMessage);
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                new Notification(notificationMessage);
            }
        });
    }
}

// تشغيل الإشعار كل 24 ساعة
function startDailyNotification() {
    showNotification(); // أول إشعار عند فتح الصفحة
    setInterval(showNotification, 24 * 60 * 60 * 1000); // تكرار كل 24 ساعة
}

// تفعيل الإشعارات عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
    if ("Notification" in window) {
        startDailyNotification();
    } else {
        console.log("This browser does not support desktop notifications.");
    }
});

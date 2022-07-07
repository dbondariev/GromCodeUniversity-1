export const getGreenwichTime = date =>
    new Intl.DateTimeFormat('en', {
        timeZone: 'GMT',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
    }).format(date);


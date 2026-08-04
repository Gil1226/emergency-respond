function DateIdentifier(date) {
    const reportDate = new Date(date);
    const now = new Date();

    // Today
    if (reportDate.toDateString() === now.toDateString()) {
        return "Today";
    }

    // Yesterday
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);

    if (reportDate.toDateString() === yesterday.toDateString()) {
        return "Yesterday";
    }
    //week
    const startOfWeek = new Date(now);
    const day = now.getDay(); 
    const diff = day === 0 ? -6 : 1 - day;

    startOfWeek.setDate(now.getDate() + diff);
    startOfWeek.setHours(0, 0, 0, 0);

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 7);

    if (reportDate >= startOfWeek && reportDate < endOfWeek) {
        return "This Week";
    }
    // This Month
    if (
        reportDate.getMonth() === now.getMonth() &&
        reportDate.getFullYear() === now.getFullYear()
    ) {
        return "This Month";
    }
    return "Past Month";
}
export default DateIdentifier;
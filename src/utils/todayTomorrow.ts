const todayTomorrow = {
  today: new Date(
    new Date().toLocaleString('en-US', { timeZone: 'Asia/Seoul' })
  ),
  tomorrow: (() => {
    const tomorrow = new Date(
      new Date().toLocaleString('en-US', { timeZone: 'Asia/Seoul' })
    );
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow;
  })(),
  formatDate: (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  },
};

export default todayTomorrow;

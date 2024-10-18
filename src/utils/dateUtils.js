// ma fonction pour l'afficharge des date
export function GetDateRange() {
    const daysOfWeek = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
    const months = ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Aoû", "Sep", "Oct", "Nov", "Déc"];
  
    const today = new Date();
    const range = [];
  
    for (let i = -2; i <= 2; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
  
      range.push({
        day: daysOfWeek[date.getDay()],
        date: date.getDate(),
        month: months[date.getMonth()],
        isToday: i === 0,
      });
    }
  
    return range;
  }
  
  export default GetDateRange
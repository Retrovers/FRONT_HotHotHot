class Utils {

    monthList = {
        1 : 'Janvier',
        2 : 'Fevrier',
        3 : 'Mars',
        4 : 'Avril',
        5 : 'Mai',
        6 : 'Juin',
        7 : 'Juillet',
        8 : 'Aout',
        9 : 'Septembre',
        10 : 'Octobre',
        11 : 'Novembre',
        12 : 'Decembre'
    }

    dayList = {
        1 : 'Lundi',
        2 : 'Mardi',
        3 : 'Mercredi',
        4 : 'Jeudi',
        5 : 'Vendredi',
        6 : 'Samedi',
        7 : 'Dimanche'
    }

    getMonthCorrespondance (month_number) {

        return this.monthList[month_number]
    }

    getDayCorrespondance (day_number) {
        
        return this.dayList[day_number]
    }
    
    pad(num , size) {
        let s = "000000000" + num;
        return s.substr(s.length-size);
    }

}

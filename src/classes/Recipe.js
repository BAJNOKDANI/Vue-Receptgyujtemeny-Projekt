export default class Questions {
    #kep;
    #nev;
    #elkeszIdo;
    #nehezseg;
    #leiras;

    constructor(kep, nev, elkeszIdo, nehezseg, leiras) {
        this.setKep(kep);
        this.setNev(nev);
        this.setElkeszIdo(elkeszIdo);
        this.setNehezseg(nehezseg);
        this.setLeiras(leiras)

        this.getNev = this.getNev.bind(this)
        this.getKep = this.getKep.bind(this)
        this.getElkeszIdo = this.getElkeszIdo.bind(this)
        this.getNehezseg = this.getNehezseg.bind(this)
        this.getLeiras = this.getLeiras.bind(this)

        this.setNev = this.setNev.bind(this)
        this.setKep = this.setKep.bind(this)
        this.setElkeszIdo = this.setElkeszIdo.bind(this)
        this.setNehezseg = this.setNehezseg.bind(this)
        this.setLeiras = this.setLeiras.bind(this)
    }

    setKep(kep) {
        this.#kep = kep;
    }

    setNev(nev) {
        this.#elkeszIdo = nev;
    }

    setElkeszIdo(elkeszIdo) {
        this.#elkeszIdo = elkeszIdo;
    }

    setNehezseg(nehezseg) {
        this.#nehezseg = nehezseg;
    }
    setLeiras(leiras) {
        this.#leiras = leiras;
    }

    getKep() {
        return this.#kep;
    }

    getNev() {
        return this.#nev;
    }

    getElkeszIdo() {
        return this.#elkeszIdo;
    }
    getNehezseg() {
        return this.#nehezseg;
    }

    getLeiras() {
        return this.#leiras;
    }


}
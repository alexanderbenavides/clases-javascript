class SystemEmployees {
  constructor(name) {
    this._name = name;
    this._remainingVacationsDays = 20;
  }
  get name() {
    return this._name;
  }
  get remainingVacationsDays() {
    return this._remainingVacationsDays;
  }
  takeVacationsDay(daysOff) {
    this._remainingVacationsDays -= daysOff;
  }
  static getPasswwords() {
    return "123456";
  }
}

console.log(SystemEmployees.getPasswwords());

class Developer extends SystemEmployees {
  constructor(name, certificacions) {
    super(name);
    this._certifications = certificacions;
  }
  get certifications() {
    return this._certifications;
  }
  addCertificacions(new_certification) {
    this.certifications.push(new_certification);
  }
}

const developer = new Developer("Ricardo", ["Base de datos", "Java"]);

console.log(developer.name);
console.log(developer.remainingVacationsDays);
developer.takeVacationsDay(5);
console.log(developer.remainingVacationsDays);
console.log("certificaciones", developer.certifications);

developer.addCertificacions("AWS");

console.log("certificaciones", developer.certifications);

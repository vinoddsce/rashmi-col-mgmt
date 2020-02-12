export default class Student {

  constructor(private _id: string, private name: string, private course: string, private fees: number) {
    this._id = _id;
    this.name = name;
    this.course = course;
    this.fees = fees;
  }

  getFees() {
    return this.fees;
  }
}

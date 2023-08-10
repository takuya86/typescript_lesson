class Score {
  private static instance: Score
  get totalScore() {
    const foods = Foods.getInstatce
    return foods.activeElementsScore.reduce((total, score) => total + score)
  }
  render() {
    document.querySelector('.score__number')!.textContent = String(this.totalScore)
  }
  private constructor() {}
  static getInstatce() {
    if (!Score.instance) {
      Score.instance = new Score()
    }
    return Score.instance
  }
}
class Food {
  constructor(public element: HTMLDivElement) {
    element.addEventListener('click', this.clickEventHandler.bind(this))
  }
  clickEventHandler() {
    this.element.classList.toggle('food--active')
    const score = Score.getInstatce()
    score.render()
  }
}
class Foods {
  private static instance: Foods
  elements = document.querySelectorAll<HTMLDivElement>('.food')
  private _activeElements: HTMLDivElement[] = []
  private _activeElementsScore: number[] = []
  get activeElements() {
    this._activeElements = []
    this.elements.forEach(element => {
      if (element.classList.contains('food--active')) {
        this._activeElements.push(element)
      }
    })
    return this._activeElements
  }
  get activeElementsScore() {
    this._activeElementsScore = []
    this.activeElements.forEach(element => {
      const foodScore = element.querySelector('.food_socre')
      if (foodScore) {
        this._activeElementsScore.push(Number(foodScore.textContent))
      }
    })
    return this._activeElementsScore
  }
  private constructor() {
    this.elements.forEach(element => {
      new Food(element)
    })
  }
  static getInstatce() {
    if (!Foods.instance) {
      Foods.instance = new Foods()
    }
    return Foods.instance
  }
}
const foods = Foods.getInstatce

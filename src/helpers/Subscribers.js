// import {EventEmitter} from 'events'
const {EventEmitter}  = require('events')


export default class Subscribers extends EventEmitter{


  static _instance = null
  subscribers = []
  scroll = {
    x: 0,
    y: 0
  }

  static getInstance() {
    if ( this._instance === null ){
      this._instance = new Subscribers()
      return this._instance
    }
    else{
      return this._instance
    }
  }

  constructor () {
    super()
  }

  addLoader(){
    this.subscribers.push('loader : ')
  }

  finishLoading(){
    this.subscribers.pop()


    if ( this.subscribers.length === 0 )
      this.emit('finishLoading')
  }

}

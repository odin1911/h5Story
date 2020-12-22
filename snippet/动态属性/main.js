class Event {
  $type = null

  classname = 'event clz'

  constructor(type) {
    this.$type = type
  }

  static create(clz, type) {
    console.log('create clz', clz);
    clz.dynamicProp = 'dynamicProp'
    return new clz(type)
  }

  static release(event) {
    let clz = Object.getPrototypeOf(event).constructor
    console.log('clz', clz.constructor);
  }
}

const eve = Event.create(Event, 'create')
Event.release(eve)
// 记录类型定义的一些方式

// 关于`enum`的一些使用方式
// 参考: https://www.tslang.cn/docs/handbook/advanced-types.html
{
  enum TRAIN_KINDS {
    steam,
    green,
    bullet,
  };

  const useEnumVal: { [key in TRAIN_KINDS]: number } = {
    [TRAIN_KINDS.steam]: 1,
    [TRAIN_KINDS.green]: 2,
    [TRAIN_KINDS.bullet]: 3,
  };

  const useEnumKey: { [key in keyof typeof TRAIN_KINDS]: number } = {
    'steam': 1,
    'green': 2,
    'bullet': 3,
  }

  function useEnumKeyInFun(key: keyof typeof TRAIN_KINDS) {
    console.log(key);
  }
}

{
  class A {
    steam: string
    values: number
  }

  let a: {
    [key in keyof A]: any
  }

  let b: {
    [key in keyof typeof a]: any
  }
}




// https://stackoverflow.com/questions/55377365/what-does-keyof-typeof-mean-in-typescript
// keyof, 对于一个类型
{
  interface Person {
    name: string
    age: number
    location: string
  }

  let newTypeObject: keyof Person
  newTypeObject = "name"           // OK
  newTypeObject = "age"            // OK
  newTypeObject = "location"       // OK
  newTypeObject = "anyOtherValue"  // Error...
}

// keyof typeof, 对于一个对象
{
  const bmw = { name: "BMW", power: "1000hp" }

  let carPropertyLiteral: keyof typeof bmw
  carPropertyLiteral = "name"       // OK
  carPropertyLiteral = "power"      // OK
  carPropertyLiteral = "anyOther"   // Error...
}

enum ColorsEnum {
  white = '#ffffff',
  black = '#000000',
}

// keyof typeof on an enum
// In Typescript, Enums are real objects
{
  enum ColorsEnum {
    white = '#ffffff',
    black = '#000000',
  }

  type Colors = keyof typeof ColorsEnum

  let colorLiteral: Colors
  colorLiteral = "white"  // OK
  colorLiteral = "black"  // OK
  colorLiteral = "red"    // Error...
}